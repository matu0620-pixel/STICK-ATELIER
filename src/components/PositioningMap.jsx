import React from 'react';

export default function PositioningMap({ data, ourPalette }) {
  const { axes, competitors, ours } = data;
  const W = 340, H = 300;
  const padding = { l: 50, r: 30, t: 25, b: 55 };
  const plotW = W - padding.l - padding.r;
  const plotH = H - padding.t - padding.b;
  const xScale = (v) => padding.l + ((v - axes.x.min) / (axes.x.max - axes.x.min)) * plotW;
  const yScale = (v) => H - padding.b - ((v - axes.y.min) / (axes.y.max - axes.y.min)) * plotH;
  const ourColor = ourPalette[0]?.hex || '#2C4A6E';

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      <rect x={padding.l} y={padding.t} width={plotW / 2} height={plotH / 2} fill="#2C4A6E" opacity="0.04" />
      <rect x={padding.l + plotW / 2} y={padding.t} width={plotW / 2} height={plotH / 2} fill="#B8956A" opacity="0.05" />
      <rect x={padding.l} y={padding.t + plotH / 2} width={plotW / 2} height={plotH / 2} fill="#7A92AB" opacity="0.04" />
      <rect x={padding.l + plotW / 2} y={padding.t + plotH / 2} width={plotW / 2} height={plotH / 2} fill="#4A6B8C" opacity="0.04" />
      <line x1={padding.l + plotW / 2} y1={padding.t} x2={padding.l + plotW / 2} y2={H - padding.b} stroke="#D8D4C2" strokeDasharray="2,2" />
      <line x1={padding.l} y1={padding.t + plotH / 2} x2={W - padding.r} y2={padding.t + plotH / 2} stroke="#D8D4C2" strokeDasharray="2,2" />
      <line x1={padding.l} y1={H - padding.b} x2={W - padding.r} y2={H - padding.b} stroke="#1F2A38" strokeWidth="0.8" />
      <line x1={padding.l} y1={padding.t} x2={padding.l} y2={H - padding.b} stroke="#1F2A38" strokeWidth="0.8" />
      <text x={padding.l} y={H - padding.b + 12} fontSize="9" fill="#5A6878" textAnchor="middle">¥{axes.x.min}</text>
      <text x={padding.l + plotW / 2} y={H - padding.b + 12} fontSize="9" fill="#5A6878" textAnchor="middle">¥{(axes.x.min + axes.x.max) / 2}</text>
      <text x={W - padding.r} y={H - padding.b + 12} fontSize="9" fill="#5A6878" textAnchor="middle">¥{axes.x.max}</text>
      <text x={padding.l + plotW / 2} y={H - padding.b + 28} fontSize="10" fill="#1F2A38" textAnchor="middle" fontWeight="bold">{axes.x.label} →</text>
      <text x={padding.l - 5} y={H - padding.b + 3} fontSize="8" fill="#5A6878" textAnchor="end">{axes.y.lowLabel}</text>
      <text x={padding.l - 5} y={padding.t + 6} fontSize="8" fill="#5A6878" textAnchor="end">{axes.y.highLabel}</text>
      <text x={15} y={H / 2} fontSize="10" fill="#1F2A38" fontWeight="bold" textAnchor="middle" transform={`rotate(-90, 15, ${H / 2})`}>↑ {axes.y.label}</text>
      {competitors.map((c, i) => (
        <g key={i}>
          <circle cx={xScale(c.x)} cy={yScale(c.y)} r="4.5" fill="#7A92AB" opacity="0.85" stroke="white" strokeWidth="1" />
          <text x={xScale(c.x) + 7} y={yScale(c.y) + 3} fontSize="7.5" fill="#5A6878">{c.name}</text>
        </g>
      ))}
      <circle cx={xScale(ours.x)} cy={yScale(ours.y)} r="13" fill={ourColor} opacity="0.15" />
      <circle cx={xScale(ours.x)} cy={yScale(ours.y)} r="8" fill={ourColor} stroke="white" strokeWidth="2" />
      <text x={xScale(ours.x)} y={yScale(ours.y) - 14} fontSize="9" fill={ourColor} fontWeight="bold" textAnchor="middle">★ 自社案</text>
    </svg>
  );
}
