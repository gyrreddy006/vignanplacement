import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const VerbalCommunicationDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/non-technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Non-Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Verbal Communication</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Verbal communication involves the use of spoken words to convey messages.
            It's a crucial skill for effective interaction, presentations, and interviews.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Improve Verbal Communication</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Enhance Grammar and Vocabulary:</strong> Improve your understanding of grammar rules and expand your vocabulary.
            </li>
            <li>
              <strong>Practice Public Speaking:</strong> Develop your ability to speak clearly and confidently in front of an audience.
            </li>
            <li>
              <strong>Participate in Group Discussions:</strong> Learn to express your ideas effectively in a group setting.
            </li>
            <li>
              <strong>Improve Interview Skills:</strong> Practice answering common interview questions and learn to present yourself well.
            </li>
            <li>
              <strong>Master Email Writing:</strong> Learn to write clear, concise, and professional emails.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
          <p className="text-gray-700 mb-6">
            (Placeholder for handwritten notes - you can add links to images or PDFs here)
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
          <p className="text-gray-700 mb-6">
            (Placeholder for print notes - you can add links to PDFs or documents here)
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Practice basic grammar exercises</li>
                <li>Practice vocabulary building exercises</li>
                <li>Practice short speeches on familiar topics</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Participate in mock group discussions</li>
                <li>Practice answering common interview questions</li>
                <li>Write professional emails for different scenarios</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Deliver a persuasive speech on a complex topic</li>
                <li>Participate in a mock interview with challenging questions</li>
                <li>Write a detailed report or proposal</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Verbal Communication</h3>
              <p className="text-gray-700">
                (Placeholder for beginner verbal communication playlist link)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Verbal Communication</h3>
               <p className="text-gray-700">
                (Placeholder for advanced verbal communication playlist link)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerbalCommunicationDetails;
