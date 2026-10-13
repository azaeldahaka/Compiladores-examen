import React from 'react';
import { Rocket, Brain, HelpCircle, ChevronRight, Sparkles } from 'lucide-react';
import type { LessonId } from '../types/question';
import { LESSONS_CONFIG, QUESTIONS_BANK } from '../data/questions';

interface ModeSelectionProps {
  onStartExam: () => void;
  onStartStudy: (lessonFilter?: LessonId) => void;
  onOpenHelp: (mode: 'exam' | 'study') => void;
  selectedLessonFilter?: LessonId;
  onSelectLessonFilter: (lessonId?: LessonId) => void;
}

export const ModeSelection: React.FC<ModeSelectionProps> = ({
  onStartExam,
  onStartStudy,
  onOpenHelp,
  selectedLessonFilter,
  onSelectLessonFilter,
}) => {
  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">Seleccionar Modalidad</h2>
        <span className="text-[11px] font-mono text-slate-500 dark:text-white/40 tracking-wider uppercase">2 Rutas Activas</span>
      </div>

      {/* Card 1: Modo Examen Real */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-50/70 to-emerald-100/30 dark:from-[#151E19] dark:to-[#0D1310] border border-emerald-200/80 dark:border-emerald-500/20 p-5 transition-all duration-300 hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-500/40">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-lg shadow-emerald-500/10">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Modo Examen Real</h3>
              <p className="text-xs text-slate-600 dark:text-white/60">20 reactivos • 100 pts • Reloj 45 min</p>
            </div>
          </div>

          {/* Question help button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenHelp('exam');
            }}
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white active:scale-95 border border-emerald-200/60 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 flex items-center justify-center text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-all cursor-pointer"
            aria-label="Ayuda Modo Examen"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/70 dark:bg-white/5 text-slate-700 dark:text-white/70 border border-emerald-200/50 dark:border-white/10">
            Gramáticas LL(1)
          </span>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/70 dark:bg-white/5 text-slate-700 dark:text-white/70 border border-emerald-200/50 dark:border-white/10">
            Autómatas a Pila
          </span>
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/70 dark:bg-white/5 text-slate-700 dark:text-white/70 border border-emerald-200/50 dark:border-white/10">
            Máquinas Turing
          </span>
        </div>

        {/* Start Button */}
        <button
          onClick={onStartExam}
          className="flex items-center justify-between w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/25 hover:shadow-lg cursor-pointer"
        >
          <span className="flex items-center space-x-2">
            <span>Iniciar Simulacro de Cátedra</span>
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Card 2: Modo Estudio FSRS */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-50/70 to-indigo-100/30 dark:from-[#181524] dark:to-[#0E0C17] border border-indigo-200/80 dark:border-indigo-500/20 p-5 transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/40">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-lg shadow-indigo-500/10">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Modo Estudio FSRS</h3>
                <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              </div>
              <p className="text-xs text-slate-600 dark:text-white/60">Active Recall • Algoritmo de intervalos FSRS v4</p>
            </div>
          </div>

          {/* Question help button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenHelp('study');
            }}
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white active:scale-95 border border-indigo-200/60 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 flex items-center justify-center text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-all cursor-pointer"
            aria-label="Ayuda Modo Estudio"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>

        {/* Lesson Filter Selector Chips */}
        <div className="mb-4">
          <div className="text-[11px] font-medium text-slate-500 dark:text-white/40 mb-2">Filtrar por Lección (Opcional):</div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onSelectLessonFilter(undefined)}
              className={`text-[11px] px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                !selectedLessonFilter
                  ? 'bg-indigo-600 text-white border-indigo-600 font-medium shadow-sm shadow-indigo-600/20'
                  : 'bg-white/80 dark:bg-white/5 text-slate-600 dark:text-white/60 border-indigo-200/60 dark:border-white/10 hover:bg-white dark:hover:bg-white/10'
              }`}
            >
              Todas ({QUESTIONS_BANK.length})
            </button>
            {LESSONS_CONFIG.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => onSelectLessonFilter(lesson.id as LessonId)}
                className={`text-[11px] px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                  selectedLessonFilter === lesson.id
                    ? 'bg-indigo-600 text-white border-indigo-600 font-medium shadow-sm shadow-indigo-600/20'
                    : 'bg-white/80 dark:bg-white/5 text-slate-600 dark:text-white/60 border-indigo-200/60 dark:border-white/10 hover:bg-white dark:hover:bg-white/10'
                }`}
              >
                {lesson.badge} ({lesson.questionCount})
              </button>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={() => onStartStudy(selectedLessonFilter)}
          className="flex items-center justify-between w-full py-3.5 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/25 hover:shadow-lg cursor-pointer"
        >
          <span>
            {selectedLessonFilter
              ? `Estudiar Lección Seleccionada`
              : 'Estudiar Todo el Temario FSRS'}
          </span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
