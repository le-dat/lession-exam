import { ICommonMongodb } from "./common-type";

export interface IOptionSelectSchema {
  label: string;
  value: string;
}

export interface IQuestion extends ICommonMongodb {
  question: string;
  options?: string[];
  optionsSelect?: IOptionSelectSchema[];
  type: "multiple-choice" | "true/false";
  correctAnswer: number;
  difficulty: "easy" | "medium" | "hard";
  explanation?: string;
  grade: string;
  subject: string;
  level: string;
}
