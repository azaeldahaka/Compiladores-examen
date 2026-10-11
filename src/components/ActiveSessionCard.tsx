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
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#1C1710] to-[#120F0B] border border-amber-500/30 p-5 shadow-2xl shadow-amber-950/20">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
            <PauseCircle className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
            {session.mode === 'exam' ? 'Examen Pausado' : 'Estudio Pausado'}
          </span>
        </div>
        {session.mode === 'exam' && (
          <div className="flex items-center space-x-1 text-white/40 text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-amber-400/70" />
            <span>{formattedTime}</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-bold text-white tracking-tight mb-1">
        Tenías una sesión en progreso
      </h3>
      <p className="text-xs text-white/60 mb-4">
        Pregunta <strong className="text-white font-mono text-sm">{current}</strong> de {total} •{' '}
        <span className="text-amber-300 font-semibold">{session.score} pts</span> acumulados
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-5">
        <div
          className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPct}%` }}
        ></div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onResume}
          className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
        >
          <span>Continuar</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={onReset}
          className="flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-2xl bg-white/5 hover:bg-white/10 active:scale-98 text-white/70 hover:text-white border border-white/10 font-semibold text-sm transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reiniciar</span>
        </button>
      </div>
    </div>
  );
};
