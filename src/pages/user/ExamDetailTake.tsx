import { useState } from "react";
import QuestionCard from "../../components/exam/QuestionCard";
import QuestionOverview from "../../components/exam/QuestionOverview";
import TimerBar from "../../components/exam/TimerBar";
import { examQuestions } from "../../lib/data/examQuestions";

export default function ExamDetailTake() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(examQuestions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds

  const handleAnswerSelect = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, examQuestions.length - 1));
    setShowResult(false);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    setShowResult(false);
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestion(index);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TimerBar
        timeLeft={timeLeft}
        currentQuestion={currentQuestion}
        totalQuestions={examQuestions.length}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <QuestionCard
              question={examQuestions[currentQuestion]}
              currentAnswer={answers[currentQuestion]}
              showResult={showResult}
              onAnswerSelect={handleAnswerSelect}
              onNext={handleNext}
              onPrevious={handlePrevious}
              isFirst={currentQuestion === 0}
              isLast={currentQuestion === examQuestions.length - 1}
            />
          </div>

          <div className="lg:col-span-1">
            <QuestionOverview
              questions={examQuestions}
              answers={answers}
              currentQuestion={currentQuestion}
              onQuestionSelect={handleJumpToQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
