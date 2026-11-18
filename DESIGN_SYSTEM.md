# ONLYFOLD DESIGN SYSTEM

> **Version:** 2.0 (2026 Edition)  
> **Source of Truth:** `Onlyfold_AI_Brand_Colour_Guidelines.xlsm` (Brand Guidelines 2026, slides 5–15)  
> **Status:** Active & Enforced across all digital properties, UI components, and code tokens.

---

## 1. Overview & Core Philosophy

Onlyfold is an AI-powered conversational sales and customer support platform on WhatsApp. Its design system communicates **technical authority, conversational fluidity, and high-ticket trust** through a jewel-toned palette anchored on deep navy and luminous electric tones.

### Foundational Principles

1. **The 2:1 Ratio Mandate**: Primary colours must represent at least **two-thirds (≥ 2:1 ratio)** of all brand surface area and visual weight compared to secondary/specialty colours.
2. **The Onlyfold Teal DNA**: Onlyfold Teal (`#88E2D2`) is a legacy hallmark of the brand. It must be incorporated wherever practical as a signature accent.
3. **Preferred Background Trinity**: **Core Navy (`#191841`)**, **White (`#FFFFFF`)**, and **Electric Blue (`#0708EE`)** are the only three standard full-page/card background bases.
4. **120° Angle Discipline**: All branded linear gradients are engineered at a **120° angle** (with the exception of the 180° Main 4-Colour spectrum).
5. **Accessibility First (WCAG AA)**: Strict adherence to verified contrast pairs. Never place low-contrast text on vibrant or mid-tone backgrounds.

---

## 2. Master Colour Palette

### 2.1 Primary Colours (5)

The primary palette establishes the UI foundation, major surfaces, brand identity marks, and dominant visual weight.

| Category    | Colour Name        | HEX       | RGB             | CMYK              | Pantone  | Brand Role & Implementation                                                          |
| :---------- | :----------------- | :-------- | :-------------- | :---------------- | :------- | :----------------------------------------------------------------------------------- |
| **Primary** | **Electric Blue**  | `#0708EE` | `7, 8, 238`     | `100, 43, 0, 2`   | `2935 C` | Core brand colour; hero background option; primary graphics, icons, typography.      |
| **Primary** | **Agentic Purple** | `#AF4FED` | `175, 79, 237`  | `45, 70, 0, 0`    | `2582 C` | Core brand colour; AI discovery, cadence indicators, gradients & luminous accents.   |
| **Primary** | **Smart Orange**   | `#EB5854` | `235, 88, 84`   | `0, 75, 60, 0`    | `178 C`  | Core brand colour; high-intent hot lead alerts, urgency badges, actionable triggers. |
| **Primary** | **Core Navy**      | `#191841` | `25, 24, 65`    | `100, 98, 41, 44` | `2768 C` | Preferred dark background surface; primary headline colour on light surfaces.        |
| **Primary** | **Onlyfold Teal**  | `#88E2D2` | `136, 226, 210` | `35, 0, 21, 0`    | `3245 C` | Legacy hallmark colour; primary CTA fill, convergence focal points, verified checks. |

### 2.2 Secondary Colours (3)

Used **sparingly** (strictly below the 1:2 ratio against primary colours) in illustrations, diagrams, and secondary data graphs.

| Category      | Colour Name         | HEX       | RGB            | CMYK           | Pantone  | Brand Role & Implementation                                                  |
| :------------ | :------------------ | :-------- | :------------- | :------------- | :------- | :--------------------------------------------------------------------------- |
| **Secondary** | **Digital Magenta** | `#DC3FB6` | `220, 63, 182` | `7, 81, 0, 0`  | `232 C`  | Secondary accent; use sparingly in illustrative diagrams and secondary tags. |
| **Secondary** | **Fusion Gold**     | `#F8A45D` | `248, 164, 86` | `0, 50, 90, 0` | `130 C`  | Secondary accent; financial metrics, ROI recovery highlights.                |
| **Secondary** | **Quantum Indigo**  | `#5741DC` | `87, 65, 220`  | `80, 75, 0, 0` | `2097 C` | Secondary accent; deep atmospheric glows, depth shading.                     |

