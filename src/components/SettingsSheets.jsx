import React, { useEffect, useState } from 'react';

const action = (type, value) => window.appAction?.(type, value);
const occasions = [['everyday','Повседневность'], ['office','Офис'], ['date','Свидание'], ['restaurant','Ужин'], ['travel','Поездка']];
const weather = [['hot','Тепло'], ['mild','Прохладно'], ['cold','Холодно']];
const styles = [['minimal','Минимализм'], ['dark_minimal','Тёмный минимализм'], ['smart','Smart casual'], ['classic','Современная классика'], ['oldmoney','Old money'], ['utility','Workwear'], ['soft_tailoring','Soft tailoring'], ['casual','Повседневный'], ['summer_relaxed','Летний relaxed'], ['winter_layered','Зимняя многослойность']];

function SelectField({ id, label, value, options }) {
  return <div className="field"><label htmlFor={id}>{label}</label><select id={id} defaultValue={value}>{options.map(([key, name]) => <option key={key} value={key}>{name}</option>)}</select></div>;
}

function OutfitFilters({ values }) {
  const [occasion, setOccasion] = useState(values.occasion);
  const [temperature, setTemperature] = useState(values.weather);
  const [ownedOnly, setOwnedOnly] = useState(values.ownedOnly);
  return <><div className="sheetHandle" /><div className="lookbookFilterSheet">
    <div className="lookbookOverline">STYLE OS / НАСТРОЙКИ</div><h2>Подбор образов</h2><p>Укажи повод и погоду — образы подстроятся под твой день.</p>
    <div className="lookbookFilterGroup"><strong>Повод</strong><div className="lookbookFilterChoices">{occasions.map(([key, label]) => <button type="button" key={key} className={occasion === key ? 'selected' : ''} aria-pressed={occasion === key} onClick={() => { setOccasion(key); action('outfitFilterOccasion', key); }}>{label}</button>)}</div></div>
    <div className="lookbookFilterGroup"><strong>Погода</strong><div className="lookbookFilterChoices">{weather.map(([key, label]) => <button type="button" key={key} className={temperature === key ? 'selected' : ''} aria-pressed={temperature === key} onClick={() => { setTemperature(key); action('outfitFilterWeather', key); }}>{label}</button>)}</div></div>
    <label className="lookbookFilterOwned"><span><strong>Только мой гардероб</strong><small>Без вещей, которые нужно докупить</small></span><input type="checkbox" checked={ownedOnly} onChange={e => { setOwnedOnly(e.target.checked); action('outfitFilterOwned', String(e.target.checked)); }} /></label>
    <button type="button" className="lookbookOpen" onClick={() => action('closeSheet')}>Показать образы →</button>
  </div></>;
}

function ProfileSettings({ profile }) {
  return <><div className="sheetHandle" /><h2 className="sheetTitle">Мои настройки</h2><p className="sheetSub">Размеры, эстетика и бюджет помогают сделать подбор точнее.</p>
    <div className="fields">
      <div className="field"><label htmlFor="profileName">Имя</label><input id="profileName" defaultValue={profile.name || ''} /></div>
      <SelectField id="profileStyle" label="Стиль" value={profile.style} options={styles} />
      <SelectField id="profileTop" label="Размер верха" value={profile.topSize} options={['S','M','L','XL','XXL'].map(v => [v,v])} />
      <SelectField id="profileBottom" label="Размер низа" value={profile.bottomSize} options={['S','M','L','XL','XXL'].map(v => [v,v])} />
      <SelectField id="profileShoe" label="Размер обуви" value={profile.shoeSize} options={['39','40','41','42','43','44','45','46'].map(v => [v,v])} />
      <SelectField id="profileBudget" label="Бюджет" value={profile.budget} options={[['0-5000','До 5 000 ₽'], ['5000-15000','5 000–15 000 ₽'], ['15000+','От 15 000 ₽']]} />
    </div><div className="sheetFooter"><button className="btn line" onClick={() => action('closeSheet')}>Отмена</button><button className="btn dark" onClick={() => action('saveProfile')}>Сохранить</button></div>
  </>;
}

export default function SettingsSheets() {
  const [sheet, setSheet] = useState(null);
  useEffect(() => {
    const listener = event => setSheet(event.detail || null);
    window.addEventListener('styleos:settings-sheet', listener);
    return () => window.removeEventListener('styleos:settings-sheet', listener);
  }, []);
  return <div id="reactSheet" className={`sheet${sheet ? ' show' : ''}`} role={sheet ? 'dialog' : undefined} aria-modal={sheet ? true : undefined} aria-label={sheet?.kind === 'editProfile' ? 'Мои настройки' : 'Подбор образов'}>
    {sheet?.kind === 'outfitFilters' && <OutfitFilters key="outfitFilters" values={sheet.values} />}
    {sheet?.kind === 'editProfile' && <ProfileSettings key="editProfile" profile={sheet.profile} />}
    {sheet && <button type="button" className="sheetClose" aria-label="Закрыть" onClick={() => action('closeSheet')}><svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5L19 19M19 5L5 19" /></svg></button>}
  </div>;
}
