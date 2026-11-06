# PELCLO — Decision log

Record durable decisions here with date, rationale, and implementation status. Confirm implementation in code separately.

## Decisions known as of 2026-11-03
- **Design baseline:** Beta 6 Pastel, Helvetica, mobile-first. Status: established direction; verify exact code.
- **Audience:** men's styling first, Russian-language UI. Status: established scope.
- **Frontend migration:** React + Vite on react-migration branch, with legacy integration during transition. Status: repository-confirmed.
- **Images:** move item photos away from Google Drive hotlinks toward optimized repository-local assets. Status: planned; not implemented by this documentation change.
- **Data:** Supabase-backed user data. Status: project context and repository directory confirmed; sync behavior requires code verification.
- **Branch safety:** changes to the ongoing migration should remain in react-migration unless the user explicitly selects another branch. Status: workflow policy.
- **Deployment:** no Netlify deployment for the current documentation task. Status: explicit scope restriction.

## Template
### YYYY-MM-DD — Decision title
- Context:
- Decision:
- Alternatives:
- Impacted files:
- Status: planned / in progress / verified
