import React from 'react';
import { Terminal, ChevronDown } from 'lucide-react';
import type { ExamScope } from './ScopeSelectorModal';

interface HeaderProps {
  currentScope: ExamScope;
  onOpenScopeSelector: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScope, onOpenScopeSelector }) => {
  const getScopeLabel = () => {
    switch (currentScope) {
      case 'recuperatorio-1':
        return '1er Parcial (L1-4)';
      case 'final':
        return 'Final (L1-11)';
      case 'parcial-2':
      default:
        return '2do Parcial (L5-11)';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-black/80 border-b border-white/10 px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Logo and title */}
        <div className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">Compiladores</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono font-medium">2026</span>
            </div>
            <p className="text-[11px] text-white/50 leading-tight">UCASAL • Informática</p>
          </div>
        </div>

        {/* Scope selector pill button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenScopeSelector}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-xs font-medium text-white/90 active:scale-95 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span className="text-[11px] font-semibold">{getScopeLabel()}</span>
            <ChevronDown className="w-3.5 h-3.5 text-white/50" />
          </button>
        </div>
      </div>
    </header>
  );
};
