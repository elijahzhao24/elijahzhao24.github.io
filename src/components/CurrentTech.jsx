import React, { useEffect, useRef } from 'react';
import TechWidget from './TechWidget';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import reactLogo from '../assets/react.svg';
import cppLogo from '../assets/cpplogo.png'
import pythonLogo from '../assets/python.svg'
import tailwindLogo from '../assets/tailwind.svg'
import gitLogo from '../assets/git.svg'
import figmaLogo from '../assets/figma.svg'
import javaLogo from '../assets/java.svg'
import springbootLogo from '../assets/Springboot.svg.png'

gsap.registerPlugin(ScrollTrigger);

const techWidgets = [
  { logo: reactLogo, bgcolor: "#61DAFB", name: "React", description: "JavaScript Library" },
  { logo: cppLogo, bgcolor: "#3178C6", name: "C++", description: "Low-Level OOP" },
  { logo: pythonLogo, bgcolor: "#f8cf78", name: "Python", description: "Programing language" },
  { logo: tailwindLogo, bgcolor: "#148df4", name: "Tailwind", description: "CSS framework" },
  { logo: gitLogo, bgcolor: "#faa053", name: "Git", description: "Version control" },
  { logo: figmaLogo, bgcolor: "#1aad09", name: "Figma", description: "Design Tool" },
  { logo: javaLogo, bgcolor: "#5097d5", name: "Java", description: "Programing language" },
  { logo: springbootLogo, bgcolor: "#5cd44f", name: "Spring Boot", description: "Java framework" },
];

export default function CurrentTech() {
  const widgetsRef = useRef([]);
  const headingRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    // Animate heading and description
    gsap.fromTo([
      headingRef.current,
      descRef.current
    ],
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 90%',
          end: 'top 60%',
          toggleActions: 'play resume resume reverse',
        },
      }
    );
    // Animate grid items
    gsap.fromTo(
      widgetsRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: widgetsRef.current[0]?.parentNode,
          start: 'top 90%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.2 // slight delay after heading/desc
      }
    );
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="CurrentTech w-full" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '50vh',
      padding: '0',
      marginTop: '10vh',
    }}>
      <div className="container mx-auto px-8 w-full">
        <h1 ref={headingRef} style={{ opacity: 0 }} className="text-3xl font-bold text-white mb-2 min-[430px]:text-4xl md:text-5xl flex items-center gap-2 justify-start">
          Current Technologies  
        </h1>     
        <div ref={descRef} style={{ opacity: 0, fontSize: "0.9rem", color: '#999' }} className="max-w-full pb-4 "
        >
          I'm proficient in a range of technologies. These are some of my main technologies
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {techWidgets.map((props, i) => (
            <div
              key={i}
              ref={el => widgetsRef.current[i] = el}
              style={{ opacity: 0 }}
            >
              <TechWidget {...props} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
