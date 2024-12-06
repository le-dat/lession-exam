import React from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function AdminQuestions() {
  const questions = [
    {
      id: 1,
      question: "React là gì?",
      type: "Trắc nghiệm",
      difficulty: "Biết",
      lesson: "Giới thiệu về React",
    },
    {
      id: 2,
      question: "Giải thích Hook useState",
      type: "Trắc nghiệm",
      difficulty: "Hiểu",
      lesson: "React Hooks",
    },
    {
      id: 3,
      question: "Redux là gì?",
      type: "Trắc nghiệm",
      difficulty: "Vận dụng",
      lesson: "Quản lý trạng thái",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Quản lý câu hỏi</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Thêm câu hỏi
        </button>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Câu hỏi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Loại
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Độ Vận dụng
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bài học
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {questions.map((question) => (
              <tr key={question.id}>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{question.question}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{question.type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{question.difficulty}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{question.lesson}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
