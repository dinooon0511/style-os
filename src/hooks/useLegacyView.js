import { useEffect, useState } from 'react';

// Transitional read-only view bridge. The legacy controller owns data and writes;
// React owns screen markup, layout and input controls.
export default function useLegacyView(name) {
  const [view, setView] = useState(null);
  useEffect(() => {
    const receive = event => setView(event.detail);
    window.addEventListener(`styleos:${name}`, receive);
    return () => window.removeEventListener(`styleos:${name}`, receive);
  }, [name]);
  return view;
}
