import React from 'react';

export default function UiIcons({ name, size = 26 }) {
  if (name === 'heart') return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-8.5-5.8-9.4-11.1C1.8 5.3 4.3 3 7.7 3c2 0 3.5 1 4.3 2.5C12.8 4 14.3 3 16.3 3c3.4 0 5.9 2.3 5.1 6.9C20.5 15.2 12 21 12 21Z"/></svg>;
  if (name === 'person') return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2"/></svg>;
  if (name === 'plus') return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 4v16M4 12h16"/></svg>;
  return null;
}
