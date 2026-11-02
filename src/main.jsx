import React from 'react';
import { createRoot } from 'react-dom/client';
import { createClient } from '@supabase/supabase-js';
import App from './App.jsx';
import './styles/legacy.css';

// Compatibility layer until each legacy screen becomes a React component.
// A single Supabase client library is bundled instead of loaded from a CDN.
window.supabase = { createClient };

createRoot(document.getElementById('root')).render(<App />);
