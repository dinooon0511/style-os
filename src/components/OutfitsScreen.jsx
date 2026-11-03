import React, { useEffect, useRef, useState } from 'react';
import useLegacyView from '../hooks/useLegacyView.js';

const action = (name, payload) => window.appAction?.(name, payload);
const number = value => String(value).padStart(2, '0');

export default function OutfitsScreen() {
  const view = useLegacyView('outfits');
  const photoRef = useRef(null);
  const gesture = useRef(null);
  const animating = useRef(false);
  const timer = useRef(null);
  const [offset, setOffset] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const index = view?.index;
  useEffect(() => {
    setOffset(0);
    setLeaving(false);
    animating.current = false;
  }, [index]);
  useEffect(() => () => clearTimeout(timer.current), []);

  const navigate = (direction, target) => {
    if (!view || view.count < 2 || animating.current) return;
    animating.current = true;
    setLeaving(true);
    setOffset(direction > 0 ? -window.innerWidth : window.innerWidth);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (target !== undefined) action('setOutfitIndex', target);
      else action(direction > 0 ? 'outfitNext' : 'outfitPrev');
      // A no-op index update should not keep the photo locked.
      timer.current = setTimeout(() => { setOffset(0); setLeaving(false); animating.current = false; }, 300);
    }, 190);
  };

  const onPointerDown = event => {
    if (view?.count < 2 || animating.current || !event.isPrimary) return;
    gesture.current = { x: event.clientX, y: event.clientY, id: event.pointerId, active: false };
  };
  const onPointerMove = event => {
    const start = gesture.current;
    if (!start || start.id !== event.pointerId || animating.current) return;
    const dx = event.clientX - start.x, dy = event.clientY - start.y;
    if (!start.active && Math.abs(dx) > 9 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      start.active = true;
      photoRef.current?.setPointerCapture(event.pointerId);
    }
    if (start.active) setOffset(Math.max(-130, Math.min(130, dx)));
  };
  const onPointerUp = event => {
    const start = gesture.current;
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    gesture.current = null;
    if (start.active && Math.abs(dx) > 45) navigate(dx < 0 ? 1 : -1);
    else setOffset(0);
  };

  if (!view) return null;
  const { anchored, anchor, anchors = [], count, look, summary } = view;

  return <div className="lookbookPage">
    <header className="lookbookHeader">
      <h1>Образы</h1>
      <div className="lookbookModes" role="group" aria-label="Способ подбора">
        <button type="button" className={!anchored ? 'active' : ''} aria-current={!anchored ? 'page' : undefined} onClick={() => action('showReadyOutfits')}>Готовые</button>
        <button type="button" className={anchored ? 'active' : ''} aria-current={anchored ? 'page' : undefined} onClick={() => action('openAnchorPicker')}>По вещам</button>
      </div>
    </header>
    <button className="lookbookFilters" onClick={() => action('openOutfitFilters')} aria-label={`Настроить подбор: ${summary.join(', ')}`}>
      <span className="lookbookFilterIcon" aria-hidden="true">☷</span>
      <span className="lookbookFilterSummary">{summary.map((part, i) => <React.Fragment key={part}>{i > 0 && <i>·</i>}{part}</React.Fragment>)}</span>
      <span aria-hidden="true" className="lookbookChevron">›</span>
    </button>
    {look ? <div className={`lookbookStory ${anchored ? "lookbookStoryAnchored" : ""}`}>
      <div ref={photoRef} className="lookbookPhoto" style={{
        backgroundImage: `linear-gradient(90deg,rgba(12,16,12,.56),rgba(12,16,12,.04) 77%),url("${look.image}")`,
        transform: `translate3d(${offset}px,0,0)`,
        opacity: leaving ? .65 : 1,
        transition: gesture.current?.active ? 'none' : 'transform 190ms ease-out,opacity 190ms ease-out',
        touchAction: 'pan-y'
      }} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={() => { gesture.current = null; setOffset(0); }}>
        <div className="lookbookPhotoCopy"><span className="lookbookKicker">STYLE OS / LOOK {number(view.index + 1)}</span><h2>{look.title}</h2><p>{look.occasion}</p></div>
      </div>
      <div className="lookbookPhotoControls">
        {anchored && anchors.length > 0 && <div className="anchorHeroGrid" aria-label="Обязательные вещи">
          {anchors.map(item => <div key={item.id} className="anchorHeroTile"><button type="button" className="anchorHeroReplace" onClick={() => action('replaceAnchor', item.id)} aria-label={`Заменить: ${item.label}`}>
            <img src={item.image} alt={item.label} />
            <span className="anchorHeroChange" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 8a8 8 0 0 0-13.7-2.2L3.5 8" /><path d="M3.5 3.5V8H8" /><path d="M4.5 16a8 8 0 0 0 13.7 2.2l2.3-2.2" /><path d="M20.5 20.5V16H16" /></svg></span>
            </button><button type="button" className="anchorHeroRemove" aria-label={`Убрать из подбора: ${item.label}`} onClick={() => action('removeAnchor', item.id)}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
          </div>)}
          {anchors.length < 4 && <button type="button" className="anchorHeroAdd" onClick={() => action('addAnchor')} aria-label="Добавить обязательную вещь"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg></button>}
        </div>}
        <div className="lookbookPagination" aria-label={`Образ ${view.index + 1} из ${count}`}>
          <span>{number(view.index + 1)} / {number(count)}</span>
          <div className="lookbookProgress">{Array.from({ length: count }, (_, i) => <button key={i} type="button" aria-label={`Образ ${i + 1}`} className={i === view.index ? 'selected' : ''} onClick={() => navigate(i > view.index ? 1 : -1, i)} />)}</div>
        </div>
        <div className="lookbookArrows"><button type="button" disabled={count < 2} aria-label="Предыдущий образ" onClick={() => navigate(-1)}><span aria-hidden="true">←</span></button><button type="button" disabled={count < 2} aria-label="Следующий образ" onClick={() => navigate(1)}><span aria-hidden="true">→</span></button></div>
      </div>
      <section className="lookbookDetails">
        <div className="lookbookOverline">ОБРАЗ {number(view.index + 1)} / {number(count)}</div>
        <h2>{look.title}</h2><p>{look.reason}</p>
        <div className="lookbookPieces">{look.parts.map((part, i) => <button key={`${part.id}-${i}`} type="button" className="lookbookPiece" aria-label={`Открыть ${part.label}`} onClick={() => action('openOutfitPart', `${look.id}:${i}`)}><img src={part.image} alt={part.label} loading="lazy" /><span>{part.label}</span>{part.missing && <small>Докупить</small>}</button>)}</div>
        <div className="lookbookAvailability">{look.missing ? <><span className="lookbookNeed">○</span> Нужно докупить: {look.missing}</> : <><span className="lookbookCheck">✓</span> Все вещи есть</>}</div>
        <button type="button" className="lookbookOpen" onClick={() => action('openLook', look.id)}>Открыть образ <span aria-hidden="true">→</span></button>
      </section>
      <button type="button" className="lookbookReload" onClick={() => action('shuffle')}>Другой повод ↻</button>
    </div> : <div className="lookbookEmpty">
      <h2>Пока нет подходящих образов</h2>
      <p>{anchored ? 'Попробуй другие фильтры или выбери другую вещь.' : 'Попробуй другую погоду или разреши предложения вещей из каталога.'}</p>
      <button type="button" className="lookbookOpen" onClick={() => action('openOutfitFilters')}>Изменить настройки</button>
    </div>}
  </div>;
}
