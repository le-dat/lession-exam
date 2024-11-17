export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
}

export interface UserProgress {
  userId: string;
  courseId: number;
  lessonId: number;
  completed: boolean;
  score?: number;
  lastAccessed: Date;
}