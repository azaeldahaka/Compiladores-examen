import React, { useEffect } from 'react';
import { X, Check, Clock, Sparkles } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#141418] border-t sm:border border-white/15 rounded-t-[32px] sm:rounded-3xl p-6 shadow-2xl shadow-black relative animate-in slide-in-from-bottom-5 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 rounded-full bg-white/20 mx-auto mb-4 sm:hidden"></div>

        {/* Modal Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              Instancia de Evaluación
            </h3>
            <p className="text-[11px] text-white/50">
              Seleccioná qué instancia de la materia querés entrenar
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all cursor-pointer"
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
                ? 'bg-blue-600/15 border-2 border-blue-500'
                : 'bg-white/5 border border-white/10 hover:border-blue-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  2do Parcial (Oficial)
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                ACTIVO • 66 PREGUNTAS
              </span>
            </div>
            <p className="text-xs text-white/80 font-medium">
              Lecciones 5 a 11: Gramáticas Regulares, Scanner, Pila, GLC, Turing, Limpieza y LL(1).
            </p>
            <div className="mt-2 text-[10px] text-blue-300/80 flex items-center space-x-1">
              <Check className="w-3.5 h-3.5 text-blue-400" />
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
                ? 'bg-amber-600/15 border-2 border-amber-500'
                : 'bg-white/5 border border-white/10 hover:border-amber-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Recuperatorio 1er Parcial
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25">
                EN PREPARACIÓN
              </span>
            </div>
            <p className="text-xs text-white/60">
              Lecciones 1 a 4: Introducción, AFD, AFND, Expresiones Regulares y Máquinas Secuenciales.
            </p>
            <div className="mt-2 text-[10px] text-amber-400/80">
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
                ? 'bg-violet-600/15 border-2 border-violet-500'
                : 'bg-white/5 border border-white/10 hover:border-violet-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Examen Final Integrador
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25">
                LECCIONES 1 A 11
              </span>
            </div>
            <p className="text-xs text-white/60">
              Programa completo integrado para rendir la mesa de examen final.
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-all cursor-pointer"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};
