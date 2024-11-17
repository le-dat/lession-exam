import { Course, Lesson } from '../types/course';

// Mock API functions - replace with real API calls
export async function getCourses(): Promise<Course[]> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        // Mock data
      ]);
    }, 500);
  });
}

export async function getCourseById(id: number): Promise<Course> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        // Mock data
      } as Course);
    }, 500);
  });
}

export async function createCourse(courseData: Partial<Course>): Promise<Course> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random(),
        ...courseData,
      } as Course);
    }, 500);
  });
}

export async function updateCourse(id: number, courseData: Partial<Course>): Promise<Course> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        ...courseData,
      } as Course);
    }, 500);
  });
}

export async function deleteCourse(id: number): Promise<void> {
  // Simulated API call
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
}