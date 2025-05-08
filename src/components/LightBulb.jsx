import React, { useState } from 'react';

export default function LightBulb() {
  const [isOn, setIsOn] = useState(false);

  // Colors from reference
  const bgColor = '#2d2d2d'; // matte dark background
  const bulbOff = '#444';    // bulb when off
  const bulbOn = '#fff';     // bulb when on
  const socketColor = '#111';
  const cordColor = '#111';

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ background: bgColor }}
    >
      <svg
        width="320"
        height="400"
        viewBox="0 0 320 400"
        style={{ cursor: 'pointer', display: 'block' }}
        onClick={() => setIsOn((v) => !v)}
      >
        <defs>
          {/* Glow effect when on */}
          <radialGradient id="bulb-glow" cx="50%" cy="60%" r="60%">
            <stop offset="0%" stopColor={bulbOn} stopOpacity={isOn ? 1 : 0} />
            <stop offset="60%" stopColor={bulbOn} stopOpacity={isOn ? 0.5 : 0} />
            <stop offset="100%" stopColor={bulbOn} stopOpacity={isOn ? 0 : 0} />
          </radialGradient>
        </defs>
        {/* Glow */}
        {isOn && (
          <circle
            cx="160"
            cy="210"
            r="140"
            fill="url(#bulb-glow)"
          />
        )}
        {/* Cord */}
        <rect x="150" y="0" width="20" height="90" rx="10" fill={cordColor} />
        {/* Socket */}
        <rect x="120" y="90" width="80" height="40" rx="20" fill={socketColor} />
        {/* Bulb */}
        <ellipse
          cx="160"
          cy="210"
          rx="80"
          ry="110"
          fill={isOn ? bulbOn : bulbOff}
          style={{
            filter: isOn ? 'drop-shadow(0 0 60px #fff8)' : 'none',
            transition: 'fill 0.2s, filter 0.2s',
          }}
        />
        {/* Bulb outline */}
        <ellipse
          cx="160"
          cy="210"
          rx="80"
          ry="110"
          fill="none"
          stroke="#222"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
} 