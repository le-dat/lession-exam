export interface Lesson {
  id: number;
  title: string;
  content: string;
  duration: string;
  status: 'published' | 'draft';
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  students: number;
  progress: number;
  lessons: Lesson[];
}

export interface CourseStats {
  completionRate: number;
  engagement: 'Low' | 'Medium' | 'High';
  totalStudents: number;
  averageScore: number;
}