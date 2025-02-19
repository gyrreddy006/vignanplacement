import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NonVerbalCommunicationDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/non-technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Non-Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Non-Verbal Communication</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Non-verbal communication involves the use of body language, facial expressions, and other non-spoken cues to convey messages.
            It's a crucial skill for effective interaction, presentations, and interviews.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Improve Non-Verbal Communication</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Understand Body Language:</strong> Learn to interpret and use body language effectively, including posture, gestures, and eye contact.
            </li>
            <li>
              <strong>Practice Presentation Skills:</strong> Develop your ability to deliver engaging and impactful presentations.
            </li>
            <li>
              <strong>Enhance Active Listening:</strong> Improve your ability to listen attentively and understand non-verbal cues.
            </li>
            <li>
              <strong>Learn Professional Etiquette:</strong> Familiarize yourself with appropriate behavior and manners in professional settings.
            </li>
            <li>
              <strong>Practice Regularly:</strong> Observe and analyze non-verbal cues in different situations to improve your skills.
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
                <li>Practice maintaining eye contact during conversations</li>
                <li>Practice using open and confident body language</li>
                <li>Practice active listening techniques</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Practice delivering a short presentation with effective body language</li>
                <li>Practice active listening in group discussions</li>
                <li>Practice professional etiquette in different scenarios</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Deliver a persuasive presentation with strong non-verbal cues</li>
                <li>Participate in a mock interview focusing on non-verbal communication</li>
                 <li>Analyze and interpret non-verbal cues in complex social situations</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Non-Verbal Communication</h3>
              <p className="text-gray-700">
                (Placeholder for beginner non-verbal communication playlist link)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Non-Verbal Communication</h3>
               <p className="text-gray-700">
                (Placeholder for advanced non-verbal communication playlist link)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonVerbalCommunicationDetails;
