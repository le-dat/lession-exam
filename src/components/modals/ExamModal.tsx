import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  exam?: {
    id?: number;
    title: string;
    description: string;
    duration: string;
    totalQuestions: number;
    passingScore: number;
  };
  onSubmit: (examData: any) => void;
}

export default function ExamModal({ isOpen, onClose, exam, onSubmit }: ExamModalProps) {
  const [formData, setFormData] = useState({
    title: exam?.title || '',
    description: exam?.description || '',
    duration: exam?.duration || '',
    totalQuestions: exam?.totalQuestions || 0,
    passingScore: exam?.passingScore || 70,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {exam ? 'Edit Exam' : 'Add New Exam'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
            <input
              type="number"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              min="1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Total Questions</label>
            <input
              type="number"
              value={formData.totalQuestions}
              onChange={(e) => setFormData({ ...formData, totalQuestions: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              min="1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Passing Score (%)</label>
            <input
              type="number"
              value={formData.passingScore}
              onChange={(e) => setFormData({ ...formData, passingScore: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              min="0"
              max="100"
              required
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
              {exam ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}