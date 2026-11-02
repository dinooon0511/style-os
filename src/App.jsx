import React, { useEffect } from 'react';
import AuthScreen from './components/AuthScreen.jsx';
import CatalogScreen from './components/CatalogScreen.jsx';
import WardrobeScreen from './components/WardrobeScreen.jsx';
import HomeScreen from './components/HomeScreen.jsx';
import ProfileScreen from './components/ProfileScreen.jsx';
import OutfitsScreen from './components/OutfitsScreen.jsx';
import Onboarding from './components/Onboarding.jsx';
import SettingsSheets from './components/SettingsSheets.jsx';
import DetailSheets from './components/DetailSheets.jsx';

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
        <Onboarding />
        {tabs.map(([id]) => <main key={id} id={`${id}Screen`} className={`screen${id === 'home' ? ' active' : ''}`}>
          {id === 'home' && <HomeScreen />}
          {id === 'catalog' && <CatalogScreen />}
          {id === 'wardrobe' && <WardrobeScreen />}
          {id === 'profile' && <ProfileScreen />}
          {id === 'outfits' && <OutfitsScreen />}
        </main>)}
        <button id="floatingAdd" className="floatBtn hidden" aria-label="Добавить вещь">+</button>
        <nav className="tabbar" aria-label="Основная навигация">
          {tabs.map(([id, icon, name]) => <button key={id} className={`tab${id === 'home' ? ' active' : ''}`} data-screen={id}><span>{icon}</span><span>{name}</span></button>)}
        </nav>
      </div>
    </div>
    <div id="sheetBackdrop" className="sheetBackdrop" />
    <div id="sheet" className="sheet" />
    <SettingsSheets />
    <DetailSheets />
    <AuthScreen />
    <div id="styleSyncStatus" role="status" aria-live="polite" hidden />
  </>;
}
