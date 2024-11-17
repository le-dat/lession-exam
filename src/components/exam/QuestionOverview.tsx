import React from 'react';
import { AlertCircle } from 'lucide-react';

interface QuestionOverviewProps {
  questions: Array<{ correctAnswer: number }>;
  answers: (number | null)[];
  currentQuestion: number;
  onQuestionSelect: (index: number) => void;
}

export default function QuestionOverview({
  questions,
  answers,
  currentQuestion,
  onQuestionSelect,
}: QuestionOverviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Question Overview</h3>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => onQuestionSelect(index)}
            className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${
              currentQuestion === index
                ? 'bg-blue-600 text-white'
                : answers[index] !== null
                ? answers[index] === questions[index].correctAnswer
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 rounded bg-gray-100"></div>
          <span>Not answered</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 rounded bg-blue-600"></div>
          <span>Current question</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 rounded bg-green-100"></div>
          <span>Correct answer</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 rounded bg-red-100"></div>
          <span>Incorrect answer</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center gap-2 text-blue-800">
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium">Exam Progress</span>
        </div>
        <div className="mt-2">
          <div className="text-sm text-gray-600">
            {answers.filter(a => a !== null).length} of {questions.length} questions answered
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 rounded-full h-2"
              style={{
                width: `${(answers.filter(a => a !== null).length / questions.length) * 100}%`
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}