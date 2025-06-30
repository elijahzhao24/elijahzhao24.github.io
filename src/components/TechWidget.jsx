import React from 'react';

export default function TechWidget({logo, bgcolor, name, description}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a1a] border border-transparent hover:bg-[#222222] hover:border-[#555555] transition">
      <div 
        className="p-3 rounded-lg flex items-center justify-center w-14 h-14"
        style={{ backgroundColor: `${bgcolor}20` }}
      >
        <img
          src={logo}
          alt="React logo"
          className="w-8 h-8"
          style={{ color: 'transparent' }}
        />
      </div>
      <div>
        <div className="text-white text-xl font-semibold">{name}</div>
        <div className="text-gray-400 text-base">{description}</div>
      </div>
    </div>
  );
}
