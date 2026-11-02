import React from 'react';

const categories = [
  ['all', 'Все'],
  ['top', 'Верх'],
  ['bottom', 'Низ'],
  ['shoes', 'Обувь'],
  ['layer', 'Слои'],
];

export default function CategoryChips({ active, onSelect, className = 'catalogEditorialChips chips' }) {
  return <div className={className}>
    {categories.map(([key, label]) => <button key={key} type="button"
      className={`chip ${active === key ? 'active' : ''}`}
      onClick={() => onSelect(key)}>{label}</button>)}
  </div>;
}
