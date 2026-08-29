# Tiea Portfolio — Design System (Direction A: Warm Editorial)

Source of truth for all pages. Light theme only.

## Concept
Warm editorial minimalism. Cream paper background, deep ink text, terracotta accent.
Typography does the heavy lifting: oversized serif display (Fraunces) + clean body
(Space Grotesk) + mono details (JetBrains Mono). Asymmetric layouts, no equal-width
card grids. Bold but calm.

## Color tokens (CSS vars in globals.css)
- --background: #FAF6EF (warm cream)
- --foreground: #1C1917 (ink)
- --accent: #C2510A (terracotta) / --accent-hover: #9A3F06
- --muted: #8A8075, --muted-foreground: #57534E
- --border: #E7DFD2, --card: #FFFFFF (white paper on cream)
- --surface: #F1EAE0
- Contrast: body text #57534E on #FAF6EF ≥ 4.5:1; accent used at 16px+ or bold.

## Typography
- Display: Fraunces (variable, opsz) — headings, 600–700, tight tracking
- Body: Space Grotesk — 16px base, line-height 1.6, max ~65ch
- Mono: JetBrains Mono — tech tags, dates, section labels (11–12px uppercase)
- Scale: 12 / 14 / 16 / 20 / 28 / 40 / 56 / 80

## Spacing & shape
- Section padding: py-28 desktop, py-20 mobile; container max-w-6xl px-6
- Radius: 4px on chips, 16px on cards; hero elements square/edge-to-edge
- Shadows: soft warm, e.g. 0 8px 40px rgba(60,40,20,.08). No glows.

## Layout rules
- Hero: oversized Fraunces headline, left-aligned, staggered word entrance
- Projects: ASGo = full-width featured case-study block; others alternate
  asymmetric rows (text 3/5 + meta 2/5, flipped each row). Never equal card grid.
- Each section: mono uppercase label + serif heading + one job per section.

## Motion
- Entrance: one choreographed hero stagger (blur+rise, 600ms, cubic-bezier(.2,.6,.2,1))
- Scroll: IntersectionObserver reveal (opacity+16px rise, 500ms, stagger 80ms)
- Hover: link underline slides, cards lift 4px + shadow (200ms)
- Always respect prefers-reduced-motion: render final state, no transforms.

## Avoid
Purple gradients, Inter, equal-width card grids, glassmorphism, dark sections,
emoji icons, animating every element.
