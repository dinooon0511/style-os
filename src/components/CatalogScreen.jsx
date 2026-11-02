import React, { useEffect, useState } from 'react';

const filters = [
  ['all', 'Все'],
  ['top', 'Верх'],
  ['bottom', 'Низ'],
  ['shoes', 'Обувь'],
  ['layer', 'Слои'],
];

export default function CatalogScreen() {
  const [catalog, setCatalog] = useState(null);

  useEffect(() => {
    const onCatalog = event => setCatalog(event.detail);
    window.addEventListener('styleos:catalog', onCatalog);
    return () => window.removeEventListener('styleos:catalog', onCatalog);
  }, []);

  if (!catalog) return null;
  const { total, hero, category, query, products } = catalog;
  const action = (name, value) => window.appAction?.(name, value);

  return <div className="catalogEditorial">
    <header className="catalogEditorialHeader">
      <div><div className="catalogEditorialKicker">STYLE OS / EDITED SELECTION</div><h1>Каталог</h1></div>
      <span className="catalogEditorialCount">{total} вещей</span>
    </header>
    <div className="catalogEditorialHero" style={{ backgroundImage: `linear-gradient(90deg,rgba(16,19,16,.45),rgba(16,19,16,.03) 80%),url("${hero}")` }}>
      <h2>Вещи,<br />которые<br />сочетаются</h2>
    </div>
    <div className="catalogEditorialSearch search">
      <span aria-hidden="true">⌕</span>
      <input value={query} onChange={event => action('searchCatalog', event.target.value)} placeholder="Поиск по вещам" aria-label="Поиск по вещам" />
    </div>
    <div className="catalogEditorialChips chips">
      {filters.map(([key, label]) => <button key={key} type="button" className={`chip ${category === key ? 'active' : ''}`} onClick={() => action('setCatalogFilter', key)}>{label}</button>)}
    </div>
    <div className="catalogEditorialGrid grid2">
      {products.map(item => <article key={item.id} className="catalogEditorialItem" role="button" tabIndex={0} onClick={() => action('openProduct', item.id)} onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); action('openProduct', item.id); }
      }}>
        <div className="catalogEditorialVisual"><img alt={item.name} src={item.image} loading="lazy" decoding="async" /></div>
        <div className="catalogEditorialDetails">
          <div className="catalogEditorialName">{item.name}</div>
          <div className="catalogEditorialSeason">{item.season}</div>
          <div className="catalogEditorialColor"><i style={{ background: item.colorHex }} /><span>{item.colorName}</span></div>
        </div>
      </article>)}
    </div>
  </div>;
}
