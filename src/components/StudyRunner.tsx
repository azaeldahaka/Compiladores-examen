import React, { useState } from 'react';
import { ArrowLeft, Sparkles, BookOpen, MessageSquare, Check, X } from 'lucide-react';
import type { Question, FSRSRating, OptionId } from '../types/question';
import { FSRS } from '../utils/fsrs';
import { Storage } from '../utils/storage';
import { FeedbackModal } from './FeedbackModal';
import { MathText } from './MathText';

interface StudyRunnerProps {
  questions: Question[];
  onExit: () => void;
}

export const StudyRunner: React.FC<StudyRunnerProps> = ({ questions, onExit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<OptionId | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelect = (optId: OptionId) => {
    if (selectedOption !== null) return;
    setSelectedOption(optId);
    setShowExplanation(true);
  };

  const handleRateFSRS = (rating: FSRSRating) => {
    const cards = Storage.getFSRSCards();
    const currentCard = cards[currentQ.id] || FSRS.createInitialCard(currentQ.id);
    const updatedCard = FSRS.scheduleNext(currentCard, rating);
    Storage.saveFSRSCard(updatedCard);
    Storage.recordStudyReview();

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      onExit();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-5 animate-in fade-in pb-24">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onExit}
          className="flex items-center space-x-1.5 text-xs text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white py-1.5 px-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all duration-200 cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al Menú</span>
        </button>

        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/25 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-medium shadow-xs">
          <Sparkles className="w-3 h-3 text-indigo-500" />
          <span>FSRS v4</span>
        </div>
      </div>

      {/* Progress Info */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono text-slate-500 dark:text-white/50">
          Tarjeta <strong className="text-slate-900 dark:text-white text-sm">{currentIndex + 1}</strong> de {questions.length}
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-mono font-semibold border border-indigo-200 dark:border-transparent">
          {currentQ.points} PTS
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card with slide-in animation */}
      <div
        key={currentQ.id}
        className="p-5 rounded-3xl bg-white dark:bg-[#14141A] border border-indigo-100 dark:border-indigo-500/20 space-y-3 shadow-md dark:shadow-xl transition-all duration-300 animate-slide-in-right"
      >
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <span>{currentQ.lessonTitle}</span>
          <span className="text-slate-400 dark:text-white/40 font-mono text-[10px]">{currentQ.id}</span>
        </div>
        <h2 className="text-base font-semibold text-slate-900 dark:text-white leading-snug">
          <MathText text={currentQ.questionText} />
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {currentQ.options.map((opt) => {
          const isChosen = selectedOption === opt.id;
          const isCorrect = opt.isCorrect;

          let btnStyle = 'bg-white hover:bg-indigo-50/50 border-slate-200/90 text-slate-800 dark:bg-white/5 dark:border-white/10 dark:text-white/80 dark:hover:bg-white/10 shadow-xs hover:border-indigo-300 dark:hover:border-white/20';
          let badgeStyle = 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-white/60';
          let tag = null;

          if (showExplanation) {
            if (isCorrect) {
              btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-500 ring-2 ring-emerald-300/50 dark:ring-emerald-500/40 text-emerald-950 dark:text-emerald-100 font-medium shadow-sm animate-pop';
              badgeStyle = 'bg-emerald-600 text-white font-bold';
              tag = (
                <span className="shrink-0 text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 flex items-center space-x-1 animate-pop">
                  <span>Correcta</span>
                  <span>✓</span>
                </span>
              );
            } else if (isChosen) {
              btnStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-400 dark:border-rose-500 ring-2 ring-rose-300/50 dark:ring-rose-500/40 text-rose-950 dark:text-rose-100 font-medium shadow-sm animate-pop';
              badgeStyle = 'bg-rose-600 text-white font-bold';
              tag = (
                <span className="shrink-0 text-[10px] font-bold text-rose-800 dark:text-rose-300 bg-rose-100 dark:bg-rose-500/20 px-2 py-0.5 rounded-full border border-rose-300 dark:border-rose-500/30 flex items-center space-x-1 animate-pop">
                  <span>Tu respuesta</span>
                  <span>✗</span>
                </span>
              );
            } else {
              btnStyle = 'bg-slate-50 dark:bg-white/5 border-slate-200/50 dark:border-white/5 text-slate-400 dark:text-white/30 opacity-50';
            }
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              disabled={showExplanation}
              className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start space-x-3 cursor-pointer active:scale-[0.99] ${btnStyle}`}
            >
              <span
                className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 transition-colors ${badgeStyle}`}
              >
                {opt.id}
              </span>
              <span className="text-xs leading-relaxed pt-1 flex-1">
                <MathText text={opt.text} />
              </span>
              {tag}
            </button>
          );
        })}
      </div>

      {/* Immediate Active Feedback */}
      {showExplanation && (
        <div className="space-y-4 animate-fade-in-up">
          {/* Visual Verdict Banner */}
          {(() => {
            const correctOpt = currentQ.options.find((o) => o.isCorrect);
            const userWasCorrect = selectedOption === correctOpt?.id;

            return (
              <div
                className={`p-4 rounded-2xl border flex items-center space-x-3.5 shadow-sm dark:shadow-xl transition-colors ${
                  userWasCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-500/50 text-rose-900 dark:text-rose-200'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white font-bold animate-pop ${
                    userWasCorrect
                      ? 'bg-emerald-600 shadow-md shadow-emerald-600/30'
                      : 'bg-rose-600 shadow-md shadow-rose-600/30'
                  }`}
                >
                  {userWasCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                    {userWasCorrect ? '¡Respuesta Correcta!' : 'Respuesta Incorrecta'}
                  </div>
                  <div className="text-xs opacity-90 mt-0.5">
                    {userWasCorrect ? (
                      <span>Seleccionaste la opción correcta (+{currentQ.points} pts de cátedra).</span>
                    ) : (
                      <span>
                        Elegiste la opción <strong>{selectedOption}</strong>. La opción correcta de cátedra es la <strong>{correctOpt?.id}</strong>.
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Theory card */}
          <div className="p-4 rounded-3xl bg-indigo-50/70 dark:bg-[#121620] border border-indigo-200/80 dark:border-blue-500/30 space-y-3 shadow-xs dark:shadow-none transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-700 dark:text-blue-400">
                <BookOpen className="w-4 h-4" />
                <span>Píldora Teórica de Cátedra</span>
              </div>
              <button
                onClick={() => setIsFeedbackOpen(true)}
                className="py-1 px-2.5 rounded-full bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-white/60 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 text-[10px] font-semibold transition-all flex items-center space-x-1 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                <span>Sugerir cambio</span>
              </button>
            </div>

            <div className="text-xs text-slate-800 dark:text-white/80 leading-relaxed">
              <MathText text={currentQ.theorySummary} />
            </div>

            <div className="pt-2 border-t border-indigo-100 dark:border-white/10 text-[10px] text-slate-500 dark:text-white/40 space-y-1">
              <div><strong>Cátedra:</strong> {currentQ.sourceCatedra}</div>
              <div><strong>Libro:</strong> {currentQ.sourceBook}</div>
            </div>
          </div>

          {/* FSRS Rating Selection (Anki-style steps: < 1m, 10m, 1d, 3d) */}
          <div className="space-y-2 pt-2">
            <div className="text-[11px] font-semibold text-slate-600 dark:text-white/60 text-center uppercase tracking-wider">
              ¿Cómo sentiste este concepto? (Repetición Espaciada)
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => handleRateFSRS(1)}
                className="py-3 px-2 rounded-2xl bg-rose-100 hover:bg-rose-200 dark:bg-rose-950/60 dark:hover:bg-rose-900 border border-rose-300 dark:border-rose-500/30 text-rose-900 dark:text-rose-300 font-semibold text-xs text-center transition-all cursor-pointer active:scale-95 shadow-xs hover:-translate-y-0.5 duration-150"
              >
                <div>Otra vez</div>
                <div className="text-[9px] text-rose-700 dark:text-rose-400/60 font-mono mt-0.5">&lt; 1m</div>
              </button>

              <button
                onClick={() => handleRateFSRS(2)}
                className="py-3 px-2 rounded-2xl bg-amber-100 hover:bg-amber-200 dark:bg-amber-950/60 dark:hover:bg-amber-900 border border-amber-300 dark:border-amber-500/30 text-amber-900 dark:text-amber-300 font-semibold text-xs text-center transition-all cursor-pointer active:scale-95 shadow-xs hover:-translate-y-0.5 duration-150"
              >
                <div>Difícil</div>
                <div className="text-[9px] text-amber-700 dark:text-amber-400/60 font-mono mt-0.5">10m</div>
              </button>

              <button
                onClick={() => handleRateFSRS(3)}
                className="py-3 px-2 rounded-2xl bg-indigo-100 hover:bg-indigo-200 dark:bg-blue-950/60 dark:hover:bg-blue-900 border border-indigo-300 dark:border-blue-500/30 text-indigo-900 dark:text-blue-300 font-semibold text-xs text-center transition-all cursor-pointer active:scale-95 shadow-xs hover:-translate-y-0.5 duration-150"
              >
                <div>Bien</div>
                <div className="text-[9px] text-indigo-700 dark:text-blue-400/60 font-mono mt-0.5">1d</div>
              </button>

              <button
                onClick={() => handleRateFSRS(4)}
                className="py-3 px-2 rounded-2xl bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950/60 dark:hover:bg-emerald-900 border border-emerald-300 dark:border-emerald-500/30 text-emerald-900 dark:text-emerald-300 font-semibold text-xs text-center transition-all cursor-pointer active:scale-95 shadow-xs hover:-translate-y-0.5 duration-150"
              >
                <div>Fácil</div>
                <div className="text-[9px] text-emerald-700 dark:text-emerald-400/60 font-mono mt-0.5">3d</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        question={currentQ}
        userAnswer={selectedOption}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </div>
  );
};
