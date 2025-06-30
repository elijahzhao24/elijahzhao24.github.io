import React, { useEffect } from 'react';
import LightBulb from './components/LightBulb';
import PortfolioContent from './components/PortfolioContent';
import AboutMe from './components/AboutMe';
import CurrentTech from './components/CurrentTech';
import Experience from './components/Experience';


export default function App() {
  useEffect(() => {
    const handleLightChange = () => {
      const isOn = document.body.classList.contains('on');
      if (!isOn) {
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    handleLightChange();
    const observer = new MutationObserver(handleLightChange);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('load', handleLightChange);
    
    // Handle visibility change (when tab becomes visible again)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        handleLightChange();
      }
    });

    // Handle scroll events when light is off
    const handleScroll = () => {
      if (!document.body.classList.contains('on')) {
        handleLightChange();
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('load', handleLightChange);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleLightChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <LightBulb />
      <PortfolioContent />
      <AboutMe />
      <CurrentTech />
      <Experience />
    </div>
  );
} 