### 2.3 Specialty Colours (5)

Employed strictly when primary and secondary colours are not optimal for accessibility, practical readability, or neutral structure.

| Category      | Colour Name      | HEX       | RGB             | CMYK             | Pantone | Brand Role & Implementation                                                      |
| :------------ | :--------------- | :-------- | :-------------- | :--------------- | :------ | :------------------------------------------------------------------------------- |
| **Specialty** | **Deep Magenta** | `#A1378B` | `161, 55, 139`  | `41, 93, 7, 0`   | _N/A_   | Fallback specialty tone for diagrams when higher contrast is needed.             |
| **Specialty** | **Dark Blue**    | `#2B4279` | `43, 66, 121`   | `96, 84, 24, 10` | _N/A_   | Supporting dark neutral; low-prominence structural borders and container frames. |
| **Specialty** | **Aqua Mint**    | `#36D7AC` | `54, 215, 172`  | `65, 0, 35, 0`   | _N/A_   | Supporting status green/mint; successful sync notifications, online badges.      |
| **Specialty** | **Text Grey**    | `#484B58` | `72, 75, 88`    | `72, 63, 48, 32` | _N/A_   | **Default choice for subheads and body text** on white/light backgrounds.        |
| **Specialty** | **Light Grey**   | `#E8E8E8` | `232, 232, 232` | `8, 6, 6, 0`     | _N/A_   | Specialty neutral; card borders, subtle chip fills, dividers.                    |

---

## 3. Combinations & Practices to AVOID

The brand guidelines explicitly forbid specific colour collisions due to visual vibration, muddy degradation, or cognitive dissonance:

> [!CAUTION]
>
> ### The 5 Prohibited Colour Collisions (Explicitly Illustrated in Slide 7)
>
> 1. ❌ **Smart Orange + Onlyfold Teal** (`#EB5854` + `#88E2D2`)
> 2. ❌ **Fusion Gold + Agentic Purple** (`#F8A45D` + `#AF4FED`)
> 3. ❌ **Agentic Purple + Smart Orange** (`#AF4FED` + `#EB5854`)
> 4. ❌ **Smart Orange + Fusion Gold** (`#EB5854` + `#F8A45D`)
> 5. ❌ **Agentic Purple + Aqua Mint** (`#AF4FED` + `#36D7AC`)

### General Brand Restrictions

- **No Low-Contrast Text**: Never use light text on light backgrounds or dark text on dark backgrounds.
- **No Excessive Secondary Weight**: Never allow Digital Magenta, Fusion Gold, or Quantum Indigo to dominate a screen.
- **No Secondary-to-Secondary Clashes**: Secondary colours should be paired with Primary neutrals (`Core Navy`, `White`), never stacked against each other.

---

## 4. Text & Background Accessibility Matrix

Every foreground/background pairing in Onlyfold interfaces must be validated against this master accessibility audit:

