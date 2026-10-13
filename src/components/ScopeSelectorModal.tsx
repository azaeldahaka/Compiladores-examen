import React, { useEffect } from 'react';
import { X, Check, Clock, Sparkles } from 'lucide-react';
import { QUESTIONS_BANK } from '../data/questions';

export type ExamScope = 'parcial-2' | 'recuperatorio-1' | 'final';

interface ScopeSelectorModalProps {
  isOpen: boolean;
  currentScope: ExamScope;
  onSelectScope: (scope: ExamScope) => void;
  onClose: () => void;
}

export const ScopeSelectorModal: React.FC<ScopeSelectorModalProps> = ({
  isOpen,
  currentScope,
  onSelectScope,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xl animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white dark:bg-[#141418] border-t sm:border border-slate-200 dark:border-white/15 rounded-t-[32px] sm:rounded-3xl p-6 shadow-2xl relative animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-white/20 mx-auto mb-4 sm:hidden"></div>

        {/* Modal Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              Instancia de Evaluación
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-white/50">
              Seleccioná qué instancia de la materia querés entrenar
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 active:scale-95 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Options List */}
        <div className="space-y-3 mb-6">
          {/* Option 1: 2do Parcial (Active) */}
          <div
            onClick={() => {
              onSelectScope('parcial-2');
              onClose();
            }}
            className={`p-4 rounded-2xl text-left transition-all cursor-pointer relative ${
              currentScope === 'parcial-2'
                ? 'bg-indigo-50/80 border-2 border-indigo-500 dark:bg-indigo-600/15 dark:border-indigo-500 shadow-xs'
                : 'bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-blue-400 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  2do Parcial (Oficial)
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-blue-300 border border-indigo-200/80 dark:border-blue-500/30">
                ACTIVO • {QUESTIONS_BANK.length} PREGUNTAS
              </span>
            </div>
            <p className="text-xs text-slate-700 dark:text-white/80 font-medium">
              Lecciones 5 a 11: Gramáticas Regulares, Scanner, Pila, GLC, Turing, Limpieza y LL(1).
            </p>
            <div className="mt-2 text-[10px] text-indigo-700 dark:text-blue-300/80 flex items-center space-x-1">
              <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-blue-400" />
              <span>Simulador calibrado con el estándar de evaluación de cátedra</span>
            </div>
          </div>

          {/* Option 2: Recuperatorio 1er Parcial (Upcoming) */}
          <div
            onClick={() => {
              onSelectScope('recuperatorio-1');
              onClose();
            }}
            className={`p-4 rounded-2xl text-left transition-all cursor-pointer ${
              currentScope === 'recuperatorio-1'
                ? 'bg-amber-50/80 border-2 border-amber-500 dark:bg-amber-600/15 dark:border-amber-500'
                : 'bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-amber-400 dark:hover:border-amber-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Recuperatorio 1er Parcial
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/25">
                EN PREPARACIÓN
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-white/60">
              Lecciones 1 a 4: Introducción, AFD, AFND, Expresiones Regulares y Máquinas Secuenciales.
            </p>
            <div className="mt-2 text-[10px] text-amber-600 dark:text-amber-400/80">
              Próximamente disponible para quienes deban rendir el recuperatorio.
            </div>
          </div>

          {/* Option 3: Examen Final Integrador (Future) */}
          <div
            onClick={() => {
              onSelectScope('final');
              onClose();
            }}
            className={`p-4 rounded-2xl text-left transition-all cursor-pointer opacity-75 ${
              currentScope === 'final'
                ? 'bg-purple-50/80 border-2 border-purple-500 dark:bg-violet-600/15 dark:border-violet-500'
                : 'bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:border-purple-400 dark:hover:border-violet-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-violet-400" />
                <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Examen Final Integrador
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-violet-500/15 text-purple-800 dark:text-violet-300 border border-purple-200 dark:border-violet-500/25">
                LECCIONES 1 A 11
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-white/60">
              Programa completo integrado para rendir la mesa de examen final.
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-slate-800 dark:text-white font-semibold text-xs transition-all cursor-pointer"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
