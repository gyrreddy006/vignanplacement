import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CppDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">C++ Programming</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            C++ is a powerful, versatile programming language used for a wide range of applications.
            It's known for its performance and control over hardware, making it suitable for system programming, game development, and high-performance computing.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn C++ from Scratch</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Start with the Basics:</strong> Understand fundamental concepts like variables, data types, operators, and control structures.
            </li>
            <li>
              <strong>Learn Object-Oriented Programming (OOP):</strong> Grasp the principles of classes, objects, inheritance, and polymorphism.
            </li>
            <li>
              <strong>Explore the Standard Template Library (STL):</strong> Familiarize yourself with containers, algorithms, and iterators.
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
                <li>Calculate the sum of two numbers</li>
                <li>Find the largest of three numbers</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement a linked list</li>
                <li>Reverse a string</li>
                <li>Implement a binary search algorithm</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement a graph traversal algorithm</li>
                <li>Solve the N-Queens problem</li>
                <li>Implement a dynamic programming solution for a knapsack problem</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Beginner C++</h3>
              <a
                href="https://www.youtube.com/playlist?list=PLlrATfN6J98dudJu067O50m-2en3b3e0O"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500"
              >
                FreeCodeCamp C++ Tutorial
              </a>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced C++</h3>
              <a
                href="https://www.youtube.com/playlist?list=PLs3IF090600000000000000000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500"
              >
                The Cherno C++ Playlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CppDetails;
