# Design System Extracted from Screenshot

**Context:** Hebrew RTL landing page for international student insurance. Values are approximate because the screenshot is compressed/narrow, but the system below is implementation-ready.

---

# 1. Color Palette

## Primary Colors

| Token              |       Hex | Usage                                                                  |
| ------------------ | --------: | ---------------------------------------------------------------------- |
| `brand.yellow.500` | `#F9C04E` | Main brand color, yellow sections, highlights, icons, pricing emphasis |
| `brand.blue.500`   | `#4B8CC0` | Primary CTA buttons, links, active states                              |
| `brand.navy.900`   | `#1A2A37` | Dark overlays, footer-like dark areas, strong text areas               |
| `brand.cream.200`  | `#FAE6B7` | Soft information sections, highlighted comparison blocks               |

## Secondary Colors

| Token              |       Hex | Usage                                     |
| ------------------ | --------: | ----------------------------------------- |
| `brand.sky.100`    | `#E8F2F4` | Light-blue form sections, FAQ backgrounds |
| `brand.sky.200`    | `#DCECEF` | Subtle section dividers                   |
| `brand.blue.600`   | `#3D7FAF` | Button hover / stronger CTA               |
| `brand.yellow.600` | `#E8AA31` | Yellow hover / darker emphasis            |
| `brand.green.500`  | `#25B86B` | WhatsApp icon / WhatsApp CTA accent       |

## Background Colors

| Token               |                      Hex | Usage                              |
| ------------------- | -----------------------: | ---------------------------------- |
| `bg.default`        |                `#FFFFFF` | Main page background               |
| `bg.section.light`  |                `#F6F9FB` | Very light card/section background |
| `bg.section.sky`    |                `#E8F2F4` | Contact/form strips                |
| `bg.section.yellow` |                `#F9C04E` | Major promotional sections         |
| `bg.section.cream`  |                `#FAE6B7` | Text-heavy information sections    |
| `bg.overlay.dark`   | `rgba(10, 18, 24, 0.62)` | Hero and image sections overlay    |

## Text Colors

| Token                |       Hex | Usage                              |
| -------------------- | --------: | ---------------------------------- |
| `text.primary`       | `#151413` | Main body text                     |
| `text.heading`       | `#0F1720` | Strong headings                    |
| `text.secondary`     | `#484745` | Paragraphs, descriptions           |
| `text.muted`         | `#7A7F83` | Captions, small helper text        |
| `text.inverse`       | `#FFFFFF` | Text on hero/image overlays        |
| `text.inverse.muted` | `#EFEFEB` | Secondary text on dark backgrounds |

## Accent / Utility Colors

| Token            |       Hex | Usage                            |
| ---------------- | --------: | -------------------------------- |
| `border.default` | `#C6CACD` | Inputs, table borders            |
| `border.light`   | `#E1E7EA` | Card borders                     |
| `icon.blue`      | `#4B8CC0` | Outline icons                    |
| `icon.yellow`    | `#F9C04E` | Checkmarks, decorative accents   |
| `state.success`  | `#25B86B` | WhatsApp / success               |
| `state.warning`  | `#F9C04E` | Highlight / alert-style sections |

## Color Usage Pattern

The page uses a **trust-oriented blue + yellow insurance palette**:

* **Blue** = primary action, trust, insurance, authority.
* **Yellow** = attention, comparison, benefits, pricing, lead-capture areas.
* **Light blue** = soft conversion zones, forms, FAQ areas.
* **Dark photo overlays** = emotional storytelling sections.
* **White cards** = clarity, structured comparison, testimonials.

---

# 2. Typography

## Font Family

Exact font cannot be confirmed from the screenshot, but the closest implementation match is:

```css
font-family: "Heebo", "Assistant", "Arial", sans-serif;
```

Recommended primary: **Heebo**
Alternative: **Assistant**

The typography is RTL-first, clean, geometric, and optimized for Hebrew readability.

---

## Type Scale

| Style          | Desktop Size | Mobile Size |    Weight | Line Height | Usage                   |
| -------------- | -----------: | ----------: | --------: | ----------: | ----------------------- |
| `display.hero` |    `42–48px` |   `30–34px` | `700–800` |      `1.15` | Hero headline           |
| `heading.h1`   |    `36–42px` |   `28–32px` |     `700` |       `1.2` | Major page headlines    |
| `heading.h2`   |    `28–34px` |   `24–28px` |     `700` |      `1.25` | Section titles          |
| `heading.h3`   |    `20–24px` |   `18–21px` |     `700` |       `1.3` | Card titles             |
| `body.large`   |    `17–18px` |      `16px` | `400–500` |      `1.55` | Intro paragraphs        |
| `body.default` |    `15–16px` |   `14–16px` |     `400` |       `1.6` | Main body copy          |
| `body.small`   |    `13–14px` |   `12–13px` |     `400` |      `1.45` | Card descriptions       |
| `caption`      |    `11–12px` |      `11px` | `400–500` |      `1.35` | Legal text / form notes |
| `button`       |    `14–16px` |      `14px` |     `700` |         `1` | CTA buttons             |
| `nav`          |    `13–14px` |      `13px` | `500–600` |       `1.2` | Header navigation       |

