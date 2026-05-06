import React from 'react';
import { Palette, Edit3, RotateCcw, Wind, Feather, ShoppingBag, ChevronRight } from 'lucide-react';
import ContainerMockup from './ContainerMockup';
import { SectionLabel } from './shared';
import { motifOptions } from '../data/options';

export function DesignTab({ displayData, customDesign, editMode, setEditMode, resetCustom, updateCustom, updatePaletteColor }) {
  return (
    <div className="bg-white">
      <div className="px-5 py-3 bg-[#FAF8F1] border-b border-[#D8D4C2] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Palette className="w-3.5 h-3.5 text-[#2C4A6E]" />
          <span className="text-xs font-bold text-[#1F2A38]">パッケージデザイン</span>
          {customDesign && <span className="text-[9px] text-[#B8956A] font-bold tracking-wider">EDITED</span>}
        </div>
        <div className="flex items-center gap-1.5">
          {customDesign && (
            <button onClick={resetCustom} className="text-[10px] text-[#5A6878] flex items-center gap-1 px-2 py-1">
              <RotateCcw className="w-3 h-3" />リセット
            </button>
          )}
          <button
            onClick={() => setEditMode(!editMode)}
            className={`text-[10px] flex items-center gap-1 px-2.5 py-1 rounded-sm font-bold ${editMode ? 'bg-[#2C4A6E] text-white' : 'bg-white border border-[#2C4A6E] text-[#2C4A6E]'}`}
          >
            <Edit3 className="w-3 h-3" />{editMode ? '完了' : 'カスタマイズ'}
          </button>
        </div>
      </div>
      <ContainerMockup data={displayData} />
      {editMode && (
        <div className="px-5 py-5 bg-[#F1EFE5] border-b border-[#D8D4C2] space-y-4">
          <div className="text-[10px] tracking-[0.2em] text-[#2C4A6E] font-bold flex items-center gap-1.5">
            <Edit3 className="w-3 h-3" />リアルタイム編集
          </div>
          <div>
            <label className="block text-xs text-[#1F2A38] mb-1.5 font-bold">商品名(ロゴ用短縮形)</label>
            <input
              type="text" value={displayData.concept.shortName || ''}
              onChange={(e) => updateCustom('shortName', e.target.value)}
              maxLength={9}
              className="w-full px-3 py-2 text-sm bg-white border border-[#D8D4C2] focus:border-[#2C4A6E] focus:outline-none text-[#1F2A38] rounded-sm"
              placeholder="9文字以内"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs text-[#1F2A38] font-bold">カラーパレット</label>
            {displayData.design.colorPalette.map((c, i) => (
              <div key={i} className="flex items-center gap-2 bg-white p-2 rounded-sm border border-[#D8D4C2]">
                <input
                  type="color" value={c.hex}
                  onChange={(e) => updatePaletteColor(i, e.target.value)}
                  className="w-10 h-10 rounded-sm cursor-pointer flex-shrink-0 border border-[#D8D4C2]"
                  style={{ padding: 0 }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[#1F2A38] font-bold truncate">{c.name}</div>
                  <div className="text-[10px] text-[#7A92AB] font-mono">{c.hex.toUpperCase()}</div>
                </div>
                <span className="text-[10px] text-[#5A6878]">{c.role}</span>
              </div>
            ))}
          </div>
          <div>
            <label className="block text-xs text-[#1F2A38] mb-2 font-bold">モチーフ</label>
            <div className="flex flex-wrap gap-1.5">
              {motifOptions.map((m) => (
                <button
                  key={m.id}
                  onClick={() => updateCustom('motif', m.id)}
                  className={`px-3 py-2 text-xs rounded-sm border transition-all font-bold ${
                    displayData.design.motif === m.id ? 'bg-[#2C4A6E] text-white border-[#2C4A6E]' : 'bg-white text-[#1F2A38] border-[#D8D4C2]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-[#5A6878] leading-relaxed bg-white/50 p-2 rounded-sm">
            変更はモックアップに即座に反映されます。リセットでAI生成案に戻せます。
          </div>
        </div>
      )}
      <div className="px-5 py-7">
        <SectionLabel num="02" en="DESIGN" jp="パッケージデザイン" />
        <div className="mb-6 mt-5">
          <div className="text-xs text-[#1F2A38] mb-3 font-bold">カラーパレット</div>
          <div className="flex h-28 mb-3 rounded-sm overflow-hidden border border-[#D8D4C2]">
            {displayData.design.colorPalette.map((c, i) => (<div key={i} className="flex-1" style={{ background: c.hex }} />))}
          </div>
          <div className="space-y-2">
            {displayData.design.colorPalette.map((c, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs flex-wrap">
                <div className="w-4 h-4 rounded-sm flex-shrink-0 border border-[#D8D4C2]" style={{ background: c.hex }} />
                <span className="text-[#1F2A38] font-bold">{c.name}</span>
                <span className="text-[10px] text-[#7A92AB] font-mono">{c.hex.toUpperCase()}</span>
                <span className="text-[#5A6878] text-[11px]">— {c.role}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 mt-7">
          {[
            { label: '素材', en: 'MATERIAL', val: displayData.design.material },
            { label: 'フォルム', en: 'FORM', val: displayData.design.shape },
            { label: 'タイポグラフィ', en: 'TYPOGRAPHY', val: displayData.design.typography },
            { label: 'ディテール', en: 'DETAILS', val: displayData.design.details },
          ].map((item, i) => (
            <div key={i} className="bg-[#F1EFE5] p-3 rounded-sm" style={{ borderLeft: '3px solid #2C4A6E' }}>
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-xs font-bold text-[#2C4A6E]">{item.label}</span>
                <span className="text-[9px] tracking-[0.2em] text-[#7A92AB]">{item.en}</span>
              </div>
              <p className="text-xs text-[#1F2A38] leading-relaxed">{item.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FragranceTab({ displayData }) {
  return (
    <div className="bg-white">
      <div className="h-52 relative flex items-end p-5" style={{ background: `linear-gradient(135deg, ${displayData.fragrance.imageColors.join(', ')})` }}>
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.2), transparent 60%)' }} />
        <div className="relative">
          <div className="text-[10px] tracking-[0.3em] text-white/95 mb-1.5 font-bold">SCENT IMAGE / 香りのイメージ</div>
          <div className="text-white text-2xl leading-tight font-bold" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}>
            {displayData.fragrance.name}
          </div>
        </div>
      </div>
      <div className="px-5 py-7">
        <SectionLabel num="03" en="FRAGRANCE" jp="香り設計" />
        <div className="my-5 p-4 bg-[#F1EFE5] rounded-sm border border-[#D8D4C2]">
          <div className="flex items-center gap-1.5 mb-2">
            <Feather className="w-3 h-3 text-[#2C4A6E]" />
            <span className="text-[11px] tracking-[0.1em] text-[#2C4A6E] font-bold">情景描写</span>
          </div>
          <p className="text-sm text-[#1F2A38] leading-loose">{displayData.fragrance.scenery}</p>
        </div>
        <div className="mb-6">
          <div className="text-xs text-[#1F2A38] mb-2 font-bold">ムード</div>
          <div className="flex flex-wrap gap-1.5">
            {displayData.fragrance.mood.split(/[,、]/).map((m, i) => (
              <span key={i} className="px-3 py-1 text-xs bg-[#2C4A6E] text-white rounded-sm font-bold">{m.trim()}</span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <div className="text-xs text-[#1F2A38] mb-3 font-bold">香りのピラミッド</div>
          <div className="space-y-3">
            {[
              { label: 'トップノート', en: 'TOP', notes: displayData.fragrance.topNotes, color: '#7A92AB', desc: '第一印象・10〜15分' },
              { label: 'ミドルノート', en: 'MIDDLE', notes: displayData.fragrance.middleNotes, color: '#4A6B8C', desc: '香りの中心・30分〜2時間' },
              { label: 'ベースノート', en: 'BASE', notes: displayData.fragrance.baseNotes, color: '#1A2F4A', desc: '余韻・2時間以降' },
            ].map((layer, i) => (
              <div key={i} className="bg-[#F1EFE5] p-3 rounded-sm">
                <div className="flex items-baseline gap-2 mb-2 flex-wrap">
                  <div className="w-1.5 h-4" style={{ background: layer.color }} />
                  <span className="text-xs font-bold" style={{ color: layer.color }}>{layer.label}</span>
                  <span className="text-[9px] tracking-[0.2em] text-[#7A92AB]">{layer.en}</span>
                  <span className="text-[10px] text-[#5A6878] ml-auto">{layer.desc}</span>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 pl-3.5">
                  {layer.notes.map((n, j) => (
                    <span key={j} className="text-xs text-[#1F2A38]">
                      {n}{j < layer.notes.length - 1 && <span className="text-[#7A92AB] ml-2">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-[#D8D4C2]">
          <div className="text-xs text-[#1F2A38] mb-1.5 font-bold">類似の方向性</div>
          <p className="text-xs text-[#5A6878] leading-relaxed">{displayData.fragrance.similar}</p>
        </div>
      </div>
    </div>
  );
}

export function StrategyTab({ displayData }) {
  return (
    <div className="px-5 py-7 bg-white">
      <SectionLabel num="04" en="STRATEGY" jp="EC販売戦略" />
      <div className="mt-5 mb-5 p-4 bg-[#F1EFE5] border border-[#2C4A6E] rounded-sm">
        <div className="text-[11px] text-[#2C4A6E] mb-1.5 font-bold">EC商品名(SEO最適化)</div>
        <div className="text-sm text-[#1F2A38] mb-3 font-bold leading-snug">{displayData.strategy.productName}</div>
        <div className="text-[11px] text-[#2C4A6E] mb-1.5 font-bold">キャッチコピー</div>
        <p className="text-xs text-[#1F2A38] leading-relaxed">「{displayData.strategy.catchCopy}」</p>
      </div>
      <div className="mb-5 p-3 bg-[#F1EFE5] rounded-sm" style={{ borderLeft: '3px solid #B8956A' }}>
        <div className="text-xs text-[#B8956A] mb-1 font-bold">価格戦略</div>
        <p className="text-xs text-[#1F2A38] leading-relaxed">{displayData.strategy.pricing}</p>
      </div>
      <div className="mb-5">
        <div className="text-xs text-[#1F2A38] mb-2 font-bold">推奨プラットフォーム</div>
        <div className="space-y-2">
          {displayData.strategy.platforms.map((p, i) => (
            <div key={i} className="flex gap-2.5 p-3 bg-[#F1EFE5] rounded-sm">
              <ChevronRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#2C4A6E]" />
              <div className="flex-1">
                <div className="text-xs text-[#1F2A38] font-bold mb-1">{p.name}</div>
                <div className="text-[11px] text-[#5A6878] leading-relaxed">{p.reason}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <div className="text-xs text-[#1F2A38] mb-2 font-bold">検索キーワード</div>
        <div className="flex flex-wrap gap-1.5">
          {displayData.strategy.keywords.map((k, i) => (
            <span key={i} className="px-2.5 py-1 text-[11px] bg-[#2C4A6E] text-white rounded-sm">#{k}</span>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <div className="p-3 bg-[#F1EFE5] rounded-sm" style={{ borderLeft: '3px solid #4A6B8C' }}>
          <div className="text-xs text-[#4A6B8C] mb-1 font-bold">ローンチ施策</div>
          <p className="text-xs text-[#1F2A38] leading-relaxed">{displayData.strategy.launch}</p>
        </div>
        <div className="p-3 bg-[#F1EFE5] rounded-sm" style={{ borderLeft: '3px solid #B8956A' }}>
          <div className="text-xs text-[#B8956A] mb-1 font-bold">口コミ・レビュー施策</div>
          <p className="text-xs text-[#1F2A38] leading-relaxed">{displayData.strategy.reviewStrategy}</p>
        </div>
      </div>
    </div>
  );
}
