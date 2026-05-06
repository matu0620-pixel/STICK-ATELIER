import React, { useState, useMemo } from 'react';
import { Calculator, BarChart3, CheckCircle2, AlertCircle } from 'lucide-react';

function Slider({ label, value, setValue, min, max, step, unit, helper }) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-xs text-[#1F2A38] font-bold">{label}</label>
        <span className="text-sm text-[#2C4A6E] font-bold tabular-nums">{value.toLocaleString()}{unit}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-1.5 bg-[#D8D4C2] rounded-full appearance-none cursor-pointer accent-[#2C4A6E]"
      />
      {helper && <div className="text-[10px] text-[#7A92AB] mt-1">{helper}</div>}
    </div>
  );
}

export default function RevenueSimulator({ baseline }) {
  const [price, setPrice] = useState(baseline.retailPrice);
  const [costRatio, setCostRatio] = useState(baseline.costRatio);
  const [monthlySales, setMonthlySales] = useState(baseline.monthlySalesEstimate);
  const [lotSize, setLotSize] = useState(baseline.initialLotSize);
  const [marketingRatio, setMarketingRatio] = useState(baseline.marketingRatio);

  const calc = useMemo(() => {
    const unitCost = Math.round((price * costRatio) / 100);
    const unitProfit = price - unitCost;
    const monthlyMarketing = Math.round((price * monthlySales * marketingRatio) / 100);
    const monthlyOperatingProfit = unitProfit * monthlySales - monthlyMarketing;
    const initialInvestment = unitCost * lotSize;
    const breakeven = monthlyOperatingProfit > 0 ? Math.ceil(initialInvestment / monthlyOperatingProfit) : null;
    const months = Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      profit: monthlyOperatingProfit * (i + 1) - initialInvestment,
    }));
    return { unitCost, unitProfit, monthlyOperatingProfit, initialInvestment, breakeven, months };
  }, [price, costRatio, monthlySales, lotSize, marketingRatio]);

  const isProfit = calc.monthlyOperatingProfit > 0;
  const yearProfit = calc.months[11].profit;
  const isYearProfit = yearProfit > 0;

  const ChartW = 320, ChartH = 120;
  const chartPad = { l: 30, r: 10, t: 10, b: 30 };
  const barW = (ChartW - chartPad.l - chartPad.r) / 12 - 2;
  const maxAbs = Math.max(Math.abs(calc.months[0].profit), Math.abs(yearProfit), 1);
  const yMid = chartPad.t + (ChartH - chartPad.t - chartPad.b) / 2;
  const yScaleC = (v) => yMid - (v / maxAbs) * (ChartH - chartPad.t - chartPad.b) / 2;

  return (
    <div>
      <div className="bg-[#F1EFE5] p-4 rounded-sm mb-5">
        <div className="text-xs text-[#1F2A38] mb-3 font-bold flex items-center gap-1.5">
          <Calculator className="w-3.5 h-3.5 text-[#2C4A6E]" />シミュレーションパラメータ
        </div>
        <Slider label="小売価格" value={price} setValue={setPrice} min={500} max={6000} step={100} unit="円" />
        <Slider label="原価率" value={costRatio} setValue={setCostRatio} min={15} max={50} step={1} unit="%" helper={`= 1個あたり原価 ${calc.unitCost.toLocaleString()}円`} />
        <Slider label="想定月間販売数" value={monthlySales} setValue={setMonthlySales} min={50} max={3000} step={50} unit="個" />
        <Slider label="初回ロット数" value={lotSize} setValue={setLotSize} min={500} max={10000} step={500} unit="個" helper={`初期投資 ${(calc.initialInvestment / 10000).toFixed(0)}万円`} />
        <Slider label="広告費率(対売上)" value={marketingRatio} setValue={setMarketingRatio} min={0} max={40} step={1} unit="%" />
      </div>

      <div className="grid grid-cols-2 gap-2 mb-5">
        <div className="bg-white p-3 rounded-sm border border-[#D8D4C2]">
          <div className="text-[10px] text-[#5A6878] mb-1 font-bold">1個あたり粗利</div>
          <div className="text-base text-[#1F2A38] font-bold tabular-nums">{calc.unitProfit.toLocaleString()}円</div>
          <div className="text-[10px] text-[#7A92AB]">利益率 {Math.round((calc.unitProfit / price) * 100)}%</div>
        </div>
        <div className="bg-white p-3 rounded-sm border border-[#D8D4C2]">
          <div className="text-[10px] text-[#5A6878] mb-1 font-bold">月間営業利益</div>
          <div className={`text-base font-bold tabular-nums ${isProfit ? 'text-[#2C4A6E]' : 'text-[#B86F4F]'}`}>
            {calc.monthlyOperatingProfit >= 0 ? '+' : ''}{calc.monthlyOperatingProfit.toLocaleString()}円
          </div>
          <div className="text-[10px] text-[#7A92AB]">広告費差引後</div>
        </div>
        <div className="bg-white p-3 rounded-sm border border-[#D8D4C2]">
          <div className="text-[10px] text-[#5A6878] mb-1 font-bold">初期投資回収月数</div>
          <div className="text-base text-[#1F2A38] font-bold tabular-nums">{calc.breakeven !== null ? `${calc.breakeven}ヶ月` : '回収不可'}</div>
          <div className="text-[10px] text-[#7A92AB]">単月利益ベース</div>
        </div>
        <div className="bg-white p-3 rounded-sm border border-[#D8D4C2]">
          <div className="text-[10px] text-[#5A6878] mb-1 font-bold">12ヶ月後累計利益</div>
          <div className={`text-base font-bold tabular-nums ${isYearProfit ? 'text-[#2C4A6E]' : 'text-[#B86F4F]'}`}>
            {yearProfit >= 0 ? '+' : ''}{(yearProfit / 10000).toFixed(0)}万円
          </div>
          <div className="text-[10px] text-[#7A92AB]">月{monthlySales}個ペース</div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-sm border border-[#D8D4C2] mb-4">
        <div className="text-xs text-[#1F2A38] mb-3 font-bold flex items-center gap-1.5">
          <BarChart3 className="w-3.5 h-3.5 text-[#2C4A6E]" />12ヶ月の累計損益推移
        </div>
        <svg viewBox={`0 0 ${ChartW} ${ChartH}`} className="w-full h-auto">
          <line x1={chartPad.l} y1={yMid} x2={ChartW - chartPad.r} y2={yMid} stroke="#1F2A38" strokeWidth="0.5" />
          <text x={chartPad.l - 4} y={yMid + 3} fontSize="8" fill="#5A6878" textAnchor="end">¥0</text>
          <text x={chartPad.l - 4} y={chartPad.t + 5} fontSize="7" fill="#5A6878" textAnchor="end">+{(maxAbs / 10000).toFixed(0)}万</text>
          <text x={chartPad.l - 4} y={ChartH - chartPad.b - 1} fontSize="7" fill="#5A6878" textAnchor="end">-{(maxAbs / 10000).toFixed(0)}万</text>
          {calc.months.map((m, i) => {
            const x = chartPad.l + i * ((ChartW - chartPad.l - chartPad.r) / 12) + 1;
            const y = m.profit >= 0 ? yScaleC(m.profit) : yMid;
            const h = Math.abs(yScaleC(m.profit) - yMid);
            return (
              <g key={i}>
                <rect x={x} y={y} width={barW} height={h} fill={m.profit >= 0 ? '#2C4A6E' : '#B86F4F'} opacity="0.85" />
                {(i + 1) % 3 === 0 && (
                  <text x={x + barW / 2} y={ChartH - chartPad.b + 12} fontSize="7" fill="#5A6878" textAnchor="middle">{i + 1}M</text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className={`p-3 rounded-sm flex items-start gap-2 ${isYearProfit ? 'bg-[#2C4A6E]/10 border border-[#2C4A6E]/30' : 'bg-[#B86F4F]/10 border border-[#B86F4F]/30'}`}>
        {isYearProfit
          ? <CheckCircle2 className="w-4 h-4 text-[#2C4A6E] flex-shrink-0 mt-0.5" />
          : <AlertCircle className="w-4 h-4 text-[#B86F4F] flex-shrink-0 mt-0.5" />}
        <div className="text-xs leading-relaxed">
          <span className="font-bold" style={{ color: isYearProfit ? '#2C4A6E' : '#B86F4F' }}>
            {isYearProfit ? '事業性: 1年で黒字化' : '事業性: 要再検討'}
          </span>
          <p className="text-[11px] text-[#1F2A38] mt-1">
            {isYearProfit
              ? `現在の条件なら${calc.breakeven}ヶ月で初期投資を回収し、12ヶ月後には約${(yearProfit / 10000).toFixed(0)}万円の利益。`
              : `12ヶ月時点で約${Math.abs(yearProfit / 10000).toFixed(0)}万円の赤字。価格・販売数の見直しが必要。`}
          </p>
        </div>
      </div>

      {baseline.rationale && (
        <div className="mt-3 p-2.5 bg-[#F1EFE5] rounded-sm border-l-[3px] border-[#7A92AB]">
          <div className="text-[10px] text-[#5A6878] mb-0.5 font-bold">推定の根拠</div>
          <p className="text-[11px] text-[#1F2A38] leading-relaxed">{baseline.rationale}</p>
        </div>
      )}
    </div>
  );
}
