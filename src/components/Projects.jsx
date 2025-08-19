import React, { useEffect, useRef } from "react";
import ProjectWidget from "./ProjectWidget";
import Portdemo from '../assets/portdemo.png';
import Connectfourdemo from '../assets/connectfourdemo.png';
import lecruiter from '../assets/lecruiter.png';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const projectsRef = useRef([]);
  const containerRef = useRef(null);
  
  const featuredProjects = [
    {
      title: "Portfolio Website",
      description: "Simple protfolio to showcase relevant projects, expeirences, and skills",
      image: Portdemo, 
      technologies: ["React", "TailwindCSS", "GSAP"],
      websiteLink: "https://elijahzhao24.github.io/",
      sourceLink: "https://github.com/elijahzhao24/portfolio",
    },
    {
      title: "Lecruiter AI",
      description: "AI-powered platform enabling users to practice both behavioral and technical interviews, delivering generative prompts, realistic feedback, and automated scoring",
      image: lecruiter, 
      technologies: ["React", "TailwindCSS", "Python", "FastAPI", "AWS bedrock"],
      sourceLink: "https://github.com/R0yZh3ng/CIC-GenAI-Hackathon"
    }
  ];

  useEffect(() => {
    // Clean up any existing ScrollTriggers for this component
    const cleanup = () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger && 
            (trigger.vars.trigger === headerRef.current || 
             trigger.vars.trigger === containerRef.current)) {
          trigger.kill();
        }
      });
    };

    // Initial cleanup
    cleanup();

    // Wait for DOM to be ready and elements to be positioned
    const initAnimations = () => {
      // Ensure elements exist and are properly positioned
      if (!headerRef.current || !containerRef.current) {
        return;
      }

      // Set initial states
      gsap.set(headerRef.current, { opacity: 0, y: 50 });
      projectsRef.current.forEach(ref => {
        if (ref) gsap.set(ref, { opacity: 0, y: 50 });
      });

      // Animate header
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 90%',
            end: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate project widgets
      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.2
        }
      );

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    };

    // Use a more reliable timing approach
    const timer = setTimeout(() => {
      requestAnimationFrame(initAnimations);
    }, 50);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, []);

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
      <div ref={containerRef} className="mx-auto lg:w-[900px] md:w-[700px] w-[80vw]">
        {/* Header with title and view more button */}
        <div ref={headerRef} className="flex justify-between items-center mb-4">
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
            <div
              key={index}
              ref={el => projectsRef.current[index] = el}
            >
              <ProjectWidget
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                websiteLink={project.websiteLink}
                sourceLink={project.sourceLink}
                uiSourceLink={project.uiSourceLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}