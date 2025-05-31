import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profilePic from '../assets/profile.png';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutElement = aboutRef.current;
    
    gsap.fromTo(aboutElement,
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutElement,
          start: "top 70%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={aboutRef} className="AboutMe" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '50vh',
      padding: '1rem 0',
      marginTop: 'auto',
      opacity: 0  // Start with opacity 0
    }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold font-serif text-white mb-3 flex items-center gap-2">
          hi elijah here
          <span className="text-yellow-400 text-5xl">👋</span>
        </h1>
        <div className="flex gap-8">
          <div className="space-y-4">
            <p className="AboutMe-text">
              18-year-old developer and student from Vancouver 🇨🇦
            </p>
            <p className="AboutMe-text">
              I like to develop apps and websites, and blah blah blah blah blah blah blah blah blah blah blah blah
            </p>
          </div>
          <img
            src={profilePic}
            alt="Profile"
            style={{ width: '25vh', height: '25vh' }}
            className="object-cover border-4 shadow-lg ml-8"
          />
        </div>
      </div>
    </div>
  );
}
