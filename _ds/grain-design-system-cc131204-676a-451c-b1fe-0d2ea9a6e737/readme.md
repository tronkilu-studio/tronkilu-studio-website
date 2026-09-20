# Grain — Design System

Grain is a black-and-white, typography-first system. Black ink on white paper, square corners, hairline rules, and photographs that are always greyscale and always carry visible noise. There is no colour, no gradient, and no soft shadow anywhere in it.

## Sources

No codebase, Figma file, deck, logo, or photography was supplied. The entire system was authored from a one-line brief:

> "black and white, black on white, typographical, very tidy and clean, glitchy images or better grainy images"

Everything below is therefore an **original interpretation**, not a recreation. Two things in particular are stand-ins and should be replaced when real assets exist:

- **Typefaces** — no font files were given. Substituted from Google Fonts: **Archivo** (core grotesque) and **IBM Plex Mono** (labels, metadata). Both load from the Google Fonts CDN via the `@import` at the top of `styles.css`.
- **Logo** — no mark was supplied, so **none was drawn**. The wordmark "Grain" is simply set in Archivo Semibold at −0.04em tracking (see `guidelines/logotype.card.html`). `assets/` holds no logo file by design.
- **Brand name** — "Grain" is a working name derived from the brief. Rename freely.

The two products shown in `ui_kits/` (an editorial website and an internal production app) are invented surfaces used to demonstrate the system end-to-end.

---

## Content fundamentals

**Voice.** Plain, concrete, slightly dry. Grain describes what a thing is and stops. It never sells, never hedges, never exclaims. If a sentence could appear in a product brochure, rewrite it.

- Good: "Four issues a year. Printed in black on uncoated white. Posted flat, never folded."
- Bad: "Discover our beautifully crafted quarterly experience!"

**Person.** Third person or plain imperative for interface copy ("Send to press", "Search queue"). First-person plural only in editorial prose ("We print on uncoated stock because it holds the noise"). Address the reader as "you" only when asking for something: "Enter an email address."

**Casing.** Sentence case everywhere in body, headings, and buttons ("Send to press", not "Send To Press"). UPPERCASE is reserved for mono labels, eyebrows, badges, and tabs — always with 0.14em tracking, always 11px.

**Length.** Headlines under 8 words and set to 14–18 characters per line. Ledes one sentence. Hints one short sentence with a full stop. Badge and tab text one or two words.

**Punctuation.** Full stops in hints and descriptions; none in labels, badges, or button text. Typographic quotes and en dashes. Em dashes sparingly, and never as a rhetorical device.

**Numbers and metadata.** Always mono, always compact: `2,840 w`, `12 min`, `2026 · Spring`, `Fig. 01`. The interpunct `·` is the standard separator. Figures are numbered (`Fig. 01`, `Plate 02`) — the convention is borrowed from print and used consistently.

**Errors.** State the fix, not the failure: "Enter an email address." Never apologise, never blame, never use red — an error is ink text behind a 2px ink bar.

**Emoji.** Never. Not in UI, not in copy, not in documentation.

**Vibe.** A well-run print studio. Everything labelled, nothing decorated.

---

## Visual foundations

