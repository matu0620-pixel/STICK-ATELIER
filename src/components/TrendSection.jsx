import React from 'react';
import { BarChart3, TrendingUp, Loader2, Flame, Award, Target, Sparkles, Lightbulb, Wind, Package, Feather, ShoppingBag } from 'lucide-react';
import { SectionLabel } from './shared';

const iconMap = { fragrance: Wind, package: Package, ingredient: Feather, social: Sparkles, price: ShoppingBag, portability: Target };

export default function TrendSection({ trendData, trendLoading, generateTrendAnalysis }) {
  return (
    <section className="px-5 md:px-8 py-7 md:py-10 border-b border-[#D8D4C2]" style={{ background: '#F1EFE5' }}>
      <SectionLabel num="◇" en="MARKET TREND" jp="市場トレンド分析" />

      {!trendData && !trendLoading && (
        <div className="bg-white p-4 rounded-sm border border-[#D8D4C2]">
          <div className="flex items-start gap-2 mb-3">
            <BarChart3 className="w-4 h-4 text-[#2C4A6E] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#1F2A38] leading-relaxed">市場の人気商品・成功要因・成功へのヒントを分析します。</p>
          </div>
          <button onClick={generateTrendAnalysis} className="w-full py-3 bg-[#2C4A6E] text-white flex items-center justify-center gap-2 rounded-sm font-bold text-sm">
            <TrendingUp className="w-4 h-4" /> 市場トレンドを分析する
          </button>
        </div>
      )}

      {trendLoading && (
        <div className="bg-white p-6 rounded-sm border border-[#D8D4C2] flex flex-col items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-[#2C4A6E]" />
          <div className="text-xs text-[#5A6878] text-center">市場データを分析中...</div>
        </div>
      )}

      {trendData && (
        <div className="space-y-5">
          <div className="bg-white p-4 rounded-sm border border-[#2C4A6E]">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-3.5 h-3.5 text-[#2C4A6E]" />
              <span className="text-[11px] tracking-[0.1em] text-[#2C4A6E] font-bold">市場の総評</span>
            </div>
            <p className="text-xs text-[#1F2A38] leading-relaxed">{trendData.marketSummary}</p>
          </div>

          <div>
            <div className="text-xs text-[#1F2A38] mb-3 font-bold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#2C4A6E]" />人気商品 TOP 5
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {trendData.trendingProducts.map((p, i) => (
                <div key={i} className="bg-white p-3 rounded-sm border border-[#D8D4C2] flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-sm bg-[#2C4A6E] text-white flex items-center justify-center text-xs font-bold">{p.rank}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap mb-0.5">
                      <span className="text-xs font-bold text-[#1F2A38]">{p.name}</span>
                      <span className="text-[10px] text-[#7A92AB]">{p.brand}</span>
                      <span className="text-[10px] text-[#B8956A] ml-auto">{p.price}</span>
                    </div>
                    <p className="text-[11px] text-[#5A6878] leading-relaxed">{p.popularReason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-[#1F2A38] mb-3 font-bold flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#2C4A6E]" />共通する成功要因
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {trendData.successFactors.map((f, i) => {
                const Icon = iconMap[f.icon] || Sparkles;
                return (
                  <div key={i} className="bg-white p-3 rounded-sm border border-[#D8D4C2]">
                    <div className="flex items-start gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-sm bg-[#2C4A6E]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-[#2C4A6E]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-[#1F2A38]">{f.title}</span>
                          <span className="text-[10px] text-[#2C4A6E] font-bold">重要度 {f.weight}%</span>
                        </div>
                        <div className="w-full bg-[#F1EFE5] h-1 rounded-sm overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#4A6B8C] to-[#2C4A6E]" style={{ width: `${f.weight}%` }} />
                        </div>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#5A6878] leading-relaxed pl-9">{f.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-xs text-[#1F2A38] mb-2 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2C4A6E]" />注目トレンドキーワード
            </div>
            <div className="flex flex-wrap gap-1.5">
              {trendData.trendKeywords.map((k, i) => (
                <span key={i} className="px-2.5 py-1 text-[11px] bg-white border border-[#2C4A6E] text-[#2C4A6E] rounded-sm font-bold">#{k}</span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#2C4A6E] to-[#1A2F4A] p-4 rounded-sm">
            <div className="text-xs text-white mb-3 font-bold flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-[#C4D0E0]" />成功へのヒント
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {trendData.successHints.map((h, i) => (
                <div key={i} className="bg-white/10 backdrop-blur p-3 rounded-sm border-l-[3px] border-[#C4A878]">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[10px] text-[#C4A878] font-bold">HINT {i + 1}</span>
                    <span className="text-xs text-white font-bold">{h.title}</span>
                  </div>
                  <p className="text-[11px] text-[#E8EAF0] leading-relaxed">{h.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <button onClick={generateTrendAnalysis} className="w-full md:max-w-xs md:mx-auto md:block py-2.5 bg-white border border-[#2C4A6E] text-[#2C4A6E] rounded-sm font-bold text-xs">
            再分析する
          </button>
        </div>
      )}
    </section>
  );
}
