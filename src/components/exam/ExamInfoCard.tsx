import React from 'react';
import { Play, Award } from 'lucide-react';

interface ExamInfoCardProps {
  exam: {
    bestScore?: number | null;
    attempts: number;
    passingScore: number;
  };
  onStartExam: () => void;
}

export default function ExamInfoCard({ exam, onStartExam }: ExamInfoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:sticky lg:top-24">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Exam Summary</h2>

      {exam.bestScore && (
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-1 sm:gap-2 mb-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            <span className="font-medium text-sm sm:text-base">Your Best Score</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-2">
            {exam.bestScore}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
            <div
              className="bg-yellow-500 rounded-full h-1.5 sm:h-2 transition-all duration-500"
              style={{ width: `${exam.bestScore}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        <div className="flex justify-between text-sm sm:text-base">
          <span className="text-gray-600">Attempts Remaining</span>
          <span className="font-medium">{exam.attempts}</span>
        </div>
        <div className="flex justify-between text-sm sm:text-base">
          <span className="text-gray-600">Passing Score</span>
          <span className="font-medium">{exam.passingScore}%</span>
        </div>
      </div>

      <button
        onClick={onStartExam}
        className="w-full flex items-center justify-center gap-1 sm:gap-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
      >
        <Play className="w-4 h-4 sm:w-5 sm:h-5" />
        Start Exam Now
      </button>

      <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4">
        Make sure you've reviewed all the exam rules before starting
      </p>
    </div>
  );
}