## Typography Patterns

* Headings are usually **center-aligned**.
* Body text in content sections is mostly **right-aligned**.
* CTA buttons use **bold Hebrew text**.
* Long legal/informational paragraphs use smaller text with generous line height.
* The page uses strong headline hierarchy: big promise → supporting text → CTA → proof.

---

# 3. Spacing System

## Base Unit

Recommended base unit:

```css
--space-base: 8px;
```

The design appears to follow an 8px spacing rhythm.

## Spacing Scale

| Token      |  Value | Usage                                 |
| ---------- | -----: | ------------------------------------- |
| `space.1`  |  `4px` | Tiny gaps, icon/text spacing          |
| `space.2`  |  `8px` | Compact spacing                       |
| `space.3`  | `12px` | Form field inner gaps                 |
| `space.4`  | `16px` | Card padding small                    |
| `space.5`  | `24px` | Card padding / grid gaps              |
| `space.6`  | `32px` | Section internal gaps                 |
| `space.7`  | `40px` | Medium section spacing                |
| `space.8`  | `48px` | Large block spacing                   |
| `space.9`  | `64px` | Section padding                       |
| `space.10` | `80px` | Large hero / desktop section padding  |
| `space.11` | `96px` | Major landing-page section separation |

## Layout Spacing

| Element                  |                     Suggested Value |
| ------------------------ | ----------------------------------: |
| Header height            |                           `64–72px` |
| Hero vertical padding    |       `96px desktop`, `56px mobile` |
| Standard section padding | `64–80px desktop`, `40–48px mobile` |
| Card grid gap            |                              `24px` |
| Button gap               |                           `12–16px` |
| Form field gap           |                            `8–12px` |
| Container side padding   |       `24px desktop`, `16px mobile` |
| Max content width        |                       `1120–1180px` |

---

# 4. Component Library

## Buttons

### Primary Button — Blue CTA

Used for the main lead action.

```css
.button-primary {
  background: #4B8CC0;
  color: #FFFFFF;
  border: 1px solid #4B8CC0;
  border-radius: 4px;
  height: 42px;
  padding: 0 24px;
  font-size: 15px;
  font-weight: 700;
}
```

**Usage:**
“לקבלת מחיר מיידי” / “לקבלת הצעה”

**Hover:**
`background: #3D7FAF`

---

### Secondary Button — White / Outline CTA

Used beside primary CTA, often for WhatsApp/contact.

```css
.button-secondary {
  background: #FFFFFF;
  color: #1A2A37;
  border: 1px solid #D8E0E4;
  border-radius: 4px;
  height: 42px;
  padding: 0 24px;
  font-size: 15px;
  font-weight: 700;
}
```

**Hover:**
`background: #F6F9FB`

---

### WhatsApp Button

White button with green WhatsApp icon.

```css
.button-whatsapp {
  background: #FFFFFF;
  color: #1A2A37;
  border: 1px solid #D8E0E4;
}

.button-whatsapp .icon {
  color: #25B86B;
}
```

---

## Input Fields

Forms appear as horizontal lead-capture strips.

```css
.input {
  height: 38px;
  border: 1px solid #C6CACD;
  border-radius: 2px;
  background: #FFFFFF;
  color: #151413;
  padding: 0 12px;
  font-size: 14px;
}
```

### Input States

| State    | Style                                                           |
| -------- | --------------------------------------------------------------- |
| Default  | `border: #C6CACD`                                               |
| Hover    | `border: #9CA9AF`                                               |
| Focus    | `border: #4B8CC0`, `box-shadow: 0 0 0 2px rgba(75,140,192,.18)` |
| Error    | `border: #D9534F`                                               |
| Disabled | `background: #F1F4F5`, `color: #9AA2A6`                         |

---

## Cards / Containers

### Standard White Card

Used for features, comparison blocks, blog cards.

```css
.card {
  background: #FFFFFF;
  border: 1px solid #E1E7EA;
  border-radius: 6px;
  padding: 24px;
  box-shadow: 0 4px 14px rgba(15, 23, 32, 0.08);
}
```

### Yellow Highlight Card

Used for recommended option / emphasized insurance plan.

```css
.card-highlight {
  background: #F9C04E;
  border-radius: 6px;
  padding: 24px;
  color: #151413;
}
```

### Cream Info Panel

