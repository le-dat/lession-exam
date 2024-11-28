import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Clock, FileText, Award, AlertCircle, Play, Menu } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import ExamInfoCard from "../../components/exam/ExamInfoCard";
import ExamRules from "../../components/exam/ExamRules";
import SampleQuestions from "../../components/exam/SampleQuestions";
import MobileSidebar from "../../components/layout/MobileSidebar";

export default function ExamDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dữ liệu giả - thay thế bằng API call
  const exam = {
    id: Number(id),
    title: "Kiểm tra Kiến thức Cơ bản về React",
    description: "Kiểm tra kiến thức của bạn về các khái niệm cơ bản và cốt lõi của React",
    duration: "45 phút",
    questions: 20,
    difficulty: "Người mới bắt đầu",
    attempts: 2,
    bestScore: 85,
    passingScore: 70,
    sampleQuestions: [
      {
        id: 1,
        question: "React là gì?",
        options: [
          "Một thư viện JavaScript để xây dựng giao diện người dùng",
          "Một ngôn ngữ lập trình",
          "Một hệ quản trị cơ sở dữ liệu",
          "Một hệ điều hành",
        ],
      },
      {
        id: 2,
        question: "Hook nào được sử dụng cho các tác dụng phụ trong React?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
      },
    ],
  };

  const handleStartExam = () => {
    navigate(`/exams/${id}/take`);
  };

  return (
    <>
      <SEO
        title={`${exam.title} - Xem Trước Bài Kiểm Tra`}
        description={`Xem trước và chuẩn bị cho ${exam.title}. Xem chi tiết bài kiểm tra và các câu hỏi mẫu trước khi bắt đầu.`}
        keywords="xem trước bài kiểm tra, bài kiểm tra thực hành, đánh giá trực tuyến, chuẩn bị bài kiểm tra"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Nút Menu Di động */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Menu className="w-5 h-5" />
          <span>Hiển thị Thông tin Bài Kiểm Tra</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Nội dung Chính */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                {exam.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{exam.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{exam.duration}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{exam.questions} câu hỏi</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{exam.passingScore}% đã qua</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{exam.attempts} lần thử còn lại</span>
                </div>
              </div>
            </motion.div>
            <ExamRules />
            <SampleQuestions questions={exam.sampleQuestions} />
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <ExamInfoCard exam={exam} onStartExam={handleStartExam} />
          </div>

          {/* Mobile Sidebar */}
          <MobileSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            title="Exam Information"
          >
            <div className="p-4">
              <ExamInfoCard exam={exam} onStartExam={handleStartExam} />
            </div>
          </MobileSidebar>
        </div>
      </div>
    </>
  );
}
