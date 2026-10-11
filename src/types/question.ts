export type DifficultyPoints = 2 | 5 | 8;

export type LessonId = 'L05' | 'L06' | 'L07' | 'L08' | 'L09' | 'L10' | 'L11';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  explanation: string;
  isCorrect: boolean;
}

export interface Question {
  id: string; // e.g. 'L05-Q01'
  lessonId: LessonId;
  lessonTitle: string;
  topic: string;
  points: DifficultyPoints;
  questionText: string;
  codeSnippet?: string;
  options: QuestionOption[];
  theorySummary: string; // Golden rule / condensed theory snippet
  sourceCatedra: string; // e.g. "Diapositiva LL(1), Slide 14"
  sourceBook: string; // e.g. "Aho et al. (Dragon Book 2da Ed) Cap. 4.4"
  trapAnalysis?: string; // Common trap/misconception explained
}

export interface FSRSState {
  cardId: string;
  due: string; // ISO date string
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  reps: number;
  lapses: number;
  state: 0 | 1 | 2 | 3; // 0=New, 1=Learning, 2=Review, 3=Relearning
  last_review?: string;
}

export type FSRSRating = 1 | 2 | 3 | 4; // 1=Again, 2=Hard, 3=Good, 4=Easy

export interface ExamSession {
  id: string;
  mode: 'exam' | 'study';
  lessonFilter?: LessonId;
  currentQuestionIndex: number;
  questionIds: string[];
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  score: number;
  timeRemainingSeconds: number; // For exam mode (e.g. 45 min)
  isCompleted: boolean;
  startedAt: string;
  lastUpdatedAt: string;
}
