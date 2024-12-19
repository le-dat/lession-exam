import React, { useEffect, useState } from "react";
import { FileText, Clock, Award, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  type: "multiple-choice" | "true/false";
  difficulty: "easy" | "medium" | "hard";
  explanation?: string;
}

export default function Exams() {
  const navigate = useNavigate();
  const [exams, setExams] = useState([
    {
      id: 1,
      title: "Khái niệm Trí tuệ nhân tạo (AI)",
      description: "AI là khả năng máy tính thực hiện các công việc trí tuệ như con người.",
      duration: "45 phút",
      difficulty: "Người mới bắt đầu",
      attempts: 2,
      bestScore: 85,
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
          type: "multiple-choice",
          difficulty: "easy",
          explanation:
            "React là một thư viện JavaScript được phát triển bởi Facebook để xây dựng giao diện người dùng.",
        },
        {
          id: 2,
          question: "React có phải là một framework không?",
          options: ["Đúng", "Sai"],
          correctAnswer: 1,
          type: "true/false",
          difficulty: "Biết",
          explanation:
            "React là một thư viện, không phải là một framework. Nó tập trung vào các thành phần giao diện người dùng.",
        },
      ] as Question[],
    },
  ]);

  useEffect(() => {
    const storedExams = localStorage.getItem("exams");
    if (storedExams) {
      setExams(JSON.parse(storedExams));
    }
  }, []);

  const handleExamClick = (examId: number) => {
    navigate(`/exams/${examId}`);
  };

  return (
    <>
      <SEO
        title="Các Bài Kiểm tra Có sẵn - Nền tảng Học tập"
        description="Thực hiện các bài kiểm tra và đánh giá để đánh giá kiến thức của bạn"
        keywords="bài kiểm tra trực tuyến, bài kiểm tra thực hành, đánh giá, đánh giá học tập"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
          Các Bài Kiểm tra Có sẵn
        </h1>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exams.map((exam, index) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleExamClick(exam.id)}
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      exam.difficulty === "Người mới bắt đầu"
                        ? "bg-green-100 text-green-800"
                        : exam.difficulty === "Trung cấp"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {exam.difficulty}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-semibold mb-2">{exam.title}</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  {exam.description}
                </p>

                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{exam.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{exam.questions?.length} câu hỏi</span>
                  </div>
                </div>

                {exam.bestScore && (
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-1 sm:gap-2 mb-1">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                      <span className="text-xs sm:text-sm text-gray-600">
                        Điểm cao nhất: {exam.bestScore}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div
                        className="bg-yellow-500 rounded-full h-1.5 sm:h-2"
                        style={{ width: `${exam.bestScore}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-gray-500">
                    {exam.attempts} {exam.attempts === 1 ? "lần thử" : "lần thử"} còn lại
                  </span>
                  <div className="flex items-center gap-1 sm:gap-2 text-blue-600 text-sm sm:text-base">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Xem Chi tiết</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
