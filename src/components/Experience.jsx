import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  return (
    <div style={{ 
      padding: '0vh',
      marginTop: '10vh',
    }}>
      <div style={{ display: 'flex', borderBottom: '2px solid #eee', marginBottom: '1rem' }}>
        <button
          onClick={() => setActiveTab('work')} className='text-white text-xl font-semibold'
          style={{
            flex: 1,
            padding: '0.5rem',
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'work' ? '2px solid #333' : '2px solid transparent',
            fontWeight: activeTab === 'work' ? 'bold' : 'normal',
            cursor: 'pointer'
          }}
        >
          Work
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className='text-white text-xl font-semibold'
          style={{
            flex: 1,
            padding: '0.5rem',
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'education' ? '2px solid #333' : '2px solid transparent',
            fontWeight: activeTab === 'education' ? 'bold' : 'normal',
            cursor: 'pointer'
          }}
        >
          Education
        </button>
      </div>

      <div>
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
      <h2>University of British Columbia, BSc Computer Science</h2>
      <p>more</p>
    </div>
  );
}

export default Experience;
