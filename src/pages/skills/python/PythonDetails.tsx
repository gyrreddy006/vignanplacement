import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PythonDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Python Programming</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Python is a high-level, interpreted, general-purpose programming language.
            It's known for its readability and versatility, making it popular for web development, data science, and scripting.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Python from Scratch</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Start with the Basics:</strong> Understand fundamental concepts like variables, data types, operators, and control structures.
            </li>
            <li>
              <strong>Learn Data Structures:</strong> Familiarize yourself with lists, tuples, dictionaries, and sets.
            </li>
            <li>
              <strong>Explore Libraries:</strong> Learn to use popular libraries like NumPy, Pandas, and Matplotlib for data manipulation and visualization.
            </li>
            <li>
              <strong>Practice Regularly:</strong> Solve coding problems on platforms like LeetCode, HackerRank, and Codeforces.
            </li>
            <li>
              <strong>Build Projects:</strong> Apply your knowledge by creating small projects to solidify your understanding.
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
                <li>Write a program to print "Hello, World!"</li>
                <li>Calculate the area of a circle</li>
                <li>Check if a number is prime</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement a stack using a list</li>
                <li>Reverse a list</li>
                <li>Implement a linear search algorithm</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement a graph using a dictionary</li>
                <li>Solve the Sudoku problem</li>
                <li>Implement a machine learning model using scikit-learn</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Beginner Python</h3>
              <p className="text-gray-700">
                (Placeholder for beginner Python playlist link)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Python</h3>
               <p className="text-gray-700">
                (Placeholder for advanced Python playlist link)
              </p>
            </div>
          </div>
        </div>x
      </div>
    </div>
  );
};

export default PythonDetails;
