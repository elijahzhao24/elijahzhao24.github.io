import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import PortfolioContent from './PortfolioContent';
gsap.registerPlugin(Draggable);

export default function LightBulb() {
  const stringRef = useRef(null);
  const dragRef = useRef(null);
  const lineRef = useRef(null);
  const bulbRef = useRef(null);
  const wireRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    if (!dragRef.current) return;

    const getOffsetY = () => (document.body.classList.contains('on') ? -window.innerHeight * 0.3 : 0);

    const updateLine = (x, y) => {
      const offsetY = getOffsetY();
      gsap.set(lineRef.current, {
        attr: { x2: 20 + x, y2: window.innerHeight * 0.40 + y + offsetY }
      });
    };

    Draggable.create(dragRef.current, {
      type: 'x,y',
      bounds: {
        minY: document.body.classList.contains('on')
                ? -window.innerHeight * 0.4
                : 0,
        maxY: window.innerHeight * 0.75,
      },
      inertia: true,

      onPress() {
        gsap.set(this.target, { x: this.x, y: this.y + getOffsetY() });
        updateLine(this.x, this.y);
      },

      onDrag() {
        gsap.set(this.target, { x: this.x, y: this.y + getOffsetY() });
        updateLine(this.x, this.y);
      },

      onRelease() {
        document.body.classList.toggle('on');

        if (document.body.classList.contains('on')) {
          // Animate the lightbulb up
          gsap.to('.bulb', {
            y: '-15vh',
            duration: 1,
            ease: "power2.inOut"
          });

          // Animate the wire up
          gsap.to(wireRef.current, {
            y: '-15vh',
            duration: 1,
            ease: "power2.inOut"
          });
          
          gsap.to('.idea-text', {
            opacity: 0,
            filter: "blur(6px)",
            duration: 1,
            ease: "power2.out"
          });

          // Fade in portfolio content
          gsap.to(portfolioRef.current, {
            opacity: 1,
            duration: 1,
            delay: 0.5,
            ease: "power2.inOut",
            onStart: () => {
              console.log('Starting portfolio fade in');
            }
          });

          gsap.to(dragRef.current, {
            y: 0,
            x: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)'
          });

          gsap.to(lineRef.current, {
            attr: {
              x2: 20,
              y2: window.innerHeight * 0.40
            },
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)'
          });

          gsap.to(dragRef.current, {
            y: -window.innerHeight * 0.3,
            x: 0,
            duration: 0.6,
            ease: "power2.inOut",
            delay: 0.3
          });

          gsap.to(lineRef.current, {
            attr: {
              x2: 20,
              y2: window.innerHeight * 0.1
            },
            ease: "power2.inOut",
            duration: 0.6,
            delay: 0.3
          });

        } else {
          // Animate the lightbulb back down
          gsap.to('.bulb', {
            y: '0',
            duration: 1,
            ease: "power2.inOut"
          });

          // Animate the wire back down
          gsap.to(wireRef.current, {
            y: '0',
            duration: 1,
            ease: "power2.inOut"
          });

          gsap.to('.idea-text', {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.in"
          });

          // Fade out portfolio content
          gsap.to(portfolioRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.in",
            onStart: () => {
              console.log('Starting portfolio fade out');
            }
          });

          // Snap back animation
          gsap.to(dragRef.current, {
            y: -window.innerHeight * 0.3,
            x: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)'
          });

          gsap.to(lineRef.current, {
            attr: {
              x2: 20,
              y2: window.innerHeight * 0.1
            },
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)'
          });

          gsap.to(dragRef.current, {
            y: 0,
            x: 0,
            duration: 0.6,
            ease: "power2.inOut",
            delay: 0.3
          });

          gsap.to(lineRef.current, {
            attr: {
              x2: 20,
              y2: window.innerHeight * 0.40
            },
            ease: "power2.inOut",
            duration: 0.6,
            delay: 0.3  
          });
        }
      },
    });

    const handleResize = () => {
      // Get the current x and y of the handle (from GSAP)
      const x = gsap.getProperty(dragRef.current, "x") || 0;
      const y = gsap.getProperty(dragRef.current, "y") || 0;
      
      // Update the string to match the handle's position and offset
      const isOn = document.body.classList.contains('on');
      const baseY = isOn ? window.innerHeight * 0.10 : window.innerHeight * 0.40;
      
      // Update handle position
      gsap.set(dragRef.current, {
        y: isOn ? -window.innerHeight * 0.3 : 0
      });

      // Update line position
      gsap.set(lineRef.current, {
        attr: { 
          x2: 20 + x, 
          y2: baseY
        }
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="light" style={{ position: 'relative', height: '100vh' }}>
      <div className="wire" ref={wireRef}></div>
      <div className="bulb" ref={bulbRef}>
        <span></span>
        <span></span>
      </div>
      <p className="idea-text" style={{ 
            position: 'absolute',
            top: '75vh',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '1.2rem',
            textAlign: 'center',
            width: 'auto',
            whiteSpace: 'nowrap',
            margin: 0,
            padding: '0 20px'
          }}>
            <span className="highlight">Ideas</span> stay dark until the right switch is finally flipped.
      </p>
      <PortfolioContent ref={portfolioRef} />
      {/* Tuggable string */}
      <svg
        ref={stringRef}
        width="200"
        height="40vh"
        style={{
          position: 'absolute',
          left: 'calc(50% + 70px)',
          top: 0,
          zIndex: 2,
          pointerEvents: 'none',
          overflow: 'visible'
        }}
      >
        <line
          ref={lineRef}
          x1="20"
          y1="0"
          x2="20"
          y2="40vh"
          stroke="#D4AF37"
          strokeWidth="3"
        />
      </svg>
      {/* Draggable handle */}
      <div
        ref={dragRef}
        style={{  
          position: 'absolute',
          left: 'calc(50% + 70px)',
          top: 'calc(40vh - 20px)',
          width: 40,
          height: 40,
          zIndex: 3,
          cursor: 'grab',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'auto'
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: '#D4AF37',
            boxShadow: '0 2px 8px #0002',
          }}
        ></div>
      </div>
    </div>
  );
} 