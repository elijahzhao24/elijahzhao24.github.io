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
    <div className="flex items-start gap-4 mb-10 lg:w-[880px] md:w-[680px] w-[78vw]">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-[#10131a] flex items-center justify-center border-2 border-[#232a36] overflow-hidden">
          <img src={image} alt={name} className="w-12 h-12 object-contain" />
        </div>
      </div>
      {/* Content */}
      <div>
        <div className="text-xs text-gray-400 mb">{date}</div>
        <div className="text-lg font-bold text-white leading-tight mb-1">{name}</div>
        <div className="text-xs text-gray-400 mb-1 ">{position}</div>
        <div className="text-[#cccccc] text-[0.85rem] font-normal leading-[1.4]">
          {Array.isArray(description) ? (
            <ul className="list-disc pl-5">
              {description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <span>{description}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem; 