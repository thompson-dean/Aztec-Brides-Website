---
name: premium-utilitarian-minimalism
description: Enforces editorial minimalism — premium fonts, restrained monochrome palettes, ultra-clean interfaces with quiet sophistication. Bans gradients, heavy shadows, generic fonts, and visual spectacle in favor of refined restraint.
---

# Premium Utilitarian Minimalism UI Protocol

## Core Philosophy
Quiet sophistication over visual spectacle. Refined, deliberate restraint over trendy SaaS defaults. Every element earns its place.

## Typography

**Primary Stack:**
- UI work: Geist Sans, or similar geometric sans-serif
- Editorial headlines: Lyon Text, Instrument Serif, or Newsreader — with tight tracking
- Code and metadata: monospace fonts only
- Body text: warm off-black (`#111111`) — never pure black

**Rules:**
- No Inter, Roboto, or generic system fonts
- Headlines: tight letter-spacing, high contrast weight
- Body: max-width ~65ch, generous line-height
- Small labels and tags: sentence case or small-caps, never all-caps shouting

## Color Strategy

**Palette: warm monochrome + spot pastels**
- Background: pure white or warm bone (`#F7F6F3`)
- Borders: `#EAEAEA` (1px solid on all cards)
- Text: `#111111`
- Accents: highly desaturated pastels (pale red, blue, green, yellow) — applied sparingly to tags and badges only, never as primary UI color

**Prohibited:**
- Gradients of any kind
- Neon or saturated colors
- Pure black (`#000000`)
- Heavy drop shadows

## Components

**Cards:**
- `border: 1px solid #EAEAEA` — consistent across all cards
- Subtle hover elevation only
- No background color variation

**Buttons:**
- Solid `#111111` background
- Minimal border-radius (4px–6px)
- No pill shapes for primary actions
- No glow, no gradient fill

**Shadows:**
- Ultra-diffuse only (`opacity < 0.05`)
- Practically eliminated except for hover states

## Motion

- Fade in on scroll via `translateY(12px)` + `opacity` over 600ms
- Cards elevate subtly on hover
- No cinematic animations, no spring physics, no perpetual loops
- Background imagery: very low opacity (`0.02–0.04`) to prevent flatness

## Banned Elements

- Inter, Roboto — replaced by Geist, Newsreader, or similar
- Thin-line icon sets (Lucide, Feather) — use Phosphor or custom
- Heavy drop shadows
- Gradients
- Neon colors
- Pill-shaped containers for primary actions
- Emojis in any context
- Clichéd copywriting: "Seamless," "Elevate," "Next-Gen," "Unleash"

## Layout Principles

- Asymmetric bento grids with 8px–12px border radius
- Generous internal padding
- Whitespace as a design element, not an afterthought
- No three equal card columns
- Single consistent max-width container with auto margins

## Pre-Output Check
- [ ] No Inter or generic fonts present
- [ ] Color palette is warm monochrome with zero gradient
- [ ] All cards use `1px solid #EAEAEA` consistently
- [ ] Shadows are ultra-diffuse or absent
- [ ] Motion is minimal — fade + translate only
- [ ] No emojis, no clichéd copy, no pill buttons
- [ ] The impression is "quiet sophistication," not "SaaS template"
