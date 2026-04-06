---
name: stitch-design-taste
description: Generates DESIGN.md files for Google Stitch that enforce premium, anti-generic UI standards. Translates frontend engineering best practices into semantic design language for AI-assisted UI generation.
---

# Stitch Design Taste: Premium UI System Generator

## Core Purpose
Generate `DESIGN.md` files for Google Stitch that enforce "anti-slop" frontend standards through semantic design language, enabling AI agents to produce premium interfaces rather than generic outputs.

## Atmosphere Calibration

Rate every project across three dimensions before generating:
- **Density:** 1 (airy) → 10 (cockpit-dense)
- **Variance:** 1 (symmetric) → 10 (chaotic)
- **Motion:** 1 (static) → 10 (cinematic)

Default baseline: Variance 8, Motion 6, Density 4

## Color Discipline

- Maximum ONE accent color below 80% saturation
- Absolute neutrals as base (Zinc, Slate, warm off-whites)
- Pure black (`#000000`) is BANNED — use `#0a0a0a`, `#111`, or Zinc-950
- "AI Purple/Blue Neon" aesthetic is explicitly forbidden
- No oversaturated gradients

## Typography Rules

- Inter is BANNED for premium or creative contexts
- Dashboard UIs: sans-serif only — Geist, Outfit, Cabinet Grotesk, or Satoshi
- Generic serifs prohibited on dashboards
- Distinctive modern serifs (Fraunces, Instrument Serif) permitted in editorial contexts only

## Component Specifications

- Cards only appear when elevation communicates hierarchy
- High-density layouts use `border-top` dividers instead of cards
- Buttons: tactile push feedback, no neon glows
- Loading states: skeletal shimmer only — no circular spinners
- No emoji in any component or copy

## Layout Principles

- No overlapping elements — every element occupies its own clean spatial zone
- Centered hero sections banned for high-variance projects
- Generic "3 equal cards" pattern is forbidden
- Mobile-first collapse enforced below 768px
- Zero horizontal scroll tolerance on mobile

## Motion Physics

- Spring defaults: `stiffness: 100, damping: 20`
- All animation via `transform` and `opacity` only — never positional properties (top, left, width, height)
- Perpetual micro-interactions required when Motion > 5

## Anti-Pattern List (Explicit Bans)

- Emojis anywhere
- Neon glows or outer glow effects
- Custom mouse cursors
- Fake statistics (`99.99%`, `50%`, round numbers)
- AI copywriting clichés ("Elevate," "Seamless," "Unleash," "Next-Gen")
- Filler UI text ("Scroll to explore," "Coming soon")
- Broken image links
- Centered hero on high-variance layouts
- Three equal card columns

## Output Structure

Every generated `DESIGN.md` must include:
1. Atmospheric description (density/variance/motion values + prose mood)
2. Color palette with exact hex codes and functional roles
3. Typography rules (fonts, weights, sizes, prohibited choices)
4. Component specifications (cards, buttons, inputs, badges)
5. Layout principles (grid strategy, spacing scale, max-width)
6. Motion specifications (spring values, animation triggers)
7. Anti-pattern list specific to this project

## Methodology

Prioritize:
- Descriptive precision over technical jargon
- Functional clarity over aesthetics alone
- Opinionated curation over neutral templates
