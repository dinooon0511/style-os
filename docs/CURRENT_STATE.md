# STYLE OS — Current state / handoff

Last documentation update: 2026-11-03
Working branch: react-migration
Default branch: main (do not change without explicit instruction)

## Verified repository facts
- React/Vite structure exists in react-migration.
- src/components includes Home, Wardrobe, Outfits, Catalog, Profile, Auth and Onboarding screens.
- Legacy engine and styling are present.
- Supabase migrations and Netlify configuration are present.
- docs/STYLE_OS_STYLING_RULES_V1.md already exists.
- No public/ directory was present at the time of inspection.

## Current task
Set up AI-readable project documentation only:
- AGENTS.md
- docs/PROJECT.md
- docs/ARCHITECTURE.md
- docs/DESIGN_SYSTEM.md
- docs/DECISIONS.md
- docs/CURRENT_STATE.md

No application functionality, images, database or deployment changes are part of this task.

## Next requested engineering task (not yet performed here)
Replace clothing images with resized versions from the user's new ZIP/archive, mapping them against the old images. Store optimized images in the repository rather than linking to Google Drive. Verify every item mapping before changing references, test images in relevant screens, and check the production build.

## Handoff protocol
After each significant task, update:
- Completed: exact paths and behavior changed
- Validation: checks actually run and their results
- Pending: unresolved issues, blockers, missing assets
- Next: smallest next actionable step
Never label untested functionality as verified.

## 2026-11-03 — Image preparation checkpoint
- User confirmed: `стиль бг.zip` is OLD and `шаблоны рабочие (1).zip` is NEW.
- Compared 151 named old PNG images against 176 new PNG frames; new archive includes blank/duplicate frames.
- Prepared 151 optimized WebP images (~5.5 MB total), mapping manifest and a local application script in a downloadable ZIP package in the chat.
- **Not yet uploaded to GitHub:** the binary image assets and catalog code changes are pending installation and verification. The existing application remains unchanged.
- Next: install prepared package into `react-migration`, resolve any name mismatches, run `npm run build`, review visual correctness, then commit. Editorial images are a separate set.

## 2026-11-03 — Local clothing images connected
- Verified all `item-001.webp` through `item-151.webp` are present at `public/images/clothing/` on `react-migration`.
- Added `src/data/localClothingImages.js`: a 151-entry, unique catalog-order mapping to local image paths.
- Updated `src/legacy/engine.js` to call `applyLocalClothingImages(embeddedCatalog)` immediately after the curated catalog definition; each curated item's `photo` now points to `/images/clothing/item-NNN.webp` and `image_status` is `user_cutout_local` at runtime.
- The original Google Drive strings remain in the embedded catalog as fallback source data but are overridden before use. Editorial/background photos still use Google Drive; they were not part of this clothing image migration.
- No changes to `main` or Netlify. Build and visual QA still need to be run; do not claim verified deployment.
