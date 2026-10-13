import React, { useState, useEffect } from 'react';
import { X, GitPullRequest, MessageSquare, Copy, Check, ExternalLink, Sparkles, Send } from 'lucide-react';
import type { Question, OptionId } from '../types/question';
import { MathText } from './MathText';

interface FeedbackModalProps {
  isOpen: boolean;
  question?: Question | null;
  userAnswer?: OptionId | null;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  question,
  userAnswer,
  onClose,
}) => {
  const [comment, setComment] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setComment('');
      setCopied(false);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const repoUrl = 'https://github.com/azaeldahaka/Compiladores-examen';

  // Construct GitHub Issue URL
  const issueTitle = question
    ? `[Corrección] ${question.id}: ${question.topic}`
    : `[Sugerencia] Nueva funcionalidad / Mejora`;

  const issueBody = question
    ? `### Reporte de Pregunta\n` +
      `- **ID de Tarjeta:** \`${question.id}\`\n` +
      `- **Lección:** ${question.lessonTitle}\n` +
      `- **Tema:** ${question.topic}\n` +
      `- **Enunciado:** ${question.questionText}\n` +
      (userAnswer ? `- **Opción seleccionada:** ${userAnswer}\n` : '') +
      `\n### Sugerencia o Corrección:\n${comment || '_Describí aquí qué cambio proponés en el enunciado, opciones o fundamentación teórica._'}\n`
    : `### Sugerencia de Funcionalidad:\n${comment || '_Describí aquí la funcionalidad que te gustaría ver en la app._'}\n`;

  const githubIssueUrl = `${repoUrl}/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(issueBody)}`;

  // Construct WhatsApp Share Text
  const waText = question
    ? `*Sugerencia Compiladores UCASAL*\n📍 *Tarjeta:* ${question.id} (${question.lessonTitle})\n💬 *Comentario:* ${comment || 'Revisar enunciado / opciones'}`
    : `*Sugerencia Compiladores UCASAL*\n💬 *Idea:* ${comment}`;

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`;

  const handleCopyReport = () => {
    navigator.clipboard.writeText(waText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 dark:bg-black/80 backdrop-blur-xl animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white dark:bg-[#141418] border-t sm:border border-slate-200 dark:border-white/15 rounded-t-[32px] sm:rounded-3xl p-6 shadow-2xl relative max-h-[92vh] overflow-y-auto animate-pop-in space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-white/20 mx-auto sm:hidden"></div>

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-500/30">
                {question ? question.id : 'COLABORACIÓN'}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-white/50 font-medium">Control Colectivo de Calidad</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              {question ? 'Sugerir Corrección de Pregunta' : 'Sugerir Funcionalidad o Pregunta'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 active:scale-95 border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Context Card (If attached to a question) */}
        {question && (
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs space-y-1.5">
            <div className="text-[11px] text-slate-500 dark:text-white/50 font-medium">
              {question.lessonTitle} • <span className="text-slate-700 dark:text-white/70">{question.topic}</span>
            </div>
            <div className="text-slate-800 dark:text-white/90 line-clamp-2 italic font-serif">
              "<MathText text={question.questionText} />"
            </div>
            {userAnswer && (
              <div className="text-[10px] text-indigo-600 dark:text-blue-300/80 font-mono">
                Opción marcada en tu sesión: <strong>{userAnswer}</strong>
              </div>
            )}
          </div>
        )}

        {/* Text Area */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-700 dark:text-white/70 block">
            ¿Qué error notaste o qué cambio sugerís?
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ej: En la opción B falta aclarar que la pila no es infinita, o según lo que dijo el profesor en clase..."
            rows={3}
            className="w-full p-3.5 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/15 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-all resize-none"
          />
        </div>

        {/* Action Buttons: 2 Channels */}
        <div className="space-y-2.5">
          <div className="text-[11px] font-semibold text-slate-400 dark:text-white/40 uppercase tracking-wider">
            Canales de Envío
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Channel 1: GitHub Issue */}
            <a
              href={githubIssueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-semibold flex items-center justify-between transition-all group"
            >
              <div className="flex items-center space-x-2">
                <GitPullRequest className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Abrir Issue en GitHub</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-white/40" />
            </a>

            {/* Channel 2: WhatsApp / Copy */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center justify-between transition-all group"
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Enviar por WhatsApp</span>
              </div>
              <Send className="w-3.5 h-3.5 text-emerald-600/70 dark:text-emerald-400/60" />
            </a>
          </div>

          <button
            onClick={handleCopyReport}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-[11px] text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? '¡Reporte copiado al portapapeles!' : 'Copiar texto del reporte'}</span>
          </button>
        </div>

        {/* Open Source Collaboration Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-purple-50/60 to-pink-50/80 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-violet-950/40 border border-indigo-200/80 dark:border-blue-500/20 text-xs space-y-2">
          <div className="flex items-center space-x-2 text-indigo-700 dark:text-blue-300 font-bold">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-blue-400" />
            <span>¿Querés programar o sumar preguntas?</span>
          </div>
          <p className="text-slate-600 dark:text-white/60 text-[11px] leading-relaxed">
            El proyecto es <strong>100% Código Abierto</strong>. Si querés agregar preguntas de exámenes viejos o sumar funciones, hacé un Fork y enviá tu Pull Request.
          </p>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-[11px] text-indigo-600 hover:text-indigo-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold pt-1 hover:underline"
          >
            <span>Ver repositorio en GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
