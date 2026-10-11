import React from 'react';
import { PlaySquare, BookOpen, BarChart3, Settings } from 'lucide-react';

export type NavTab = 'simulator' | 'lessons' | 'metrics' | 'settings';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'simulator', label: 'Simulador', icon: PlaySquare },
    { id: 'lessons', label: 'Lecciones', icon: BookOpen },
    { id: 'metrics', label: 'Métricas', icon: BarChart3 },
    { id: 'settings', label: 'Ajustes', icon: Settings },
  ] as const;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C0C0E]/90 backdrop-blur-2xl border-t border-white/10 px-4 py-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer ${
                isActive ? 'text-blue-400' : 'text-white/40 hover:text-white/70'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              <span className="text-[10px] font-medium tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
