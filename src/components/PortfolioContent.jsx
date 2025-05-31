import React, { forwardRef } from 'react';

const PortfolioContent = forwardRef((props, ref) => (
  <div
    ref={ref}
    className="portfolio-content"
    style={{
      position: 'absolute',
      top: '50vh',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      opacity: 0,
      zIndex: 10,
      width: '80vw',
      maxWidth: '1000px',
      padding: '3px 10px 0px',
      pointerEvents: 'none',
    }}
  >
    {/* Location */}
    <div style={{
      whiteSpace: 'nowrap',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#ccc',
      fontSize: '0.5rem',
      marginBottom: '0.0rem',
      fontWeight: 600,
    }}>
      Based in Vancouver
    </div>

    {/* Headline */}
    <div style={{
      fontSize: "clamp(1.5rem, 4.5rem, 7vw)",
      fontWeight: 800,
      color: '#fff',
      lineHeight: 1.1,
      marginBottom: '1.2rem',
    }}>
      Bringing <span className="highlight">Ideas to Life</span> <br /> with Code and Design
    </div>

    {/* Bio */}
    <div style={{
      marginTop: '0.1rem',
      whiteSpace: 'normal',
      fontSize: '0.7  rem',
      color: '#999',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      lineHeight: 1,
    }}>
      Hi, I'm Elijah Zhao. I create intutive visually appealing and highly functional applications.
    </div>
  </div>
));

export default PortfolioContent;