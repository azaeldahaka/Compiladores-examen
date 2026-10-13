import React from 'react';
import { Terminal, ChevronDown, PlaySquare, BookOpen, BarChart3, Settings, Sun, Moon } from 'lucide-react';
import type { ExamScope } from './ScopeSelectorModal';
import type { NavTab } from './BottomNav';
import type { Theme } from '../utils/theme';

interface HeaderProps {
  currentScope: ExamScope;
  activeTab: NavTab;
  theme: Theme;
  onTabChange: (tab: NavTab) => void;
  onOpenScopeSelector: () => void;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScope,
  activeTab,
  theme,
  onTabChange,
  onOpenScopeSelector,
  onToggleTheme,
}) => {
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

  const navItems = [
    { id: 'simulator', label: 'Simulador', icon: PlaySquare },
    { id: 'lessons', label: 'Lecciones', icon: BookOpen },
    { id: 'metrics', label: 'Métricas', icon: BarChart3 },
    { id: 'settings', label: 'Ajustes', icon: Settings },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-white/85 dark:bg-black/85 border-b border-indigo-100/80 dark:border-white/10 px-4 md:px-8 py-3 transition-colors duration-300 shadow-xs dark:shadow-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo and title */}
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onTabChange('simulator')}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-violet-500 dark:from-blue-600 dark:via-indigo-600 dark:to-violet-500 flex items-center justify-center shadow-md shadow-indigo-500/25 dark:shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-bold tracking-wider text-indigo-700 dark:text-blue-400 uppercase">Compiladores</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-blue-500/20 dark:text-blue-300 font-mono font-medium">2026</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-white/50 leading-tight">UCASAL • Informática</p>
          </div>
        </div>

        {/* Desktop Tab Navigation (Hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-100/80 dark:bg-white/5 p-1 rounded-2xl border border-slate-200/60 dark:border-white/10 transition-colors duration-300">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center space-x-1.5 py-1.5 px-3.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 dark:bg-blue-600 text-white shadow-md shadow-indigo-500/25 dark:shadow-blue-600/30 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right action group: Theme toggle + Scope selector */}
        <div className="flex items-center space-x-2">
          {/* Theme Switcher Button */}
          <button
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Cambiar a modo claro (Pastel)' : 'Cambiar a modo oscuro'}
            aria-label="Alternar tema claro y oscuro"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 text-slate-700 dark:text-amber-300 transition-all duration-200 active:scale-90 cursor-pointer shadow-xs"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-700 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Scope selector pill button */}
          <button
            onClick={onOpenScopeSelector}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 dark:bg-white/10 dark:hover:bg-white/15 border border-slate-200 dark:border-white/15 transition-all duration-200 text-xs font-medium text-slate-800 dark:text-white/90 active:scale-95 cursor-pointer shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-blue-400"></span>
            <span className="text-[11px] font-semibold">{getScopeLabel()}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-white/50" />
          </button>
        </div>
      </div>
    </header>
  );
};
