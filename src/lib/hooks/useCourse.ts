import { useState, useEffect } from 'react';
import { Course } from '../types/course';
import { getCourseById } from '../api/courses';

export function useCourse(id: number) {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const data = await getCourseById(id);
        setCourse(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourse();
  }, [id]);

  return { course, loading, error };
}