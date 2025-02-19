import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AlgorithmsDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Algorithms</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Algorithms are step-by-step procedures for solving problems. They are essential for efficient computation and are used in all areas of computer science.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Algorithms</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Start with the Basics:</strong> Understand fundamental algorithms like sorting, searching, and graph traversal.
            </li>
            <li>
              <strong>Learn Algorithm Design Techniques:</strong> Grasp the concepts of divide and conquer, dynamic programming, and greedy algorithms.
            </li>
            <li>
              <strong>Implement Algorithms:</strong> Practice implementing these algorithms from scratch to understand their inner workings.
            </li>
            <li>
              <strong>Practice Regularly:</strong> Solve coding problems on platforms like LeetCode, HackerRank, and Codeforces.
            </li>
             <li>
              <strong>Analyze Time and Space Complexity:</strong> Understand how different algorithms affect the performance of your programs.
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
                <li>Implement linear search</li>
                <li>Implement bubble sort</li>
                <li>Implement insertion sort</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement binary search</li>
                <li>Implement merge sort</li>
                <li>Implement quicksort</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement Dijkstra's algorithm</li>
                <li>Implement dynamic programming for knapsack problem</li>
                <li>Implement a graph coloring algorithm</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Algorithms</h3>
              <p className="text-gray-700">
                (Placeholder for beginner algorithms playlist link)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Algorithms</h3>
               <p className="text-gray-700">
                (Placeholder for advanced algorithms playlist link)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmsDetails;
