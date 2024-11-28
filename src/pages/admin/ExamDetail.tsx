import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Clock, Target, FileText, Plus, Edit, Trash2 } from "lucide-react";
import QuestionModal from "../../components/modals/QuestionModal";
import DeleteConfirmModal from "../../components/modals/DeleteConfirmModal";
import { motion } from "framer-motion";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  type: "Multiple Choice" | "True/False";
  difficulty: "Easy" | "Medium" | "Hard";
  explanation?: string;
}

export default function ExamDetail() {
  const { id } = useParams();
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  const exam = {
    id: 1,
    title: "Kiểm tra Kiến thức Cơ bản về React",
    description: "Kiểm tra kiến thức của bạn về các khái niệm cơ bản của React",
    duration: "45 phút",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "React là gì?",
        options: [
          "Một thư viện JavaScript để xây dựng giao diện người dùng",
          "Một ngôn ngữ lập trình",
          "Một hệ quản trị cơ sở dữ liệu",
          "Một hệ điều hành",
        ],
        correctAnswer: 0,
        type: "Multiple Choice",
        difficulty: "Easy",
        explanation:
          "React là một thư viện JavaScript được phát triển bởi Facebook để xây dựng giao diện người dùng.",
      },
      {
        id: 2,
        question: "React có phải là một framework không?",
        options: ["Đúng", "Sai"],
        correctAnswer: 1,
        type: "True/False",
        difficulty: "Dễ",
        explanation:
          "React là một thư viện, không phải là một framework. Nó tập trung vào các thành phần giao diện người dùng.",
      },
    ] as Question[],
  };

  const handleEditQuestion = (question: Question) => {
    setSelectedQuestion(question);
    setIsQuestionModalOpen(true);
  };

  const handleDeleteQuestion = (question: Question) => {
    setSelectedQuestion(question);
    setIsDeleteModalOpen(true);
  };

  const handleQuestionSubmit = (questionData: Partial<Question>) => {
    if (selectedQuestion) {
      console.log("Cập nhật câu hỏi:", questionData);
    } else {
      console.log("Thêm câu hỏi:", questionData);
    }
    setIsQuestionModalOpen(false);
    setSelectedQuestion(null);
  };

  const handleConfirmDelete = () => {
    if (selectedQuestion) {
      console.log("Xóa câu hỏi:", selectedQuestion.id);
    }
    setIsDeleteModalOpen(false);
    setSelectedQuestion(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{exam.title}</h1>
                <p className="text-gray-600 mb-6">{exam.description}</p>
              </div>
              <button
                onClick={() => setIsQuestionModalOpen(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
                Add Question
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <span>{exam.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-gray-400" />
                <span>Đúng: {exam.passingScore}%</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-400" />
                <span>{exam.questions.length} câu hỏi</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {exam.questions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold">Câu {index + 1}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditQuestion(question)}
                      className="p-2 text-blue-600 hover:text-blue-900"
                      title="Edit Question"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteQuestion(question)}
                      className="p-2 text-red-600 hover:text-red-900"
                      title="Delete Question"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-800 mb-4">{question.question}</p>

                <div className="space-y-2 mb-4">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`p-3 rounded-lg ${
                        optionIndex === question.correctAnswer
                          ? "bg-green-50 border border-green-200"
                          : "bg-gray-50 border border-gray-200"
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span
                    className={`px-2 py-1 rounded ${
                      question.difficulty === "Easy"
                        ? "bg-green-100 text-green-800"
                        : question.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {question.difficulty}
                  </span>
                  <span>{question.type}</span>
                </div>

                {question.explanation && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">{question.explanation}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <h2 className="text-xl font-semibold mb-4">Tóm tắt Câu hỏi</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Tổng số Câu hỏi</span>
                  <span>{exam.questions.length}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Dễ</span>
                    <span>{exam.questions.filter((q) => q.difficulty === "Easy").length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Trung bình</span>
                    <span>
                      {exam.questions.filter((q) => q.difficulty === "Medium").length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Khó</span>
                    <span>{exam.questions.filter((q) => q.difficulty === "Hard").length}</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Loại Câu hỏi</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Trắc nghiệm</span>
                    <span>{exam.questions.filter((q) => q.type === "Multiple Choice").length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Đúng/Sai</span>
                    <span>{exam.questions.filter((q) => q.type === "True/False").length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuestionModal
        isOpen={isQuestionModalOpen}
        onClose={() => {
          setIsQuestionModalOpen(false);
          setSelectedQuestion(null);
        }}
        question={selectedQuestion}
        onSubmit={handleQuestionSubmit}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedQuestion(null);
        }}
        onConfirm={handleConfirmDelete}
        title="Delete Question"
        message="Are you sure you want to delete this question? This action cannot be undone."
      />
    </div>
  );
}
