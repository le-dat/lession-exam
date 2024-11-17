export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  type: 'multiple-choice' | 'true-false' | 'essay';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Exam {
  id: number;
  title: string;
  description: string;
  duration: number;
  totalQuestions: number;
  passingScore: number;
  questions: Question[];
  attempts: number;
}