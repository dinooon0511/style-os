# PELCLO: React migration

This branch is the **first, intentionally non-production stage** of migrating PELCLO
from a single HTML file to React + Vite.

## What is already migrated

- The application shell, screen mount points and navigation markup are React JSX.
- The authentication panel is a React component with JSX event handlers.
- The CSS is in `src/styles/legacy.css` instead of inline in HTML.
- The existing application controller, including Supabase section synchronization,
  lives in `src/legacy/engine.js` and is bundled by Vite.
- Supabase JS is installed as an npm dependency instead of downloaded via a CDN.
- Existing Google Drive image URLs are unchanged, pending asset migration.

## What is not migrated yet

The five screen renderers still write HTML through the legacy controller. Their
state management, action delegation, and synchronization must be ported carefully
to React hooks, components and services before retiring `src/legacy/engine.js`.

The React component tree must not re-render the legacy DOM subtrees until those
subtrees have been fully converted.

## Local verification

```bash
npm ci
npm run build
npm run dev
```

Before promoting this branch, test registration, password recovery, all five
tabs, wardrobe add/delete, outfit swipe, catalog search, profile changes,
offline retry, synchronization after reload, and a second logged-in device.

The production branch and `test2` are unaffected by this migration branch.
