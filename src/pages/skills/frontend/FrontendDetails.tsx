import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const FrontendDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Frontend Development</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Frontend development focuses on the user interface and user experience of websites and applications.
            It involves using technologies like HTML, CSS, and JavaScript to create interactive and visually appealing interfaces.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Frontend Development</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Start with HTML:</strong> Learn the structure of web pages using HTML elements and attributes.
            </li>
            <li>
              <strong>Master CSS:</strong> Understand how to style web pages using CSS selectors, properties, and layout techniques.
            </li>
            <li>
              <strong>Learn JavaScript:</strong> Grasp the fundamentals of JavaScript for adding interactivity and dynamic behavior to web pages.
            </li>
            <li>
              <strong>Explore Frameworks:</strong> Familiarize yourself with popular frontend frameworks like React, Vue.js, and Angular.
            </li>
            <li>
              <strong>Practice Regularly:</strong> Build small projects to solidify your understanding and improve your skills.
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
                <li>Create a basic HTML page with headings and paragraphs</li>
                <li>Style a page using CSS selectors and properties</li>
                <li>Add basic JavaScript interactivity to a button</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Create a responsive navigation bar</li>
                <li>Build a simple form with validation</li>
                <li>Implement a carousel using JavaScript</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Build a single-page application using React</li>
                <li>Implement a complex layout using CSS Grid</li>
                <li>Create a custom animation using JavaScript</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Frontend Basics</h3>
              <p className="text-gray-700">
                (Placeholder for beginner frontend playlist link)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Frontend</h3>
               <p className="text-gray-700">
                (Placeholder for advanced frontend playlist link)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendDetails;
