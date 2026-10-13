import React, { useState } from 'react';
import { ShieldCheck, Trash2, RefreshCw, BookOpen, Check, AlertTriangle, Sparkles, MessageSquare, GitPullRequest, ExternalLink, Sun, Moon } from 'lucide-react';
import { FeedbackModal } from './FeedbackModal';
import type { Theme } from '../utils/theme';

interface SettingsTabProps {
  onResetAllData: () => void;
  theme?: Theme;
  onToggleTheme?: () => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  onResetAllData,
  theme = 'dark',
  onToggleTheme,
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleConfirm = () => {
    onResetAllData();
    setShowConfirmReset(false);
    setResetSuccess(true);
    setTimeout(() => setResetSuccess(false), 3000);
  };

  return (
    <div className="space-y-5 animate-in fade-in">
      <div className="flex items-center justify-between px-1">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">Ajustes & Privacidad</h2>
          <p className="text-xs text-slate-500 dark:text-white/50">Configuración local, apariencia y referencias académicas</p>
        </div>
        <span className="text-xs font-mono text-slate-400 dark:text-white/40">v2.2.0</span>
      </div>

      {/* Theme Appearance Selector */}
      <div className="p-5 rounded-3xl bg-white dark:bg-[#141418] border border-slate-200/80 dark:border-white/10 space-y-3.5 shadow-sm dark:shadow-xl transition-colors duration-300">
        <div className="flex items-center space-x-2 text-indigo-600 dark:text-amber-400">
          <Sun className="w-5 h-5" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
            Apariencia & Paleta de Colores
          </h3>
        </div>
        <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed">
          Elegí tu estilo visual para estudiar. El <strong>Modo Claro Pastel</strong> está diseñado con tonos suaves (lavanda, menta, durazno) para reducir la fatiga visual diurna.
        </p>

        <div className="grid grid-cols-2 gap-3 pt-1">
          {/* Light Pastel Mode Button */}
          <button
            onClick={() => {
              if (theme !== 'light' && onToggleTheme) onToggleTheme();
            }}
            className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col space-y-2 ${
              theme === 'light'
                ? 'bg-indigo-50 border-indigo-400 ring-2 ring-indigo-300/40 shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-xs font-bold text-indigo-950 flex items-center space-x-1.5">
                <Sun className="w-4 h-4 text-amber-500" />
                <span>Claro (Pastel)</span>
              </span>
              {theme === 'light' && <span className="w-2 h-2 rounded-full bg-indigo-600"></span>}
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">
              Fondos cálidos, acentos lavanda y menta
            </p>
          </button>

          {/* Dark Mode Button */}
          <button
            onClick={() => {
              if (theme !== 'dark' && onToggleTheme) onToggleTheme();
            }}
            className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col space-y-2 ${
              theme === 'dark'
                ? 'bg-white/10 border-blue-500 ring-2 ring-blue-500/30 text-white shadow-xs'
                : 'bg-white/5 hover:bg-white/10 border-white/10 text-white/70'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                <Moon className="w-4 h-4 text-indigo-400" />
                <span>Oscuro (Obsidiana)</span>
              </span>
              {theme === 'dark' && <span className="w-2 h-2 rounded-full bg-blue-500"></span>}
            </div>
            <p className="text-[11px] text-white/50 leading-tight">
              Alto contraste con luces de profundidad
            </p>
          </button>
        </div>
      </div>

      {/* Local-First Storage Info */}
      <div className="p-5 rounded-3xl bg-white dark:bg-[#141418] border border-slate-200/80 dark:border-white/10 space-y-3 shadow-sm dark:shadow-xl transition-colors duration-300">
        <div className="flex items-center space-x-2.5 text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="w-5 h-5" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
            Almacenamiento Local (Local-First)
          </h3>
        </div>
        <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed">
          Tus notas, tarjetas FSRS y exámenes quedan almacenados exclusivamente en el navegador de tu dispositivo (<code className="text-emerald-600 dark:text-emerald-300 font-mono text-[11px]">localStorage</code>). No enviamos telemetría ni recopilamos datos personales.
        </p>
      </div>

      {/* Danger Zone: Reset Data */}
      <div className="p-5 rounded-3xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-500/20 space-y-3 shadow-xs dark:shadow-none transition-colors duration-300">
        <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400">
          <Trash2 className="w-4 h-4" />
          <h3 className="text-sm font-bold text-rose-900 dark:text-rose-200 tracking-tight">
            Reiniciar Estadísticas y Memoria
          </h3>
        </div>
        <p className="text-xs text-rose-700/80 dark:text-rose-200/70 leading-relaxed">
          Si deseás reiniciar tu progreso, historial de simulacros e intervalos FSRS para empezar a estudiar desde cero.
        </p>

        {resetSuccess ? (
          <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs flex items-center space-x-2">
            <Check className="w-4 h-4" />
            <span>¡Datos locales reiniciados correctamente!</span>
          </div>
        ) : showConfirmReset ? (
          <div className="p-4 rounded-2xl bg-white dark:bg-black/40 border border-rose-300 dark:border-rose-500/30 space-y-3 animate-in fade-in shadow-xs">
            <div className="flex items-center space-x-2 text-rose-700 dark:text-rose-300 text-xs font-semibold">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              <span>¿Estás seguro? Esta acción no se puede deshacer.</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleConfirm}
                className="py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs transition-all cursor-pointer shadow-xs"
              >
                Sí, borrar todo
              </button>
              <button
                onClick={() => setShowConfirmReset(false)}
                className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-700 dark:text-white/70 text-xs font-semibold transition-all cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowConfirmReset(true)}
            className="py-2.5 px-4 rounded-2xl bg-white dark:bg-white/5 hover:bg-rose-100 dark:hover:bg-rose-500/10 border border-rose-200 dark:border-white/10 hover:border-rose-300 dark:hover:border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-semibold transition-all cursor-pointer flex items-center space-x-2 shadow-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reiniciar todos mis datos</span>
          </button>
        )}
      </div>

      {/* Community & Open Source Collaboration */}
      <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-50/60 dark:from-indigo-950/40 dark:via-[#141418] dark:to-violet-950/30 border border-indigo-200/80 dark:border-indigo-500/20 space-y-4 shadow-sm dark:shadow-xl transition-colors duration-300">
        <div className="flex items-center space-x-2.5 text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
            Colaboración & Sugerencias de Comunidad
          </h3>
        </div>
        <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed">
          Esta plataforma fue construida por estudiantes y para estudiantes. Si tenés ideas de nuevas funciones, preguntas de exámenes anteriores o querés colaborar con código, el proyecto es 100% de Código Abierto.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={() => setIsFeedbackOpen(true)}
            className="p-3.5 rounded-2xl bg-white dark:bg-white/5 hover:bg-indigo-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/30 text-slate-800 dark:text-white text-xs font-semibold flex items-center justify-between transition-all cursor-pointer group shadow-xs"
          >
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>Sugerir Funcionalidad</span>
            </div>
            <span className="text-[10px] text-indigo-600 dark:text-indigo-300 font-mono">Buzón</span>
          </button>

          <a
            href="https://github.com/azaeldahaka/Compiladores-examen"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-white dark:bg-white/5 hover:bg-indigo-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/30 text-slate-800 dark:text-white text-xs font-semibold flex items-center justify-between transition-all group shadow-xs"
          >
            <div className="flex items-center space-x-2">
              <GitPullRequest className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Ver Repo en GitHub</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-white/40" />
          </a>
        </div>
      </div>

      {/* Academic Sources & Credits */}
      <div className="p-5 rounded-3xl bg-white dark:bg-[#141418] border border-slate-200/80 dark:border-white/10 space-y-3 shadow-sm dark:shadow-xl text-xs text-slate-700 dark:text-white/70 transition-colors duration-300">
        <div className="flex items-center space-x-2 text-slate-900 dark:text-white font-bold text-sm">
          <BookOpen className="w-4 h-4 text-indigo-600 dark:text-blue-400" />
          <span>Fuentes Académicas y Cátedra</span>
        </div>
        <ul className="space-y-1.5 list-disc pl-4 text-slate-600 dark:text-white/60">
          <li><strong>Cátedra:</strong> Compiladores — UCASAL (Lic. Carolina Cardoso / Ing. Miguel Tolaba).</li>
          <li><strong>Dragon Book (2da Ed):</strong> Aho, Lam, Sethi & Ullman — Capítulos 3 y 4.</li>
          <li><strong>Construcción de Compiladores:</strong> Kenneth C. Louden — Capítulos 2 a 4.</li>
          <li><strong>Formal Languages and Automata:</strong> Peter Linz — Capítulos 7, 9, 10 y 11.</li>
        </ul>
      </div>

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </div>
  );
};
