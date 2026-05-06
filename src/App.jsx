import React, { useState, useMemo, useEffect } from 'react';
import { Sparkles, Loader2, Palette, Wind, ShoppingBag, TrendingUp, Briefcase, Megaphone, GitCompare, X } from 'lucide-react';

import Logo from './components/Logo';
import TrendSection from './components/TrendSection';
import { Pill, SectionLabel, SampleCard, ABVariantCard } from './components/shared';
import { DesignTab, FragranceTab, StrategyTab } from './components/ResultTabs1';
import { BusinessTab, MarketingTab } from './components/ResultTabs2';

import { sampleA, sampleB } from './data/samples';
import {
  pickResultVariant, dummyTrend,
  generateDummyBusiness, generateDummyReviews, generateDummyMarketing, generateDummyAB,
} from './data/dummies';
import {
  ageOptions, genderOptions, lifestyleOptions, seasonOptions,
  priceOptions, directionOptions, initialFormData, meiryo,
} from './data/options';

const simulateAPI = (delay = 1500) => new Promise((r) => setTimeout(r, delay));

export default function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('design');
  const [viewMode, setViewMode] = useState('form');

  const [trendData, setTrendData] = useState(null);
  const [trendLoading, setTrendLoading] = useState(false);
  const [businessData, setBusinessData] = useState(null);
  const [businessLoading, setBusinessLoading] = useState(false);
  const [marketingData, setMarketingData] = useState(null);
  const [marketingLoading, setMarketingLoading] = useState(false);
  const [reviewData, setReviewData] = useState(null);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [abData, setAbData] = useState(null);
  const [abLoading, setAbLoading] = useState(false);

  const [customDesign, setCustomDesign] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const update = (k, v) => setFormData({ ...formData, [k]: v });

  useEffect(() => {
    setCustomDesign(null);
    setEditMode(false);
  }, [viewMode, result?.concept?.name]);

  // Generation functions (replace simulateAPI with real API calls in production)
  const generateTrendAnalysis = async () => {
    setTrendLoading(true); setTrendData(null);
    await simulateAPI(2000);
    setTrendData(dummyTrend);
    setTrendLoading(false);
  };
  const generateAB = async () => {
    setAbLoading(true); setAbData(null);
    await simulateAPI(1800);
    setAbData(generateDummyAB(formData.brandDirection));
    setAbLoading(false);
  };
  const generateBusinessAnalysis = async () => {
    if (!result) return;
    setBusinessLoading(true); setBusinessData(null);
    await simulateAPI(1800);
    setBusinessData(generateDummyBusiness(result));
    setBusinessLoading(false);
  };
  const generateReviews = async () => {
    if (!result) return;
    setReviewLoading(true); setReviewData(null);
    await simulateAPI(1500);
    setReviewData(generateDummyReviews(result));
    setReviewLoading(false);
  };
  const generateMarketing = async () => {
    if (!result) return;
    setMarketingLoading(true); setMarketingData(null);
    await simulateAPI(2000);
    setMarketingData(generateDummyMarketing(result, formData));
    setMarketingLoading(false);
  };
  const generate = async () => {
    setLoading(true); setResult(null); setViewMode('form');
    setBusinessData(null); setMarketingData(null); setReviewData(null);
    await simulateAPI(1500);
    setResult(pickResultVariant(formData.brandDirection));
    setActiveTab('design');
    setAbData(null);
    setLoading(false);
  };

  const baseDisplayData = viewMode === 'sampleA' ? sampleA : viewMode === 'sampleB' ? sampleB : result;
  const displayMeta = (viewMode === 'sampleA' || viewMode === 'sampleB') ? baseDisplayData?._meta : null;
  const displayBusinessData = (viewMode === 'sampleA' || viewMode === 'sampleB') ? baseDisplayData?.business : businessData;
  const displayMarketingData = (viewMode === 'sampleA' || viewMode === 'sampleB') ? baseDisplayData?.marketing : marketingData;
  const displayReviewData = (viewMode === 'sampleA' || viewMode === 'sampleB') ? baseDisplayData?.business?.reviews : reviewData;

  const displayData = useMemo(() => {
    if (!baseDisplayData) return null;
    if (!customDesign) return baseDisplayData;
    const cp = baseDisplayData.design.colorPalette.map((c, i) =>
      customDesign.palette?.[i] ? { ...c, hex: customDesign.palette[i] } : c
    );
    return {
      ...baseDisplayData,
      concept: { ...baseDisplayData.concept, shortName: customDesign.shortName ?? baseDisplayData.concept.shortName },
      design: { ...baseDisplayData.design, colorPalette: cp, motif: customDesign.motif ?? baseDisplayData.design.motif },
    };
  }, [baseDisplayData, customDesign]);

  const updateCustom = (key, value) => setCustomDesign((prev) => ({ ...(prev || {}), [key]: value }));
  const updatePaletteColor = (idx, hex) => {
    setCustomDesign((prev) => {
      const current = prev?.palette || baseDisplayData.design.colorPalette.map((c) => c.hex);
      const next = [...current];
      next[idx] = hex;
      return { ...(prev || {}), palette: next };
    });
  };
  const resetCustom = () => setCustomDesign(null);

  const handleSampleClick = (which) => {
    setViewMode(which);
    setActiveTab('design');
    setTimeout(() => document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const tabs = [
    { id: 'design', jp: 'デザイン', icon: Palette },
    { id: 'fragrance', jp: '香り', icon: Wind },
    { id: 'strategy', jp: 'EC', icon: ShoppingBag },
    { id: 'business', jp: '事業性', icon: Briefcase },
    { id: 'marketing', jp: 'マーケ', icon: Megaphone },
  ];

  return (
    <div className="min-h-screen w-full" style={{ background: '#F1EFE5', fontFamily: meiryo }}>
      {/* HEADER */}
      <header className="px-5 pt-9 pb-7 border-b border-[#D8D4C2]" style={{ background: 'linear-gradient(180deg, #FAF8F1 0%, #F1EFE5 100%)' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] tracking-[0.3em] text-[#2C4A6E] font-bold">BRAND MODELING TOOL</div>
          <div className="text-[9px] tracking-[0.1em] text-[#B8956A] font-bold bg-[#B8956A]/10 px-2 py-0.5 rounded-sm border border-[#B8956A]/30">DEMO MODE</div>
        </div>
        <div className="flex justify-center mb-5">
          <Logo size="large" />
        </div>
        <p className="text-[#5A6878] text-xs leading-relaxed text-center px-2">
          スティック型ハンドクリームに特化したブランド設計スタジオ。<br />
          市場分析・デザイン・事業性検証・マーケまで一気通貫で。
        </p>
      </header>

      {/* SAMPLES */}
      <section className="px-5 py-7 border-b border-[#D8D4C2]" style={{ background: '#FAF8F1' }}>
        <SectionLabel num="◆" en="EXAMPLES" jp="出力サンプル(2パターン)" />
        <p className="text-[11px] text-[#5A6878] mb-4 leading-relaxed">タップで全項目を一括確認。デザインカスタマイズも体験できます。</p>
        <div className="space-y-3">
          <SampleCard data={sampleA} onClick={() => handleSampleClick('sampleA')} />
          <SampleCard data={sampleB} onClick={() => handleSampleClick('sampleB')} />
        </div>
      </section>

      {/* TREND ANALYSIS */}
      <TrendSection
        trendData={trendData}
        trendLoading={trendLoading}
        generateTrendAnalysis={generateTrendAnalysis}
      />

      {/* INPUT FORM */}
      <section className="px-5 py-7 border-b border-[#D8D4C2]" style={{ background: '#FAF8F1' }}>
        <SectionLabel num="01" en="INPUT" jp="ペルソナ入力" />
        {trendData && (
          <div className="mb-4 p-2.5 bg-[#2C4A6E]/5 border border-[#2C4A6E]/20 rounded-sm flex items-center gap-2">
            <TrendingUp className="w-3 h-3 text-[#2C4A6E] flex-shrink-0" />
            <span className="text-[10px] text-[#2C4A6E] font-bold">分析済みのトレンドを反映してブランドを生成します</span>
          </div>
        )}
        <div className="space-y-5 mt-5">
          {[
            { label: '年齢層', key: 'ageRange', opts: ageOptions },
            { label: '性別', key: 'gender', opts: genderOptions },
            { label: 'ライフスタイル', key: 'lifestyle', opts: lifestyleOptions },
            { label: 'シーズン', key: 'season', opts: seasonOptions },
            { label: '価格帯', key: 'priceRange', opts: priceOptions },
            { label: 'ブランドの方向性', key: 'brandDirection', opts: directionOptions },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-xs text-[#1F2A38] mb-2 font-bold">{field.label}</label>
              <div className="flex flex-wrap gap-1.5">
                {field.opts.map((o) => (
                  <Pill key={o} active={formData[field.key] === o} onClick={() => update(field.key, o)}>{o}</Pill>
                ))}
              </div>
              {field.key === 'brandDirection' && (
                <div className="text-[10px] text-[#7A92AB] mt-1.5">
                  ※ デモモードでは方向性に応じて3種(ナチュラル/ミニマル/ガーリー)のダミー結果が表示されます
                </div>
              )}
            </div>
          ))}
          <div>
            <label className="block text-xs text-[#1F2A38] mb-2 font-bold">こだわりたい要素 <span className="text-[#7A92AB] font-normal">(任意)</span></label>
            <input
              type="text" value={formData.keyValue}
              onChange={(e) => update('keyValue', e.target.value)}
              placeholder="例: 無香料NG、和の素材"
              className="w-full px-3 py-2.5 text-sm bg-white border border-[#D8D4C2] focus:border-[#2C4A6E] focus:outline-none text-[#1F2A38] rounded-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-[#1F2A38] mb-2 font-bold">追加情報 <span className="text-[#7A92AB] font-normal">(任意)</span></label>
            <textarea
              value={formData.additional}
              onChange={(e) => update('additional', e.target.value)}
              placeholder="ブランド背景・ポジショニング等"
              rows={2}
              className="w-full px-3 py-2.5 text-sm bg-white border border-[#D8D4C2] focus:border-[#2C4A6E] focus:outline-none text-[#1F2A38] rounded-sm resize-none"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <button
            onClick={generate} disabled={loading}
            className="py-3.5 bg-[#2C4A6E] text-white flex items-center justify-center gap-1.5 hover:bg-[#1A2F4A] transition-colors disabled:opacity-50 rounded-sm font-bold text-xs"
          >
            {loading ? (<><Loader2 className="w-3.5 h-3.5 animate-spin" /> 生成中</>) : (<><Sparkles className="w-3.5 h-3.5" /> 1案を生成</>)}
          </button>
          <button
            onClick={generateAB} disabled={abLoading}
            className="py-3.5 bg-white border-2 border-[#2C4A6E] text-[#2C4A6E] flex items-center justify-center gap-1.5 hover:bg-[#2C4A6E]/5 transition-colors disabled:opacity-50 rounded-sm font-bold text-xs"
          >
            {abLoading ? (<><Loader2 className="w-3.5 h-3.5 animate-spin" /> 生成中</>) : (<><GitCompare className="w-3.5 h-3.5" /> A/B 2案で比較</>)}
          </button>
        </div>

        {abData && (
          <div className="mt-6 bg-[#F1EFE5] p-4 rounded-sm border border-[#2C4A6E]/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <GitCompare className="w-4 h-4 text-[#2C4A6E]" />
                <span className="text-xs text-[#2C4A6E] font-bold">A/B コンセプト比較</span>
              </div>
              <button onClick={() => setAbData(null)} className="text-[#7A92AB] hover:text-[#2C4A6E]">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="space-y-3">
              <ABVariantCard variant={abData.variantA} label="A" onSelect={generate} />
              <ABVariantCard variant={abData.variantB} label="B" onSelect={generate} />
            </div>
            <div className="mt-3 p-3 bg-white rounded-sm border-l-[3px] border-[#B8956A]">
              <div className="text-[10px] text-[#B8956A] mb-1 font-bold">比較解説</div>
              <p className="text-[11px] text-[#1F2A38] leading-relaxed">{abData.comparison}</p>
            </div>
          </div>
        )}
      </section>

      {/* RESULTS */}
      {displayData && (
        <section id="result-section" className="pb-12">
          {displayMeta && (
            <div className="px-5 py-2 bg-[#2C4A6E] text-white text-[10px] tracking-[0.2em] flex items-center justify-between font-bold">
              <span>{displayMeta.title} を表示中</span>
              <button onClick={() => setViewMode('form')} className="text-[#C4D0E0] underline">閉じる</button>
            </div>
          )}

          {/* Concept hero banner */}
          <div className="px-5 py-9 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A2F4A 0%, #2C4A6E 60%, #4A6B8C 100%)' }}>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10" style={{ background: 'radial-gradient(circle, #FFF 0%, transparent 70%)' }} />
            <div className="text-[10px] tracking-[0.3em] text-[#C4D0E0] mb-2 font-bold relative">CONCEPT / コンセプト</div>
            <h2 className="text-2xl leading-tight mb-3 font-bold relative">{displayData.concept.name}</h2>
            <p className="text-[#C4D0E0] text-sm mb-4 relative font-bold">「{displayData.concept.tagline}」</p>
            <p className="text-xs leading-relaxed text-[#E8EAF0] relative">{displayData.concept.story}</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#D8D4C2] sticky top-0 z-10 overflow-x-auto" style={{ background: '#FAF8F1' }}>
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex-1 min-w-[68px] py-3.5 flex flex-col items-center justify-center gap-0.5 transition-all border-b-2 ${
                  activeTab === t.id ? 'border-[#2C4A6E] text-[#2C4A6E] bg-white' : 'border-transparent text-[#7A92AB]'
                }`}
              >
                <t.icon className="w-3.5 h-3.5" />
                <span className="text-[11px] font-bold">{t.jp}</span>
              </button>
            ))}
          </div>

          {activeTab === 'design' && (
            <DesignTab
              displayData={displayData}
              customDesign={customDesign}
              editMode={editMode}
              setEditMode={setEditMode}
              resetCustom={resetCustom}
              updateCustom={updateCustom}
              updatePaletteColor={updatePaletteColor}
            />
          )}
          {activeTab === 'fragrance' && <FragranceTab displayData={displayData} />}
          {activeTab === 'strategy' && <StrategyTab displayData={displayData} />}
          {activeTab === 'business' && (
            <BusinessTab
              displayData={displayData}
              displayBusinessData={displayBusinessData}
              displayReviewData={displayReviewData}
              businessLoading={businessLoading}
              reviewLoading={reviewLoading}
              viewMode={viewMode}
              generateBusinessAnalysis={generateBusinessAnalysis}
              generateReviews={generateReviews}
            />
          )}
          {activeTab === 'marketing' && (
            <MarketingTab
              displayMarketingData={displayMarketingData}
              marketingLoading={marketingLoading}
              viewMode={viewMode}
              generateMarketing={generateMarketing}
            />
          )}
        </section>
      )}

      <footer className="px-5 py-5 border-t border-[#D8D4C2] text-center bg-[#FAF8F1]">
        <div className="text-[10px] tracking-[0.2em] text-[#7A92AB] font-bold">STICK ATELIER · DEMO with dummy data</div>
      </footer>
    </div>
  );
}
