import React from 'react';

const auth = () => window.styleAuth;

export default function AuthScreen() {
  return <div id="styleAuth" className="visible" role="dialog" aria-modal="true" aria-labelledby="authHeading">
    <div className="authEditorial" aria-hidden="true" />
    <div className="authCanvas">
      <div className="authIdentity">STYLE OS</div>
      <div className="authPanel">
        <div className="authEyebrow">PERSONAL WARDROBE</div>
        <h1 id="authHeading">Войти в STYLE OS</h1>
        <p id="authDescription">Твой гардероб и образы всегда под рукой.</p>
        <form onSubmit={event => auth()?.submit(event)}>
          <label htmlFor="authEmail">Электронная почта</label>
          <input id="authEmail" type="email" autoComplete="email" placeholder="example@mail.ru" required />
          <div id="authPassword">
            <label htmlFor="authPass">Пароль</label>
            <div className="authPasswordField">
              <input id="authPass" type="password" autoComplete="current-password" placeholder="Введите пароль" />
              <button className="authVisibility" type="button" aria-label="Показать пароль" aria-pressed="false" onClick={event => auth()?.togglePassword(event.currentTarget)}>
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>
          <button id="authSubmit" className="authMain" type="submit">Войти</button>
          <div id="authMessage" aria-live="polite" role="status" />
        </form>
        <div className="authLinks">
          <div id="authAlternate">Нет аккаунта? <button type="button" onClick={() => auth()?.display('register')}>Зарегистрироваться</button></div>
          <button id="authResetLink" type="button" onClick={() => auth()?.display('reset')}>Забыли пароль?</button>
        </div>
      </div>
    </div>
  </div>;
}
