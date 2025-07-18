import React from 'react';

/**
 * Props:
 * - image: string (image src)
 * - name: string (company or school name)
 * - date: string (date range)
 * - position: string (job title or degree)
 * - description: string (block of text)
 */
const ExperienceItem = ({ image, name, date, position, description }) => {
  return (
    <div className="flex items-start gap-4 mb-10">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-[#10131a] flex items-center justify-center border-2 border-[#232a36] overflow-hidden">
          <img src={image} alt={name} className="w-10 h-10 object-contain" />
        </div>
      </div>
      {/* Content */}
      <div>
        <div className="text-sm text-gray-400 mb-1">{date}</div>
        <div className="text-xl font-bold text-white leading-tight">{name}</div>
        <div className="text-md text-gray-400 mb-2">{position}</div>
        <div className="text-gray-200 text-[1rem] whitespace-pre-line">{description}</div>
      </div>
    </div>
  );
};

export default ExperienceItem; 