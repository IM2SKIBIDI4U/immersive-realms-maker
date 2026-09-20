# Restaurant Visual and Fair-Play Upgrade

## Goal
Make first-person mode feel like a richer, more believable ramen restaurant, remove the visible hands, and block the common client-side cheats available in the current game.

## Changes
- Remove the first-person hand overlay and all related animation styling.
- Improve the canvas restaurant with richer ceiling, wall, floor, counter, doorway, fixture, signage, light, shadow, steam, and depth details while preserving the existing controls and game systems.
- Refine rendering with cleaner distance shading, warmer interior lighting, subtle film grain, improved object silhouettes, and more polished motion without adding expensive effects.
- Remove the exposed god-mode controls and cheat functions.
- Add tamper detection for saved progress, strict numeric/state validation, impossible-value caps, clock manipulation checks, and guarded reward transactions.
- Keep legitimate offline earnings, upgrades, first-person interactions, and reset behavior working.

## Validation
- Check JavaScript syntax and the app build status.
- Open first-person mode in the browser at desktop and mobile sizes.
- Confirm the restaurant renders clearly, hands are absent, movement/HUD still work, and edited or malformed saves are rejected safely.

## Technical note
Because this is an offline browser game, protection can deter save editing and console cheats but cannot provide server-authoritative security. Strong competitive anti-cheat would require online accounts and server-owned progress.
