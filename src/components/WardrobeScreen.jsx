import React, { useEffect, useState } from 'react';
import CategoryChips from './CategoryChips.jsx';
import ItemCard from './ItemCard.jsx';

export default function WardrobeScreen() {
  const [wardrobe, setWardrobe] = useState(null);

  useEffect(() => {
    const onWardrobe = event => setWardrobe(event.detail);
    window.addEventListener('styleos:wardrobe', onWardrobe);
    return () => window.removeEventListener('styleos:wardrobe', onWardrobe);
  }, []);

  if (!wardrobe) return null;
  const { category, total, products } = wardrobe;
  const action = (name, value) => window.appAction?.(name, value);

  return <div className="wardrobeEditorial catalogEditorial">
    <header className="catalogEditorialHeader">
      <div><div className="catalogEditorialKicker">STYLE OS / MY WARDROBE</div><h1>Гардероб</h1></div>
      <span className="catalogEditorialCount">{total} вещей</span>
    </header>
    <CategoryChips active={category} onSelect={value => action('setWardrobeFilter', value)}
      className="wardrobeEditorialChips catalogEditorialChips chips" />
    {products.length ? <div className="catalogEditorialGrid grid2">
      {products.map(item => <ItemCard key={item.ownedId} item={item} onOpen={selected => action('openOwned', selected.ownedId)} />)}
    </div> : <div className="card empty wardrobeEditorialEmpty">
      <h3>Пока пусто</h3>
      <p>Добавь первые вещи — из каталога или вручную.</p>
      <button className="btn dark" onClick={() => action('openAdd')}>Добавить вещь</button>
    </div>}
    <div className="fabSpacer" />
  </div>;
}
