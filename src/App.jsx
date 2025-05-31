import React, { useEffect } from 'react';
import LightBulb from './components/LightBulb';
import PortfolioContent from './components/PortfolioContent';
import AboutMe from './components/AboutMe';

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

    return () => {
      observer.disconnect();
      window.removeEventListener('load', handleLightChange);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <LightBulb />
      <PortfolioContent />
      <AboutMe />
    </div>
  );
} 