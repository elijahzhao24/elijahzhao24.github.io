import React from 'react';
import { FiGlobe, FiGithub } from 'react-icons/fi';

export default function ProjectWidget({ 
  image, 
  title, 
  description, 
  technologies = [], 
  websiteLink, 
  sourceLink, 
  uiSourceLink 
}) {
  return (
    <div className="bg-[#111111] rounded-2xl shadow-lg border border-[#232a36] flex flex-col justify-center items-center w-full h-full" style={{ minHeight: '500px' }}>
      <div className="w-full h-full flex flex-col justify-center items-center p-8">
        {/* Project Image */}
        {image && (
          <div className="w-full flex justify-center mb-2 ">
            <img 
              src={image} 
              alt={title}
              className={`rounded-lg max-h-56 w-full bg-[#111111] border-[#232b3e] ${typeof image === 'string' && image.endsWith('.gif') ? '' : 'object-cover'}`}
              style={{ boxShadow: '0 2px 16px 0 rgba(75, 75, 75, 0.1)' }}
            />
          </div>
        )}
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-1 w-full text-left">{title}</h3>
        {/* Description */}
        <p className="text-[#cccccc] text-base mb-4 w-full text-left">
          {description}
        </p>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-8 w-full">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-[#242730] text-white text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex flex-wrap gap-3 w-full">
          {websiteLink && (
            <a 
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-1 bg-white text-black text-xs rounded-md font-semibold hover:bg-[#dddddd] transition-colors shadow"
            >
              <FiGlobe size={14} /> Website
            </a>
          )}
          {sourceLink && (
            <a 
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-1 bg-white text-black text-xs rounded-md font-semibold hover:bg-[#dddddd] transition-colors shadow"
            >
              <FiGithub size={14} /> Source
            </a>
          )}
          {uiSourceLink && (
            <a 
              href={uiSourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-1 bg-white text-black text-xs rounded-md font-semibold hover:bg-[#dddddd] transition-colors shadow"
            >
              <FiGithub size={14} /> Source (UI)
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 