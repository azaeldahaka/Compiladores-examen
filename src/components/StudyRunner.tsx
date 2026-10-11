import React, { useState } from 'react';
import { ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import type { Question, FSRSRating } from '../types/question';
import { FSRS } from '../utils/fsrs';
import { Storage } from '../utils/storage';

interface StudyRunnerProps {
  questions: Question[];
  onExit: () => void;
}

export const StudyRunner: React.FC<StudyRunnerProps> = ({ questions, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelect = (optId: 'A' | 'B' | 'C' | 'D') => {
    if (selectedOption !== null) return;
    setSelectedOption(optId);
    setShowExplanation(true);
  };

  const handleRateFSRS = (rating: FSRSRating) => {
    // Retrieve or initialize card
    const cards = Storage.getFSRSCards();
    const currentCard = cards[currentQ.id] || FSRS.createInitialCard(currentQ.id);
    const updatedCard = FSRS.scheduleNext(currentCard, rating);
    Storage.saveFSRSCard(updatedCard);
    Storage.recordStudyReview();

    // Next question
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      // Completed current pool
      onExit();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-5 animate-in fade-in pb-24">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onExit}
          className="flex items-center space-x-1.5 text-xs text-white/60 hover:text-white py-1.5 px-3 rounded-full bg-white/5 border border-white/10 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al Menú</span>
        </button>

        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-xs font-mono">
          <Sparkles className="w-3 h-3" />
          <span>FSRS v4</span>
        </div>
      </div>

      {/* Progress Info */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-white/50">
          Tarjeta <strong className="text-white text-sm">{currentIndex + 1}</strong> de {questions.length}
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-mono font-semibold">
          {currentQ.points} PTS
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-indigo-500 h-full rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="p-5 rounded-3xl bg-[#14141A] border border-indigo-500/20 space-y-3 shadow-xl">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
          <span>{currentQ.lessonTitle}</span>
          <span className="text-white/40 font-mono text-[10px]">{currentQ.topic}</span>
        </div>
        <h2 className="text-base font-semibold text-white leading-snug">
          {currentQ.questionText}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {currentQ.options.map((opt) => {
          const isChosen = selectedOption === opt.id;
          const isCorrect = opt.isCorrect;

          let btnStyle = 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10';
          let badgeStyle = 'bg-white/10 text-white/60';

          if (showExplanation) {
            if (isCorrect) {
              btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-100 font-medium shadow-lg shadow-emerald-950/40';
              badgeStyle = 'bg-emerald-500 text-white';
            } else if (isChosen) {
              btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-100';
              badgeStyle = 'bg-rose-500 text-white';
            } else {
              btnStyle = 'bg-white/5 border-white/5 text-white/30 opacity-60';
            }
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={showExplanation}
              className={`w-full p-4 rounded-2xl border text-left transition-all flex items-start space-x-3 cursor-pointer ${btnStyle}`}
            >
              <span
                className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${badgeStyle}`}
              >
                {opt.id}
              </span>
              <span className="text-xs leading-relaxed pt-1">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {/* Immediate Active Feedback */}
      {showExplanation && (
        <div className="space-y-4 animate-in fade-in duration-300">
          {/* Theory card */}
          <div className="p-4 rounded-3xl bg-[#121620] border border-blue-500/30 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-semibold text-blue-400">
              <BookOpen className="w-4 h-4" />
              <span>Píldora Teórica de Cátedra</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              {currentQ.theorySummary}
            </p>
            <div className="pt-2 border-t border-white/10 text-[10px] text-white/40 space-y-1">
              <div><strong>Cátedra:</strong> {currentQ.sourceCatedra}</div>
              <div><strong>Libro:</strong> {currentQ.sourceBook}</div>
            </div>
          </div>

          {/* FSRS Rating Selection */}
          <div className="space-y-2 pt-2">
            <div className="text-[11px] font-semibold text-white/60 text-center uppercase tracking-wider">
              ¿Cómo sentiste este concepto? (FSRS)
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => handleRateFSRS(1)}
                className="py-3 px-2 rounded-2xl bg-rose-950/60 hover:bg-rose-900 border border-rose-500/30 text-rose-300 font-semibold text-xs text-center transition-all cursor-pointer active:scale-95"
              >
                <div>Otra vez</div>
                <div className="text-[9px] text-rose-400/60 font-mono mt-0.5">&lt; 10m</div>
              </button>

              <button
                onClick={() => handleRateFSRS(2)}
                className="py-3 px-2 rounded-2xl bg-amber-950/60 hover:bg-amber-900 border border-amber-500/30 text-amber-300 font-semibold text-xs text-center transition-all cursor-pointer active:scale-95"
              >
                <div>Difícil</div>
                <div className="text-[9px] text-amber-400/60 font-mono mt-0.5">1 día</div>
              </button>

              <button
                onClick={() => handleRateFSRS(3)}
                className="py-3 px-2 rounded-2xl bg-blue-950/60 hover:bg-blue-900 border border-blue-500/30 text-blue-300 font-semibold text-xs text-center transition-all cursor-pointer active:scale-95"
              >
                <div>Bien</div>
                <div className="text-[9px] text-blue-400/60 font-mono mt-0.5">3 días</div>
              </button>

              <button
                onClick={() => handleRateFSRS(4)}
                className="py-3 px-2 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-semibold text-xs text-center transition-all cursor-pointer active:scale-95"
              >
                <div>Fácil</div>
                <div className="text-[9px] text-emerald-400/60 font-mono mt-0.5">7 días</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
