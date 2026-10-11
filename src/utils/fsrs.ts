import type { FSRSState, FSRSRating } from '../types/question';

// FSRS default parameters based on FSRS-v4 model
const DEFAULT_WEIGHTS = [
  0.4, 0.6, 2.4, 5.8, // Initial stability for Again, Hard, Good, Easy
  4.93, 0.94, 0.86, 0.01, // Difficulty params
  1.49, 0.14, 0.94, // Stability increase params
  2.18, 0.05, 0.34, 1.26, // Lapse params
  0.29, 2.61 // Review stability
];

export const FSRS = {
  createInitialCard(cardId: string): FSRSState {
    const now = new Date();
    return {
      cardId,
      due: now.toISOString(),
      stability: 1.0,
      difficulty: 5.0,
      elapsed_days: 0,
      scheduled_days: 0,
      reps: 0,
      lapses: 0,
      state: 0, // 0 = New
    };
  },

  scheduleNext(current: FSRSState, rating: FSRSRating): FSRSState {
    const now = new Date();
    const lastReview = current.last_review ? new Date(current.last_review) : now;
    const elapsedDays = Math.max(0, (now.getTime() - lastReview.getTime()) / (1000 * 3600 * 24));

    let nextDifficulty = current.difficulty;
    let nextStability = current.stability;
    let nextState = current.state;
    let nextReps = current.reps + 1;
    let nextLapses = current.lapses;

    // Difficulty update: D' = D - w[6] * (rating - 3)
    const deltaD = -DEFAULT_WEIGHTS[6] * (rating - 3);
    nextDifficulty = Math.min(10, Math.max(1, current.difficulty + deltaD));

    if (rating === 1) {
      // Again
      nextLapses += 1;
      nextStability = Math.max(0.1, DEFAULT_WEIGHTS[0]);
      nextState = 3; // Relearning
    } else if (current.reps === 0) {
      // First review
      const initS = [DEFAULT_WEIGHTS[0], DEFAULT_WEIGHTS[1], DEFAULT_WEIGHTS[2], DEFAULT_WEIGHTS[3]];
      nextStability = initS[rating - 1] || DEFAULT_WEIGHTS[2];
      nextState = rating === 4 ? 2 : 1;
    } else {
      // Subsequent review: S' = S * (1 + factor)
      const factor = Math.exp(DEFAULT_WEIGHTS[8]) * (11 - nextDifficulty) * Math.pow(current.stability, -DEFAULT_WEIGHTS[9]);
      if (rating === 2) {
        nextStability = current.stability * (1 + factor * 0.5);
      } else if (rating === 3) {
        nextStability = current.stability * (1 + factor);
      } else {
        nextStability = current.stability * (1 + factor * 1.5);
      }
      nextState = 2; // Review
    }

    // Anki-style interval steps for exam preparation (< 1m, 10m, 1d, 3d)
    let nextDueDate: Date;
    let scheduledDays: number;

    if (rating === 1) {
      // Again: 1 minute
      scheduledDays = 0;
      nextDueDate = new Date(now.getTime() + 1 * 60 * 1000);
    } else if (rating === 2) {
      // Hard: 10 minutes
      scheduledDays = 0;
      nextDueDate = new Date(now.getTime() + 10 * 60 * 1000);
    } else if (rating === 3) {
      // Good: 1 day (or scaled based on stability)
      scheduledDays = Math.max(1, Math.round(current.reps <= 1 ? 1 : nextStability * 0.7));
      nextDueDate = new Date(now.getTime() + scheduledDays * 24 * 3600 * 1000);
    } else {
      // Easy: 3 days (or scaled based on stability)
      scheduledDays = Math.max(3, Math.round(current.reps <= 1 ? 3 : nextStability * 1.2));
      nextDueDate = new Date(now.getTime() + scheduledDays * 24 * 3600 * 1000);
    }

    return {
      cardId: current.cardId,
      due: nextDueDate.toISOString(),
      stability: Number(nextStability.toFixed(2)),
      difficulty: Number(nextDifficulty.toFixed(2)),
      elapsed_days: Number(elapsedDays.toFixed(1)),
      scheduled_days: scheduledDays,
      reps: nextReps,
      lapses: nextLapses,
      state: nextState as 0 | 1 | 2 | 3,
      last_review: now.toISOString(),
    };
  },

  isDue(card: FSRSState): boolean {
    const dueTime = new Date(card.due).getTime();
    return Date.now() >= dueTime;
  }
};
