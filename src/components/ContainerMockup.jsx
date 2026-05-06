import React from 'react';

export default function ContainerMockup({ data }) {
  const palette = data.design.colorPalette;
  const cap = palette[0]?.hex || '#2C4A6E';
  const body = palette[1]?.hex || '#F4F1E8';
  const accent = palette[2]?.hex || '#C4A878';
  const motif = data.design.motif || 'leaf';
  const shortName = data.concept.shortName || data.concept.name.split(/[\s/]/)[0];

  const hexToRgb = (h) => {
    const r = parseInt(h.slice(1, 3), 16);
    const g = parseInt(h.slice(3, 5), 16);
    const b = parseInt(h.slice(5, 7), 16);
    return [r, g, b];
  };
  const isDark = (h) => {
    try {
      const [r, g, b] = hexToRgb(h);
      return 0.299 * r + 0.587 * g + 0.114 * b < 140;
    } catch {
      return false;
    }
  };
  const bodyIsDark = isDark(body);
  const labelBg = bodyIsDark ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.5)';
  const labelStroke = bodyIsDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.08)';

  const renderMotif = (cx, cy, color) => {
    switch (motif) {
      case 'drop':
        return <path d={`M ${cx} ${cy - 4} Q ${cx - 3} ${cy} ${cx} ${cy + 3} Q ${cx + 3} ${cy} ${cx} ${cy - 4} Z`} fill={color} />;
      case 'circle':
        return <circle cx={cx} cy={cy} r="2.5" fill="none" stroke={color} strokeWidth="0.6" />;
      case 'line':
        return <line x1={cx - 5} y1={cy} x2={cx + 5} y2={cy} stroke={color} strokeWidth="0.7" />;
      case 'star':
        return <path d={`M ${cx} ${cy - 3} L ${cx + 1} ${cy - 1} L ${cx + 3} ${cy} L ${cx + 1} ${cy + 1} L ${cx} ${cy + 3} L ${cx - 1} ${cy + 1} L ${cx - 3} ${cy} L ${cx - 1} ${cy - 1} Z`} fill={color} />;
      case 'flower':
        return (
          <g>
            <circle cx={cx} cy={cy - 2} r="1.2" fill={color} opacity="0.7" />
            <circle cx={cx + 2} cy={cy} r="1.2" fill={color} opacity="0.7" />
            <circle cx={cx} cy={cy + 2} r="1.2" fill={color} opacity="0.7" />
            <circle cx={cx - 2} cy={cy} r="1.2" fill={color} opacity="0.7" />
            <circle cx={cx} cy={cy} r="0.8" fill={color} />
          </g>
        );
      case 'number':
        return <text x={cx} y={cy + 2} textAnchor="middle" fontSize="6" fill={color} fontFamily="serif" fontWeight="bold">N°</text>;
      default:
        return <path d={`M ${cx} ${cy - 3} Q ${cx + 3} ${cy - 1} ${cx} ${cy + 3} Q ${cx - 3} ${cy - 1} ${cx} ${cy - 3} Z`} fill={color} />;
    }
  };

  return (
    <div
      className="relative py-8 px-4 flex items-center justify-center"
      style={{
        background: `linear-gradient(160deg, ${body}15 0%, ${cap}10 100%), linear-gradient(180deg, #FAF8F1 0%, #F1EFE5 100%)`,
        minHeight: 380,
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-6 left-6 text-[9px] tracking-[0.3em] font-bold" style={{ color: cap, opacity: 0.5 }}>PACKAGE MOCKUP</div>
        <div className="absolute top-6 right-6 text-[9px] tracking-[0.2em]" style={{ color: cap, opacity: 0.4 }}>FRONT VIEW</div>
      </div>
      <svg viewBox="0 0 220 340" className="w-auto" style={{ height: 320, filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.08))' }}>
        <defs>
          <linearGradient id={`bodyGrad-${motif}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={body} stopOpacity="0.75" />
            <stop offset="20%" stopColor={body} />
            <stop offset="55%" stopColor={body} />
            <stop offset="100%" stopColor={body} stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id={`capGrad-${motif}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cap} stopOpacity="0.8" />
            <stop offset="20%" stopColor={cap} />
            <stop offset="55%" stopColor={cap} />
            <stop offset="100%" stopColor={cap} stopOpacity="0.65" />
          </linearGradient>
        </defs>
        <ellipse cx="110" cy="320" rx="55" ry="6" fill="rgba(0,0,0,0.18)" />
        <rect x="80" y="30" width="60" height="98" fill={`url(#capGrad-${motif})`} />
        <rect x="80" y="30" width="3" height="98" fill="rgba(255,255,255,0.25)" />
        <rect x="135" y="30" width="5" height="98" fill="rgba(0,0,0,0.1)" />
        <g transform="translate(110, 75)">{renderMotif(0, 0, accent)}</g>
        <text x="110" y="110" textAnchor="middle" fontSize="7" fill={accent} fontFamily="serif" fontWeight="bold" letterSpacing="2">
          {shortName.length > 1 ? shortName.charAt(0).toUpperCase() : ''}
        </text>
        <line x1="80" y1="128" x2="140" y2="128" stroke="rgba(0,0,0,0.18)" strokeWidth="0.6" />
        <rect x="80" y="128" width="60" height="172" fill={`url(#bodyGrad-${motif})`} />
        <rect x="80" y="128" width="3" height="172" fill="rgba(255,255,255,0.18)" />
        <rect x="135" y="128" width="5" height="172" fill="rgba(0,0,0,0.08)" />
        <rect x="78" y="295" width="64" height="9" fill={cap} opacity="0.85" />
        <rect x="86" y="158" width="48" height="120" fill={labelBg} stroke={labelStroke} strokeWidth="0.5" />
        <line x1="92" y1="168" x2="128" y2="168" stroke={accent} strokeWidth="0.4" opacity="0.6" />
        <text x="110" y="195" textAnchor="middle" fontSize="9" fill={cap} fontFamily="serif" fontWeight="bold" letterSpacing="0.5">
          {shortName.length > 9 ? shortName.slice(0, 9) : shortName}
        </text>
        <g transform="translate(110, 215)">{renderMotif(0, 0, accent)}</g>
        <text x="110" y="238" textAnchor="middle" fontSize="3.8" fill={cap} letterSpacing="2" fontFamily="sans-serif" fontWeight="600">HAND CREAM</text>
        <text x="110" y="246" textAnchor="middle" fontSize="3.2" fill={cap} letterSpacing="1.5" fontFamily="sans-serif" opacity="0.7">STICK TYPE · 10g</text>
        <line x1="92" y1="262" x2="128" y2="262" stroke={accent} strokeWidth="0.4" opacity="0.6" />
      </svg>
    </div>
  );
}
