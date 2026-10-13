import React, { useState, useEffect } from 'react';
import { Clock, ArrowLeft, ArrowRight, Home, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Question, ExamSession, OptionId } from '../types/question';
import { QUESTIONS_BANK } from '../data/questions';
import { Storage } from '../utils/storage';
import { FeedbackModal } from './FeedbackModal';
import { MathText } from './MathText';

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
  const [userAnswers, setUserAnswers] = useState<Record<string, OptionId>>(session.userAnswers);
  const [timeLeft, setTimeLeft] = useState(session.timeRemainingSeconds);
  const [isFinished, setIsFinished] = useState(session.isCompleted);
  const [feedbackQuestion, setFeedbackQuestion] = useState<{
    question: Question;
    userAnswer?: OptionId;
  } | null>(null);

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

  const handleSelectOption = (optionId: OptionId) => {
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
        <div className={`p-6 rounded-3xl border text-center relative overflow-hidden shadow-md dark:shadow-xl transition-colors ${
          promoted
            ? 'bg-gradient-to-b from-indigo-100 via-indigo-50/70 to-white dark:from-indigo-950/80 dark:to-[#0A0D14] border-indigo-300 dark:border-indigo-500/30'
            : passed
            ? 'bg-gradient-to-b from-emerald-100 via-emerald-50/70 to-white dark:from-emerald-950/80 dark:to-[#0A0D14] border-emerald-300 dark:border-emerald-500/30'
            : 'bg-gradient-to-b from-rose-100 via-rose-50/70 to-white dark:from-rose-950/80 dark:to-[#0A0D14] border-rose-300 dark:border-rose-500/30'
        }`}>
          <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-white/50 mb-2">
            Resultado del Examen
          </div>
          <div className="text-6xl font-extrabold font-mono tracking-tight text-slate-900 dark:text-white mb-2 animate-pop">
            {finalScore} <span className="text-2xl text-slate-400 dark:text-white/40">/ 100</span>
          </div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase mb-4" style={{
            backgroundColor: promoted ? 'rgba(99, 102, 241, 0.2)' : passed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)',
            color: promoted ? '#4338ca' : passed ? '#047857' : '#be123c',
          }}>
            {promoted ? '★ Promocionado' : passed ? '✓ Aprobado' : '✗ No Alcanzado (<60)'}
          </div>
          <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed">
            {promoted
              ? '¡Excelente rendimiento! Dominás con solvencia el estándar conceptual de la cátedra.'
              : passed
              ? 'Aprobaste el parcial. Te recomendamos reforzar las preguntas de 8 puntos para asegurar la nota.'
              : 'Puntaje por debajo del mínimo (60 pts). Revisá el desglose teórico abajo para no caer en las mismas trampas.'}
          </p>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">
            Revisión Inciso por Inciso
          </h3>
          {sessionQuestions.map((q, idx) => {
            const chosen = userAnswers[q.id];
            const correctOpt = q.options.find((o) => o.isCorrect);
            const isCorrect = chosen === correctOpt?.id;

            return (
              <div
                key={q.id}
                className={`p-4 rounded-2xl border shadow-xs transition-colors ${
                  isCorrect
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-500/20'
                    : 'bg-rose-50/70 dark:bg-rose-950/20 border-rose-200 dark:border-rose-500/20'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-700 dark:text-white/70">
                    Pregunta {idx + 1} • {q.points} pts
                  </span>
                  <span className={`font-mono text-xs font-bold ${isCorrect ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
                    {isCorrect ? `+${q.points} pts` : '0 pts'}
                  </span>
                </div>
                <div className="text-xs text-slate-900 dark:text-white font-medium mb-3">
                  <MathText text={q.questionText} />
                </div>

                <div className="space-y-1.5 mb-3">
                  {q.options.map((opt) => (
                    <div
                      key={opt.id}
                      className={`text-[11px] p-2.5 rounded-xl flex items-start space-x-2.5 transition-colors ${
                        opt.isCorrect
                          ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-950 dark:text-emerald-100 border border-emerald-300 dark:border-emerald-500/40 font-medium'
                          : chosen === opt.id
                          ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-950 dark:text-rose-100 border border-rose-300 dark:border-rose-500/40 font-medium'
                          : 'text-slate-400 dark:text-white/40'
                      }`}
                    >
                      <span className="font-mono font-bold shrink-0">{opt.id})</span>
                      <span className="flex-1">
                        <MathText text={opt.text} />
                      </span>
                      {opt.isCorrect && (
                        <span className="shrink-0 text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-200/70 dark:bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30">
                          Correcta ✓
                        </span>
                      )}
                      {chosen === opt.id && !opt.isCorrect && (
                        <span className="shrink-0 text-[10px] font-bold text-rose-800 dark:text-rose-300 bg-rose-200/70 dark:bg-rose-500/20 px-2 py-0.5 rounded-full border border-rose-300 dark:border-rose-500/30">
                          Tu elección ✗
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Theory Explanation */}
                <div className="p-2.5 rounded-xl bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 text-[11px] text-slate-700 dark:text-white/70 leading-relaxed space-y-2 shadow-xs">
                  <div>
                    <strong className="text-indigo-700 dark:text-blue-300 block mb-1">Fundamento de Cátedra:</strong>
                    <MathText text={correctOpt?.explanation || ''} />
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/5">
                    <span className="text-[10px] text-slate-400 dark:text-white/40 font-mono">ID: {q.id}</span>
                    <button
                      onClick={() => setFeedbackQuestion({ question: q, userAnswer: chosen })}
                      className="py-1 px-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 hover:text-slate-900 dark:text-white/60 dark:hover:text-white border border-slate-200 dark:border-white/10 text-[10px] font-semibold transition-all flex items-center space-x-1 cursor-pointer"
                    >
                      <MessageSquare className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                      <span>Sugerir corrección</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back home button */}
        <button
          onClick={onExit}
          className="w-full py-4 px-6 rounded-2xl bg-indigo-600 dark:bg-blue-600 hover:bg-indigo-500 dark:hover:bg-blue-500 font-semibold text-white text-sm transition-all shadow-md shadow-indigo-600/25 dark:shadow-blue-600/30 flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.99]"
        >
          <Home className="w-4 h-4" />
          <span>Volver al Menú Principal</span>
        </button>

        {/* Feedback Modal */}
        <FeedbackModal
          isOpen={feedbackQuestion !== null}
          question={feedbackQuestion?.question}
          userAnswer={feedbackQuestion?.userAnswer}
          onClose={() => setFeedbackQuestion(null)}
        />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-5 animate-in fade-in pb-24">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onExit}
          className="flex items-center space-x-1.5 text-xs text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white py-1.5 px-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all duration-200 cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Pausar y Volver</span>
        </button>

        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-xs shadow-xs">
          <Clock className={`w-3.5 h-3.5 ${timeLeft < 300 ? 'text-rose-500 animate-pulse' : 'text-amber-500 dark:text-amber-400'}`} />
          <span className={timeLeft < 300 ? 'text-rose-600 dark:text-rose-400 font-bold' : 'text-slate-800 dark:text-white'}>{formattedTime}</span>
        </div>
      </div>

      {/* Question Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-slate-500 dark:text-white/50">
          Pregunta <strong className="text-slate-900 dark:text-white text-sm">{currentIndex + 1}</strong> de {sessionQuestions.length}
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-blue-500/20 dark:text-blue-300 font-mono font-semibold border border-indigo-200 dark:border-transparent">
            {currentQ.points} PUNTOS
          </span>
          <button
            onClick={() => setFeedbackQuestion({ question: currentQ, userAnswer: userAnswers[currentQ.id] })}
            title="Sugerir corrección o reportar error"
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-white/40 dark:hover:text-white border border-slate-200 dark:border-white/10 transition-all cursor-pointer shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-indigo-600 dark:bg-blue-500 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card with slide-in animation */}
      <div
        key={currentQ.id}
        className="p-5 rounded-3xl bg-white dark:bg-[#141416] border border-indigo-100 dark:border-white/10 space-y-4 shadow-md dark:shadow-xl transition-all duration-300 animate-slide-in-right"
      >
        <div className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-blue-400">
          {currentQ.lessonTitle}
        </div>
        <h2 className="text-base font-semibold text-slate-900 dark:text-white leading-snug">
          <MathText text={currentQ.questionText} />
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
              className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start space-x-3 cursor-pointer active:scale-[0.99] ${
                isSelected
                  ? 'bg-indigo-50 dark:bg-blue-600/20 border-indigo-400 dark:border-blue-500 text-indigo-950 dark:text-white font-medium shadow-sm ring-2 ring-indigo-300/40 dark:ring-blue-500/30'
                  : 'bg-white hover:bg-indigo-50/40 border-slate-200/90 hover:border-indigo-200 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 text-slate-800 dark:text-white/80 shadow-xs'
              }`}
            >
              <span
                className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                  isSelected ? 'bg-indigo-600 dark:bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white/60'
                }`}
              >
                {opt.id}
              </span>
              <span className="text-xs leading-relaxed pt-1 flex-1">
                <MathText text={opt.text} />
              </span>
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="px-4 py-3 rounded-2xl bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none text-xs font-semibold text-slate-700 dark:text-white/70 border border-slate-200 dark:border-white/10 transition-all cursor-pointer shadow-xs"
        >
          Anterior
        </button>

        {currentIndex === sessionQuestions.length - 1 ? (
          <button
            onClick={handleFinishExam}
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-all shadow-md shadow-emerald-600/30 active:scale-95 cursor-pointer"
          >
            Finalizar Examen
          </button>
        ) : (
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(sessionQuestions.length - 1, prev + 1))}
            className="flex items-center space-x-1.5 px-6 py-3 rounded-2xl bg-indigo-600 dark:bg-blue-600 hover:bg-indigo-500 dark:hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-md shadow-indigo-600/25 dark:shadow-blue-600/30 active:scale-95 cursor-pointer"
          >
            <span>Siguiente</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={feedbackQuestion !== null}
        question={feedbackQuestion?.question}
        userAnswer={feedbackQuestion?.userAnswer}
        onClose={() => setFeedbackQuestion(null)}
      />
    </div>
  );
};
