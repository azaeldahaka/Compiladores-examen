import type { ExamSession, FSRSState } from '../types/question';

const STORAGE_KEYS = {
  ACTIVE_SESSION: 'compiladores_active_session',
  FSRS_CARDS: 'compiladores_fsrs_cards',
  COMPLETED_STATS: 'compiladores_completed_stats',
  USER_SETTINGS: 'compiladores_user_settings',
};

export interface CompletedStats {
  totalExamsCompleted: number;
  totalStudyReviews: number;
  bestScore: number;
  lastScore: number;
  streakDays: number;
  lastStudyDate: string;
}

export const Storage = {
  getActiveSession(): ExamSession | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveActiveSession(session: ExamSession | null): void {
    try {
      if (session) {
        localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(session));
      } else {
        localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
      }
    } catch (e) {
      console.error('Error saving active session', e);
    }
  },

  getFSRSCards(): Record<string, FSRSState> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FSRS_CARDS);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  saveFSRSCard(card: FSRSState): void {
    try {
      const cards = this.getFSRSCards();
      cards[card.cardId] = card;
      localStorage.setItem(STORAGE_KEYS.FSRS_CARDS, JSON.stringify(cards));
    } catch (e) {
      console.error('Error saving FSRS card', e);
    }
  },

  getStats(): CompletedStats {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.COMPLETED_STATS);
      if (data) return JSON.parse(data);
    } catch {}
    return {
      totalExamsCompleted: 0,
      totalStudyReviews: 0,
      bestScore: 0,
      lastScore: 0,
      streakDays: 1,
      lastStudyDate: new Date().toISOString().split('T')[0],
    };
  },

  recordExamCompletion(score: number): void {
    const stats = this.getStats();
    stats.totalExamsCompleted += 1;
    stats.lastScore = score;
    if (score > stats.bestScore) {
      stats.bestScore = score;
    }

    const today = new Date().toISOString().split('T')[0];
    if (stats.lastStudyDate !== today) {
      stats.streakDays += 1;
      stats.lastStudyDate = today;
    }

    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED_STATS, JSON.stringify(stats));
    } catch (e) {
      console.error('Error saving stats', e);
    }
  },

  recordStudyReview(): void {
    const stats = this.getStats();
    stats.totalStudyReviews += 1;
    const today = new Date().toISOString().split('T')[0];
    if (stats.lastStudyDate !== today) {
      stats.streakDays += 1;
      stats.lastStudyDate = today;
    }
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED_STATS, JSON.stringify(stats));
    } catch (e) {
      console.error('Error recording study review', e);
    }
  }
};
