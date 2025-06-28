import React from 'react';
import reactLogo from '../assets/react.svg';

export default function TechWidget() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#232425] w-fit">
      <div className="p-3 bg-[#61DAFB]/20 rounded-lg flex items-center justify-center w-14 h-14">
        <img
          src={reactLogo}
          alt="React logo"
          className="w-8 h-8"
          style={{ color: 'transparent' }}
        />
      </div>
      <div>
        <div className="text-white text-xl font-semibold">React</div>
        <div className="text-gray-400 text-base">JavaScript Library</div>
      </div>
    </div>
  );
}
