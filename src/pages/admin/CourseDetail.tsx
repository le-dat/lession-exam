import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, BookOpen, Plus, Play, CheckCircle, BarChart2, Edit, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import LessonModal from '../../components/modals/LessonModal';
import DeleteConfirmModal from '../../components/modals/DeleteConfirmModal';
import PageTransition from '../../components/animations/PageTransition';
import FadeIn from '../../components/animations/FadeIn';
import SlideIn from '../../components/animations/SlideIn';
import SEO from '../../components/SEO';

export default function CourseDetail() {
  const { id } = useParams();
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [activeLesson, setActiveLesson] = useState(0);

  // Mock data - replace with API calls
  const course = {
    id: 1,
    title: 'React Fundamentals',
    description: 'Learn the basics of React development',
    duration: '6 weeks',
    students: 156,
    progress: 75,
    lessons: [
      {
        id: 1,
        title: 'Introduction to React',
        duration: '45 mins',
        status: 'published',
        content: `# Introduction to React

React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".

## Key Concepts

1. **Components**
   - Building blocks of React applications
   - Can be class-based or functional
   - Reusable and composable

2. **Props**
   - Pass data between components
   - Read-only
   - Help make components reusable

3. **State**
   - Internal component data
   - Can be modified using setState
   - Changes trigger re-renders`,
      },
      {
        id: 2,
        title: 'Components and Props',
        duration: '60 mins',
        status: 'published',
        content: '# Components and Props content...',
      },
      {
        id: 3,
        title: 'State and Lifecycle',
        duration: '55 mins',
        status: 'draft',
        content: '# State and Lifecycle content...',
      },
    ],
  };

  const handleLessonSubmit = (lessonData) => {
    console.log('Submitting lesson:', lessonData);
    // Add API call here
  };

  const handleDeleteLesson = () => {
    console.log('Deleting lesson:', selectedLesson);
    // Add API call here
    setIsDeleteModalOpen(false);
  };

  return (
    <PageTransition>
      <SEO 
        title={`${course.title} - Course Management`}
        description={`Manage and edit content for ${course.title}. Add lessons, track progress, and monitor student engagement.`}
        keywords="course management, online learning, education platform, lesson planning"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FadeIn>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <span>{course.lessons.length} lessons</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsLessonModalOpen(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-5 h-5" />
                Add Lesson
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8">
          <SlideIn direction="left" className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold mb-4">Course Content</h2>
              <div className="space-y-2">
                {course.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLesson(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeLesson === index
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{lesson.title}</span>
                      {lesson.status === 'draft' && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          Draft
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {lesson.duration}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </SlideIn>

          <FadeIn delay={0.2} className="lg:col-span-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {course.lessons[activeLesson].title}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedLesson(course.lessons[activeLesson]);
                      setIsLessonModalOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLesson(course.lessons[activeLesson]);
                      setIsDeleteModalOpen(true);
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="prose max-w-none">
                <ReactMarkdown>
                  {course.lessons[activeLesson].content}
                </ReactMarkdown>
              </div>
            </div>
          </FadeIn>

          <SlideIn direction="right" delay={0.3} className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold mb-4">Lesson Stats</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Completion Rate</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 rounded-full h-2 w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Student Engagement</span>
                    <span>High</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-2 h-8 rounded ${
                          star <= 4 ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-2">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-2 text-gray-700 hover:text-blue-600">
                      <Play className="w-4 h-4" />
                      Preview Lesson
                    </button>
                    <button className="w-full flex items-center gap-2 text-gray-700 hover:text-blue-600">
                      <BarChart2 className="w-4 h-4" />
                      View Analytics
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>

        <LessonModal
          isOpen={isLessonModalOpen}
          onClose={() => {
            setIsLessonModalOpen(false);
            setSelectedLesson(null);
          }}
          lesson={selectedLesson}
          onSubmit={handleLessonSubmit}
        />

        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDeleteLesson}
          title="Delete Lesson"
          message="Are you sure you want to delete this lesson? This action cannot be undone."
        />
      </div>
    </PageTransition>
  );
}