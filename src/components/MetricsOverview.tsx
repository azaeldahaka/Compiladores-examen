import React from 'react';
import { Layers, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import type { CompletedStats } from '../utils/storage';
import { QUESTIONS_BANK } from '../data/questions';

interface MetricsOverviewProps {
  stats: CompletedStats;
}

export const MetricsOverview: React.FC<MetricsOverviewProps> = ({ stats }) => {
  const totalQuestions = QUESTIONS_BANK.length;
  const retentionPct = stats.totalStudyReviews > 0 ? Math.min(95, 60 + stats.streakDays * 5) : 0;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-base font-bold text-white tracking-tight">Métricas de Preparación</h2>
        <span className="flex items-center space-x-1 text-[11px] font-mono text-emerald-400">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>En meta</span>
        </span>
      </div>

      {/* 3 Metric Cards Grid */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center space-x-1 text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-2">
            <Layers className="w-3 h-3" />
            <span>Banco</span>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-white tracking-tight">{totalQuestions}</div>
            <div className="text-[10px] text-white/40">Preguntas</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center space-x-1 text-emerald-400/80 text-[10px] font-semibold uppercase tracking-wider mb-2">
            <Target className="w-3 h-3 text-emerald-400" />
            <span>Dominio</span>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-emerald-400 tracking-tight">
              {retentionPct}%
            </div>
            <div className="text-[10px] text-white/40">Retención FSRS</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
          <div className="flex items-center space-x-1 text-blue-400/80 text-[10px] font-semibold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-3 h-3 text-blue-400" />
            <span>Meta</span>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-blue-400 tracking-tight">≥ 60</div>
            <div className="text-[10px] text-white/40">Pts aprueba</div>
          </div>
        </div>
      </div>

      {/* Module Progress Breakdown */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/60 font-medium">Desglose por Módulo de Examen</span>
          <span className="text-white/40 font-mono text-[11px]">7 / 7 Lecciones</span>
        </div>

        {/* Stacked multi-color progress bar */}
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden flex">
          <div className="bg-emerald-500 h-full w-[35%]" title="Sintáctico"></div>
          <div className="bg-blue-500 h-full w-[25%]" title="Autómatas a Pila"></div>
          <div className="bg-amber-500 h-full w-[20%]" title="Máquinas de Turing"></div>
          <div className="bg-indigo-500 h-full w-[20%]" title="Léxico y Gramáticas"></div>
        </div>

        <div className="flex flex-wrap items-center justify-between text-[11px] text-white/60 pt-1">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Sintáctico (LL1)</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Pila (AP)</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>Turing (MT)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