Used for text-heavy explanatory sections.

```css
.info-panel {
  background: #FAE6B7;
  padding: 56px 24px;
}
```

---

## Navigation

The header is compact and white with small RTL nav links.

```css
.header {
  height: 64px;
  background: #FFFFFF;
  border-bottom: 1px solid #E1E7EA;
}

.nav-link {
  color: #151413;
  font-size: 13px;
  font-weight: 500;
}
```

### Header Structure

* Logo on one side.
* Navigation links across the top.
* Small CTA button in yellow or blue.
* RTL alignment.
* Sticky header is recommended, although not directly confirmed from the screenshot.

---

## Icons

Icon style is consistent:

| Property       | Value                                  |
| -------------- | -------------------------------------- |
| Style          | Thin outline icons                     |
| Stroke width   | `1.5–2px`                              |
| Icon color     | `#4B8CC0` or `#F9C04E`                 |
| Icon container | Circular outline                       |
| Circle size    | `56–64px`                              |
| Circle border  | `1px dashed/solid #9FC6D8`             |
| Visual feel    | Lightweight, insurance/travel-oriented |

Common icon themes:

* Suitcase / luggage
* Travel bag
* Phone
* Laptop
* Shield / insurance
* Checkmarks
* Play video icon

---

## Forms

Lead forms repeat several times throughout the page.

### Form Strip

```css
.form-strip {
  background: #E8F2F4;
  padding: 28px 24px;
}
```

Alternative yellow version:

```css
.form-strip-yellow {
  background: #F9C04E;
}
```

### Form Layout

Desktop:

```css
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 8px;
  max-width: 920px;
  margin: 0 auto;
}
```

Mobile:

```css
.form-row {
  grid-template-columns: 1fr;
}
```

---

# 5. Visual Patterns

## Border Radius

| Token         |   Value | Usage                     |
| ------------- | ------: | ------------------------- |
| `radius.none` |   `0px` | Large section backgrounds |
| `radius.xs`   |   `2px` | Inputs                    |
| `radius.sm`   |   `4px` | Buttons                   |
| `radius.md`   |   `6px` | Cards                     |
| `radius.lg`   |   `8px` | Video cards / blog cards  |
| `radius.full` | `999px` | Circular icons            |

The page uses mostly **subtle radius**, not overly rounded UI.

---

## Shadows / Elevation

| Token       | Value                            | Usage                                     |
| ----------- | -------------------------------- | ----------------------------------------- |
| `shadow.sm` | `0 2px 6px rgba(15,23,32,.08)`   | Small cards                               |
| `shadow.md` | `0 4px 14px rgba(15,23,32,.10)`  | Pricing cards                             |
| `shadow.lg` | `0 10px 28px rgba(15,23,32,.18)` | Hero floating elements / emphasized cards |

---

## Borders

| Element        | Border              |
| -------------- | ------------------- |
| Inputs         | `1px solid #C6CACD` |
| Cards          | `1px solid #E1E7EA` |
| Icon circles   | `1px solid #9FC6D8` |
| Tables         | `1px solid #D8E0E4` |
| Accordion rows | `1px solid #DCE6EA` |

---

## Hover / Interactive States

Not visible in the static screenshot, but recommended:

```css
.button-primary:hover {
  background: #3D7FAF;
}

.button-secondary:hover {
  background: #F6F9FB;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(15,23,32,.12);
}

.nav-link:hover {
  color: #4B8CC0;
}

.accordion-item:hover {
  background: #F6F9FB;
}
```

Transition:

```css
transition: all 180ms ease;
```

---

# 6. Layout Principles

## Grid Structure

Recommended desktop grid:

```css
.container {
  max-width: 1160px;
  margin: 0 auto;
  padding-inline: 24px;
}
```

The design uses repeated centered containers with section-specific grids.

## Common Grid Patterns

| Section             | Grid                     |
| ------------------- | ------------------------ |
| Hero                | Centered text over image |
| Benefit icons       | 4-column grid            |
| Pricing cards       | 4-column grid            |
| Stats section       | 3-column grid            |
| Problem cards       | 3-column grid            |
| Testimonials/videos | 4-column grid            |
| Blog cards          | 3-column grid            |
| Forms               | 3 inputs + 1 CTA button  |

## Responsive Breakpoints

Suggested breakpoints:

```css
--breakpoint-sm: 480px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1200px;
```

### Responsive Behavior

| Width         | Behavior                               |
| ------------- | -------------------------------------- |
| `1200px+`     | Full desktop grid                      |
| `1024–1199px` | Slightly reduced gutters and card gaps |
| `768–1023px`  | 2-column cards, nav may collapse       |
| `<768px`      | Single-column layout, stacked forms    |
| `<480px`      | Compact buttons full-width             |

