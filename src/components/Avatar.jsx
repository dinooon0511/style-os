import React from 'react';

export default function Avatar({ photo }) {
  if (photo) return <img alt="Фото профиля" src={photo} />;
  return <svg width="52" height="52" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <circle cx="32" cy="23" r="12" fill="currentColor" />
    <path d="M10 55c0-13 9-20 22-20s22 7 22 20" fill="currentColor" />
  </svg>;
}
