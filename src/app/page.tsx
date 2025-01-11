import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to Claude Test Next</h1>
        <p className="text-lg mb-4">
          This is a Next.js application created with TypeScript.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Next.js 14 with App Router</li>
            <li>TypeScript Configuration</li>
            <li>React 18</li>
            <li>Basic Styling with Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </main>
  );
}