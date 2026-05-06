import React from 'react';
import { Briefcase, Map, Calculator, MessageSquare, CheckCircle2, AlertCircle, Loader2, Lightbulb, Star, Megaphone, Layout, Hash, Video, Send, Users, DollarSign } from 'lucide-react';
import PositioningMap from './PositioningMap';
import RevenueSimulator from './RevenueSimulator';
import { SectionLabel, SubHeader, StarBar } from './shared';

export function BusinessTab({
  displayData, displayBusinessData, displayReviewData,
  businessLoading, reviewLoading, viewMode,
  generateBusinessAnalysis, generateReviews,
}) {
  return (
    <div className="px-5 md:px-8 py-7 md:py-10 bg-white">
      <SectionLabel num="05" en="BUSINESS" jp="事業性検証" />
      {!displayBusinessData && !businessLoading && viewMode === 'form' && (
        <div className="bg-[#F1EFE5] p-4 rounded-sm border border-[#D8D4C2]">
          <div className="flex items-start gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-[#2C4A6E] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#1F2A38] leading-relaxed">競合ポジショニング、収益シミュレーション、レビュー予測を生成します。</p>
          </div>
          <div className="space-y-2">
            <button onClick={generateBusinessAnalysis} className="w-full py-3 bg-[#2C4A6E] text-white flex items-center justify-center gap-2 rounded-sm font-bold text-sm">
              <Map className="w-4 h-4" /> ポジション・収益を分析
            </button>
            <button onClick={generateReviews} className="w-full py-3 bg-white border border-[#2C4A6E] text-[#2C4A6E] flex items-center justify-center gap-2 rounded-sm font-bold text-sm">
              <MessageSquare className="w-4 h-4" /> レビュー予測を生成
            </button>
          </div>
        </div>
      )}
      {(businessLoading || reviewLoading) && (
        <div className="bg-[#F1EFE5] p-6 rounded-sm border border-[#D8D4C2] flex flex-col items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-[#2C4A6E]" />
          <div className="text-xs text-[#5A6878] text-center">{businessLoading ? '市場データを取得中...' : 'レビューを予測中...'}</div>
        </div>
      )}

      {displayBusinessData && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
          <div>
            <div className="text-sm text-[#1F2A38] mb-2 font-bold flex items-center gap-1.5">
              <Map className="w-4 h-4 text-[#2C4A6E]" />競合ポジショニングマップ
            </div>
            <div className="bg-white border border-[#D8D4C2] rounded-sm p-2 mb-3">
              <PositioningMap data={displayBusinessData.positioning} ourPalette={displayData.design.colorPalette} />
            </div>
            <div className="space-y-2">
              <div className="p-3 bg-[#F1EFE5] rounded-sm" style={{ borderLeft: '3px solid #2C4A6E' }}>
                <div className="text-[10px] text-[#2C4A6E] mb-1 font-bold">市場の示唆</div>
                <p className="text-xs text-[#1F2A38] leading-relaxed">{displayBusinessData.positioning.insight}</p>
              </div>
              <div className="p-3 bg-[#2C4A6E]/8 rounded-sm border border-[#2C4A6E]/30">
                <div className="text-[10px] text-[#2C4A6E] mb-1 font-bold">★ 狙うべき空白地帯</div>
                <p className="text-xs text-[#1F2A38] leading-relaxed font-bold">{displayBusinessData.positioning.whitespace}</p>
              </div>
            </div>
          </div>
          <div className="lg:pt-0 pt-3 lg:border-t-0 border-t border-[#D8D4C2] lg:mt-0">
            <div className="text-sm text-[#1F2A38] mb-3 font-bold flex items-center gap-1.5">
              <Calculator className="w-4 h-4 text-[#2C4A6E]" />収益シミュレーション
            </div>
            <p className="text-[11px] text-[#5A6878] mb-4 leading-relaxed">スライダーで条件を調整するとリアルタイムで再計算されます。</p>
            <RevenueSimulator baseline={displayBusinessData.revenueBaseline} />
          </div>
        </div>
      )}

      {displayReviewData && (
        <div className="space-y-4 mt-6 pt-6 border-t border-[#D8D4C2]">
          <div className="text-sm text-[#1F2A38] mb-2 font-bold flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-[#2C4A6E]" />想定レビュー予測
          </div>
          <div className="bg-gradient-to-br from-[#2C4A6E] to-[#1A2F4A] text-white p-4 rounded-sm">
            <div className="flex items-baseline gap-3 mb-3">
              <div className="text-3xl font-bold">{displayReviewData.ratings.predictedAverage}</div>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current text-[#C4A878]" />
                ))}
              </div>
              <span className="text-[10px] text-[#C4D0E0] ml-auto">想定平均評価</span>
            </div>
            <div className="space-y-1.5">
              <StarBar stars={5} ratio={displayReviewData.ratings.fiveStarRatio} color="#C4D0E0" />
              <StarBar stars={4} ratio={displayReviewData.ratings.fourStarRatio} color="#A8B8D0" />
              <StarBar stars={3} ratio={displayReviewData.ratings.threeStarRatio} color="#C4A878" />
              <StarBar stars={2} ratio={displayReviewData.ratings.twoStarRatio} color="#B89472" />
              <StarBar stars={1} ratio={displayReviewData.ratings.oneStarRatio} color="#B86F4F" />
            </div>
          </div>
          <div>
            <div className="text-xs text-[#2C4A6E] font-bold mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />想定される好評レビュー
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {displayReviewData.positiveReviews.map((r, i) => (
                <div key={i} className="bg-white p-3 rounded-sm border border-[#2C4A6E]/30">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-2.5 h-2.5 ${j < r.stars ? 'fill-current text-[#C4A878]' : 'text-[#D8D4C2]'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-[#1F2A38] font-bold">{r.title}</span>
                    <span className="text-[10px] text-[#7A92AB] ml-auto">{r.persona}</span>
                  </div>
                  <p className="text-[11px] text-[#5A6878] leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs text-[#B86F4F] font-bold mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />想定される懸念レビュー
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {displayReviewData.negativeReviews.map((r, i) => (
                <div key={i} className="bg-white p-3 rounded-sm border border-[#B86F4F]/30">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-2.5 h-2.5 ${j < r.stars ? 'fill-current text-[#C4A878]' : 'text-[#D8D4C2]'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-[#1F2A38] font-bold">{r.title}</span>
                    <span className="text-[10px] text-[#7A92AB] ml-auto">{r.persona}</span>
                  </div>
                  <p className="text-[11px] text-[#5A6878] leading-relaxed mb-1.5">{r.body}</p>
                  <div className="text-[10px] text-[#B86F4F] font-bold">⚠ 懸念: {r.concern}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs text-[#1F2A38] font-bold mb-2 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-[#C4A878]" />改善アクション
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {displayReviewData.actionableInsights.map((a, i) => (
                <div key={i} className="bg-[#F1EFE5] p-3 rounded-sm" style={{ borderLeft: '3px solid #C4A878' }}>
                  <div className="text-xs text-[#B8956A] font-bold mb-1">課題: {a.insight}</div>
                  <div className="text-[11px] text-[#1F2A38] leading-relaxed">→ {a.action}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {displayBusinessData && (
        <div className="text-[10px] text-[#7A92AB] leading-relaxed border-t border-[#D8D4C2] pt-3 mt-4">
          ※ 数値・レビューはダミーデータです。
        </div>
      )}
    </div>
  );
}

export function MarketingTab({ displayMarketingData, marketingLoading, viewMode, generateMarketing }) {
  return (
    <div className="px-5 md:px-8 py-7 md:py-10 bg-white">
      <SectionLabel num="06" en="MARKETING" jp="マーケティング戦略" />
      {!displayMarketingData && !marketingLoading && viewMode === 'form' && (
        <div className="bg-[#F1EFE5] p-4 rounded-sm border border-[#D8D4C2]">
          <div className="flex items-start gap-2 mb-3">
            <Megaphone className="w-4 h-4 text-[#2C4A6E] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-[#1F2A38] leading-relaxed">LP構成・SNS投稿テンプレ・広告コンセプト・インフルエンサー戦略を一括生成します。</p>
          </div>
          <button onClick={generateMarketing} className="w-full py-3 bg-[#2C4A6E] text-white flex items-center justify-center gap-2 rounded-sm font-bold text-sm">
            <Megaphone className="w-4 h-4" /> マーケティング戦略を生成
          </button>
        </div>
      )}
      {marketingLoading && (
        <div className="bg-[#F1EFE5] p-6 rounded-sm border border-[#D8D4C2] flex flex-col items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-[#2C4A6E]" />
          <div className="text-xs text-[#5A6878] text-center">マーケティング戦略を生成中...</div>
        </div>
      )}
      {displayMarketingData && (
        <div className="mt-5">
          <SubHeader icon={Layout} label="LP(商品ページ)構成案" en="LANDING PAGE" />
          <div className="bg-gradient-to-br from-[#2C4A6E] to-[#1A2F4A] p-4 rounded-sm mb-4 text-white">
            <div className="text-[10px] text-[#C4D0E0] mb-1.5 font-bold tracking-wider">FIRST VIEW / ファーストビュー</div>
            <div className="text-lg font-bold leading-tight mb-1">{displayMarketingData.lp.headline}</div>
            <div className="text-xs text-[#C4D0E0] mb-3">{displayMarketingData.lp.subline}</div>
            <div className="text-[10px] text-[#E8EAF0] leading-relaxed pt-2 border-t border-white/15">
              <span className="text-[#C4A878] font-bold">VISUAL: </span>{displayMarketingData.lp.visualDirection}
            </div>
          </div>
          <div className="text-[10px] tracking-[0.2em] text-[#7A92AB] mb-2 font-bold">PAGE STRUCTURE</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {displayMarketingData.lp.sections.map((s, i) => (
              <div key={i} className="bg-white border border-[#D8D4C2] rounded-sm p-3 flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-sm bg-[#F1EFE5] text-[#2C4A6E] flex items-center justify-center text-xs font-bold border border-[#2C4A6E]/30">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-[#1F2A38] mb-1">{s.title}</div>
                  <div className="text-[10px] text-[#2C4A6E] mb-1.5 font-bold">▸ {s.purpose}</div>
                  <div className="text-[11px] text-[#5A6878] leading-relaxed">{s.content}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[10px] tracking-[0.2em] text-[#7A92AB] mb-2 font-bold">FAQ</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {displayMarketingData.lp.faq.map((f, i) => (
              <div key={i} className="bg-[#F1EFE5] rounded-sm p-3">
                <div className="text-xs text-[#1F2A38] font-bold mb-1.5">Q. {f.q}</div>
                <div className="text-[11px] text-[#5A6878] leading-relaxed pl-3 border-l-2 border-[#2C4A6E]">{f.a}</div>
              </div>
            ))}
          </div>

          <SubHeader icon={Hash} label="SNS投稿テンプレート" en="SOCIAL MEDIA" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="bg-white border border-[#D8D4C2] rounded-sm p-3 mb-3">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-[#F58529] to-[#DD2A7B]" />
              <span className="text-xs font-bold text-[#1F2A38]">Instagram</span>
            </div>
            <div className="text-[10px] text-[#2C4A6E] font-bold mb-1.5">FEED CAPTION</div>
            <div className="bg-[#F1EFE5] p-2.5 rounded-sm text-[11px] text-[#1F2A38] leading-relaxed mb-3 whitespace-pre-line">{displayMarketingData.social.instagram.feed}</div>
            <div className="text-[10px] text-[#2C4A6E] font-bold mb-1.5">REELS 構成</div>
            <div className="bg-[#F1EFE5] p-2.5 rounded-sm text-[11px] text-[#1F2A38] leading-relaxed mb-3">{displayMarketingData.social.instagram.reels}</div>
            <div className="text-[10px] text-[#2C4A6E] font-bold mb-1.5">HASHTAGS</div>
            <div className="flex flex-wrap gap-1">
              {displayMarketingData.social.instagram.hashtags.map((h, i) => (
                <span key={i} className="text-[10px] text-[#2C4A6E] font-bold">{h}</span>
              ))}
            </div>
          </div>
          <div className="bg-white border border-[#D8D4C2] rounded-sm p-3 mb-4">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-5 h-5 rounded-sm bg-black flex items-center justify-center"><Video className="w-3 h-3 text-white" /></div>
              <span className="text-xs font-bold text-[#1F2A38]">TikTok</span>
            </div>
            <div className="text-[10px] text-[#2C4A6E] font-bold mb-1.5">3秒フック</div>
            <div className="bg-[#F1EFE5] p-2.5 rounded-sm text-[11px] text-[#1F2A38] leading-relaxed mb-2.5">{displayMarketingData.social.tiktok.hook}</div>
            <div className="text-[10px] text-[#2C4A6E] font-bold mb-1.5">フォーマット</div>
            <div className="bg-[#F1EFE5] p-2.5 rounded-sm text-[11px] text-[#1F2A38] leading-relaxed mb-2.5">{displayMarketingData.social.tiktok.format}</div>
            <div className="text-[10px] text-[#2C4A6E] font-bold mb-1.5">構成</div>
            <div className="bg-[#F1EFE5] p-2.5 rounded-sm text-[11px] text-[#1F2A38] leading-relaxed">{displayMarketingData.social.tiktok.script}</div>
          </div>
          </div>

          <SubHeader icon={Send} label="広告コンセプト案" en="AD CREATIVE" />
          <div className="mb-3">
            <div className="text-[10px] tracking-[0.2em] text-[#7A92AB] font-bold mb-2">広告ヘッドライン候補</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {displayMarketingData.ad.headlines.map((h, i) => (
                <div key={i} className="bg-white border border-[#D8D4C2] rounded-sm p-3 flex gap-2.5">
                  <div className="text-[10px] text-[#C4A878] font-bold flex-shrink-0">{String.fromCharCode(65 + i)}</div>
                  <div className="text-xs text-[#1F2A38] font-bold leading-relaxed">「{h}」</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <div className="text-[10px] tracking-[0.2em] text-[#7A92AB] font-bold mb-2">ビジュアルコンセプト</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {displayMarketingData.ad.visualConcepts.map((v, i) => (
                <div key={i} className="bg-[#F1EFE5] rounded-sm p-3" style={{ borderLeft: '3px solid #B8956A' }}>
                  <div className="text-xs text-[#B8956A] mb-1 font-bold">CONCEPT {i + 1}: {v.name}</div>
                  <div className="text-[11px] text-[#1F2A38] leading-relaxed">{v.description}</div>
                </div>
              ))}
            </div>
          </div>

          <SubHeader icon={Users} label="インフルエンサー戦略" en="INFLUENCER" />
          <div className="text-[10px] tracking-[0.2em] text-[#7A92AB] font-bold mb-2">階層別の起用設計</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
            {displayMarketingData.influencer.tiers.map((t, i) => {
              const colors = ['#7A92AB', '#4A6B8C', '#2C4A6E'];
              const widths = ['60%', '80%', '100%'];
              return (
                <div key={i} className="bg-white border border-[#D8D4C2] rounded-sm p-3">
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-4" style={{ width: widths[i], background: colors[i] }} />
                      <span className="text-xs font-bold text-[#1F2A38]">{t.tier}</span>
                      <span className="text-[10px] text-[#7A92AB]">({t.range})</span>
                    </div>
                    <span className="text-[10px] text-[#2C4A6E] font-bold">{t.count}</span>
                  </div>
                  <div className="text-[11px] text-[#1F2A38] mb-1.5">
                    <span className="text-[#B8956A] font-bold">予算: </span>{t.fee}
                  </div>
                  <div className="text-[11px] text-[#5A6878] leading-relaxed">{t.purpose}</div>
                </div>
              );
            })}
          </div>
          <div className="text-[10px] tracking-[0.2em] text-[#7A92AB] font-bold mb-2">ターゲットインフルエンサー像</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
            {displayMarketingData.influencer.personaTypes.map((p, i) => (
              <div key={i} className="bg-[#F1EFE5] rounded-sm p-3">
                <div className="flex items-baseline gap-2 mb-1.5 flex-wrap">
                  <Users className="w-3.5 h-3.5 text-[#2C4A6E] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#1F2A38]">{p.type}</span>
                  <div className="flex gap-1 ml-auto">
                    {p.platforms.map((pl, j) => (
                      <span key={j} className="px-1.5 py-0.5 text-[9px] bg-white text-[#2C4A6E] rounded-sm font-bold border border-[#2C4A6E]/30">{pl}</span>
                    ))}
                  </div>
                </div>
                <div className="text-[11px] text-[#5A6878] leading-relaxed mb-1.5">{p.description}</div>
                <div className="text-[10px] text-[#7A92AB] italic">例: {p.example}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
            <div className="bg-gradient-to-br from-[#2C4A6E] to-[#1A2F4A] text-white rounded-sm p-3">
              <div className="flex items-center gap-1.5 mb-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#C4A878]" />
                <span className="text-[10px] tracking-[0.1em] text-[#C4A878] font-bold">想定総予算</span>
              </div>
              <div className="text-sm font-bold leading-relaxed">{displayMarketingData.influencer.totalBudget}</div>
            </div>
            <div className="bg-white border border-[#D8D4C2] rounded-sm p-3">
              <div className="text-[10px] text-[#2C4A6E] font-bold mb-1.5">タイムライン</div>
              <div className="text-[11px] text-[#1F2A38] leading-relaxed">{displayMarketingData.influencer.timeline}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
