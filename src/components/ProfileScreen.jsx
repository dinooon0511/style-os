import React from 'react';
import useLegacyView from '../hooks/useLegacyView.js';
import Avatar from './Avatar.jsx';
import UiIcons from './UiIcons.jsx';

const action = (name, payload) => window.appAction?.(name, payload);

export default function ProfileScreen() {
  const view = useLegacyView('profile');
  if (!view) return null;
  const { profile, wardrobeCount, savedCount } = view;

  return <>
    <div className="topbar"><div><div className="subtle">PELCLO / ACCOUNT</div><div className="brand">Мой профиль</div></div><button className="btn line small" onClick={() => window.styleAuth?.logout()}>Выйти</button></div>
    <section className="profileHero profileHeroBlack">
      <div className="profilePortraitRow">
        <div className="profilePortraitMetric"><strong>{wardrobeCount}</strong><small>вещей в гардеробе</small></div>
        <button className="profileAvatar" aria-label="Изменить фото профиля" onClick={() => action('chooseAvatar')}><Avatar photo={profile.avatar} /></button>
        <div className="profilePortraitMetric"><strong>{savedCount}</strong><small>сохранённых образов</small></div>
      </div>
      <input type="file" id="profileAvatarFile" accept="image/*" hidden onChange={event => window.uploadStyleAvatar?.(event.target.files?.[0])} />
      <h2>{profile.name || 'Пользователь'}</h2>
      <p>Твой персональный стиль</p>
      <div className="profileActions"><button type="button" onClick={() => action('editProfile')}>Редактировать</button><button type="button" onClick={() => action('chooseAvatar')}>Изменить фото</button></div>
    </section>
    <section className="profilePanel">
      <div className="sectionHead"><div><h2 className="sectionTitle">Моя коллекция</h2><div className="sectionHint">Всё, что делает стиль твоим</div></div></div>
      <div className="listRow" role="button" tabIndex={0} onClick={() => action('openSaved')} onKeyDown={e => e.key === 'Enter' && action('openSaved')}><div><strong className="profileSavedTitle"><UiIcons name="heart" size={22} /> Сохранённые образы</strong><div className="helper">{savedCount} сохранено · открыть подборку</div></div><span>›</span></div>
      <div className="listRow" role="button" tabIndex={0} onClick={() => action('switchTab', 'wardrobe')} onKeyDown={e => e.key === 'Enter' && action('switchTab', 'wardrobe')}><div><strong>Мой гардероб</strong><div className="helper">{wardrobeCount} вещей</div></div><span>›</span></div>
    </section>
    <section className="profilePanel">
      <div className="sectionHead"><div><h2 className="sectionTitle">Параметры стиля</h2><div className="sectionHint">Используются при составлении образов</div></div></div>
      {[['Основной стиль', profile.style], ['Верх / низ', `${profile.topSize} / ${profile.bottomSize}`], ['Размер обуви', profile.shoeSize], ['Бюджет', profile.budget]].map(([label, value]) => <div className="listRow" key={label}><span>{label}</span><strong>{value}</strong></div>)}
      <button className="btn line" style={{ width: '100%', marginTop: 12 }} onClick={() => action('editProfile')}>Изменить параметры</button>
    </section>
  </>;
}
