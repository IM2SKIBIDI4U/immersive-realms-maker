# Rendering, Fair Play, and Progression Upgrade

## Goal
Make first-person mode clearer and more polished, make local progress much harder to tamper with, and add longer-term goals without changing the core ramen service loop.

## What will change
- Fix first-person projection and depth so walls, furniture, customers, and floor details align more consistently while looking around and crouching.
- Improve restaurant rendering with better wall textures, depth fog, object shading, station detail, target feedback, steam, and a cleaner HUD.
- Add a career progression layer with restaurant rank milestones and unlockable operation upgrades.
- Expand first-person upgrades with stamina, tips, patience, and kitchen-quality paths, each with escalating costs and visible benefits.
- Add more achievements and rotating contract types so serving, deliveries, combos, upgrades, popularity, and first-person play all contribute to progress.
- Strengthen client-side fair-play checks with canonical state validation, progression consistency checks, monotonic session timing, transaction-rate limits, save journaling, and recovery from the last valid snapshot.
- Remove punitive false positives from normal fast clicking; suspicious actions will be ignored or rolled back instead of unexpectedly destroying legitimate progress.

## Technical details
- Keep the existing browser-based canvas renderer and local save format, migrating valid older saves forward.
- Centralize economy mutations through guarded transaction helpers and validate derived values against purchased levels and known bounds.
- Use multiple rotating integrity records and a session ledger to catch casual local-storage editing and impossible in-session gains.
- Client-only anti-cheat is deterrence, not server-authoritative security; determined users controlling their browser cannot be fully stopped without online accounts and server-owned saves.

## Validation
- Check JavaScript syntax and the latest preview build status.
- Exercise first-person movement, interaction, purchases, upgrades, and save/reload in the browser.
- Test malformed saves, impossible values, clock rollback, and rapid repeated purchases.
- Review desktop and compact viewport screenshots for visibility, alignment, and HUD overlap.
