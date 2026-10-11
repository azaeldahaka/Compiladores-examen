import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ActiveSessionCard } from './components/ActiveSessionCard';
import { ModeSelection } from './components/ModeSelection';
import { MetricsOverview } from './components/MetricsOverview';
import { HelpModal } from './components/HelpModal';
import { BottomNav } from './components/BottomNav';
import type { NavTab } from './components/BottomNav';
import { ExamRunner } from './components/ExamRunner';
import { StudyRunner } from './components/StudyRunner';
import type { ExamSession, LessonId, Question } from './types/question';
import { QUESTIONS_BANK } from './data/questions';
import { Storage } from './utils/storage';

export const App: React.FC = () => {
  const [activeSession, setActiveSession] = useState<ExamSession | null>(null);
  const [stats, setStats] = useState(Storage.getStats());
  const [view, setView] = useState<'dashboard' | 'exam' | 'study'>('dashboard');
  const [studyPool, setStudyPool] = useState<Question[]>([]);
  const [activeTab, setActiveTab] = useState<NavTab>('simulator');
  const [selectedLessonFilter, setSelectedLessonFilter] = useState<LessonId | undefined>(undefined);
  const [helpState, setHelpState] = useState<{ isOpen: boolean; mode: 'exam' | 'study' | null }>({
    isOpen: false,
    mode: null,
  });

  // Load state on mount
  useEffect(() => {
    const session = Storage.getActiveSession();
    if (session && !session.isCompleted) {
      setActiveSession(session);
    }
  }, []);

  const handleStartExam = () => {
    // Generate a balanced 20-question exam summing to 100 points
    // 5 questions of 2 pts (= 10 pts)
    // 10 questions of 5 pts (= 50 pts)
    // 5 questions of 8 pts (= 40 pts)
    // Total: 20 questions, 100 pts
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
    // Shuffle
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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">
      {/* Apple Dynamic Depth Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-gradient-to-b from-[#0A84FF]/15 to-transparent blur-[110px]"></div>
        <div className="absolute top-[420px] -right-24 w-[280px] h-[280px] rounded-full bg-gradient-to-bl from-[#30D158]/10 to-transparent blur-[90px]"></div>
        <div className="absolute bottom-24 -left-20 w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-[#5E5CE6]/10 to-transparent blur-[85px]"></div>
      </div>

      <Header />

      <main className="flex-1 z-10 w-full">
        {view === 'exam' && activeSession ? (
          <ExamRunner
            session={activeSession}
            onUpdateSession={handleUpdateSession}
            onExit={() => {
              setView('dashboard');
              setStats(Storage.getStats());
            }}
          />
        ) : view === 'study' ? (
          <StudyRunner
            questions={studyPool}
            onExit={() => {
              setView('dashboard');
              setStats(Storage.getStats());
            }}
          />
        ) : (
          /* Dashboard Home View */
          <div className="max-w-md mx-auto p-4 space-y-6 pb-28 animate-in fade-in">
            {/* Title & Banner */}
            <div className="pt-2">
              <div className="text-2xl font-extrabold tracking-tight text-white mb-1">
                Compiladores
              </div>
              <p className="text-sm text-white/50 leading-snug">
                2do Parcial Cátedra • Lecciones 5 a 11 • Simulador & FSRS
              </p>
            </div>

            {/* Paused Session Card (Shows only if active) */}
            {activeSession && !activeSession.isCompleted && (
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

            {/* Preparation Metrics */}
            <MetricsOverview stats={stats} />
          </div>
        )}
      </main>

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

      {/* Mobile Bottom Navigation */}
      {view === 'dashboard' && (
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
};

export default App;
