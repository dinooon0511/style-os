import React from 'react';
import useLegacyView from '../hooks/useLegacyView.js';
import Avatar from './Avatar.jsx';
import UiIcons from './UiIcons.jsx';

const action = (name, payload) => window.appAction?.(name, payload);

export default function HomeScreen() {
  const view = useLegacyView('home');
  if (!view) return null;
  const { city, weather, avatar, hero, picked, suggestions } = view;

  return <div className="homeEditorial">
    <header className="homeEditorialHeader">
      <div><div className="homeEditorialKicker">PERSONAL STYLE SYSTEM</div><h1>PELCLO</h1></div>
      <div className="homeEditorialHeaderRight">
        <button type="button" className="homeEditorialWeather" onClick={() => action('openCity')} aria-label="Выбрать город">
          <span>{city}</span><small>{weather || 'Указать погоду'}</small>
        </button>
        <button className="avatar" aria-label="Мой профиль" onClick={() => action('switchTab', 'profile')}><Avatar photo={avatar} /></button>
      </div>
    </header>
    <section className="homeEditorialFeatured">
      <div className="homeEditorialPhoto" style={{ backgroundImage: `linear-gradient(180deg,rgba(12,15,12,.12),rgba(12,15,12,.02) 60%,rgba(12,15,12,.12)),url("${hero.image}")` }}>
        <span className="homeEditorialPhotoTag">ОБРАЗ ДНЯ</span>
      </div>
      <div className="homeEditorialFeatureBody">
        <div className="homeEditorialFeatureCopy"><h2>{hero.title}</h2><p>{hero.description}</p></div>
        <button type="button" className="homeEditorialMainAction" onClick={() => action('openLeadLook')}>
          {picked ? 'Смотреть образ' : 'Выбрать образ'} <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
    <div className="homeEditorialQuick" aria-label="Быстрые действия">
      <button type="button" className="homeEditorialQuickItem" onClick={() => action('switchTab', 'outfits')}><span className="homeEditorialQuickIcon" aria-hidden="true">✦</span><span><strong>Собрать образ</strong><small>Для любого случая</small></span><i aria-hidden="true">›</i></button>
      <button type="button" className="homeEditorialQuickItem" onClick={() => action('openSaved')}><span className="homeEditorialQuickIcon" aria-hidden="true"><UiIcons name="heart" size={23} /></span><span><strong>Сохранённые образы</strong><small>Твои избранные образы</small></span><i aria-hidden="true">›</i></button>
      <button type="button" className="homeEditorialQuickItem" onClick={() => action('openAdd')}><span className="homeEditorialQuickIcon" aria-hidden="true"><UiIcons name="plus" size={24} /></span><span><strong>Добавить вещь</strong><small>В свой гардероб</small></span><i aria-hidden="true">›</i></button>
    </div>
    {suggestions.length > 0 && <section className="homeEditorialSection">
      <div className="homeEditorialSectionHeading"><h2>Сегодня тебе подойдут</h2><button type="button" aria-label="Смотреть все образы" onClick={() => action('switchTab', 'outfits')}>›</button></div>
      <div className="homeEditorialSuggestions">{suggestions.map(look => <button key={look.id} type="button" className="homeEditorialSuggestion" onClick={() => action('openLook', look.id)} style={{ backgroundImage: `linear-gradient(180deg,transparent 35%,rgba(12,14,11,.68)),url("${look.image}")` }}><span>{look.title}</span><small>{look.subtitle}</small></button>)}</div>
    </section>}

  </div>;
}
