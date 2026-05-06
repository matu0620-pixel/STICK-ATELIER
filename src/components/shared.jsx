import React from 'react';
import { ChevronRight, Eye, CheckCircle2, AlertCircle, Star } from 'lucide-react';
import { meiryo } from '../data/options';

export function Pill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 text-xs transition-all border rounded-sm ${
        active
          ? 'bg-[#2C4A6E] text-white border-[#2C4A6E]'
          : 'bg-white text-[#1F2A38] border-[#D8D4C2] hover:border-[#2C4A6E]'
      }`}
      style={{ fontFamily: meiryo }}
    >
      {children}
    </button>
  );
}

export function SectionLabel({ num, en, jp }) {
  return (
    <div className="flex items-baseline gap-2 mb-3 pb-2 border-b border-[#D8D4C2]">
      <span className="text-[#2C4A6E] text-xs font-bold">{num}</span>
      <span className="text-[10px] tracking-[0.2em] text-[#7A92AB] uppercase font-bold">{en}</span>
      <span className="text-sm text-[#1F2A38] font-bold">{jp}</span>
    </div>
  );
}

export function SubHeader({ icon: Icon, label, en }) {
  return (
    <div className="flex items-center gap-2 mb-3 mt-6 pt-4 border-t border-[#D8D4C2]">
      <div className="w-7 h-7 rounded-sm bg-[#2C4A6E] flex items-center justify-center">
        <Icon className="w-3.5 h-3.5 text-white" />
      </div>
      <div>
        <div className="text-[9px] tracking-[0.2em] text-[#7A92AB] font-bold">{en}</div>
        <div className="text-sm text-[#1F2A38] font-bold">{label}</div>
      </div>
    </div>
  );
}

export function SampleCard({ data, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white border border-[#D8D4C2] hover:border-[#2C4A6E] transition-all p-4 rounded-sm"
      style={{ fontFamily: meiryo }}
    >
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-[10px] tracking-[0.2em] text-[#2C4A6E] font-bold">{data._meta.title}</span>
        <Eye className="w-3 h-3 text-[#7A92AB]" />
      </div>
      <div className="text-[11px] text-[#5A6878] mb-2 leading-relaxed">{data._meta.subtitle}</div>
      <div className="text-base text-[#1F2A38] font-bold mb-1">{data.concept.name}</div>
      <div className="text-xs text-[#5A6878]">「{data.concept.tagline}」</div>
      <div className="flex items-center gap-1 mt-3">
        {data.design.colorPalette.map((c, i) => (
          <div key={i} className="w-6 h-6 rounded-sm border border-[#D8D4C2]" style={{ background: c.hex }} />
        ))}
        <div className="flex-1" />
        <div className="text-[10px] text-[#2C4A6E] flex items-center gap-1 font-bold">
          詳細を見る <ChevronRight className="w-3 h-3" />
        </div>
      </div>
    </button>
  );
}

export function ABVariantCard({ variant, label, onSelect }) {
  return (
    <div className="bg-white border-2 border-[#D8D4C2] rounded-sm p-4">
      <div className="flex items-baseline gap-2 mb-2">
        <div className="w-6 h-6 rounded-sm bg-[#2C4A6E] text-white flex items-center justify-center text-xs font-bold">{label}</div>
        <span className="text-[10px] tracking-[0.2em] text-[#2C4A6E] font-bold">{variant.directionLabel}</span>
      </div>
      <div className="text-base text-[#1F2A38] font-bold mb-1">{variant.name}</div>
      <div className="text-xs text-[#5A6878] mb-3">「{variant.tagline}」</div>
      <div className="flex h-10 rounded-sm overflow-hidden border border-[#D8D4C2] mb-3">
        {variant.palette.map((c, i) => (
          <div key={i} className="flex-1" style={{ background: c.hex }} />
        ))}
      </div>
      <div className="space-y-1.5 mb-3">
        <div className="text-[10px] text-[#2C4A6E] font-bold">香り: <span className="text-[#1F2A38] font-normal">{variant.fragranceDirection}</span></div>
        <div className="text-[10px] text-[#2C4A6E] font-bold">差別化: <span className="text-[#1F2A38] font-normal">{variant.differentiator}</span></div>
      </div>
      <div className="space-y-1 mb-2">
        {variant.pros.map((p, i) => (
          <div key={i} className="flex items-start gap-1 text-[11px] text-[#1F2A38]">
            <CheckCircle2 className="w-3 h-3 text-[#2C4A6E] flex-shrink-0 mt-0.5" /><span>{p}</span>
          </div>
        ))}
        {variant.cons.map((c, i) => (
          <div key={i} className="flex items-start gap-1 text-[11px] text-[#5A6878]">
            <AlertCircle className="w-3 h-3 text-[#B86F4F] flex-shrink-0 mt-0.5" /><span>{c}</span>
          </div>
        ))}
      </div>
      <button onClick={onSelect} className="w-full mt-2 py-2 bg-[#2C4A6E] text-white rounded-sm text-xs font-bold hover:bg-[#1A2F4A] transition-colors">
        この方向性で詳細生成 →
      </button>
    </div>
  );
}

export function StarBar({ stars, ratio, color }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <div className="flex items-center gap-0.5 w-10 flex-shrink-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-2.5 h-2.5 ${i < stars ? 'fill-current' : ''}`} style={{ color: i < stars ? color : '#D8D4C2' }} />
        ))}
      </div>
      <div className="flex-1 bg-[#F1EFE5] rounded-sm h-2 overflow-hidden">
        <div className="h-full transition-all" style={{ width: `${ratio}%`, background: color }} />
      </div>
      <span className="text-[10px] text-[#5A6878] font-bold w-8 text-right">{ratio}%</span>
    </div>
  );
}
