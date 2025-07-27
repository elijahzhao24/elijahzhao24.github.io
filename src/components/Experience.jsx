import React, { useState } from 'react';
import UBCLogo from '../assets/UBClogo.png'
import WoohelpLogo from '../assets/WoohelpLogo.png'
import ExperienceItem from './ExperienceItem';



const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  return (
    <div className='w-full flex flex-col items-center justify-center mt-[10vh]'>
      <div className="flex bg-[#242730] rounded-lg p-1 max-w-full  border-[#2d3644] lg:w-[900px] md:w-[700px] w-[80vw]">
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
      <div style={{ marginTop: '1rem' }}>
        {activeTab === 'work' && <WorkPanel />}
        {activeTab === 'education' && <EducationPanel />}
      </div>
    </div>
  );
};

function WorkPanel() {
  return (
    <div className="relative border rounded-md border-[#333333] pt-2 pl-2 pr-2">
      {/* Vertical line */}
      <div
        className="absolute top-0 bottom-0 left-[6vw] lg:left-[32px] md:left-[32px] sm:left-[5vw]"
        style={{
          width: '1.5px',
          background: '#333333',
          zIndex: 0,
        }}
      />
      <div className="text-white text-xl font-semibold relative z-10">
        <ExperienceItem
          image={WoohelpLogo}
          name="Woohelps International Technology LTD"
          date="May 2024 - Aug 2024"
          position="Software Development Engineering Intern"
          description={[
            "Developed a full‑stack platform enabling users to seamlessly post, search, and browse apartment listings.",
            "Built using React.js on the front end, Node.js/Express on the back end, and MySQL for robust data management.",
            "Built an automated image upload and optimization pipeline with AWS S3 and integrating WeChat’s API for secure user authentication and real‑time notifications."
          ]}
        />
      </div>
    </div>
  );
}

function EducationPanel() {
  return (
    <div className=' border rounded-md border-[#333333] pt-2 pl-2 pr-2'>
      <div className='text-white text-xl font-semibold'>
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
