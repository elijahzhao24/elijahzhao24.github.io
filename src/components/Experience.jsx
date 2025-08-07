import React, { useState, useEffect, useRef } from 'react';
import UBCLogo from '../assets/UBClogo.png'
import WoohelpLogo from '../assets/WoohelpLogo.png'
import ExperienceItem from './ExperienceItem';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  const containerRef = useRef(null);
  const tabButtonsRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    // Clean up any existing ScrollTriggers for this component
    const cleanup = () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger && 
            trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };

    // Initial cleanup
    cleanup();

    // Wait for DOM to be ready and elements to be positioned
    const initAnimations = () => {
      // Ensure elements exist and are properly positioned
      if (!containerRef.current) {
        return;
      }

      // Set initial states
      gsap.set(containerRef.current, { opacity: 0, y: 50 });

      // Animate the main container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            end: 'top 80%',
            toggleActions: 'play none none reverse',
          },
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

  return (
    <div ref={containerRef} className='w-full flex flex-col items-center justify-center mt-[10vh]'>
      <div ref={tabButtonsRef} className="flex bg-[#242730] rounded-lg p-1 max-w-full  border-[#2d3644] lg:w-[900px] md:w-[700px] w-[80vw]">
        <button
          onClick={() => setActiveTab('work')}
          className={`flex-1 py-0.5 rounded-md transition-colors duration-200 text-md font-semibold 
              ${activeTab === 'work' ? 'bg-[#111111] text-[#f2f2f2] shadow' : 'bg-transparent text-gray-400 hover:text-[#f2f2f2]'}`}
        >
          Work
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`flex-1 py-0.5 rounded-md transition-colors duration-200 text-md font-semibold 
            ${activeTab === 'education' ? 'bg-[#111111] text-[#f2f2f2] shadow' : 'bg-transparent text-gray-400 hover:text-[#f2f2f2]'}`}
        >
          Education
        </button>
      </div>
      <div ref={panelRef} style={{ marginTop: '1rem' }}>
        {activeTab === 'work' && <WorkPanel />}
        {activeTab === 'education' && <EducationPanel />}
      </div>
    </div>
  );
};

function WorkPanel() {
  const workItemRef = useRef(null);

  useEffect(() => {
    // Clean up any existing ScrollTriggers for this component
    const cleanup = () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger && 
            trigger.vars.trigger === workItemRef.current) {
          trigger.kill();
        }
      });
    };

    // Initial cleanup
    cleanup();

    // Wait for DOM to be ready and elements to be positioned
    const initAnimations = () => {
      // Ensure elements exist and are properly positioned
      if (!workItemRef.current) {
        return;
      }

      // Set initial states
      gsap.set(workItemRef.current, { opacity: 0, y: 30 });

      // Animate the work item
      gsap.fromTo(
        workItemRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: workItemRef.current,
            start: 'top 90%',
            end: 'top 80%',
            toggleActions: 'play none none reverse',
          },
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

  return (
    <div className="relative border rounded-md border-[#333333] pt-2 pl-2 pr-2">
      <div ref={workItemRef} className="text-white text-xl font-semibold relative z-10">
        <ExperienceItem
          image={WoohelpLogo}
          name="Woohelps International Technology LTD"
          date="May 2024 - Aug 2024"
          position="Software Development Engineering Intern"
          description={[
            "Developed a full‑stack platform enabling users to seamlessly post, search, and browse apartment listings.",
            "Built using React.js on the front end, Node.js/Express on the back end, and MySQL for robust data management.",
            "Built an automated image upload and optimization pipeline with AWS S3 and integrating WeChat's API for secure user authentication and real‑time notifications."
          ]}
        />
      </div>
    </div>
  );
}

function EducationPanel() {
  const educationItemRef = useRef(null);

  useEffect(() => {
    // Clean up any existing ScrollTriggers for this component
    const cleanup = () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger && 
            trigger.vars.trigger === educationItemRef.current) {
          trigger.kill();
        }
      });
    };

    // Initial cleanup
    cleanup();

    // Wait for DOM to be ready and elements to be positioned
    const initAnimations = () => {
      // Ensure elements exist and are properly positioned
      if (!educationItemRef.current) {
        return;
      }

      // Set initial states
      gsap.set(educationItemRef.current, { opacity: 0, y: 30 });

      // Animate the education item
      gsap.fromTo(
        educationItemRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: educationItemRef.current,
            start: 'top 90%',
            end: 'top 80%',
            toggleActions: 'play none none reverse',
          },
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

  return (
    <div className=' border rounded-md border-[#333333] pt-2 pl-2 pr-2'>
      <div ref={educationItemRef} className='text-white text-xl font-semibold'>
        <ExperienceItem
          image={UBCLogo}
          name="University of British Columbia"
          date="Sep 2024 - present"
          position="B.Sc. Computer Science; Minor in Mathematics (4.0 GPA)"
          description={["Related Coursework: Relational Databases (CPSC 304), DSA (CPSC 221), Computer Systems (CPSC 213), Software Construction and Design (CPSC 310)"]}
        />
      </div>
    </div>
  );
}

export default Experience;
