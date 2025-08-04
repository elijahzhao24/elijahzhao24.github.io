import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import ShinyButton from "./ui/ShinyButton";
import { useNavigate, useLocation } from 'react-router-dom';
import {
  portfolioProjects,
  socialLinks,
} from "../lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (destination) => {
    if (destination === 'home') {
      // Scroll to top of homepage
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (destination === 'about') {
      // Scroll to AboutMe component
      const aboutMeElement = document.querySelector('.AboutMe');
      if (aboutMeElement) {
        aboutMeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (destination === 'projects') {
      // Navigate to projects page
      navigate('/projects');
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center" style={{marginTop: '12px'}}>
      <div
        className="flex flex-col justify-center antialiased relative border border-[#333333] rounded-xl mb-5 group lg:w-[900px] md:w-[700px] w-[80vw]"
        id="contact"
      >
      <div>
        <div className="space-y-5 pt-10 pr-10 pl-10">
          <h1 className="text-4xl font-bold max-w-2xl leading-[110%] relative z-10 text-white">
            Like what you see? Reach out to my {" "}
                         <a
               href="https://mail.google.com/mail/?view=cm&fs=1&to=elijahzhao24@gmail.com&su=Hello&body=I would like to connect!"
               target="_blank"
               rel="noopener noreferrer"
               className="highlight hover:text-yellow-500 border-b-2 border-yellow-300 hover:border-yellow-500 transition-colors duration-200"
             >
                email
             </a>{" "}
            to collaborate!
          </h1>

          <div className="mt-16 pb-5 flex flex-col md:flex-row justify-between gap-1 md:gap-0">
          <div className="space-y-2">
            <h3 className="text-md font-bold relative z-10 text-white">
              Elijah Zhao
            </h3>
            <p className="text-sm text-gray-400 relative z-10">
              &copy; {currentYear} | All rights reserved.
            </p>
          </div>

          <div className="flex justify-between gap-0 sm:gap-16">
            <ul className="space-y-2.5 relative z-10">
              <li className="text-md font-semibold text-white">Navigate</li>
              <li className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                <button onClick={() => handleNavigation('home')}>Home</button>
              </li>
              <li className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                <button onClick={() => handleNavigation('about')}>About</button>
              </li>
              <li className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                <button onClick={() => handleNavigation('projects')}>Projects</button>
              </li>
            </ul>


            <ul className="space-y-2.5 relative z-10">
              <li className="text-md font-semibold text-white">Socials</li>
              {socialLinks.map((link) => (
                <li
                  key={link.label}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>

        
        </div>
        <BackgroundBeams className="hidden sm:flex" />
      </div>
    </div>
  );
};

export default Footer; 