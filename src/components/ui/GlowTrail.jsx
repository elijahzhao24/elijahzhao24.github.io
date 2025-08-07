import React, { useEffect, useRef, useState } from 'react';

export default function GlowTrail() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const circlesRef = useRef([]);
  const animationRef = useRef(null);
  const coordsRef = useRef({ x: 0, y: 0 });

  const colors = [
    "hsl(51, 100%, 60.0%)",
    "hsl(51, 100%, 59.8%)",
    "hsl(51, 100%, 59.6%)",
    "hsl(51, 100%, 59.4%)",
    "hsl(51, 100%, 59.2%)",
    "hsl(51, 100%, 59.0%)",
    "hsl(51, 100%, 58.8%)",
    "hsl(51, 100%, 58.6%)",
    "hsl(51, 100%, 58.4%)",
    "hsl(51, 100%, 58.2%)",
    "hsl(51, 100%, 58.0%)",
    "hsl(51, 100%, 57.8%)",
    "hsl(51, 100%, 57.6%)",
    "hsl(51, 100%, 57.4%)",
    "hsl(51, 100%, 57.2%)",
    "hsl(51, 100%, 57.0%)",
    "hsl(51, 100%, 56.8%)",
    "hsl(51, 100%, 56.6%)",
    "hsl(51, 100%, 56.4%)",
    "hsl(51, 100%, 56.2%)",
    "hsl(51, 100%, 56.0%)",
    "hsl(51, 100%, 55.8%)",
    "hsl(51, 100%, 55.6%)",
    "hsl(51, 100%, 55.4%)",
    "hsl(51, 100%, 55.2%)",
    "hsl(51, 100%, 55.0%)",
    "hsl(51, 100%, 54.8%)",
    "hsl(51, 100%, 54.6%)",
    "hsl(51, 100%, 54.4%)",
    "hsl(51, 100%, 54.2%)",
    "hsl(51, 100%, 54.0%)",
    "hsl(51, 100%, 53.8%)",
    "hsl(51, 100%, 53.6%)",
    "hsl(51, 100%, 53.4%)",
    "hsl(51, 100%, 53.2%)",
    "hsl(51, 100%, 53.0%)",
    "hsl(51, 100%, 52.8%)",
    "hsl(51, 100%, 52.6%)",
    "hsl(51, 100%, 52.4%)",
    "hsl(51, 100%, 52.2%)",
    "hsl(51, 100%, 52.0%)",
    "hsl(51, 100%, 51.8%)",
    "hsl(51, 100%, 51.6%)",
    "hsl(51, 100%, 51.4%)",
    "hsl(51, 100%, 51.2%)",
    "hsl(51, 100%, 51.0%)",
    "hsl(51, 100%, 50.8%)",
    "hsl(51, 100%, 50.6%)",
    "hsl(51, 100%, 50.4%)",
    "hsl(51, 100%, 50.2%)",
    "hsl(51, 100%, 50.0%)",
    "hsl(51, 100%, 49.8%)",
    "hsl(51, 100%, 49.6%)",
    "hsl(51, 100%, 49.4%)",
    "hsl(51, 100%, 49.2%)",
    "hsl(51, 100%, 49.0%)",
    "hsl(51, 100%, 48.8%)",
    "hsl(51, 100%, 48.6%)",
    "hsl(51, 100%, 48.4%)",
    "hsl(51, 100%, 48.2%)",
    "hsl(51, 100%, 48.0%)",
    "hsl(51, 100%, 47.8%)",
    "hsl(51, 100%, 47.6%)",
    "hsl(51, 100%, 47.4%)",
    "hsl(51, 100%, 47.2%)",
    "hsl(51, 100%, 47.0%)",
    "hsl(51, 100%, 46.8%)",
    "hsl(51, 100%, 46.6%)",
    "hsl(51, 100%, 46.4%)",
    "hsl(51, 100%, 46.2%)",
    "hsl(51, 100%, 46.0%)",
    "hsl(51, 100%, 45.8%)",
    "hsl(51, 100%, 45.6%)",
    "hsl(51, 100%, 45.4%)",
    "hsl(51, 100%, 45.2%)",
    "hsl(51, 100%, 45.0%)",
    "hsl(51, 100%, 44.8%)",
    "hsl(51, 100%, 44.6%)",
    "hsl(51, 100%, 44.4%)",
    "hsl(51, 100%, 44.2%)",
    "hsl(51, 100%, 44.0%)",
    "hsl(51, 100%, 43.8%)",
    "hsl(51, 100%, 43.6%)",
    "hsl(51, 100%, 43.4%)",
    "hsl(51, 100%, 43.2%)",
    "hsl(51, 100%, 43.0%)",
    "hsl(51, 100%, 42.8%)",
    "hsl(51, 100%, 42.6%)",
    "hsl(51, 100%, 42.4%)",
    "hsl(51, 100%, 42.2%)",
    "hsl(51, 100%, 42.0%)",
    "hsl(51, 100%, 41.8%)",
    "hsl(51, 100%, 41.6%)",
    "hsl(51, 100%, 41.4%)",
    "hsl(51, 100%, 41.2%)",
    "hsl(51, 100%, 41.0%)",
    "hsl(51, 100%, 40.8%)",
    "hsl(51, 100%, 40.6%)",
    "hsl(51, 100%, 40.4%)",
    "hsl(51, 100%, 40.2%)",
    "hsl(51, 100%, 40.0%)",
  ];
  
  useEffect(() => {
    const checkLightState = () => {
      const isOn = document.body.classList.contains('on');
      setIsLightOn(isOn);
    };

    checkLightState();
    const observer = new MutationObserver(checkLightState);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    const handleMouseMove = (e) => {
      coordsRef.current.x = e.clientX;
      coordsRef.current.y = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const initializeCircles = () => {
      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          circle.x = coordsRef.current.x;
          circle.y = coordsRef.current.y;
          circle.style.left = coordsRef.current.x - 12 + "px";
          circle.style.top = coordsRef.current.y - 12 + "px";
          circle.style.backgroundColor = colors[index % colors.length];
        }
      });
    };

    const animateCircles = () => {
      if (!isLightOn) {
        animationRef.current = requestAnimationFrame(animateCircles);
        return;
      }

      let x = coordsRef.current.x;
      let y = coordsRef.current.y;

      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          circle.style.left = x  + "px";
          circle.style.top = y + "px";
          circle.style.scale = (circlesRef.current.length - index) / circlesRef.current.length;
          circle.style.backgroundColor = colors[index % colors.length];

          circle.x = x;
          circle.y = y;

          const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
          x += (nextCircle.x - x) * 0.25;
          y += (nextCircle.y - y) * 0.25;
        }
      });

      animationRef.current = requestAnimationFrame(animateCircles);
    };

    const timer = setTimeout(() => {
      initializeCircles();
      animateCircles();
    }, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLightOn]);

  if (!isLightOn) return null;

  // Create 20 circles
  const circles = Array.from({ length: 100 }, (_, index) => (
    <div
      key={index}
      ref={el => circlesRef.current[index] = el}
      className="circle"
      style={{
        height: '24px',
        width: '24px',
        borderRadius: '50%',
        backgroundColor: colors[index % colors.length],
        position: 'fixed',
        top: '50vh',
        left: '50vw',
        pointerEvents: 'none',
        opacity: 0.01,
        marginLeft: '-12px',
        marginTop: '-12px',
        zIndex: -10000
      }}
    />
  ));

  return <>{circles}</>;
} 