| Background Surface            | Foreground Text / Icon                                           | Status               | Practical Rule & Guidance                                                |
| :---------------------------- | :--------------------------------------------------------------- | :------------------- | :----------------------------------------------------------------------- |
| **Electric Blue (`#0708EE`)** | **White (`#FFFFFF`)**                                            | ✅ **Pass**          | High-impact headlines, hero CTAs, inverted badges.                       |
| **Electric Blue (`#0708EE`)** | **Onlyfold Teal (`#88E2D2`)**                                    | ✅ **Pass**          | Subtle accent text, iconography, verified checkmarks.                    |
| **Electric Blue (`#0708EE`)** | **Fusion Gold (`#F8A45D`)**                                      | ✅ **Pass**          | High-energy metric callouts (large display size only).                   |
| **Electric Blue (`#0708EE`)** | Quantum Indigo, Smart Orange, Core Navy, Deep Magenta, Text Grey | ❌ **FAIL**          | **Forbidden.** Insufficient contrast or visual dissonance.               |
| **Core Navy (`#191841`)**     | **White (`#FFFFFF`)**                                            | ✅ **Pass**          | Primary headline and body text on all dark mode sections.                |
| **Core Navy (`#191841`)**     | **Aqua Mint (`#36D7AC`)**                                        | ✅ **Pass**          | Status pills, success indicators, verified tags.                         |
| **Core Navy (`#191841`)**     | **Agentic Purple (`#AF4FED`)**                                   | ✅ **Pass**          | AI status chips, workflow automation tags.                               |
| **Core Navy (`#191841`)**     | **Fusion Gold (`#F8A45D`)**                                      | ✅ **Pass**          | Financial metrics, revenue statistics, star ratings.                     |
| **Core Navy (`#191841`)**     | **Smart Orange (`#EB5854`)**                                     | ✅ **Pass**          | Urgent notifications, Hot Lead badges, alert borders.                    |
| **Core Navy (`#191841`)**     | **Onlyfold Teal (`#88E2D2`)**                                    | ✅ **Pass**          | Primary accent text, eyebrow headings, active indicators.                |
| **Core Navy (`#191841`)**     | Electric Blue, Deep Magenta, Text Grey                           | ❌ **FAIL**          | **Forbidden.** Muddy visibility; fails WCAG AA minimum.                  |
| **White (`#FFFFFF`)**         | **Core Navy (`#191841`)**                                        | ✅ **Pass**          | Primary headline and strong text on light mode surfaces.                 |
| **White (`#FFFFFF`)**         | **Text Grey (`#484B58`)**                                        | ✅ **Pass**          | Default paragraph and supporting body text.                              |
| **White (`#FFFFFF`)**         | **Agentic Purple (`#AF4FED`)**                                   | ✅ **Pass**          | AI feature labels, category tags on white cards.                         |
| **White (`#FFFFFF`)**         | **Electric Blue (`#0708EE`)**                                    | ✅ **Pass**          | Text links, primary eyebrows, button borders.                            |
| **White (`#FFFFFF`)**         | **Aqua Mint (`#36D7AC`)**                                        | ✅ **Pass**          | Supporting badges (large/medium weights only).                           |
| **White (`#FFFFFF`)**         | **Dark Blue (`#2B4279`)**                                        | ✅ **Pass**          | Secondary text and structural card borders.                              |
| **White (`#FFFFFF`)**         | Onlyfold Teal (`#88E2D2`), Light Grey (`#E8E8E8`)                | ❌ **FAIL**          | **Forbidden.** Contrast ratio < 3.0:1; illegible.                        |
| **Onlyfold Teal (`#88E2D2`)** | **Core Navy (`#191841`)**                                        | ✅ **Pass (11.1:1)** | **Official Primary CTA specification.** Maximum readability.             |
| **Onlyfold Teal (`#88E2D2`)** | **Text Grey (`#484B58`)**                                        | ✅ **Pass**          | Secondary micro-copy on teal cards.                                      |
| **Onlyfold Teal (`#88E2D2`)** | **Electric Blue (`#0708EE`)**                                    | ✅ **Pass**          | High-tech icon fills on teal badges.                                     |
| **Onlyfold Teal (`#88E2D2`)** | **White (`#FFFFFF`)**                                            | ⚠️ **Conditional**   | **Forbidden for button labels;** permitted only for large display icons. |
| **Smart Orange (`#EB5854`)**  | **Core Navy (`#191841`)**                                        | ✅ **Pass**          | High-intent CTA buttons and alert action pills.                          |
| **Smart Orange (`#EB5854`)**  | **White (`#FFFFFF`)**                                            | ✅ **Pass**          | Alert notifications and hot status tags.                                 |

---

## 5. Gradient System

All linear gradients in Onlyfold follow strict angular and stop rules.

