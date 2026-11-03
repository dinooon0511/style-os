# STYLE OS — Architecture and repository map

## Confirmed in react-migration branch (2026-11-03)
- React frontend built with Vite.
- Root files: package.json, package-lock.json, vite.config.js, index.html, netlify.toml.
- Entry: src/main.jsx; app shell: src/App.jsx.
- Screens: src/components/HomeScreen.jsx, WardrobeScreen.jsx, OutfitsScreen.jsx, CatalogScreen.jsx, ProfileScreen.jsx, AuthScreen.jsx, Onboarding.jsx.
- Other UI: src/components/ItemCard.jsx, DetailSheets.jsx, SettingsSheets.jsx, Avatar.jsx, CategoryChips.jsx.
- Legacy integration: src/legacy/engine.js and src/hooks/useLegacyView.js.
- Styling: src/styles/legacy.css.
- Supabase directory with migrations and documentation.
- Existing styling reference: docs/STYLE_OS_STYLING_RULES_V1.md.

## Caution
Migration from a legacy implementation is in progress. Do not assume all business logic has been converted to idiomatic React or that all image paths have been migrated. Inspect exact code paths before edits.

## Assets
A repository-local public/images directory is proposed for optimized clothing images; it was NOT present in the inspected branch. First audit existing asset references and map each item to its correct image, then add assets and update only the corresponding references.

## Data and hosting
Supabase is used for application data according to project history and repository structure. Netlify configuration exists, but deployment is not part of documentation-only work. Never expose environment secrets. Verify database schema and sync behavior against actual code/migrations before changing them.

## Development
Consult package.json for authoritative scripts. Typical Vite commands are npm install, npm run dev, npm run build; do not assume any unlisted test command exists.
