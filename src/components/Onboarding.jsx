import React, { useEffect, useState } from 'react';

const action = (name, value) => window.appAction?.(name, value);
const styles = [['minimal', 'Minimal', 'Нейтральная база'], ['oldmoney', 'Old money', 'Сдержанная роскошь'], ['smart', 'Smart casual', 'Собранно и спокойно'], ['classic', 'Classic', 'Форма и структура']];
const budgets = [['0-5000', 'До 5 000'], ['5000-15000', '5 000–15 000'], ['15000+', '15 000+']];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [photos, setPhotos] = useState({});
  const [style, setStyle] = useState('minimal');
  const [budget, setBudget] = useState('0-5000');
  useEffect(() => {
    const onReady = event => setPhotos(event.detail?.photos || {});
    const onStep = event => setStep(event.detail?.step || 0);
    window.addEventListener('styleos:onboarding-ready', onReady);
    window.addEventListener('styleos:onboarding-step', onStep);
    return () => {
      window.removeEventListener('styleos:onboarding-ready', onReady);
      window.removeEventListener('styleos:onboarding-step', onStep);
    };
  }, []);
  return <div id="onboarding" className="onboarding show">
    <section className={`onbSlide${step === 0 ? ' active' : ''}`} data-step="0">
      <div className="onbHero" style={{ '--onb-img': `url("${photos.oldmoney || ''}")` }}>
        <span className="glassTag">STYLE OS</span>
        <h2>Твой личный стиль — без перегруза и хаоса.</h2>
        <p>Добавь вещи, получай готовые комплекты и рекомендации покупок под свой гардероб.</p>
      </div>
      <div className="sheetFooter" style={{ position: 'static', margin: '18px 0 0', padding: 0, background: 'none' }}>
        <button className="btn line" onClick={() => action('skipOnboarding')}>Пропустить</button>
        <button className="btn dark" onClick={() => action('nextOnboarding')}>Дальше</button>
      </div>
    </section>
    <section className={`onbSlide${step === 1 ? ' active' : ''}`} data-step="1">
      <div><div className="subtle">Шаг 2 из 3</div><div className="brand" style={{ margin: '8px 0 10px' }}>Что тебе ближе?</div><div className="sectionHint">Выбери один основной вектор. Потом это можно поменять в профиле.</div></div>
      <div className="choiceGrid">
        {styles.map(([key, title, description]) => <button type="button" key={key} className={`choiceCard${style === key ? ' active' : ''}`} data-style={key} aria-pressed={style === key} onClick={() => { setStyle(key); action('onboardingStyle', key); }}>
          <div className="pic" style={{ '--img': `url("${photos[key] || ''}")` }} /><strong>{title}</strong><div className="helper">{description}</div>
        </button>)}
      </div>
      <div className="sheetFooter" style={{ position: 'static', margin: '18px 0 0', padding: 0, background: 'none' }}><button className="btn line" onClick={() => action('prevOnboarding')}>Назад</button><button className="btn dark" onClick={() => action('nextOnboarding')}>Дальше</button></div>
    </section>
    <section className={`onbSlide${step === 2 ? ' active' : ''}`} data-step="2">
      <div><div className="subtle">Шаг 3 из 3</div><div className="brand" style={{ margin: '8px 0 10px' }}>Пара быстрых настроек</div><div className="sectionHint">Это нужно, чтобы рекомендации стали персональнее.</div></div>
      <div className="toggleGrid" id="budgetToggle">
        {budgets.map(([key, label]) => <button type="button" key={key} className={`toggleCard${budget === key ? ' active' : ''}`} data-budget={key} aria-pressed={budget === key} onClick={() => { setBudget(key); action('onboardingBudget', key); }}>{label}</button>)}
      </div>
      <div className="fields" style={{ marginTop: 16 }}>
        <div className="field"><label htmlFor="onbTop">Размер верха</label><select id="onbTop">{['M', 'S', 'L', 'XL'].map(value => <option key={value}>{value}</option>)}</select></div>
        <div className="field"><label htmlFor="onbShoe">Размер обуви</label><select id="onbShoe">{['42', '41', '43', '44'].map(value => <option key={value}>{value}</option>)}</select></div>
      </div>
      <div className="sheetFooter" style={{ position: 'static', margin: '18px 0 0', padding: 0, background: 'none' }}><button className="btn line" onClick={() => action('prevOnboarding')}>Назад</button><button className="btn dark" onClick={() => action('finishOnboarding')}>Начать</button></div>
    </section>
  </div>;
}
