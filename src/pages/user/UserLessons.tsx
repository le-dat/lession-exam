import React from 'react';
import { Play, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserLessons() {
  const navigate = useNavigate();
  const lessons = [
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React and its core concepts',
      duration: '45 mins',
      progress: 100,
    },
    {
      id: 2,
      title: 'State Management',
      description: 'Understanding state and props in React applications',
      duration: '60 mins',
      progress: 75,
    },
    {
      id: 3,
      title: 'React Hooks',
      description: 'Modern React development using hooks',
      duration: '50 mins',
      progress: 0,
    },
  ];

  const handleLessonClick = (lessonId: number) => {
    navigate(`/lessons/${lessonId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Lessons</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <div 
            key={lesson.id} 
            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transform transition hover:scale-105"
            onClick={() => handleLessonClick(lesson.id)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <span className="text-sm text-gray-500">{lesson.duration}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
              <p className="text-gray-600 mb-4">{lesson.description}</p>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 rounded-full h-2"
                    style={{ width: `${lesson.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500">{lesson.progress}% complete</span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Play className="w-5 h-5" />
                {lesson.progress === 0 ? 'Start Lesson' : 'Continue'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}