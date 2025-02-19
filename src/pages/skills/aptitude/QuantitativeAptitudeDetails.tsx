import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const QuantitativeAptitudeDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/non-technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Non-Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Quantitative Aptitude</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Quantitative aptitude involves numerical and mathematical skills. It's a crucial component of many competitive exams and job placements.
            It tests your ability to solve problems using mathematical concepts and logical reasoning.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Quantitative Aptitude</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Start with the Basics:</strong> Understand fundamental concepts like number systems, percentages, ratios, and proportions.
            </li>
            <li>
              <strong>Practice Regularly:</strong> Solve a variety of problems to improve your speed and accuracy.
            </li>
            <li>
              <strong>Learn Shortcuts and Tricks:</strong> Familiarize yourself with techniques to solve problems quickly.
            </li>
            <li>
              <strong>Focus on Time Management:</strong> Practice solving problems under timed conditions to simulate exam scenarios.
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
                <li>Solve problems on percentages</li>
                <li>Solve problems on ratios and proportions</li>
                <li>Solve problems on simple interest</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Solve problems on profit and loss</li>
                <li>Solve problems on time and work</li>
                <li>Solve problems on compound interest</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Solve problems on probability</li>
                <li>Solve problems on permutations and combinations</li>
                <li>Solve problems on data interpretation</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Quantitative Aptitude</h3>
              <p className="text-gray-700">
                (Placeholder for beginner quantitative aptitude playlist link)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Quantitative Aptitude</h3>
               <p className="text-gray-700">
                (Placeholder for advanced quantitative aptitude playlist link)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantitativeAptitudeDetails;
