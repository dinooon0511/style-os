import React from 'react';

export default function ItemCard({ item, onOpen }) {
  const openWithKeyboard = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen(item);
    }
  };

  return <article className="catalogEditorialItem" role="button" tabIndex={0}
    onClick={() => onOpen(item)} onKeyDown={openWithKeyboard}>
    <div className="catalogEditorialVisual">
      <img alt={item.name} src={item.image} loading="lazy" decoding="async" />
    </div>
    <div className="catalogEditorialDetails">
      <div className="catalogEditorialName">{item.name}</div>
      <div className="catalogEditorialSeason">{item.season}</div>
      <div className="catalogEditorialColor">
        <i style={{ background: item.colorHex }} />
        <span>{item.colorName}</span>
      </div>
    </div>
  </article>;
}