```
+-----------------------------------------------------------------------------------------+
| MAIN DARK GRADIENT (120deg)                                                             |
| Core Navy #191841 ==================================================> Electric Blue #0708EE
+-----------------------------------------------------------------------------------------+
| MAIN 4-COLOUR GRADIENT (180deg)                                                         |
| Onlyfold Teal #88E2D2 -> Agentic Purple #AF4FED -> Electric Blue #0708EE -> Smart Orange #EB5854
+-----------------------------------------------------------------------------------------+
| PRIMARY CTA GRADIENT (120deg)                                                           |
| Electric Blue #0708EE ================================================> Core Navy #191841 |
+-----------------------------------------------------------------------------------------+
```

### Official Gradient Recipes

| Gradient Token             | Angle  | Colour Stops                                  | CSS Implementation                                                            | Primary Use Case                                   |
| :------------------------- | :----- | :-------------------------------------------- | :---------------------------------------------------------------------------- | :------------------------------------------------- |
| **Main Dark Gradient**     | `120°` | `#191841` → `#0708EE`                         | `linear-gradient(120deg, #191841 0%, #0708EE 100%)`                           | Dark hero and section backgrounds.                 |
| **Main 4-Colour Gradient** | `180°` | `#88E2D2` → `#AF4FED` → `#0708EE` → `#EB5854` | `linear-gradient(180deg, #88E2D2 0%, #AF4FED 33%, #0708EE 66%, #EB5854 100%)` | High-impact hero accents & feature backdrops.      |
| **Secondary Gradient 1**   | `120°` | `#0708EE` → `#88E2D2`                         | `linear-gradient(120deg, #0708EE 0%, #88E2D2 100%)`                           | Icons, tiles, floating pills, feature badges.      |
| **Secondary Gradient 2**   | `120°` | `#0708EE` → `#AF4FED`                         | `linear-gradient(120deg, #0708EE 0%, #AF4FED 100%)`                           | AI status glows, conversational interface cards.   |
| **Secondary Gradient 3**   | `120°` | `#36D7AC` → `#88E2D2`                         | `linear-gradient(120deg, #36D7AC 0%, #88E2D2 100%)`                           | Success milestones, verified data indicators.      |
| **Secondary Gradient 4**   | `120°` | `#AF4FED` → `#0708EE`                         | `linear-gradient(120deg, #AF4FED 0%, #0708EE 100%)`                           | Decorative telemetry paths, pipeline flows.        |
| **Secondary Gradient 6**   | `120°` | `#0708EE` → `#DC3FB6`                         | `linear-gradient(120deg, #0708EE 0%, #DC3FB6 100%)`                           | Feature differentiation highlights (sparingly).    |
| **Secondary Gradient 7**   | `120°` | `#E8E8E8` → `#FFFFFF`                         | `linear-gradient(120deg, #E8E8E8 0%, #FFFFFF 100%)`                           | Neutral cards, subtle light-mode surfaces.         |
| **Gradient CTA Premium**   | `120°` | `#0708EE` → `#191841`                         | `linear-gradient(120deg, #0708EE 0%, #191841 100%)`                           | High-tier CTA buttons with white typography.       |
| **Gradient CTA Action**    | `120°` | `#0708EE` → `#EB5854`                         | `linear-gradient(120deg, #0708EE 0%, #EB5854 100%)`                           | Urgent demo booking buttons with white typography. |

> [!WARNING]
> **Secondary Gradient 5 is on HOLD**: The recipe `Fusion Gold (#F8A45D) → Smart Orange (#EB5854)` violates the explicit avoid rule (_Smart Orange + Fusion Gold_). Do not implement until approved by brand governance.

---

## 6. UI Component Standards

### 6.1 Buttons & Action Controls

