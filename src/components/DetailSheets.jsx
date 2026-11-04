import React, { useEffect, useState } from 'react';

const action = (name, value) => window.appAction?.(name, value);

function ProductDetail({ data, kind }) {
  const item = data.item;
  const owned = kind === 'item';
  return <>
    <div className="sheetHandle" />
    <div className="itemVisual" style={{ height: data.shoes ? 290 : 270, borderRadius: 24, overflow: 'hidden' }}><img alt={item.name} src={data.image} decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center', transform: data.shoes ? 'translateY(-14px) scale(1.02)' : 'translateY(-5px) scale(.96)' }} /></div>
    <div className="itemInfoGlass"><div className="sheetSection"><h2 className="sheetTitle">{item.brand ? `${item.brand} — ` : ''}{item.name}</h2><p className="sheetSub">{data.type} · {data.color} · {owned ? item.fit || 'regular' : data.price}</p></div>
      <div className="list">{(owned ? [['Категория',data.type],['Цвет',data.color],['Материал',item.material || 'Не указан'],['Артикул',item.sku || '—']] : [['Посадка',item.fit || 'regular'],['Сезон',data.season],['Материал',item.material || 'Не указан'],['Артикул Lamoda',item.sku || '—']]).map(([label,value]) => <div className="listRow" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
    </div>
    <div className="sheetFooter">
      <button className="btn line" onClick={() => action(owned ? 'removeOrCopy' : 'copySku', owned ? item.ownedId || item.id : item.id)}>{owned ? item.ownedId ? 'Удалить' : 'Копировать артикул' : 'Копировать артикул'}</button>
      <button className="btn dark" onClick={() => action(owned ? 'buildFromItem' : 'addFromCatalog', owned ? item.ownedId || item.id : item.id)}>{owned ? 'Собрать образ' : 'Добавить в гардероб'}</button>
    </div>
    {!owned && item.url && <div className="section" style={{ padding: '0 2px 8px' }}><a className="btn primary" style={{ width: '100%', display: 'block', textAlign: 'center' }} href={item.url} target="_blank" rel="noopener noreferrer">Открыть на Lamoda</a></div>}
  </>;
}

function LookDetail({ data }) {
  const { look } = data;
  return <>
    <div className="sheetHandle" />
    {look.anchorSource && <div className="lookDetailBack"><button type="button" onClick={() => action('backToAnchorPage')}>← К образам</button></div>}
    <div className="lookDetailHero" style={{ backgroundImage: `linear-gradient(0deg,rgba(10,14,10,.68),transparent 65%),url("${data.image}")` }}><div className="lookDetailHeroCopy"><span className="lookDetailOccasion">{data.occasion}</span><h2>{data.title}</h2></div></div>
    <section className="lookDetailBody"><h3>Почему сочетается</h3><p className="lookDetailReason">{data.reason}</p>
      {look.warnings?.length > 0 && <p className="lookDetailWarning">{look.warnings.join(' ')}</p>}
      <div className="lookDetailProducts" style={{ '--look-cols': Math.min(4, data.parts.length) }}>{data.parts.map((part, index) => <button key={`${part.id}-${index}`} type="button" className="lookDetailProduct" onClick={() => action('openLookPart', index)} aria-label={`${part.label}. ${part.missing ? 'Нужно докупить' : 'Есть в гардеробе'}. Открыть карточку вещи`}>
        <span className="lookDetailProductPhoto"><img src={part.image} alt={part.label} loading="lazy" /><span className={`lookDetailStatus ${part.missing ? 'need' : 'owned'}`} aria-hidden="true"><span>{part.missing ? '−' : '✓'}</span></span></span><strong>{part.label}</strong><small>{part.color}</small>
      </button>)}</div>
      <div className="lookDetailInventory"><div className="lookDetailInventoryHead"><span className="lookDetailInventoryIcon" aria-hidden="true">{data.missing ? '−' : '✓'}</span><span>{data.missing ? `${data.owned} в гардеробе · ${data.missing} докупить` : 'Все вещи есть в гардеробе'}</span></div><div className="lookDetailTrack" role="progressbar" aria-valuemin="0" aria-valuemax={data.parts.length} aria-valuenow={data.owned} aria-label="Вещи в гардеробе"><span style={{ width: `${data.parts.length ? Math.round(data.owned / data.parts.length * 100) : 0}%` }} /></div></div>
      <div className="lookDetailRating" aria-label="Оценить рекомендацию"><span>Подходит тебе?</span><button type="button" onClick={() => action('rateLook','like')}>Да</button><button type="button" onClick={() => action('rateLook','dislike')}>Нет</button></div>
    </section><div className="lookDetailActions"><button type="button" className="lookDetailSave" onClick={() => action('saveLook',look.id)}>Сохранить образ</button><button type="button" className="lookDetailShop" onClick={() => action(data.isDaily ? 'rechooseDaily' : 'shoppingFromLook', data.isDaily ? undefined : look.id)}>{data.isDaily ? 'Выбрать образ заново' : 'Что докупить'}</button></div>
  </>;
}

function ManualForm({ data }) {
  const field = (id, label, choices) => <div className="field" key={id}><label htmlFor={id}>{label}</label><select id={id}>{choices.map(([key, value]) => <option key={key} value={key}>{value}</option>)}</select></div>;
  return <><div className="sheetHandle" /><h2 className="sheetTitle">Новая вещь</h2><p className="sheetSub">Минимальный быстрый ввод — без фото, но с ключевыми характеристиками.</p>
    <div className="fields"><div className="field"><label htmlFor="manualName">Название</label><input id="manualName" placeholder="Например, Базовая футболка" /></div>
      {field('manualType','Тип вещи',data.types)}{field('manualColor','Цвет',data.colors)}
      {field('manualFit','Посадка',[['regular','Regular'],['slim','Slim'],['relaxed','Relaxed']])}
      {field('manualSeason','Сезон',[['all','Всесезонная'],['warm','Тёплый сезон'],['cold','Холодный сезон']])}
    </div><div className="sheetFooter"><button className="btn line" onClick={() => action('openAdd')}>Назад</button><button className="btn dark" onClick={() => action('saveManual')}>Сохранить вещь</button></div>
  </>;
}

function SavedLooks({ data }) { return <><div className="sheetHandle" /><h2 className="sheetTitle">Сохранённые образы</h2><p className="sheetSub">Твои избранные сочетания</p><div className="list">{data.looks.length ? data.looks.map(row => <div className="savedLookCard" key={row.id}><img alt="" src={row.image} /><div className="savedLookInfo"><strong>{row.title}</strong><small>{row.count ? `${row.count} вещи · посмотреть состав` : 'Старый образ пока не восстановлен'}</small>{row.count > 0 && <button className="btn dark small" onClick={() => action('viewSaved',row.id)}>Посмотреть</button>}</div><button className="btn line small" onClick={() => action('removeSaved',row.id)}>Удалить</button></div>) : <div className="empty">Пока нет сохранённых образов. Открой «Образы» и сохрани понравившийся вариант.</div>}</div></>; }

const addCategories = [['all','Все'],['top','Верх'],['bottom','Низ'],['shoes','Обувь'],['layer','Слои']];
function AddItemSheet({ data }) {
  const [query, setQuery] = useState(data.query);
  const [category, setCategory] = useState(data.category);
  const matching = data.items.filter(item => (category === 'all' || item.group === category) && (!query.trim() || item.search.includes(query.toLowerCase().trim())));
  return <><div className="sheetHandle" /><h2 className="sheetTitle">Добавить вещь</h2><p className="sheetSub">Все {data.items.length} товаров Lamoda. Поиск по названию, бренду, цвету или артикулу.</p>
    <div className="search"><span>⌕</span><input id="addSearch" value={query} placeholder="Найти вещь" onChange={e => setQuery(e.target.value)} /></div>
    <div className="chips" style={{ margin: '12px 0' }}>{addCategories.map(([key,label]) => <button type="button" key={key} className={`chip${category === key ? ' active' : ''}`} onClick={() => setCategory(key)}>{label}</button>)}</div>
    <div className="helper" style={{ marginBottom: 8 }}>Найдено: {matching.length}</div>
    <div className="grid2">{matching.map(item => <button type="button" key={item.id} className="itemCard catalogProductCard" onClick={() => action('addFromCatalog',item.id)}><div className="itemVisual catalogProductVisual"><img alt={item.name} src={item.image} loading="lazy" decoding="async" /></div><div className="itemBody catalogProductBody"><div className="catalogProductEyebrow">{item.brand || 'STYLE OS'}</div><div className="catalogProductName">{item.name}</div><div className="catalogProductFoot"><span className="catalogProductColor"><i style={{ background: item.colorHex }} />{item.color}</span></div></div></button>)}</div>
    <div className="sheetFooter"><button className="btn line" onClick={() => action('manualForm')}>Добавить вручную</button><button className="btn dark" onClick={() => action('switchTab','catalog')}>Каталог</button></div>
  </>;
}

function DailySheet({ data }) {
  const [drag, setDrag] = useState(0);
  const pointer = React.useRef(null);
  const vote = choice => { setDrag(0); action('dailyVote', choice); };
  const current = data.current;
  const onDown = event => { if (!event.isPrimary) return; pointer.current = { id:event.pointerId, x:event.clientX, y:event.clientY }; };
  const onMove = event => {
    const start=pointer.current;if(!start||start.id!==event.pointerId)return;
    const dx=event.clientX-start.x,dy=event.clientY-start.y;
    if(Math.abs(dx)>Math.abs(dy)*1.3&&Math.abs(dx)>8){event.currentTarget.setPointerCapture(event.pointerId);setDrag(Math.max(-140,Math.min(140,dx)));}
  };
  const onUp = event => {const start=pointer.current;if(!start)return;pointer.current=null;const dx=event.clientX-start.x;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(event.clientY-start.y)*1.3)vote(dx>0?'like':'dislike');else setDrag(0);};
  return <div className="dailyEditorialScreen">
    <header className="dailyEditorialHeader"><div className="dailyEditorialOverline">STYLE OS / DAILY</div><h2>{current?'Твой образ на сегодня':'Твой выбор на сегодня'}</h2><div className="dailyEditorialProgress"><span>{current?String(data.index+1).padStart(2,'0'):'✓'} <em>из {String(data.count).padStart(2,'0')}</em></span><div className="dailyEditorialBars">{Array.from({length:data.count},(_,i)=><i key={i} className={i<=data.index?'filled':''} />)}</div></div></header>
    {current ? <><div className="dailySwipeStage">
      {data.next && <div className="dailySwipeUnder" aria-hidden="true"><div className="dailyEditorialPicture" style={{backgroundImage:`linear-gradient(180deg,transparent 67%,rgba(16,18,16,.15)),url("${data.next.image}")`}} /><div className="dailyEditorialUnderText">{data.next.title}</div></div>}
      <div id="dailySwipe" className="dailySwipeCard dailyEditorialCard" style={{transform:`translate3d(${drag}px,0,0) rotate(${drag/18}deg)`,touchAction:'pan-y',transition:pointer.current?'none':'transform 180ms ease-out'}} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={()=>{pointer.current=null;setDrag(0);}}>
        <span className="dailySwipeNo dailyEditorialReaction" style={{opacity:drag<0?.9:0}}>НЕ НРАВИТСЯ</span><span className="dailySwipeYes dailyEditorialReaction" style={{opacity:drag>0?.9:0}}>♡ НРАВИТСЯ</span>
        <div className="dailyEditorialPicture" style={{backgroundImage:`linear-gradient(180deg,rgba(15,18,16,.06),transparent 40%,rgba(15,18,16,.07)),url("${current.image}")`}}><span className="dailyEditorialCategory">{current.occasion}</span></div>
        <div className="dailyEditorialInfo"><h3>{current.title}</h3><p>Вещей в образе: {current.parts.length}</p><div className="dailyEditorialItems">{current.parts.map((part,i)=><div className="dailyEditorialPiece" key={i}><img src={part.image} alt={part.label} loading="lazy" /></div>)}</div><div className="dailyEditorialFoot"><span>✓ Вещи уже есть</span><span>·</span><span>Подходит под погоду</span></div></div>
      </div></div><div className="dailyEditorialVoteActions dailyVoteActions"><button type="button" className="dailyEditorialVoteNo" onClick={()=>vote('dislike')} aria-label="Не нравится"><span>×</span><small>Не нравится</small></button><div className="dailyEditorialSwipeHint">‹ Свайпай влево или вправо ›</div><button type="button" className="dailyEditorialVoteYes" onClick={()=>vote('like')} aria-label="Нравится"><span>♡</span><small>Нравится</small></button></div></>:
      <div className="dailyEditorialFinal"><p>{data.noCandidates?'В гардеробе пока нет полного комплекта для этой погоды. Добавь подходящие вещи.':data.likes?'Выбери один из понравившихся образов.':'Ты просмотрел все варианты. Можно выбрать любой из них.'}</p><div className="dailyEditorialFinalList">{data.options.map((look,i)=><article className="dailyEditorialFinalRow" key={`${look.id}-${i}`}><button type="button" className="dailyEditorialFinalPreview" onClick={()=>action('dailyPreview',look.identity)}><img src={look.image} alt="" loading="lazy" /><span><strong>{look.title}</strong><small>{look.parts.length} вещи · Просмотреть</small></span></button><button type="button" className="dailyEditorialFinalChoose" onClick={()=>action('dailyChoose',look.identity)}>Выбрать</button></article>)}</div></div>}
    <div className="dailyEditorialExtra"><button type="button" onClick={()=>action('dailyOutfits')}>Перейти к образам</button><button type="button" onClick={()=>action('dailyReset')}>Начать заново</button></div>
  </div>;
}

function DailyPreview({ data }) {return <><div className="sheetHandle" /><div className="sheetSection"><div className="subtle">STYLE OS / ПРЕДПРОСМОТР</div><h2 className="sheetTitle">{data.title}</h2><p className="helper">{data.reason}</p></div><div className="dailyPieces dailyPreviewPieces">{data.parts.map((part,i)=><div key={i}><img src={part.image} alt={part.label} /><small>{part.label}{part.missing?' · докупить':''}</small></div>)}</div><div className="sheetSection" style={{display:'flex',gap:8}}><button className="btn line" onClick={()=>action('dailyBack')}>Назад</button><button className="btn dark" onClick={()=>action('dailyChoose',data.identity)}>Выбрать этот образ</button></div></>;}

export default function DetailSheets() {
  const [sheet, setSheet] = useState(null);
  useEffect(() => {
    const onChange = event => setSheet(event.detail || null);
    window.addEventListener('styleos:detail-sheet', onChange);
    return () => window.removeEventListener('styleos:detail-sheet', onChange);
  }, []);
  return <div id="reactDetailSheet" className={`sheet${sheet ? ' show' : ''}${sheet?.kind === 'addItem' ? ' addItemSheetFixed' : ''}${sheet?.kind === 'look' ? ' lookDetailSheet' : ''}${['item','product'].includes(sheet?.kind) ? ' itemDetailSheet' : ''}${sheet?.kind==='daily'?' dailyPickerSheet':''}`} role={sheet ? 'dialog' : undefined} aria-modal={sheet ? true : undefined} aria-label={sheet?.kind === 'look' ? 'Состав образа' : 'Детали'}>
    {['item','product'].includes(sheet?.kind) && <ProductDetail kind={sheet.kind} data={sheet.data} />}
    {sheet?.kind === 'look' && <LookDetail data={sheet.data} />}
    {sheet?.kind === 'manualForm' && <ManualForm data={sheet.data} />}
    {sheet?.kind === 'savedLooks' && <SavedLooks data={sheet.data} />}
    {sheet?.kind === 'addItem' && <div className="addItemSheetBody"><AddItemSheet key="addItem" data={sheet.data} /></div>}
    {sheet?.kind === 'daily' && <DailySheet key={`daily-${sheet.data.index}`} data={sheet.data} />}
    {sheet?.kind === 'dailyPreview' && <DailyPreview data={sheet.data} />}
    {sheet && <button type="button" className="sheetClose" aria-label="Закрыть" onClick={() => action('closeSheet')}><svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5L19 19M19 5L5 19" /></svg></button>}
  </div>;
}
