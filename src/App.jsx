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
import UiIcons from './components/UiIcons.jsx';

const tabs = [
  ['home', '⌂', 'Главная'],
  ['wardrobe', '◫', 'Гардероб'],
  ['outfits', '✦', 'Образы'],
  ['catalog', '⌕', 'Каталог'],
  ['profile', 'person', 'Профиль'],
];

export default function App() {
  useEffect(() => {
    // Separate the add-item scroll area from its action footer. A sticky footer
    // inside the same overflow container was hidden beneath catalog cards on iOS.
    const sheet = document.getElementById('sheet');
    const arrange = () => {
      const footer = sheet.querySelector(':scope > .sheetFooter');
      if (footer && sheet.querySelector('.sheetTitle')?.textContent === 'Добавить вещь') {
        const scroll = document.createElement('div');
        scroll.className = 'addItemScroll';
        while (sheet.firstChild && sheet.firstChild !== footer) scroll.appendChild(sheet.firstChild);
        sheet.prepend(scroll);
        sheet.classList.add('addItemLayout');
      } else if (!sheet.querySelector('.addItemScroll')) {
        sheet.classList.remove('addItemLayout');
      }
    };
    const observer = new MutationObserver(arrange);
    observer.observe(sheet, { childList: true });
    return () => observer.disconnect();
  }, []);

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
        <button id="floatingAdd" className="floatBtn hidden" aria-label="Добавить вещь"><UiIcons name="plus" size={29} /></button>
        <nav className="tabbar" aria-label="Основная навигация">
          {tabs.map(([id, icon, name]) => <button key={id} className={`tab${id === 'home' ? ' active' : ''}`} data-screen={id}><span>{icon === 'person' ? <UiIcons name="person" /> : icon}</span><span>{name}</span></button>)}
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
