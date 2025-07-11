import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiLinkedin, FiGithub, FiMail, FiDownload} from 'react-icons/fi';
import mailLogo from '../assets/mail.svg';
import { HiOutlineArrowDownTray  } from 'react-icons/hi2';
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
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutElement,
          start: "top 70%",
          end: "top 30%",
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
      padding: '0',
      marginTop: 'auto',
      opacity: 0 
    }}>
      <div className="max-w-full mx-auto px-6 py-8">
        <h1 className="text-5xl font-bold font-serif text-white mb-6 flex items-center gap-2">
          hi elijah here
          <span className="text-yellow-400 text-5xl">👋</span>
        </h1>
        <div className="flex items-center">
          <div className="fluid-space-y">
            <p className="AboutMe-text">
              18-year-old developer and student from Vancouver 🇨🇦 
            </p>
            <p className="AboutMe-text">
              I like to develop apps and websites, fuel up on IKEA plants, and occasionally shoot under 100 on the golf course.
            </p>
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
          <div className="aspect-square w-[clamp(150px,250px,20vw)] object-cover border-4 shadow-lg ml-8 overflow-hidden">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
