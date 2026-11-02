import React, { useEffect } from 'react';
import AuthScreen from './components/AuthScreen.jsx';

const tabs = [
  ['home', '⌂', 'Главная'],
  ['wardrobe', '◫', 'Гардероб'],
  ['outfits', '✦', 'Образы'],
  ['catalog', '⌕', 'Каталог'],
  ['profile', '◎', 'Профиль'],
];

export default function App() {
  useEffect(() => {
    // The existing controller performs its own initialization and handles
    // navigation, Supabase sync and dynamic content in the five screen roots.
    import('./legacy/engine.js');
  }, []);

  return <>
    <div className="app">
      <div className="shell">
        <div id="onboarding" className="onboarding show" />
        {tabs.map(([id]) => <main key={id} id={`${id}Screen`} className={`screen${id === 'home' ? ' active' : ''}`} />)}
        <button id="floatingAdd" className="floatBtn hidden" aria-label="Добавить вещь">+</button>
        <nav className="tabbar" aria-label="Основная навигация">
          {tabs.map(([id, icon, name]) => <button key={id} className={`tab${id === 'home' ? ' active' : ''}`} data-screen={id}><span>{icon}</span><span>{name}</span></button>)}
        </nav>
      </div>
    </div>
    <div id="sheetBackdrop" className="sheetBackdrop" />
    <div id="sheet" className="sheet" />
    <AuthScreen />
    <div id="styleSyncStatus" role="status" aria-live="polite" hidden />
  </>;
}
