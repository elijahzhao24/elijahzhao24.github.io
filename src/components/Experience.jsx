import React, { useState } from 'react';
import UBCLogo from '../assets/UBClogo.png'
import ExperienceItem from './ExperienceItem';


const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  return (
    <div className='w-full flex flex-col items-center justify-center mt-[10vh]'>
      <div className="flex bg-[#242730] rounded-lg p-1 max-w-full  border-[#2d3644] lg:w-[700px] md:w-[700px] w-[80vw]">
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
    <div className='text-white text-xl font-semibold'>

      <h2>Woohelps</h2>
      <p>second work</p>
    </div>
  );
}

function EducationPanel() {
  return (
    <div className='text-white text-xl font-semibold'>
      <ExperienceItem
        image={UBCLogo}
        name="UBC"
        date="sep 2024 - present"
        position="BSc computer science"
        description="bacherlor in computer science"
      />
      <ExperienceItem
        image={UBCLogo}
        name="UBC"
        date="sep 2024 - present"
        position="BSc computer science"
        description="bacherlor in computer science"
      />
    </div>
  );
}

export default Experience;
