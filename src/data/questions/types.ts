
// Define the types used across all question files
export interface QuizQuestion {
  id: number;
  category: 'SAUJ' | 'Justice' | 'Métiers';
  question: string;
  options: {
    key: string;
    text: string;
  }[];
  correct: string;
  explanation: string;
  source: string;
}
