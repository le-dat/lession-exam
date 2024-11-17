import React, { useState } from 'react';
import { Plus, Edit, Trash2, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ExamModal from '../../components/modals/ExamModal';

export default function AdminExams() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  const exams = [
    {
      id: 1,
      title: 'React Fundamentals Test',
      description: 'Test your knowledge of React basics',
      duration: '45',
      totalQuestions: 20,
      passingScore: 70,
      attempts: 156,
    },
    {
      id: 2,
      title: 'JavaScript Advanced Exam',
      description: 'Advanced JavaScript concepts assessment',
      duration: '60',
      totalQuestions: 25,
      passingScore: 75,
      attempts: 143,
    },
    {
      id: 3,
      title: 'Web Development Final',
      description: 'Comprehensive web development test',
      duration: '90',
      totalQuestions: 40,
      passingScore: 80,
      attempts: 128,
    },
  ];

  const handleEditExam = (exam) => {
    setSelectedExam(exam);
    setIsModalOpen(true);
  };

  const handleDeleteExam = (examId) => {
    if (window.confirm('Are you sure you want to delete this exam?')) {
      console.log('Deleting exam:', examId);
    }
  };

  const handleSubmit = (examData) => {
    console.log('Submitting exam data:', examData);
    // Add API call here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Exams</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          Add Exam
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam) => (
          <div 
            key={exam.id} 
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEditExam(exam)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleDeleteExam(exam.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">{exam.title}</h2>
              <p className="text-gray-600 mb-4">{exam.description}</p>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Duration: {exam.duration} minutes</div>
                <div className="text-sm text-gray-500">Questions: {exam.totalQuestions}</div>
                <div className="text-sm text-gray-500">Passing Score: {exam.passingScore}%</div>
                <div className="text-sm text-gray-500">Total Attempts: {exam.attempts}</div>
              </div>
              <button 
                onClick={() => navigate(`/admin/exams/${exam.id}`)}
                className="mt-4 w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <ExamModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedExam(null);
        }}
        exam={selectedExam}
        onSubmit={handleSubmit}
      />
    </div>
  );
}