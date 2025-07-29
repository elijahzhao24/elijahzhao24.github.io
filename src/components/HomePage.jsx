import React, { useEffect, useRef } from 'react';
import LightBulb from './LightBulb';
import PortfolioContent from './PortfolioContent';
import AboutMe from './AboutMe';
import CurrentTech from './CurrentTech';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const projectsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToProjects && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <LightBulb />
      <PortfolioContent />
      <AboutMe />
      <CurrentTech />
      <Experience />
      <div ref={projectsRef} id="featured-projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
} 