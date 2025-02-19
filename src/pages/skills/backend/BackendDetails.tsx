import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackendDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Backend Development</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Backend development focuses on the server-side logic, databases, and APIs that power web applications.
            It involves using technologies like Node.js, Express, Django, and databases to create robust and scalable systems.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Backend Development</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Start with a Backend Language:</strong> Choose a language like Node.js, Python, or Java to build your server-side logic.
            </li>
            <li>
              <strong>Learn Frameworks:</strong> Familiarize yourself with popular backend frameworks like Express, Django, or Spring Boot.
            </li>
            <li>
              <strong>Understand Databases:</strong> Grasp the concepts of relational and non-relational databases and learn to use SQL or NoSQL.
            </li>
            <li>
              <strong>Explore APIs:</strong> Learn to design and implement RESTful APIs for communication between frontend and backend.
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
                <li>Create a basic server using Node.js and Express</li>
                <li>Implement a simple API endpoint</li>
                <li>Connect to a database and perform basic CRUD operations</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement user authentication and authorization</li>
                <li>Create a RESTful API with multiple endpoints</li>
                <li>Implement data validation and error handling</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Build a scalable microservices architecture</li>
                <li>Implement a real-time application using WebSockets</li>
                <li>Optimize database queries for performance</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Backend Basics</h3>
              <p className="text-gray-700">
                (Placeholder for beginner backend playlist link)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Backend</h3>
               <p className="text-gray-700">
                (Placeholder for advanced backend playlist link)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendDetails;