---

## Content Hierarchy

The page follows a strong landing-page conversion structure:

1. **Hero promise**
   Large white headline over emotional travel/student image.

2. **Immediate CTA**
   Blue primary button + white/WhatsApp secondary button.

3. **Problem framing**
   Yellow section explaining what students must check before choosing insurance.

4. **Trust/proof**
   Icons, stats, claims, comparison table.

5. **Product plans**
   Pricing/coverage cards.

6. **Education and objections**
   Text sections, FAQ, comparison table.

7. **Social proof**
   Videos/testimonials/blog cards.

8. **Repeated conversion forms**
   Lead forms appear after most major persuasion blocks.

---

# 7. Design Tokens

## CSS Token Structure

```css
:root {
  /* Colors - Brand */
  --color-brand-yellow-500: #F9C04E;
  --color-brand-yellow-600: #E8AA31;

  --color-brand-blue-500: #4B8CC0;
  --color-brand-blue-600: #3D7FAF;

  --color-brand-navy-900: #1A2A37;

  --color-brand-cream-200: #FAE6B7;
  --color-brand-sky-100: #E8F2F4;
  --color-brand-sky-200: #DCECEF;

  /* Colors - Background */
  --color-bg-default: #FFFFFF;
  --color-bg-light: #F6F9FB;
  --color-bg-sky: #E8F2F4;
  --color-bg-yellow: #F9C04E;
  --color-bg-cream: #FAE6B7;
  --color-bg-overlay-dark: rgba(10, 18, 24, 0.62);

  /* Colors - Text */
  --color-text-primary: #151413;
  --color-text-heading: #0F1720;
  --color-text-secondary: #484745;
  --color-text-muted: #7A7F83;
  --color-text-inverse: #FFFFFF;
  --color-text-inverse-muted: #EFEFEB;

  /* Colors - Borders */
  --color-border-light: #E1E7EA;
  --color-border-default: #C6CACD;
  --color-border-strong: #9CA9AF;

  /* Colors - States */
  --color-success: #25B86B;
  --color-error: #D9534F;
  --color-focus: #4B8CC0;

  /* Typography */
  --font-family-base: "Heebo", "Assistant", "Arial", sans-serif;

  --font-size-caption: 12px;
  --font-size-small: 14px;
  --font-size-body: 16px;
  --font-size-body-large: 18px;
  --font-size-h3: 22px;
  --font-size-h2: 32px;
  --font-size-h1: 40px;
  --font-size-hero: 48px;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extra-bold: 800;

  --line-height-tight: 1.15;
  --line-height-heading: 1.25;
  --line-height-body: 1.6;
  --line-height-caption: 1.35;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 40px;
  --space-8: 48px;
  --space-9: 64px;
  --space-10: 80px;
  --space-11: 96px;

  /* Radius */
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-full: 999px;

  /* Shadows */
  --shadow-sm: 0 2px 6px rgba(15, 23, 32, 0.08);
  --shadow-md: 0 4px 14px rgba(15, 23, 32, 0.10);
  --shadow-lg: 0 10px 28px rgba(15, 23, 32, 0.18);

  /* Layout */
  --container-max-width: 1160px;
  --container-padding-desktop: 24px;
  --container-padding-mobile: 16px;

  --header-height: 64px;

  /* Breakpoints */
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1200px;
}
```

---

# Suggested Naming Conventions

Use category-based token naming:

```txt
color.brand.blue.500
color.brand.yellow.500
color.bg.section.sky
color.text.primary
color.border.default

font.size.h1
font.weight.bold
line.height.body

space.4
radius.md
shadow.md

component.button.primary.bg
component.input.border
component.card.padding
```

For CSS variables, use:

```txt
--color-brand-blue-500
--color-bg-section-sky
--font-size-h1
--space-6
--radius-md
--shadow-md
```

---

# Component Summary

| Component        | Key Styling                                                 |
| ---------------- | ----------------------------------------------------------- |
| Header           | White, compact, RTL nav, small CTA                          |
| Hero             | Full-width image, dark overlay, centered white heading      |
| CTA buttons      | Blue primary, white secondary, WhatsApp variant             |
| Forms            | Repeated horizontal strips, light-blue or yellow background |
| Feature icons    | Thin blue outline icons inside circles                      |
| Pricing cards    | 4-column cards, one yellow highlighted card                 |
| Comparison table | White table with yellow highlighted column                  |
| Stats section    | Dark image overlay, 3 icon/stat blocks                      |
| FAQ              | Light-blue background, accordion rows                       |
| Testimonials     | Video cards, black thumbnail blocks                         |
| Blog cards       | 3-column image cards with short text                        |

This system gives you a faithful implementation foundation for recreating the landing page and scaling it into a reusable RTL marketing design system.

