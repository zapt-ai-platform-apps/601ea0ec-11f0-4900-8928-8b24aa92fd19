import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Influencer Connect</h1>
      <p className="text-lg mb-6">
        A platform connecting influencers with brands for collaborative campaigns.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Get Started
        </a>
        <a
          href="/login"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Login
        </a>
      </div>
    </div>
  );
}