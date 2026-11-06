# PELCLO — Design system

## Established design direction
- Beta 6 Pastel is the preferred baseline. Do not switch to Beta 7 Color without user approval.
- Helvetica typography throughout the app.
- Mobile-first, minimalist, modern, restrained pastel styling.
- Subtle glass/matte surfaces, refined spacing, clear hierarchy, understated old-money aesthetic.
- Clean layouts without demo/test copy, decorative clutter, or unnecessary controls.

## Interaction principles
- Preserve intuitive navigation and existing UI patterns.
- For outfit carousels, support both swipe directions while keeping arrows and indicators stationary and correctly aligned.
- Keep controls accessible and usable on iPhone; avoid mobile input zoom.
- Preserve image visibility, item labels, and state indicators in outfit cards.
- Use consistent card treatment across wardrobe and catalog where intended.

## Screen-specific historical preferences
- Catalog: item name, season, and color information; avoid unnecessary price/availability clutter in the previously chosen layout.
- Profile: user avatar and restrained dark/matte upper block.
- Outfits: selected-item context should remain visible when generating looks around one piece.
- Auth: email/password flow; do not add social login without a request.

## Implementation caveat
These are approved product/design preferences from prior work, not a pixel-perfect current code audit. Inspect current CSS/components and screenshots before modifying visuals. Do not invent color tokens or alter established spacing globally without validation.
