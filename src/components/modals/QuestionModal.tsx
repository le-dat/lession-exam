import React, { useState } from "react";
import { X, Plus, Trash2 } from "lucide-react";

interface Question {
  id?: number;
  question: string;
  options: string[];
  correctAnswer: number;
  type: "Multiple Choice" | "True/False";
  difficulty: "Easy" | "Medium" | "Hard";
  explanation?: string;
}

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  question?: Question | null;
  onSubmit: (questionData: Partial<Question>) => void;
}

export default function QuestionModal({ isOpen, onClose, question, onSubmit }: QuestionModalProps) {
  const [formData, setFormData] = useState<Partial<Question>>({
    question: question?.question || "",
    options: question?.options || ["", ""],
    correctAnswer: question?.correctAnswer || 0,
    type: question?.type || "Multiple Choice",
    difficulty: question?.difficulty || "Easy",
    explanation: question?.explanation || "",
  });

  if (!isOpen) return null;

  const handleAddOption = () => {
    if (formData.options && formData.options.length < 6) {
      setFormData({
        ...formData,
        options: [...formData.options, ""],
      });
    }
  };

  const handleRemoveOption = (index: number) => {
    if (formData.options && formData.options.length > 2) {
      const newOptions = formData.options.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        options: newOptions,
        correctAnswer:
          (formData.correctAnswer ?? 0) >= index
            ? Math.max(0, (formData.correctAnswer ?? 0) - 1)
            : formData.correctAnswer ?? 0,
      });
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    if (formData.options) {
      const newOptions = [...formData.options];
      newOptions[index] = value;
      setFormData({
        ...formData,
        options: newOptions,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {question ? "Chỉnh sửa Câu hỏi" : "Thêm Câu hỏi Mới"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Câu hỏi</label>
            <textarea
              value={formData.question}
              onChange={(e) => setFormData({ ...formData, question: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Các tùy chọn</label>{" "}
            <div className="space-y-2">
              {formData.options?.map((option, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(index)}
                    className="text-red-600 hover:text-red-900 disabled:opacity-50"
                    disabled={(formData.options?.length ?? 0) <= 2}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={handleAddOption}
              className="mt-2 flex items-center gap-2 text-blue-600 hover:text-blue-800"
              disabled={(formData.options?.length ?? 0) >= 6}
            >
              <Plus className="w-4 h-4" />
              Thêm tùy chọn
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Câu trả lời đúng</label>
            <select
              value={formData.correctAnswer}
              onChange={(e) =>
                setFormData({ ...formData, correctAnswer: parseInt(e.target.value) })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            >
              {formData.options?.map((_, index) => (
                <option key={index} value={index}>
                  Lựa chọn {index + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Loại câu hỏi</label>
              <select
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value as Question["type"] })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                required
              >
                <option value="Multiple Choice">Multiple Choice</option>
                <option value="True/False">True/False</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Độ khó</label>
              <select
                value={formData.difficulty}
                onChange={(e) =>
                  setFormData({ ...formData, difficulty: e.target.value as Question["difficulty"] })
                }
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                required
              >
                <option value="Easy">Dễ</option>
                <option value="Medium">Trung bình</option>
                <option value="Hard">Khó</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Giải thích (tùy chọn)
            </label>
            <textarea
              value={formData.explanation}
              onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={3}
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              {question ? "Cập nhật" : "Tạo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