| Component                 | Surface / Background             | Label / Foreground                          | Contrast Ratio    | Implementation Guidance                                                             |
| :------------------------ | :------------------------------- | :------------------------------------------ | :---------------- | :---------------------------------------------------------------------------------- |
| **Primary CTA Button**    | `Onlyfold Teal (#88E2D2)`        | `Core Navy (#191841)`                       | **11.10:1 (AAA)** | Primary action button. **Never use white text.** Pill shape with subtle hover lift. |
| **Secondary CTA Button**  | Transparent or White             | `Electric Blue (#0708EE)` with `2px border` | **9.20:1 (AAA)**  | Secondary action. High-contrast border and text on light surfaces.                  |
| **Premium Gradient CTA**  | `120° Electric Blue → Core Navy` | `White (#FFFFFF)`                           | **> 7.0:1 (AAA)** | Hero and pricing conversion points.                                                 |
| **Urgent Action CTA**     | `Smart Orange (#EB5854)`         | `Core Navy (#191841)`                       | **> 5.5:1 (AA)**  | Direct hot lead responses (e.g. "Call Now").                                        |
| **Inverted White Button** | `White (#FFFFFF)`                | `Core Navy (#191841)`                       | **15.8:1 (AAA)**  | Action button placed over dark gradients or Core Navy sections.                     |

### 6.2 Badges, Pills & Eyebrows

| Component                | Background Tint                                     | Text Colour                                              | Border Spec                           | Typical Use                               |
| :----------------------- | :-------------------------------------------------- | :------------------------------------------------------- | :------------------------------------ | :---------------------------------------- |
| **Badge 1 (Primary)**    | `Electric Blue @ 10%` (`rgba(7, 8, 238, 0.10)`)     | `Electric Blue (#0708EE)`                                | `1px solid rgba(7, 8, 238, 0.20)`     | Section category tags, platform badges.   |
| **Badge 2 (Brand Teal)** | `Onlyfold Teal @ 10%` (`rgba(136, 226, 210, 0.10)`) | `Core Navy (#191841)` on light / `Onlyfold Teal` on dark | `1px solid rgba(136, 226, 210, 0.30)` | Feature badges, system status indicators. |
| **Badge 3 (Hot Alert)**  | `Smart Orange @ 10%` (`rgba(235, 88, 84, 0.10)`)    | `Smart Orange (#EB5854)`                                 | `1px solid rgba(235, 88, 84, 0.30)`   | Urgent notifications, buying intent tags. |
| **Tag 1 (Neutral)**      | `Light Grey (#E8E8E8)`                              | `Text Grey (#484B58)`                                    | None                                  | Inactive filters, metadata labels.        |
| **Tag 2 (Premium)**      | `120° Electric Blue → Core Navy`                    | `White (#FFFFFF)`                                        | None                                  | Featured tier badges, enterprise pills.   |

### 6.3 Alert Banners & Callout Cards

| Alert Variant                   | Container Background       | Heading / Icon            | Body Copy                                         |
| :------------------------------ | :------------------------- | :------------------------ | :------------------------------------------------ |
| **Alert 1 (System / Info)**     | `Electric Blue @ 10%` fill | `Electric Blue (#0708EE)` | `Text Grey (#484B58)` (light) / `White/80` (dark) |
| **Alert 2 (Success / Active)**  | `Onlyfold Teal @ 10%` fill | `Onlyfold Teal (#88E2D2)` | `Text Grey (#484B58)` (light) / `White/90` (dark) |
| **Alert 3 (Urgent / Hot Lead)** | `Smart Orange @ 10%` fill  | `Smart Orange (#EB5854)`  | `Text Grey (#484B58)` (light) / `White/90` (dark) |

---

## 7. Typography & Layout System

### 7.1 Typeface & Hierarchy

- **Primary Typeface**: **Gilroy** (Display and Marketing headings).
- **Digital & Web Standard**: **Inter** (Fallback for web applications and production UI).

