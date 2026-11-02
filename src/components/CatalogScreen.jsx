import React, { useEffect, useState } from 'react';
import CategoryChips from './CategoryChips.jsx';
import ItemCard from './ItemCard.jsx';

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
    <CategoryChips active={category} onSelect={value => action('setCatalogFilter', value)} />
    <div className="catalogEditorialGrid grid2">
      {products.map(item => <ItemCard key={item.id} item={item} onOpen={selected => action('openProduct', selected.id)} />)}
    </div>
  </div>;
}
