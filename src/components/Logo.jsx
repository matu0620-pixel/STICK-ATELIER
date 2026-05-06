import React from 'react';

/**
 * Editorial wordmark logo for STICK ATELIER.
 * Layout: serif "STICK" / decorative line with gold dot / sans-serif "ATELIER".
 */
export default function Logo({ size = 'large' }) {
  const dims = size === 'large'
    ? { w: 220, h: 70, stickFs: 24, atelierFs: 9, dotR: 1.8 }
    : { w: 140, h: 46, stickFs: 16, atelierFs: 6.5, dotR: 1.2 };
  return (
    <svg viewBox={`0 0 ${dims.w} ${dims.h}`} width={dims.w} height={dims.h} style={{ display: 'block' }}>
      <text
        x={dims.w / 2}
        y={dims.h * 0.46}
        textAnchor="middle"
        fontFamily="'Times New Roman', serif"
        fontSize={dims.stickFs}
        fontWeight="500"
        letterSpacing={dims.stickFs * 0.25}
        fill="#2C4A6E"
      >
        STICK
      </text>
      <line x1={dims.w * 0.18} y1={dims.h * 0.62} x2={dims.w * 0.43} y2={dims.h * 0.62} stroke="#C4A878" strokeWidth="0.5" />
      <circle cx={dims.w / 2} cy={dims.h * 0.62} r={dims.dotR} fill="#C4A878" />
      <line x1={dims.w * 0.57} y1={dims.h * 0.62} x2={dims.w * 0.82} y2={dims.h * 0.62} stroke="#C4A878" strokeWidth="0.5" />
      <text
        x={dims.w / 2}
        y={dims.h * 0.84}
        textAnchor="middle"
        fontFamily="'Helvetica Neue', sans-serif"
        fontSize={dims.atelierFs}
        fontWeight="500"
        letterSpacing={dims.atelierFs * 0.7}
        fill="#2C4A6E"
      >
        ATELIER
      </text>
    </svg>
  );
}
