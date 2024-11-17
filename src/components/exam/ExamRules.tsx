import React from 'react';
import { Clock, AlertCircle, XCircle, CheckCircle } from 'lucide-react';

export default function ExamRules() {
  const rules = [
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />,
      title: 'Time Limit',
      description: 'Once started, the exam timer cannot be paused or extended.'
    },
    {
      icon: <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />,
      title: 'No Going Back',
      description: 'Questions must be answered in order. You cannot return to previous questions.'
    },
    {
      icon: <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />,
      title: 'Browser Restrictions',
      description: 'Leaving the exam window or refreshing the page may void your attempt.'
    },
    {
      icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />,
      title: 'Results',
      description: 'Your score will be displayed immediately after completion.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Exam Rules</h2>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {rules.map((rule, index) => (
          <div key={index} className="flex gap-3 sm:gap-4">
            <div className="flex-shrink-0">{rule.icon}</div>
            <div>
              <h3 className="font-medium text-sm sm:text-base mb-1">{rule.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{rule.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}