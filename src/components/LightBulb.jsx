import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import PortfolioContent from './PortfolioContent';
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(Draggable);

export default function LightBulb() {
  const stringRef = useRef(null);
  const dragRef = useRef(null);
  const lineRef = useRef(null);
  const bulbRef = useRef(null);
  const wireRef = useRef(null);
  const portfolioRef = useRef(null);
  const handleWrapperRef = useRef(null);
  const draggableInstance = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const resetOnUnload = () => {
      sessionStorage.removeItem('lampState');
    };

    window.addEventListener('beforeunload', resetOnUnload);
    return () => window.removeEventListener('beforeunload', resetOnUnload);
  }, []);

  const syncLineToHandle = useCallback(() => {
    if (!stringRef.current || !lineRef.current || !dragRef.current) return;

    const stringBox = stringRef.current.getBoundingClientRect();
    const handleBox = dragRef.current.getBoundingClientRect();

    if (!stringBox || !handleBox || (stringBox.width === 0 && stringBox.height === 0)) {
      return;
    }

    const attachX = handleBox.left + handleBox.width / 2 - stringBox.left;
    const attachY = handleBox.top + handleBox.height / 2 - stringBox.top;

    gsap.set(lineRef.current, {
      attr: {
        x2: attachX,
        y2: attachY
      }
    });
  }, []);

  const finalizeSync = useCallback(() => {
    syncLineToHandle();
    draggableInstance.current?.update?.();
  }, [syncLineToHandle]);

  const updateBounds = useCallback(() => {
    if (!draggableInstance.current) return;
    const isOn = document.body.classList.contains('on');
    const bounds = {
      minY: isOn ? -window.innerHeight * 0.4 : 0,
      maxY: window.innerHeight * 0.75,
    };

    draggableInstance.current.vars.bounds = bounds;
    draggableInstance.current.applyBounds(bounds);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const applyOffState = () => {
      document.body.classList.remove('on');
      gsap.set('.bulb', { y: '0' });
      gsap.set(wireRef.current, { y: '0' });
      gsap.set('.idea-text', { opacity: 1, filter: "blur(0px)" });
      if (portfolioRef.current) {
        gsap.set(portfolioRef.current, { opacity: 0 });
      }
      if (handleWrapperRef.current) {
        gsap.set(handleWrapperRef.current, { y: 0 });
      }
      if (dragRef.current) {
        gsap.set(dragRef.current, { y: 0, x: 0 });
      }
      sessionStorage.setItem('lampState', 'off');
      updateBounds();
      requestAnimationFrame(() => finalizeSync());
    };

    const applyOnState = () => {
      document.body.classList.add('on');
      gsap.set('.bulb', { y: '-15vh' });
      gsap.set(wireRef.current, { y: '-15vh' });
      gsap.set('.idea-text', { opacity: 0, filter: "blur(6px)" });
      if (portfolioRef.current) {
        gsap.set(portfolioRef.current, { opacity: 1 });
      }
      if (handleWrapperRef.current) {
        gsap.set(handleWrapperRef.current, { y: -window.innerHeight * 0.3 });
      }
      if (dragRef.current) {
        gsap.set(dragRef.current, { y: 0, x: 0 });
      }
      sessionStorage.setItem('lampState', 'on');
      updateBounds();
      requestAnimationFrame(() => finalizeSync());
    };

    const storedState = sessionStorage.getItem('lampState');

    if (storedState === 'on') {
      requestAnimationFrame(() => applyOnState());
    } else {
      applyOffState();
    }
  }, [finalizeSync, location.pathname, updateBounds]);

  useLayoutEffect(() => {
    if (!dragRef.current || !handleWrapperRef.current) return;
    const [draggable] = Draggable.create(dragRef.current, {
      type: 'x,y',
      bounds: {
        minY: document.body.classList.contains('on')
                ? -window.innerHeight * 0.4
                : 0,
        maxY: window.innerHeight * 0.75,
      },
      inertia: true,

      onPress() {
        this.update();
        syncLineToHandle();
      },

      onDrag() {
        syncLineToHandle();
      },

      onRelease() {
        document.body.classList.toggle('on');
        sessionStorage.setItem('lampState', document.body.classList.contains('on') ? 'on' : 'off');
        updateBounds();

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
            ease: 'elastic.out(1, 0.5)',
            onUpdate: syncLineToHandle
          });

          gsap.to(lineRef.current, {
            attr: {
              x2: 20,
              y2: window.innerHeight * 0.40
            },
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
            onUpdate: syncLineToHandle
          });

          gsap.to(handleWrapperRef.current, {
            y: -window.innerHeight * 0.3,
            duration: 0.6,
            ease: "power2.inOut",
            delay: 0.3,
            onUpdate: syncLineToHandle
          });

          gsap.to(lineRef.current, {
            attr: {
              x2: 20,
              y2: window.innerHeight * 0.1
            },
            ease: "power2.inOut",
            duration: 0.6,
            delay: 0.3,
            onUpdate: syncLineToHandle
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
            y: 0,
            x: 0,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
            onUpdate: syncLineToHandle
          });

          gsap.to(handleWrapperRef.current, {
            y: -window.innerHeight * 0.3,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
            onUpdate: syncLineToHandle
          });

          gsap.to(lineRef.current, {
            attr: {
              x2: 20,
              y2: window.innerHeight * 0.1
            },
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
            onUpdate: syncLineToHandle
          });

          gsap.to(handleWrapperRef.current, {
            y: 0,
            duration: 0.6,
            ease: "power2.inOut",
            delay: 0.3,
            onUpdate: syncLineToHandle
          });

          gsap.to(lineRef.current, {
            attr: {
              x2: 20,
              y2: window.innerHeight * 0.40
            },
            ease: "power2.inOut",
            duration: 0.6,
            delay: 0.3,
            onUpdate: syncLineToHandle
          });
        }

        gsap.delayedCall(1, finalizeSync);
      },
    });

    draggableInstance.current = draggable;
    updateBounds();
    finalizeSync();

    const handleResize = () => {
      if (!dragRef.current || !handleWrapperRef.current) return;
      const isOn = document.body.classList.contains('on');

      gsap.set(handleWrapperRef.current, {
        y: isOn ? -window.innerHeight * 0.3 : 0
      });
      gsap.set(dragRef.current, { y: 0, x: 0 });

      updateBounds();
      draggableInstance.current?.update?.();
      finalizeSync();
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
      draggableInstance.current = null;
      draggable.kill();
    };
  }, [finalizeSync, syncLineToHandle, updateBounds]);

  return (
    <div className="light" style={{ position: 'relative', height: '100vh' }}>
      <div className="wire" ref={wireRef}></div>
      <div className="bulb" ref={bulbRef}>
        <span></span>
        <span></span>
      </div>
        <p className="idea-text absolute top-[75vh] left-1/2 transform -translate-x-1/2 text-center w-auto whitespace-nowrap m-0 px-5 md:text-xl" >
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
        ref={handleWrapperRef}
        style={{
          position: 'absolute',
          left: 'calc(50% + 70px)',
          top: 'calc(40vh - 20px)',
          width: 40,
          height: 40,
          zIndex: 3,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          ref={dragRef}
          style={{  
            width: 40,
            height: 40,
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
    </div>
  );
} 
