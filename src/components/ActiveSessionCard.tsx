import React from 'react';
import { PauseCircle, ArrowRight, RotateCcw, Clock } from 'lucide-react';
import type { ExamSession } from '../types/question';

interface ActiveSessionCardProps {
  session: ExamSession;
  onResume: () => void;
  onReset: () => void;
}

export const ActiveSessionCard: React.FC<ActiveSessionCardProps> = ({
  session,
  onResume,
  onReset,
}) => {
  const total = session.questionIds.length || 20;
  const current = session.currentQuestionIndex + 1;
  const progressPct = Math.round((current / total) * 100);
  const minutes = Math.floor(session.timeRemainingSeconds / 60);
  const seconds = session.timeRemainingSeconds % 60;
  const formattedTime = `${minutes}m ${seconds.toString().padStart(2, '0')}s`;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-amber-50/80 to-amber-100/40 dark:from-[#1C1710] dark:to-[#120F0B] border border-amber-300/80 dark:border-amber-500/30 p-5 shadow-sm dark:shadow-2xl shadow-amber-950/20 animate-fade-in-up">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <PauseCircle className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-500/20">
            {session.mode === 'exam' ? 'Examen Pausado' : 'Estudio Pausado'}
          </span>
        </div>
        {session.mode === 'exam' && (
          <div className="flex items-center space-x-1 text-slate-500 dark:text-white/40 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400/70" />
            <span>{formattedTime}</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
        Tenías una sesión en progreso
      </h3>
      <p className="text-xs text-slate-600 dark:text-white/60 mb-4">
        Pregunta <strong className="text-slate-900 dark:text-white font-mono text-sm">{current}</strong> de {total} •{' '}
        <span className="text-amber-700 dark:text-amber-300 font-semibold">{session.score} pts</span> acumulados
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200/80 dark:bg-white/10 h-2 rounded-full overflow-hidden mb-5">
        <div
          className="bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        ></div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onResume}
          className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-98 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/25 cursor-pointer"
        >
          <span>Continuar</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={onReset}
          className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-2xl bg-white/80 hover:bg-white active:scale-98 text-slate-700 hover:text-slate-900 border border-amber-200/80 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white/70 dark:hover:text-white dark:border-white/10 font-semibold text-sm transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reiniciar</span>
        </button>
      </div>
    </div>
  );
};
