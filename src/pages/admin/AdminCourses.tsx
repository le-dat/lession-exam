import React, { useState } from 'react';
import { Plus, Edit, Trash2, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CourseModal from '../../components/modals/CourseModal';

export default function AdminCourses() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'React Fundamentals',
      description: 'Learn the basics of React development',
      duration: '6 weeks',
      lessons: 12,
      students: 156,
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Master advanced JavaScript concepts',
      duration: '8 weeks',
      lessons: 15,
      students: 143,
    },
    {
      id: 3,
      title: 'Web Development Bootcamp',
      description: 'Complete web development course',
      duration: '12 weeks',
      lessons: 24,
      students: 128,
    },
  ];

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleDeleteCourse = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      console.log('Deleting course:', courseId);
    }
  };

  const handleSubmit = (courseData) => {
    console.log('Submitting course data:', courseData);
    // Add API call here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Manage Courses</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" />
          Add Course
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleEditCourse(course)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleDeleteCourse(course.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Duration: {course.duration}</div>
                <div className="text-sm text-gray-500">Lessons: {course.lessons}</div>
                <div className="text-sm text-gray-500">Students: {course.students}</div>
              </div>
              <button 
                onClick={() => navigate(`/admin/courses/${course.id}`)}
                className="mt-4 w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <CourseModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCourse(null);
        }}
        course={selectedCourse}
        onSubmit={handleSubmit}
      />
    </div>
  );
}