import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ActiveSessionCard } from './components/ActiveSessionCard';
import { ModeSelection } from './components/ModeSelection';
import { MetricsOverview } from './components/MetricsOverview';
import { HelpModal } from './components/HelpModal';
import { ScopeSelectorModal } from './components/ScopeSelectorModal';
import type { ExamScope } from './components/ScopeSelectorModal';
import { BottomNav } from './components/BottomNav';
import type { NavTab } from './components/BottomNav';
import { LessonsTab } from './components/LessonsTab';
import { MetricsTab } from './components/MetricsTab';
import { SettingsTab } from './components/SettingsTab';
import { ExamRunner } from './components/ExamRunner';
import { StudyRunner } from './components/StudyRunner';
import type { ExamSession, LessonId, Question } from './types/question';
import { QUESTIONS_BANK } from './data/questions';
import { Storage } from './utils/storage';
import { ThemeManager, type Theme } from './utils/theme';
import { Clock, ArrowRight, Lightbulb, Keyboard } from 'lucide-react';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(ThemeManager.getTheme());
  const [activeSession, setActiveSession] = useState<ExamSession | null>(null);
  const [stats, setStats] = useState(Storage.getStats());
  const [view, setView] = useState<'dashboard' | 'exam' | 'study'>('dashboard');
  const [studyPool, setStudyPool] = useState<Question[]>([]);
  const [activeTab, setActiveTab] = useState<NavTab>('simulator');
  const [selectedLessonFilter, setSelectedLessonFilter] = useState<LessonId | undefined>(undefined);
  const [currentScope, setCurrentScope] = useState<ExamScope>('parcial-2');
  const [isScopeModalOpen, setIsScopeModalOpen] = useState(false);
  const [helpState, setHelpState] = useState<{ isOpen: boolean; mode: 'exam' | 'study' | null }>({
    isOpen: false,
    mode: null,
  });

  // Apply theme on mount and when changed
  useEffect(() => {
    ThemeManager.applyTheme(theme);
  }, [theme]);

  // Load state on mount
  useEffect(() => {
    const session = Storage.getActiveSession();
    if (session && !session.isCompleted) {
      setActiveSession(session);
    }
  }, []);

  const handleToggleTheme = () => {
    const next = ThemeManager.toggleTheme();
    setTheme(next);
  };

  const handleStartExam = () => {
    // Generate a balanced 20-question exam summing to 100 points
    const q2 = QUESTIONS_BANK.filter((q) => q.points === 2).sort(() => 0.5 - Math.random()).slice(0, 5);
    const q5 = QUESTIONS_BANK.filter((q) => q.points === 5).sort(() => 0.5 - Math.random()).slice(0, 10);
    const q8 = QUESTIONS_BANK.filter((q) => q.points === 8).sort(() => 0.5 - Math.random()).slice(0, 5);

    const examPool = [...q2, ...q5, ...q8].sort(() => 0.5 - Math.random());
    const newSession: ExamSession = {
      id: `exam-${Date.now()}`,
      mode: 'exam',
      currentQuestionIndex: 0,
      questionIds: examPool.map((q) => q.id),
      userAnswers: {},
      score: 0,
      timeRemainingSeconds: 45 * 60, // 45 minutes
      isCompleted: false,
      startedAt: new Date().toISOString(),
      lastUpdatedAt: new Date().toISOString(),
    };

    Storage.saveActiveSession(newSession);
    setActiveSession(newSession);
    setView('exam');
  };

  const handleStartStudy = (lessonFilter?: LessonId) => {
    let pool = QUESTIONS_BANK;
    if (lessonFilter) {
      pool = QUESTIONS_BANK.filter((q) => q.lessonId === lessonFilter);
    }
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setStudyPool(shuffled);
    setView('study');
  };

  const handleResumeSession = () => {
    if (activeSession) {
      setView('exam');
    }
  };

  const handleResetSession = () => {
    if (activeSession) {
      const reset: ExamSession = {
        ...activeSession,
        currentQuestionIndex: 0,
        userAnswers: {},
        score: 0,
        timeRemainingSeconds: 45 * 60,
        isCompleted: false,
        lastUpdatedAt: new Date().toISOString(),
      };
      Storage.saveActiveSession(reset);
      setActiveSession(reset);
      setView('exam');
    }
  };

  const handleUpdateSession = (updated: ExamSession) => {
    setActiveSession(updated);
    Storage.saveActiveSession(updated);
    if (updated.isCompleted) {
      setStats(Storage.getStats());
    }
  };

  const handleResetAllData = () => {
    localStorage.clear();
    setActiveSession(null);
    setStats(Storage.getStats());
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0D13] text-slate-800 dark:text-white flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-900 dark:selection:bg-blue-500/30 dark:selection:text-white relative overflow-x-hidden transition-colors duration-300">
      {/* Ambient Depth Background: Pastel blobs in Light Mode, Neon glows in Dark Mode */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dark mode neon glows */}
        <div className="hidden dark:block absolute -top-32 left-1/2 -translate-x-1/2 w-[340px] md:w-[600px] h-[340px] md:h-[600px] rounded-full bg-gradient-to-b from-[#0A84FF]/12 to-transparent blur-[110px]"></div>
        <div className="hidden dark:block absolute top-[420px] -right-24 w-[280px] md:w-[500px] h-[280px] md:h-[500px] rounded-full bg-gradient-to-bl from-[#30D158]/10 to-transparent blur-[90px]"></div>
        <div className="hidden dark:block absolute bottom-24 -left-20 w-[260px] md:w-[450px] h-[260px] md:h-[450px] rounded-full bg-gradient-to-tr from-[#5E5CE6]/10 to-transparent blur-[85px]"></div>

        {/* Light mode soothing pastel meshes */}
        <div className="dark:hidden absolute -top-36 left-1/2 -translate-x-1/2 w-[380px] md:w-[650px] h-[380px] md:h-[650px] rounded-full bg-gradient-to-b from-indigo-200/40 via-purple-100/30 to-transparent blur-[120px] animate-float-slow"></div>
        <div className="dark:hidden absolute top-[380px] -right-20 w-[300px] md:w-[520px] h-[300px] md:h-[520px] rounded-full bg-gradient-to-bl from-emerald-200/35 via-teal-100/25 to-transparent blur-[100px] animate-float-slow" style={{ animationDelay: '3s' }}></div>
        <div className="dark:hidden absolute bottom-24 -left-20 w-[280px] md:w-[480px] h-[280px] md:h-[480px] rounded-full bg-gradient-to-tr from-rose-200/30 via-pink-100/20 to-transparent blur-[95px] animate-float-slow" style={{ animationDelay: '6s' }}></div>
      </div>

      <Header
        currentScope={currentScope}
        activeTab={activeTab}
        theme={theme}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (view !== 'dashboard') setView('dashboard');
        }}
        onOpenScopeSelector={() => setIsScopeModalOpen(true)}
        onToggleTheme={handleToggleTheme}
      />

      <main className="flex-1 z-10 w-full py-4 md:py-8 px-4 md:px-8">
        {view === 'exam' && activeSession ? (
          <div className="max-w-2xl mx-auto">
            <ExamRunner
              session={activeSession}
              onUpdateSession={handleUpdateSession}
              onExit={() => {
                setView('dashboard');
                setStats(Storage.getStats());
              }}
            />
          </div>
        ) : view === 'study' ? (
          <div className="max-w-2xl mx-auto">
            <StudyRunner
              questions={studyPool}
              onExit={() => {
                setView('dashboard');
                setStats(Storage.getStats());
              }}
            />
          </div>
        ) : activeTab === 'lessons' ? (
          <div className="max-w-4xl mx-auto pb-24 md:pb-12">
            <LessonsTab onStartStudyLesson={handleStartStudy} />
          </div>
        ) : activeTab === 'metrics' ? (
          <div className="max-w-2xl mx-auto pb-24 md:pb-12">
            <MetricsTab stats={stats} />
          </div>
        ) : activeTab === 'settings' ? (
          <div className="max-w-xl mx-auto pb-24 md:pb-12">
            <SettingsTab
              onResetAllData={handleResetAllData}
              theme={theme}
              onToggleTheme={handleToggleTheme}
            />
          </div>
        ) : (
          /* Simulator Dashboard (Desktop-Responsive 2-column Layout) */
          <div className="max-w-5xl mx-auto pb-28 md:pb-12 animate-in fade-in">
            {/* Title & Scope bar */}
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-1">
                  Compiladores
                </h1>
                <p className="text-sm text-slate-500 dark:text-white/50 leading-snug">
                  {currentScope === 'parcial-2'
                    ? `2do Parcial Cátedra • Lecciones 5 a 11 • ${QUESTIONS_BANK.length} Preguntas • Simulador & FSRS`
                    : currentScope === 'recuperatorio-1'
                    ? 'Recuperatorio 1er Parcial • Lecciones 1 a 4 (En preparación)'
                    : 'Examen Final Integrador • Lecciones 1 a 11 (Próximamente)'}
                </p>
              </div>

              <div className="hidden md:flex items-center space-x-2">
                <span className="text-xs text-slate-500 dark:text-white/40">Instancia seleccionada:</span>
                <button
                  onClick={() => setIsScopeModalOpen(true)}
                  className="text-xs px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 dark:bg-blue-500/20 dark:text-blue-300 font-semibold border border-indigo-200 dark:border-blue-500/30 hover:bg-indigo-200/70 dark:hover:bg-blue-500/30 transition-all cursor-pointer shadow-xs"
                >
                  {currentScope === 'parcial-2' ? `2do Parcial (${QUESTIONS_BANK.length} reactivos)` : currentScope === 'recuperatorio-1' ? 'Recuperatorio' : 'Final'}
                </button>
              </div>
            </div>

            {/* Upcoming Scope Notice (If user selected recuperatorio or final) */}
            {currentScope !== 'parcial-2' && (
              <div className="mb-6 p-4 rounded-3xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 space-y-2 animate-in fade-in shadow-xs">
                <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 font-semibold text-xs">
                  <Clock className="w-4 h-4" />
                  <span>Módulo en Calibración</span>
                </div>
                <p className="text-xs text-amber-900/80 dark:text-amber-200/80 leading-relaxed">
                  Las preguntas del {currentScope === 'recuperatorio-1' ? '1er Parcial' : 'Final'} se están cargando con sus fuentes oficiales. Mientras tanto, podés seguir entrenando el 2do Parcial.
                </p>
                <button
                  onClick={() => setCurrentScope('parcial-2')}
                  className="text-xs font-semibold text-amber-800 dark:text-amber-300 flex items-center space-x-1 pt-1 hover:underline cursor-pointer"
                >
                  <span>Volver a entrenar 2do Parcial ({QUESTIONS_BANK.length} preguntas)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Responsive Grid: 2 Columns on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Left Column (Actions & Active Session) */}
              <div className="md:col-span-7 space-y-5">
                {/* Paused Session Card (Shows only if active) */}
                {activeSession && !activeSession.isCompleted && currentScope === 'parcial-2' && (
                  <ActiveSessionCard
                    session={activeSession}
                    onResume={handleResumeSession}
                    onReset={handleResetSession}
                  />
                )}

                {/* Mode Selection Cards */}
                <ModeSelection
                  onStartExam={handleStartExam}
                  onStartStudy={handleStartStudy}
                  onOpenHelp={(mode) => setHelpState({ isOpen: true, mode })}
                  selectedLessonFilter={selectedLessonFilter}
                  onSelectLessonFilter={setSelectedLessonFilter}
                />
              </div>

              {/* Right Column (Metrics & Quick Advice) */}
              <div className="md:col-span-5 space-y-5">
                {/* Preparation Metrics */}
                <MetricsOverview stats={stats} />

                {/* Desktop Study Tip Card */}
                <div className="hidden md:block p-5 rounded-3xl bg-white dark:bg-[#12141A] border border-indigo-100/80 dark:border-white/10 shadow-sm dark:shadow-none space-y-3 transition-colors duration-300">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-600 dark:text-blue-400">
                    <Lightbulb className="w-4 h-4" />
                    <span>Recomendación Pedagógica</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed">
                    Hacé 1 simulacro completo por día para medir el reloj (45 min) y usá el <strong>Modo Estudio FSRS</strong> para repasar los temas donde hayas fallado preguntas de 8 puntos.
                  </p>
                  <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center space-x-2 text-[11px] text-slate-400 dark:text-white/40">
                    <Keyboard className="w-3.5 h-3.5" />
                    <span>Compatible con teclado y atajos en PC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Scope Selector Modal */}
      <ScopeSelectorModal
        isOpen={isScopeModalOpen}
        currentScope={currentScope}
        onSelectScope={(scope) => {
          setCurrentScope(scope);
        }}
        onClose={() => setIsScopeModalOpen(false)}
      />

      {/* Help Modal with Frosted Glass Backdrop */}
      <HelpModal
        isOpen={helpState.isOpen}
        mode={helpState.mode}
        onClose={() => setHelpState({ isOpen: false, mode: null })}
        onConfirmStart={() => {
          if (helpState.mode === 'exam') handleStartExam();
          else if (helpState.mode === 'study') handleStartStudy(selectedLessonFilter);
        }}
      />

      {/* Mobile Bottom Navigation (Hidden on desktop) */}
      {view === 'dashboard' && (
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
};

export default App;
