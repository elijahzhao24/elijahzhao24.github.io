import React, { useEffect } from "react";
import ProjectWidget from "./ProjectWidget";
import lecruiter from '../assets/lecruiter.png';
import Portdemo from '../assets/portdemo.png';
import Connectfourdemo from '../assets/connectfourdemo.png';
import suddemo from '../assets/suddemo.gif';
import PVZdemo from '../assets/pvzdemo.png';
import balldemo from '../assets/balldemo.gif';
import { useNavigate } from 'react-router-dom';

export default function ProjectsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Placeholder data for 5 projects
  const allProjects = [
    {
        title: "Portfolio Website",
        description: "Simple protfolio to showcase relevant projects, expeirences, and skills",
        image: Portdemo, 
        technologies: ["React", "TailwindCSS", "GSAP"],
        websiteLink: "https://elijahzhao24.github.io/",
        sourceLink: "https://github.com/elijahzhao24/elijahzhao24.github.io",
      },
      {
        title: "Lecruiter AI",
        description: "AI-powered platform enabling users to practice both behavioral and technical interviews, delivering generative prompts, realistic feedback, and automated scoring",
        image: lecruiter, 
        technologies: ["React", "TailwindCSS", "Python", "FastAPI", "AWS bedrock"],
        sourceLink: "https://github.com/R0yZh3ng/CIC-GenAI-Hackathon"
      },
      {
        title: "Connect Four AI",
        description: "Connect Four AI opponent implemented using a Minimax algorithm with Alpha-beta pruning",
        image: Connectfourdemo, 
        technologies: ["Java", "Swing", "Junit"],
        sourceLink: "https://github.com/elijahzhao24/Connect-Four-AI"
      },
      {
        title: "Sudoku Game and Solver",
        description: "Sudoku game built using Python’s Pygame library, recursive backtracking solver",
        image: suddemo, 
        technologies: ["Python"],
        sourceLink: "https://github.com/elijahzhao24/sudoku-solver-pygame-"
      },
      {
        title: "Plants Vs. Zombies Clone",
        description: "Gameplay clone with a story and endless mode. Built using p5.js javascript sprite editor",
        image: PVZdemo, 
        technologies: ["Javascript"],
        websiteLink: "https://elijahzhao24.github.io/CS30-MajorProject/",
        sourceLink: "https://github.com/elijahzhao24/CS30-MajorProject"
      },
      {
        title: "Ball Physics Simulator",
        description: "Ball physics simulator using Python’s Pygame library. Involved creating environments where balls interact dynamically based on real-world physics",
        image: balldemo, 
        technologies: ["Python"],
        sourceLink: "https://github.com/elijahzhao24/ball-simulation"
      },
  ];

  const handleGoHome = () => {
    navigate('/', { state: { scrollToProjects: true } });
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
        {/* Header with title and go home button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-white mb-2 min-[430px]:text-4xl md:text-5xl">
            My Projects
          </h1>
          <button
            onClick={handleGoHome}
            className="text-[#cccccc] hover:text-[#ffffff] transition-colors duration-200 border border-gray-500 rounded-md px-4 py-2"
          >
            Go Home
          </button>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((project, index) => (
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