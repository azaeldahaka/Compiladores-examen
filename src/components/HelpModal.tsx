import React, { useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  mode: 'exam' | 'study' | null;
  onClose: () => void;
  onConfirmStart: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({
  isOpen,
  mode,
  onClose,
  onConfirmStart,
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

  if (!isOpen || !mode) return null;

  const isExam = mode === 'exam';

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xl animate-fade-in-up"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="w-full max-w-md bg-white dark:bg-[#16161A] border-t sm:border border-slate-200 dark:border-white/15 rounded-t-[32px] sm:rounded-3xl p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle pill on mobile */}
        <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-white/20 mx-auto mb-4 sm:hidden"></div>

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-2.5">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                isExam
                  ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                  : 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400'
              }`}
            >
              {isExam ? <AlertCircle className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                {isExam ? 'Modo Examen Real' : 'Modo Estudio FSRS'}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-white/50">
                {isExam ? 'Reglas de evaluación oficial' : 'Ciencia de aprendizaje activo'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 active:scale-95 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content points */}
        <div className="space-y-3.5 mb-6 text-xs text-slate-700 dark:text-white/80 leading-relaxed">
          {isExam ? (
            <>
              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">20 Preguntas Ponderadas (100 Puntos):</strong>
                  <p className="text-slate-600 dark:text-white/60 mt-0.5">
                    Replica la estructura real: preguntas de 2 pts (conceptos directos), 5 pts (propiedades de clausura) y 8 pts (casos prácticos y límites de memoria).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Cronómetro y Sin Pistas:</strong>
                  <p className="text-slate-600 dark:text-white/60 mt-0.5">
                    Tenés 45 minutos continuos. No verás las respuestas correctas hasta terminar la entrega, simulando la hoja de parcial presencial.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Diagnóstico al Finalizar:</strong>
                  <p className="text-slate-600 dark:text-white/60 mt-0.5">
                    Obtendrás tu nota final (aprobás con ≥60) y una revisión detallada de cada trampa teórica en la que hayas caído.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Algoritmo FSRS v4 (Repetición Espaciada):</strong>
                  <p className="text-slate-600 dark:text-white/60 mt-0.5">
                    El sistema calcula la estabilidad de tu memoria. Las preguntas difíciles volverán a aparecer pronto; las dominadas se distanciarán en el tiempo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Active Recall y Retroalimentación Inmediata:</strong>
                  <p className="text-slate-600 dark:text-white/60 mt-0.5">
                    Al seleccionar tu respuesta, verás inmediatamente la justificación teórica y por qué cada una de las opciones restantes era una trampa de la cátedra.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Estudio por Lección Específica:</strong>
                  <p className="text-slate-600 dark:text-white/60 mt-0.5">
                    Podés elegir una lección puntual (ej. LL(1) o Máquinas de Turing) para concentrarte en tus puntos débiles.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Local-First Privacy Box */}
        <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 mb-6 flex items-start space-x-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-[11px] leading-tight text-emerald-900 dark:text-emerald-200/90">
            <strong className="font-semibold text-emerald-800 dark:text-emerald-300">PRIVACIDAD EN EL DISPOSITIVO (LOCAL-FIRST)</strong>
            <p className="mt-1 text-emerald-700 dark:text-emerald-200/70">
              Tus respuestas, notas y progreso quedan guardadas únicamente en tu propio teléfono (localStorage). Sin registros, sin contraseñas y sin telemetría externa.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={() => {
              onClose();
              onConfirmStart();
            }}
            className={`w-full py-3.5 px-5 rounded-2xl text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer active:scale-98 ${
              isExam
                ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/25'
                : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/25'
            }`}
          >
            <span>Entendido, empezar ahora</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 text-center text-xs text-slate-500 hover:text-slate-800 dark:text-white/50 dark:hover:text-white transition-colors cursor-pointer"
          >
            Cerrar y volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};
