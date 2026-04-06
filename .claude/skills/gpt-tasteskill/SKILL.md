---
name: gpt-taste-elite-frontend
description: Elite-level frontend design and GSAP motion engineering. Uses randomization to break AI statistical biases, enforces strict AIDA page structure, bento grid math, and advanced scroll-triggered animations. Inter is banned.
---

# GPT-Taste: Elite UX/UI & Advanced GSAP Motion Engineering

## Core Directive

Create award-winning frontend interfaces by breaking AI statistical design biases through enforced randomization, strict structural rules, and advanced GSAP motion engineering.

## Pre-Code Mandatory Planning

Before writing any code, document in a design plan:
- Selected hero architecture (from variance options below)
- Typography stack (must be one of: Satoshi, Cabinet Grotesk, Outfit, Geist — NEVER Inter)
- Component types selected
- GSAP paradigm to be used
- AIDA verification pass
- Hero max-width classes
- Grid density math (col-span + row-span verification)
- Button contrast confirmation

## AIDA Page Structure (Mandatory)

All pages must follow this sequence:

1. **Attention** — Cinematic hero section with massive vertical padding (`py-32 md:py-48`)
2. **Interest** — High-density feature grid with 3–5 intentional cards
3. **Desire** — GSAP scroll animations and pinned content sections
4. **Action** — High-contrast CTAs and footer links

## Structural Requirements

- All pages begin with premium navigation: floating glass pill OR minimal split design
- Hero H1: **2-line iron rule** — maximum 2–3 lines. 4+ lines is a catastrophic failure. Use ultra-wide containers and correct font sizing.
- Main wrapper: `overflow-x-hidden` to prevent horizontal scroll bugs
- Sections separated by `py-32 md:py-48`

## Typography

- **BANNED:** Inter (absolute)
- **Required:** Satoshi, Cabinet Grotesk, Outfit, or Geist
- Display text: tight letter-spacing, heavy weight, never 4+ lines in hero

## Bento Grid Rules

- Use `grid-auto-flow: dense` to eliminate empty cells
- All `col-span` and `row-span` values must be mathematically verified
- No grid cell left empty — dense flow fills gaps automatically

## Motion Requirements (GSAP)

Required motion paradigms:
- ScrollTrigger pinning
- Image scale/fade reveals on scroll
- Text opacity scrubbing tied to scroll progress
- Card stacking animations on scroll

Every clickable element requires hover physics: `group-hover:scale-105 transition-transform duration-700`

Static interfaces are **strictly forbidden** — all designs must contain real GSAP animations.

## Imagery

- Use `picsum.photos/seed/{keyword}/` for contextual placeholder imagery
- Apply sophisticated CSS filters to all placeholder images
- No Unsplash links
- No broken image references

## Prohibited Patterns

- Emojis anywhere in code or comments
- Meta-labels ("SECTION 01", "QUESTION 05", "STEP 1")
- Hero H1 wrapping to 4+ lines
- Pill-tags or stamp icons arbitrarily placed on hero text
- Invisible or low-contrast button text
- Three equal card columns
- Inter font in any context

## Content Rules

- No round numbers (`50%`, `99.99%`) — use organic data (`47.2%`, `$89.40`)
- No AI clichés ("Elevate," "Seamless," "Unleash")
- No generic names ("John Doe") — use realistic, diverse names
- No placeholder latin text

## Pre-Output Check

- [ ] Typography is NOT Inter
- [ ] Hero H1 is 2–3 lines maximum
- [ ] Bento grid uses `grid-auto-flow: dense` with verified math
- [ ] GSAP animations present (ScrollTrigger or equivalent)
- [ ] AIDA structure verified
- [ ] No emojis, no meta-labels, no generic names
- [ ] All images use picsum.photos/seed/ pattern
- [ ] Hover physics on all clickable elements
