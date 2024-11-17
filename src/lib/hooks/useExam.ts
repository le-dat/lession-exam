import { useState, useEffect } from 'react';
import { Exam } from '../types/exam';
import { getExamById } from '../api/exams';

export function useExam(id: number) {
  const [exam, setExam] = useState<Exam | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchExam() {
      try {
        const data = await getExamById(id);
        setExam(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchExam();
  }, [id]);

  return { exam, loading, error };
}