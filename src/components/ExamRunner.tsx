import React, { useState, useEffect } from 'react';
import { Clock, ArrowLeft, ArrowRight, Home } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Question, ExamSession } from '../types/question';
import { QUESTIONS_BANK } from '../data/questions';
import { Storage } from '../utils/storage';

interface ExamRunnerProps {
  session: ExamSession;
  onUpdateSession: (updated: ExamSession) => void;
  onExit: () => void;
}

export const ExamRunner: React.FC<ExamRunnerProps> = ({
  session,
  onUpdateSession,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(session.currentQuestionIndex);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>(session.userAnswers);
  const [timeLeft, setTimeLeft] = useState(session.timeRemainingSeconds);
  const [isFinished, setIsFinished] = useState(session.isCompleted);

  // Map session question IDs to full Question objects
  const sessionQuestions = session.questionIds
    .map((id) => QUESTIONS_BANK.find((q) => q.id === id))
    .filter((q): q is Question => q !== undefined);

  const currentQ = sessionQuestions[currentIndex];

  // Timer countdown
  useEffect(() => {
    if (isFinished) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isFinished]);

  // Sync to storage periodically
  useEffect(() => {
    const updated: ExamSession = {
      ...session,
      currentQuestionIndex: currentIndex,
      userAnswers,
      timeRemainingSeconds: timeLeft,
      isCompleted: isFinished,
      lastUpdatedAt: new Date().toISOString(),
    };
    onUpdateSession(updated);
  }, [currentIndex, userAnswers, timeLeft, isFinished]);

  const handleSelectOption = (optionId: 'A' | 'B' | 'C' | 'D') => {
    if (isFinished) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId,
    }));
  };

  const calculateFinalScore = () => {
    let score = 0;
    sessionQuestions.forEach((q) => {
      const selected = userAnswers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect)?.id;
      if (selected && selected === correctOpt) {
        score += q.points;
      }
    });
    return score;
  };

  const handleFinishExam = () => {
    setIsFinished(true);
    const finalScore = calculateFinalScore();
    Storage.recordExamCompletion(finalScore);
    if (finalScore >= 60) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (isFinished) {
    const finalScore = calculateFinalScore();
    const passed = finalScore >= 60;
    const promoted = finalScore >= 80;

    return (
      <div className="max-w-md mx-auto p-4 space-y-6 animate-in fade-in pb-24">
        {/* Score Card */}
        <div className={`p-6 rounded-3xl border text-center relative overflow-hidden ${
          promoted
            ? 'bg-gradient-to-b from-indigo-950/80 to-[#0A0D14] border-indigo-500/30'
            : passed
            ? 'bg-gradient-to-b from-emerald-950/80 to-[#0A0D14] border-emerald-500/30'
            : 'bg-gradient-to-b from-rose-950/80 to-[#0A0D14] border-rose-500/30'
        }`}>
          <div className="text-xs uppercase tracking-wider font-semibold text-white/50 mb-2">
            Resultado del Examen
          </div>
          <div className="text-6xl font-extrabold font-mono tracking-tight text-white mb-2">
            {finalScore} <span className="text-2xl text-white/40">/ 100</span>
          </div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-4" style={{
            backgroundColor: promoted ? 'rgba(99, 102, 241, 0.2)' : passed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)',
            color: promoted ? '#a5b4fc' : passed ? '#6ee7b7' : '#fda4af',
          }}>
            {promoted ? '★ Promocionado' : passed ? '✓ Aprobado' : '✗ No Alcanzado (<60)'}
          </div>
          <p className="text-xs text-white/60">
            {promoted
              ? '¡Excelente rendimiento! Dominás con solvencia el estándar conceptual de la cátedra.'
              : passed
              ? 'Aprobaste el parcial. Te recomendamos reforzar las preguntas de 8 puntos para asegurar la nota.'
              : 'Puntaje por debajo del mínimo (60 pts). Revisá el desglose teórico abajo para no caer en las mismas trampas.'}
          </p>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Revisión Inciso por Inciso
          </h3>
          {sessionQuestions.map((q, idx) => {
            const chosen = userAnswers[q.id];
            const correctOpt = q.options.find((o) => o.isCorrect);
            const isCorrect = chosen === correctOpt?.id;

            return (
              <div
                key={q.id}
                className={`p-4 rounded-2xl border ${
                  isCorrect
                    ? 'bg-emerald-950/20 border-emerald-500/20'
                    : 'bg-rose-950/20 border-rose-500/20'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-white/70">
                    Pregunta {idx + 1} • {q.points} pts
                  </span>
                  <span className={`font-mono text-xs font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isCorrect ? `+${q.points} pts` : '0 pts'}
                  </span>
                </div>
                <p className="text-xs text-white font-medium mb-3">{q.questionText}</p>

                <div className="space-y-1.5 mb-3">
                  {q.options.map((opt) => (
                    <div
                      key={opt.id}
                      className={`text-[11px] p-2 rounded-xl flex items-start space-x-2 ${
                        opt.isCorrect
                          ? 'bg-emerald-500/15 text-emerald-200 border border-emerald-500/30 font-medium'
                          : chosen === opt.id
                          ? 'bg-rose-500/15 text-rose-200 border border-rose-500/30'
                          : 'text-white/40'
                      }`}
                    >
                      <span className="font-mono font-bold">{opt.id})</span>
                      <span>{opt.text}</span>
                    </div>
                  ))}
                </div>

                {/* Theory Explanation */}
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-white/70 leading-relaxed">
                  <strong className="text-blue-300 block mb-1">Fundamento de Cátedra:</strong>
                  {correctOpt?.explanation}
                </div>
              </div>
            );
          })}
        </div>

        {/* Back home button */}
        <button
          onClick={onExit}
          className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 font-semibold text-white text-sm transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Volver al Menú Principal</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-5 animate-in fade-in pb-24">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onExit}
          className="flex items-center space-x-1.5 text-xs text-white/60 hover:text-white py-1.5 px-3 rounded-full bg-white/5 border border-white/10 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Pausar y Volver</span>
        </button>

        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 font-mono text-xs">
          <Clock className={`w-3.5 h-3.5 ${timeLeft < 300 ? 'text-rose-400 animate-pulse' : 'text-amber-400'}`} />
          <span className={timeLeft < 300 ? 'text-rose-400 font-bold' : 'text-white'}>{formattedTime}</span>
        </div>
      </div>

      {/* Question Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-white/50">
          Pregunta <strong className="text-white text-sm">{currentIndex + 1}</strong> de {sessionQuestions.length}
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono font-semibold">
          {currentQ.points} PUNTOS
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-blue-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="p-5 rounded-3xl bg-[#141416] border border-white/10 space-y-4 shadow-xl">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">
          {currentQ.lessonTitle}
        </div>
        <h2 className="text-base font-semibold text-white leading-snug">
          {currentQ.questionText}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {currentQ.options.map((opt) => {
          const isSelected = userAnswers[currentQ.id] === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => handleSelectOption(opt.id)}
              className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start space-x-3 cursor-pointer ${
                isSelected
                  ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/80'
              }`}
            >
              <span
                className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-white/10 text-white/60'
                }`}
              >
                {opt.id}
              </span>
              <span className="text-xs leading-relaxed pt-1">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold text-white/70 border border-white/10 transition-all cursor-pointer"
        >
          Anterior
        </button>

        {currentIndex === sessionQuestions.length - 1 ? (
          <button
            onClick={handleFinishExam}
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-all shadow-lg shadow-emerald-600/30 cursor-pointer"
          >
            Finalizar Examen
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(sessionQuestions.length - 1, prev + 1))}
            className="flex items-center space-x-1.5 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
          >
            <span>Siguiente</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
