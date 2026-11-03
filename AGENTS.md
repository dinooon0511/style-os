# STYLE OS — AI working instructions

This file is the entry point for AI coding assistants working on STYLE OS.

## First read
1. Read docs/CURRENT_STATE.md for the current branch and pending tasks.
2. Read docs/ARCHITECTURE.md and docs/DECISIONS.md.
3. Read docs/DESIGN_SYSTEM.md before UI changes.
4. Read docs/PROJECT.md for product scope.
5. Read docs/STYLE_OS_STYLING_RULES_V1.md before changing outfit logic.
6. Inspect only the source files relevant to the requested task.

## Safety and scope
- Work on the explicitly selected working branch; currently react-migration. NEVER write to main unless the user explicitly requests it.
- Do not merge, deploy, change hosting, run destructive database operations, or modify credentials without explicit approval.
- Preserve existing functionality, data, and visual design. Do not refactor unrelated modules.
- Make small, focused changes. Avoid reading or rewriting large legacy files unless essential.
- Check current file contents and SHA before edits; do not overwrite concurrent changes.
- Never commit secrets, service keys, user data, or sensitive logs.
- Do not claim a change is tested or deployed unless it actually is.

## Implementation workflow
1. State the intended scope and impacted files.
2. Inspect targeted code and dependencies.
3. Implement the smallest viable change.
4. Run available targeted checks and build where the execution environment permits.
5. Summarize files changed, checks performed, unverified behavior, and remaining work.
6. Update docs/CURRENT_STATE.md after meaningful work and docs/DECISIONS.md for durable architectural/product decisions.

## Images
- Goal: serve optimized images from repository-hosted static assets instead of Google Drive hotlinks.
- Verify item-to-image mapping before replacing any photos. Do not guess mappings from filenames.
- Keep stable, descriptive filenames and avoid breaking catalog/wardrobe references.
- Prefer an appropriate static assets directory after confirming Vite configuration; public/images is a proposed location, NOT an existing directory.
- Avoid committing unoptimized giant images or duplicate binaries.

## Product constraints
- Men's styling app, Russian UI, mobile-first.
- Helvetica typography; Beta 6 Pastel design baseline.
- Preserve outfit, wardrobe, catalog, profile, auth and Supabase behavior.
- Distinguish confirmed repository facts from historical requests or pending changes.