| Role                      | Font Size / Line Height              | Tracking          | Font Weight       | Default Colour                               |
| :------------------------ | :----------------------------------- | :---------------- | :---------------- | :------------------------------------------- |
| **Display / Hero H1**     | `clamp(2.5rem, 6vw, 4.5rem)` / `1.1` | `-0.02em`         | `800` (Extrabold) | Core Navy (light) / White (dark)             |
| **Section Heading H2**    | `clamp(2rem, 4vw, 3.5rem)` / `1.2`   | `-0.02em`         | `800` (Extrabold) | Core Navy (light) / White (dark)             |
| **Feature Title H3**      | `1.5rem – 2rem` / `1.3`              | `-0.01em`         | `700` (Bold)      | Core Navy (light) / White (dark)             |
| **Eyebrows / Kicker**     | `0.75rem – 0.875rem` / `normal`      | `2px` (`0.125em`) | `700` (Bold)      | Electric Blue (light) / Onlyfold Teal (dark) |
| **Body Large**            | `1.125rem` (18px) / `1.6`            | `normal`          | `400` / `500`     | Text Grey (light) / White @ 85% (dark)       |
| **Body Regular**          | `1rem` (16px) / `1.6`                | `normal`          | `400` / `500`     | Text Grey (light) / White @ 75% (dark)       |
| **Micro Copy / Captions** | `0.75rem – 0.875rem` / `1.4`         | `0.5px`           | `500` / `600`     | Text Grey @ 80% / White @ 60%                |

### 7.2 Readability & Line Length

- Long body text columns must be constrained between **50 and 75 characters per line** (`max-w-[65ch]`) to ensure effortless scannability.

---

## 8. Tailwind CSS v4 Theme Token Mapping

All tokens are formally registered in `src/styles/theme.css`:

```css
@theme {
  /* --- PALETTE: Primary Colours (5) --- */
  --color-core-navy: #191841;
  --color-electric-blue: #0708ee;
  --color-agentic-purple: #af4fed;
  --color-smart-orange: #eb5854;
  --color-onlyfold-teal: #88e2d2;

  /* --- PALETTE: Secondary Colours (3) --- */
  --color-digital-magenta: #dc3fb6;
  --color-fusion-gold: #f8a45d;
  --color-quantum-indigo: #5741dc;

  /* --- PALETTE: Specialty Colours (5) --- */
  --color-deep-magenta: #a1378b;
  --color-dark-blue: #2b4279;
  --color-aqua-mint: #36d7ac;
  --color-text-grey: #484b58;
  --color-light-grey: #e8e8e8;

  /* --- RADII --- */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-pill: 9999px;

  /* --- SHADOWS --- */
  --shadow-btn-primary: 0 4px 14px rgb(136 226 210 / 0.35);
  --shadow-btn-white: 0 4px 12px rgb(255 255 255 / 0.2);
  --shadow-card: 0 4px 20px rgb(0 0 0 / 0.05);
  --shadow-card-dark: 0 12px 36px rgb(0 0 0 / 0.4);
  --shadow-glow-teal: 0 0 24px rgb(136 226 210 / 0.4);
  --shadow-glow-blue: 0 0 28px rgb(7 8 238 / 0.45);
}
```

---

## 9. Quality Checklist for Designers & Engineers

Before committing any component, section, or marketing asset, verify:

- [ ] Are primary colours providing **at least 2:1 visual dominance** over secondary colours?
- [ ] Is **Onlyfold Teal (`#88E2D2`)** represented in the flow as a hallmark accent?
- [ ] Have all **5 prohibited colour collisions** been strictly prevented?
  - `Smart Orange + Onlyfold Teal` ❌
  - `Fusion Gold + Agentic Purple` ❌
  - `Agentic Purple + Smart Orange` ❌
  - `Smart Orange + Fusion Gold` ❌
  - `Agentic Purple + Aqua Mint` ❌
- [ ] Does every text-on-surface combination meet or exceed **WCAG AA contrast**?
- [ ] Does the Primary CTA button use **Onlyfold Teal fill with Core Navy text** (never white text)?
- [ ] Are all linear gradients configured at **120°**?
- [ ] Does `pnpm check` (`lint`, `typecheck`, `format:check`) pass cleanly without warnings?
