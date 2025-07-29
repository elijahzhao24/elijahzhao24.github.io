import React from "react";
import ProjectWidget from "./ProjectWidget";
import Portdemo from '../assets/portdemo.png';
import Connectfourdemo from '../assets/connectfourdemo.png';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();
  const featuredProjects = [
    {
      title: "Portfolio Website",
      description: "Simple protfolio to showcase relevant projects, expeirences, and skills",
      image: Portdemo, 
      technologies: ["React", "TailwindCSS", "GSAP"],
      websiteLink: "https://elijahzhao24.github.io/portfolio/",
      sourceLink: "https://github.com/elijahzhao24/portfolio",
    },
    {
      title: "Connect Four AI",
      description: "Connect Four AI opponent implemented using a Minimax algorithm with Alpha-beta pruning",
      image: Connectfourdemo, 
      technologies: ["Java", "Swing", "Junit"],
      sourceLink: "https://github.com/elijahzhao24/Connect-Four-AI"
    }
  ];

  const handleViewMore = () => {
    navigate('/projects');
  };

  return (
    <div className="Projects w-full" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      padding: '0',
      marginTop: '12px'
    }}>
      <div className="mx-auto lg:w-[900px] md:w-[700px] w-[80vw]">
        {/* Header with title and view more button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-white mb-2 min-[430px]:text-4xl md:text-5xl">
            Featured Projects
          </h1>
          <button
            onClick={handleViewMore}
            className="text-[#cccccc] hover:text-[#ffffff] transition-colors duration-200"
          >
            View More
          </button>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectWidget
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              websiteLink={project.websiteLink}
              sourceLink={project.sourceLink}
              uiSourceLink={project.uiSourceLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}