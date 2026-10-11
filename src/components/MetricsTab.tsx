import React from 'react';
import { Target, Award, Flame, Brain, Clock } from 'lucide-react';
import type { CompletedStats } from '../utils/storage';
import { Storage } from '../utils/storage';
import { QUESTIONS_BANK } from '../data/questions';

interface MetricsTabProps {
  stats: CompletedStats;
}

export const MetricsTab: React.FC<MetricsTabProps> = ({ stats }) => {
  const cards = Storage.getFSRSCards();
  const totalQuestions = QUESTIONS_BANK.length;

  const cardList = Object.values(cards);
  const reviewedCount = cardList.length;
  const masteredCount = cardList.filter((c) => c.stability >= 2.0).length;
  const learningCount = cardList.filter((c) => c.stability < 2.0 && c.reps > 0).length;
  const newCount = totalQuestions - reviewedCount;

  const retentionPct = stats.totalStudyReviews > 0 ? Math.min(95, 60 + stats.streakDays * 5) : 0;

  return (
    <div className="space-y-5 animate-in fade-in">
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">Métricas y Progreso</h2>
          <p className="text-xs text-white/50">Memoria FSRS y estadísticas de simulación</p>
        </div>
        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-300 font-mono text-xs font-semibold">
          <Flame className="w-4 h-4 text-amber-400" />
          <span>{stats.streakDays} DÍAS</span>
        </div>
      </div>

      {/* Main KPI Cards Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Card 1: Exámenes Completados */}
        <div className="p-4 rounded-3xl bg-[#141418] border border-white/10 space-y-2 shadow-xl">
          <div className="flex items-center justify-between text-xs text-white/50">
            <span>Simulacros</span>
            <Award className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-white">
            {stats.totalExamsCompleted}
          </div>
          <p className="text-[11px] text-white/50">
            Mejor nota: <strong className="text-blue-300 font-mono">{stats.bestScore} pts</strong>
          </p>
        </div>

        {/* Card 2: Retención FSRS */}
        <div className="p-4 rounded-3xl bg-[#141418] border border-white/10 space-y-2 shadow-xl">
          <div className="flex items-center justify-between text-xs text-white/50">
            <span>Retención FSRS</span>
            <Target className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold font-mono text-emerald-400">
            {retentionPct}%
          </div>
          <p className="text-[11px] text-white/50">
            Meta cátedra: <strong className="text-emerald-300 font-mono">≥ 90%</strong>
          </p>
        </div>
      </div>

      {/* FSRS Memory Distribution */}
      <div className="p-5 rounded-3xl bg-[#141418] border border-white/10 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-4 h-4 text-indigo-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              Estado de Memoria (FSRS v4)
            </h3>
          </div>
          <span className="text-[11px] font-mono text-white/40">
            {totalQuestions} Tarjetas
          </span>
        </div>

        {/* Multi-segmented bar */}
        <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden flex">
          <div
            className="bg-emerald-500 h-full transition-all"
            style={{ width: `${(masteredCount / totalQuestions) * 100}%` }}
            title="Dominadas"
          ></div>
          <div
            className="bg-amber-500 h-full transition-all"
            style={{ width: `${(learningCount / totalQuestions) * 100}%` }}
            title="En aprendizaje"
          ></div>
          <div
            className="bg-white/20 h-full transition-all"
            style={{ width: `${(newCount / totalQuestions) * 100}%` }}
            title="Nuevas"
          ></div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-2 pt-1 text-center">
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <div className="text-lg font-bold font-mono text-emerald-400">{masteredCount}</div>
            <div className="text-[10px] text-emerald-300/80 font-medium">Dominadas</div>
          </div>

          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <div className="text-lg font-bold font-mono text-amber-400">{learningCount}</div>
            <div className="text-[10px] text-amber-300/80 font-medium">En Repaso</div>
          </div>

          <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-lg font-bold font-mono text-white/60">{newCount}</div>
            <div className="text-[10px] text-white/40 font-medium">Por Ver</div>
          </div>
        </div>
      </div>

      {/* Review Activity */}
      <div className="p-4 rounded-3xl bg-white/5 border border-white/10 text-xs text-white/70 space-y-2">
        <div className="flex items-center space-x-2 font-semibold text-white">
          <Clock className="w-4 h-4 text-blue-400" />
          <span>Actividad de Estudio</span>
        </div>
        <p className="leading-relaxed">
          Has completado un total de <strong className="text-white font-mono">{stats.totalStudyReviews}</strong> revisiones con active recall. Cuanto más practiques con las calificaciones FSRS, mayor será tu retención a largo plazo para el examen presencial.
        </p>
      </div>
    </div>
  );
};
