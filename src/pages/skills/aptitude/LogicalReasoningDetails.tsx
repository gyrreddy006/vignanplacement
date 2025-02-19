import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LogicalReasoningDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/non-technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Non-Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Logical Reasoning</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Logical reasoning involves the ability to analyze and interpret information to draw logical conclusions.
            It's a crucial skill for problem-solving and decision-making in various contexts.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Logical Reasoning</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Understand Basic Concepts:</strong> Familiarize yourself with different types of reasoning, such as deductive, inductive, and abductive reasoning.
            </li>
            <li>
              <strong>Practice Regularly:</strong> Solve a variety of logical reasoning problems to improve your analytical skills.
            </li>
            <li>
              <strong>Learn Different Question Types:</strong> Understand the different types of logical reasoning questions, such as verbal, non-verbal, and analytical reasoning.
            </li>
            <li>
              <strong>Focus on Pattern Recognition:</strong> Develop your ability to identify patterns and relationships in data.
            </li>
            <li>
              <strong>Analyze Your Mistakes:</strong> Identify your weak areas and focus on improving them.
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
                <li>Solve problems on analogies</li>
                <li>Solve problems on series completion</li>
                <li>Solve problems on coding-decoding</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Solve problems on blood relations</li>
                <li>Solve problems on direction sense</li>
                <li>Solve problems on syllogisms</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Solve problems on data interpretation</li>
                 <li>Solve problems on non-verbal reasoning</li>
                <li>Solve complex analytical reasoning problems</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Logical Reasoning</h3>
              <p className="text-gray-700">
                (Placeholder for beginner logical reasoning playlist link)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Logical Reasoning</h3>
               <p className="text-gray-700">
                (Placeholder for advanced logical reasoning playlist link)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogicalReasoningDetails;
