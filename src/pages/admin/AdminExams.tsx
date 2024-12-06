import React, { useEffect, useState } from "react";
import { FileText, Clock, Award, Play, Edit, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import ExamModal from "../../components/modals/ExamModal";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  type: "Multiple Choice" | "True/False";
  difficulty: "Easy" | "Medium" | "Hard";
  explanation?: string;
}

export default function Exams() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);
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
          difficulty: "Biết",
          explanation:
            "React là một thư viện, không phải là một framework. Nó tập trung vào các thành phần giao diện người dùng.",
        },
      ] as Question[],
    },
  ]);

  const handleExamClick = (examId: number) => {
    navigate(`/admin/exams/${examId}`);
  };

  useEffect(() => {
    const storedExams = localStorage.getItem("exams");
    if (storedExams) {
      setExams(JSON.parse(storedExams));
    } else {
      localStorage.setItem("exams", JSON.stringify(exams));
    }
  }, []);

  const handleAddExam = () => {
    const newExam = {
      id: exams.length + 1,
      title: "Bài Kiểm tra " + (exams.length + 1),
      description: "Đánh giá kiến thức",
      duration: "45 phút",
      difficulty: "Người mới bắt đầu",
      attempts: 2,
      bestScore: 0,
      questions: [],
    };
    setExams([...exams, newExam]);
    localStorage.setItem("exams", JSON.stringify([...exams, newExam]));
  };

  const handleDeleteExam = (examId: number) => {
    const updatedExams = exams.filter((exam) => exam.id !== examId);
    setExams(updatedExams);
    localStorage.setItem("exams", JSON.stringify(updatedExams));
  };

  const handleEditCourse = async (data: any) => {
    const updatedExams = exams.map((e) => (e.id === data.id ? data : e));
    setExams(updatedExams);
    localStorage.setItem("exams", JSON.stringify(updatedExams));
  };

  const handleOpenModalEditCourse = (exam: any) => {
    setSelectedExam(exam);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Các Bài Kiểm tra Có sẵn - Nền tảng Học tập"
        description="Thực hiện các bài kiểm tra và đánh giá để đánh giá kiến thức của bạn"
        keywords="bài kiểm tra trực tuyến, bài kiểm tra thực hành, đánh giá, đánh giá học tập"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            Các Bài Kiểm tra Có sẵn
          </h1>
          <button
            onClick={handleAddExam}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-5 h-5" />
            Thêm bài kiểm tra
          </button>
        </div>

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
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenModalEditCourse(exam);
                      }}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteExam(exam?.id);
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
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

                <div className="flex items-center justify-between">
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

      <ExamModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedExam(null);
        }}
        exam={selectedExam!}
        onSubmit={handleEditCourse}
      />
    </>
  );
}
