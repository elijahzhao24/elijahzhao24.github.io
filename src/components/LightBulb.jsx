import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);

export default function LightBulb() {
  const stringRef = useRef(null);
  const dragRef = useRef(null);
  const lineRef = useRef(null);
  const [handlePosition, setHandlePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!dragRef.current) return;
    
    const updateLinePosition = () => {
      if (lineRef.current) {
        gsap.set(lineRef.current, {
          attr: {
            x2: 20 + handlePosition.x,
            y2: window.innerHeight * 0.40 + handlePosition.y
          }
        });
      }
    };

    window.addEventListener('resize', updateLinePosition);
    
    Draggable.create(dragRef.current, {
      type: 'x, y',
      bounds: { minY: 0, maxY: window.innerHeight * 0.75 }, 
      inertia: true,
      onDrag: function() {
        setHandlePosition({ x: this.x, y: this.y });
        if (lineRef.current) {
          gsap.set(lineRef.current, {
            attr: {
              x2: 20 + this.x,
              y2: window.innerHeight * 0.40 + this.y
            }
          });
        }
      },
      onRelease: function () {
        // Snap back animation
        document.body.classList.toggle('on');
        gsap.to(dragRef.current, {
          y: 0,
          x: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)',
          onComplete: () => {
            setHandlePosition({ x: 0, y: 0 });
          },
        });
        // Animate the line back
        if (lineRef.current) {
          gsap.to(lineRef.current, {
            attr: {
              x2: 20,
              y2: window.innerHeight * 0.40
            },
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)'
          });
        }
      },
    });

    return () => {
      window.removeEventListener('resize', updateLinePosition);
    };
  }, []);

  return (
    <div className="light" style={{ position: 'relative' }}>
      <div className="wire"></div>
      <div className="bulb">
        <span></span>
        <span></span>
      </div>
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
          pointerEvents: 'auto',
          transform: `translate(${handlePosition.x}px, ${handlePosition.y}px)`,
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