**Colour.** One hue family: neutral. Nine ink steps from `--paper` (#FFFFFF) to `--ink-900` (#000000), plus `--ink-050` (#F2F2F1) as the only warm note. Semantic aliases (`--text-primary`, `--border-hairline`, `--surface-sunken`, `--action-fill`) are what product code should use. Status tokens (`--status-danger` etc.) all resolve to ink on purpose: **state is carried by the word and the fill, never by hue.** A single `[data-theme="inverse"]` scope flips paper and ink for full-bleed dark sections.

**Type.** Archivo for everything structural; IBM Plex Mono for anything that behaves like a caption, label, index number, or code. Display and headings are tracked tight (−0.022 to −0.035em) with leading near 1.0; body runs 16/1.6 at a 66ch measure. Nine steps, all tokenised (`--text-display` → `--text-label`). Weight range stops at 600 — no black weights, no italics for emphasis (use the mono label instead).

**Spacing.** 4px base doubling to 128 (`--space-1`…`--space-10`). 24px gutter, 32px page margin, 96px section rhythm, 1280px max width, 280px rail. Generous vertical space is the main luxury signal; horizontal padding stays tight.

**Backgrounds.** Flat paper white, or flat ink for inverted sections. **No gradients, ever.** No repeating decorative patterns behind text. Full-bleed imagery is allowed at the top of a page but is always greyscale and grained.

**Imagery.** Every photograph goes through `GrainImage`: `grayscale(1) contrast(1.12)` (or `contrast(1.6) brightness(1.05)` for the hard treatment), plus a tiled SVG fractal-noise overlay at 28% (or 45%) multiply. Colour vibe: cool, high-contrast, silver-print. Images sit inside a 1px ink frame with a mono caption beneath. Where no photo exists, the placeholder box labelled "IMAGE" is the correct thing to ship.

**Grain.** The noise is an `::after` overlay (`--grain-url`, 160px tile), never baked into an asset, so it stays crisp at any size and can be turned off. It appears on imagery and on large ink fields — never behind body text.

**Borders and corners.** 1px is the default; 2px is the emphasis weight (active tab underline, error bar, quote bar). Corners are **square** (`--radius-0`). The only round things in the system are radio dots. Structure comes from rules, not from boxes: a labelled `<Rule>` is the standard section header.

**Elevation and shadow.** No blur. Depth is a hard offset edge — `3px 3px 0 black` (`--shadow-offset`), or 6px for a featured card. Overlays use a 72% black scrim and a 1px ink outline.

**Transparency and blur.** Essentially unused. The scrim behind a Dialog is the only alpha in the system; there is no backdrop-filter anywhere. Muted text is a lighter ink step, never reduced opacity — except for the one legitimate case, `opacity: .32` on disabled controls.

**Cards.** Rectangular, 1px border, no radius, no shadow by default. Five variants: hairline (default), strong (full ink border), offset (hard shadow, one per view), sunken (`--ink-050` fill, no border), inverse (ink fill, paper text).

**Motion.** Four durations (80/120/180/320ms) and one curve, `cubic-bezier(0.2,0,0,1)`. Only fades, 1px shifts, and straight translations. No bounce, no spring, no scale-in, no parallax. The switch knob slides 18px and that is the largest movement in the system.

**Hover.** Fills darken one step (`--ink-900` → `--ink-700`); outlined things **invert to solid ink**; list rows take a `--surface-sunken` fill; links thicken their underline from 1px to 2px. Never lighten, never glow.

**Press.** `translateY(1px)`. Links drop to 60% opacity. Nothing scales.

**Focus.** `2px solid var(--focus-ring)` at `2px` offset, on `:focus-visible` only. Inputs additionally gain an inset 1px line so the frame reads as doubled.

**Layout rules.** Sticky ink-bordered header, 64px tall on the site and 56px in the app. Content is a single centred column capped at `--max-width`, with an optional 280px rail separated by a hairline. Rails stick; content scrolls. Toasts pin bottom-left, never top-right.

---

## Iconography

Grain has **no bespoke icon set** — none was supplied, and drawing one would be inventing brand. The system uses **[Lucide](https://lucide.dev) v0.454.0**, loaded as static SVG from `https://cdn.jsdelivr.net/npm/lucide-static@0.454.0/icons/<name>.svg`. This is a **flagged substitution**: Lucide's 2px-on-24 stroke, square caps, and geometric construction match the brand's tidy-line character, but if a real icon set exists it should replace this.

- Always go through the `Icon` component. It renders the SVG as a CSS `mask`, so glyphs inherit ink colour and invert correctly on dark fills.
- Sizes step 14 / 16 / 20 / 24 px. Icons are never a different colour from the text beside them.
- **No emoji.** Ever.
- Unicode characters are used as *typography*, not as icons: `·` as a metadata separator, `…` in pagination gaps, `/` in breadcrumbs, `×` only inside components (rendered as the Lucide `x` glyph, not the character).
- No PNG icons, no icon font, no decorative illustration. `assets/` is intentionally empty of marks — see Sources.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Entry point. `@import` list only — link this one file. |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `borders`, `shadows`, `motion`, `effects`, `base` |
| `guidelines/` | 16 specimen cards (Type, Colors, Spacing, Brand) |
| `components/` | React primitives, grouped by concern |
| `ui_kits/site/` | Editorial website recreation — see its README |
| `ui_kits/desk/` | Production app recreation — see its README |
| `assets/` | Empty: no logo or photography was supplied |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills wrapper |

### Components

**core/** — `Button`, `IconButton`, `Icon`, `Card`, `Rule`
**forms/** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**feedback/** — `Badge`, `Tag`, `Toast`, `Tooltip`, `Dialog`
**navigation/** — `Tabs`, `Breadcrumbs`, `Pagination`
**media/** — `GrainImage`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one card HTML showing its states.

#### Intentional additions

Because no source defined a component inventory, this is an authored standard set. Three entries go beyond the usual list and are deliberate:

- **`Icon`** — a wrapper over the Lucide CDN set, so glyph sizing and ink inheritance are consistent.
- **`Rule`** — the system structures pages with rules instead of containers, so the divider is a first-class component.
- **`GrainImage`** — the greyscale + noise treatment is the brand's single strongest signal; routing every photograph through one component is what keeps it consistent.
