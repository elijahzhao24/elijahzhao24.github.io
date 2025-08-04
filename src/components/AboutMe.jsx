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
          start: 'top 77%',
          end: 'top 60%',
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
          start: 'top 77%',
          end: 'top 60%',
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
          start: 'top 77%',
          end: 'top 60%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.4
      }
    );

    ScrollTrigger.refresh();
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
      padding: '0',
      marginTop: 'auto'
    }}>
      <div className="max-w-full mx-auto px-6 py-8">
        <h1 ref={headingRef} style={{ opacity: 0 }} className="text-5xl font-bold font-serif text-white mb-6 flex items-center gap-2">
          hi elijah here
          <span className="text-yellow-400 text-5xl">👋</span>
        </h1>
        <div className="flex items-center">
          <div ref={contentRef} style={{ opacity: 0 }} className="fluid-space-y">
            <div className="space-y-5">
            <p className="AboutMe-text">
            I am a second year computer science student at the University of British Columbia. My interests currently lie in software development and machine learning. I also like to golf and practice piano in my free time.
            </p>
            <p className="AboutMe-text">
            I am currently building a fullstack NBA parley prediction platform, using React, Spring Boot, and PostgreSQL.
            </p>
            </div>
            <div className="flex items-center justify-start w-full ml-auto fluid-gap">
              <a
                href="/portfolio/Elijah_Zhao_Resume.pdf"
                download
                className="flex items-center gap-2 border border-gray-500 rounded-md px-4 py-2 text-gray-300 hover:text-white hover:border-white transition"
              >
                <span className="font-medium">Resume</span>
                <HiOutlineArrowDownTray size={'clamp(20, 30, 30)'} />
              </a>
              <button
                  onClick={() => window.open('https://www.linkedin.com/in/elijahzhao24/')}
                >
                  <FiLinkedin
                    size={'clamp(20, 35, 35)'}
                    className="text-[#bbbbbb] hover:text-white transition-colors"
                  />
                </button>
                <button onClick={() => window.open('https://github.com/elijahzhao24')}>
                  <FiGithub 
                    size={'clamp(20, 35, 35)'}
                    className="text-[#bbbbbb] hover:text-white transition-colors"/>
                </button>
                <button onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=elijahzhao24@gmail.com&su=Hello&body=I would like to connect!')}>
                  { <FiMail 
                    size={'clamp(20, 35, 35)'}
                    className="text-[#bbbbbb] hover:text-white transition-colors"/> }
                </button> 
                
              
            </div>
          </div>
          <div ref={imageRef} style={{ opacity: 0 }} className="aspect-[4/5] w-[clamp(150px,250px,20vw)] object-cover shadow-lg ml-8 overflow-hidden">
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
