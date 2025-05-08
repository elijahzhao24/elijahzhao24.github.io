import React from 'react';
import LightBulb from './components/LightBulb';

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl mb-8">My Portfolio</h1>
      <LightBulb />
    </div>
  );
} 