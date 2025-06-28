import React, { useEffect, useRef } from 'react';
import TechWidget from './TechWidget';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function CurrentTech() {


  return (
    <div className="AboutMe" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '20vh',
      padding: '0',
      marginTop: 'auto',
    }}>
      <div className="max-w-full ml-0 px-4">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2 justify-start">
          Current Technologies  
        </h1>   
        <div className="max-w-full pb-4"
        style={{
          fontSize: '0.7rem',
          color: '#999',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}>
          I'm proficient in a range of technologies. These are some of my main technologies
        </div>
        <div>
            <TechWidget/>
        </div>
      </div>
    </div>
    
  );
}
