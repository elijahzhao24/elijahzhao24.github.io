import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiLinkedin, FiGithub, FiMail, FiDownload} from 'react-icons/fi';
import mailLogo from '../assets/mail.svg';
import profile from '../assets/demo3.png';
import { HiOutlineArrowDownTray  } from 'react-icons/hi2';
import profilePic from '../assets/profile.png';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const aboutRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Clean up any existing ScrollTriggers for this component
    const cleanup = () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && trigger.vars.trigger && 
            (trigger.vars.trigger === headingRef.current || 
             trigger.vars.trigger === contentRef.current ||
             trigger.vars.trigger === imageRef.current)) {
          trigger.kill();
        }
      });
    };

    // Initial cleanup
    cleanup();

    // Wait for DOM to be ready and elements to be positioned
    const initAnimations = () => {
      // Ensure elements exist and are properly positioned
      if (!headingRef.current || !contentRef.current || !imageRef.current) {
        return;
      }

      // Set initial states
      gsap.set(headingRef.current, { opacity: 0, y: 50 });
      gsap.set(contentRef.current, { opacity: 0, y: 30 });
      gsap.set(imageRef.current, { opacity: 0, scale: 0.8 });

      // Animate the heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 73%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate the content (text and buttons)
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 90%',
            end: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.2
        }
      );

      // Animate the profile image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 90%',
            end: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.4
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
    <div ref={aboutRef} className="AboutMe
       w-full flex justify-center items-center
       min-h-[50vh]" 
    >
       <div className="mx-auto w-[95vw] lg:w-[69vw] md:w-[80vw] px-4 sm:px-6 md:px-8">
          <h1 ref={headingRef} className="text-5xl font-bold font-serif text-white mb-6 flex items-center gap-2">
            hi elijah here
            <span className="text-yellow-400 text-5xl">👋</span>
          </h1>
            <div className="flex items-start gap-4 md:gap-6 lg:gap-8">
               <div ref={contentRef} className="fluid-space-y flex-1">
            <div className="space-y-5">
              <p className="AboutMe-text">
                I am a second year computer science student at the University of British Columbia. My interests currently lie in software development and machine learning. I also like to golf and practice piano in my free time.
              </p>
              <p className="AboutMe-text">
                I am currently building a machine learning model to predict the outcome of NBA games using a gradient boosting classifier.
              </p>
            </div>
            <div className="flex items-center justify-start w-full ml-auto gap-6">
              <a
                href="/eiljahzhaoresume.pdf"
                download
                className="flex items-center gap-0 border border-gray-500 rounded-md px-4 py-2 text-gray-300 hover:text-white hover:border-white transition"
              >
                <span className="font-medium">Resume</span>
                <HiOutlineArrowDownTray className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 -ml-2" />
              </a>
              <button
                onClick={() => window.open('https://www.linkedin.com/in/elijahzhao24/')}
                className="p-2"
              >
                <FiLinkedin
                  className="text-[#bbbbbb] hover:text-white transition-colors w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-10 lg:h-10"
                />
              </button>
              <button 
                onClick={() => window.open('https://github.com/elijahzhao24')}
                className="p-2"
              >
                <FiGithub 
                  className="text-[#bbbbbb] hover:text-white transition-colors w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-10 lg:h-10"/>
              </button>
              <button 
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=elijahzhao24@gmail.com&su=Hello&body=I would like to connect!')}
                className="p-2"
              >
                { <FiMail 
                  className="text-[#bbbbbb] hover:text-white transition-colors w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-10 lg:h-10"/> }
              </button>  
            </div>
          </div>
          <div ref={imageRef} className="aspect-[4/5] w-[clamp(100px,17vw,250px)] shadow-lg overflow-hidden flex-shrink-0">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}