
// This file now serves as the main export point for all quiz data
import { QuizQuestion } from './questions/types';
import { saujQuestions } from './questions/saujQuestions';
import { justiceQuestions } from './questions/justiceQuestions';
import { metiersQuestions } from './questions/metiersQuestions';
import { histoireQuestions } from './questions/histoireQuestions';
import { harcelementQuestions } from './questions/harcelementQuestions';
import { organizationQuestions } from './questions/organizationQuestions';
import { badges } from './badges';
import { avatars } from './avatars';

// Combine all question categories
export const quizQuestions: QuizQuestion[] = [
  ...saujQuestions,
  ...justiceQuestions,
  ...metiersQuestions,
  ...histoireQuestions,
  ...harcelementQuestions,
  ...organizationQuestions
];

// Re-export everything for backward compatibility
export type { QuizQuestion } from './questions/types';
export { badges } from './badges';
export { avatars } from './avatars';
