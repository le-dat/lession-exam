export const FORM_QUESTION = Object.freeze({
  question: "question",
  options: "options",
  optionsSelect: "optionsSelect",
  correctAnswer: "correctAnswer",
  type: "type",
  difficulty: "difficulty",
  explanation: "explanation",

  grade: "grade",
  subject: "subject",
  level: "level",
} as const);


export const questionTypes = Object.freeze([
  { label: "Câu hỏi chọn đáp án", value: "multiple-choice" },
  { label: "Câu hỏi Đúng/Sai", value: "true/false" },
]);

export const TrueFalseTypes = Object.freeze([
  { label: "Sai", value: "false" },
  { label: "Đúng", value: "true" },
]);

export const difficultyOptions = Object.freeze([
  { label: "Biết", value: "easy" },
  { label: "Hiểu", value: "medium" },
  { label: "Vận dụng", value: "hard" },
]);

export const DIFFICULTY_OPTIONS = Object.freeze({
  easy: "Biết",
  medium: "Hiểu",
  hard: "Vận dụng",
});
