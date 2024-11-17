import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, FileText, Award, AlertCircle, Play, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import ExamInfoCard from '../../components/exam/ExamInfoCard';
import ExamRules from '../../components/exam/ExamRules';
import SampleQuestions from '../../components/exam/SampleQuestions';
import MobileSidebar from '../../components/layout/MobileSidebar';

export default function ExamDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock data - replace with API call
  const exam = {
    id: Number(id),
    title: 'React Fundamentals Test',
    description: 'Test your knowledge of React basics and core concepts',
    duration: '45 mins',
    questions: 20,
    difficulty: 'Beginner',
    attempts: 2,
    bestScore: 85,
    passingScore: 70,
    sampleQuestions: [
      {
        id: 1,
        question: 'What is React?',
        options: [
          'A JavaScript library for building user interfaces',
          'A programming language',
          'A database management system',
          'An operating system'
        ]
      },
      {
        id: 2,
        question: 'What hook is used for side effects in React?',
        options: [
          'useState',
          'useEffect',
          'useContext',
          'useReducer'
        ]
      }
    ]
  };

  const handleStartExam = () => {
    navigate(`/exams/${id}/take`);
  };

  return (
    <>
      <SEO 
        title={`${exam.title} - Exam Preview`}
        description={`Preview and prepare for ${exam.title}. Review exam details and sample questions before starting.`}
        keywords="exam preview, practice test, online assessment, exam preparation"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Menu className="w-5 h-5" />
          <span>Show Exam Info</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">{exam.title}</h1>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{exam.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{exam.duration}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{exam.questions} questions</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{exam.passingScore}% to pass</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{exam.attempts} attempts left</span>
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