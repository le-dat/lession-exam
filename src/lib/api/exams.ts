import { Exam, Question } from '../types/exam';

// Mock API functions - replace with real API calls
export async function getExams(): Promise<Exam[]> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        // Mock data
      ]);
    }, 500);
  });
}

export async function getExamById(id: number): Promise<Exam> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        // Mock data
      } as Exam);
    }, 500);
  });
}

export async function createExam(examData: Partial<Exam>): Promise<Exam> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random(),
        ...examData,
      } as Exam);
    }, 500);
  });
}

export async function updateExam(id: number, examData: Partial<Exam>): Promise<Exam> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        ...examData,
      } as Exam);
    }, 500);
  });
}

export async function deleteExam(id: number): Promise<void> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
}