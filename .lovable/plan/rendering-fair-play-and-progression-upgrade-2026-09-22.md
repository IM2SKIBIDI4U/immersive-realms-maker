# Rendering, Fair-Play, and Progression Upgrade

## Goal
Improve first-person visual stability and depth, restore the cheat menu as an intentional sandbox tool, strengthen fair-play checks, and add progression that keeps the restaurant engaging longer.

## Changes
- Repair first-person rendering with sharper ray columns, consistent canvas sizing, wall-depth occlusion, aligned floor/sprite perspective, directional flashlight lighting, and pointer-lock feedback.
- Expand restaurant atmosphere with theme-aware walls, floors, fixtures, signage, lighting, and clearer interactive-object highlights.
- Restore a clearly labeled cheat menu with money, ingredients, progression, and event controls. Using it will permanently mark that save as Sandbox Mode so cheated progress cannot masquerade as a fair save.
- Upgrade save protection with stricter field validation, cross-checks between cash/earnings/spending/progression, timestamp and timer checks, backup recovery, runtime integrity checks, and a visible Fair/Sandbox status.
- Add longer progression through shift ratings, service streak bonuses, new staff roles and training, more first-person upgrades, rotating chef challenges, and additional achievements.
- Preserve existing saves through migration and keep current upgrades, missions, decor, prestige, and restaurant controls working.

## Validation
- Check JavaScript syntax and the latest app build status.
- Test first-person mode at desktop and compact viewport sizes, including movement, mouse look, flashlight, minimap, upgrades, and overlays.
- Verify corrupted saves recover safely, impossible fair-mode values are rejected, and cheat-menu changes persist only as Sandbox Mode.
- Verify new progression purchases, challenges, and rewards update and survive reloads.

## Technical note
Because the game stores progress in the browser, fair-play protection can strongly deter casual editing but cannot be fully server-authoritative. The restored cheat menu will be supported safely by separating Sandbox saves from Fair saves.
