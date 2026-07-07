# Landing Page Section Index

Quick map of the single-page landing (`src/routes/+page.svelte`) — section order, files, anchors, and purpose.

**Page title:** ביטוח סטודנטים בחו״ל | נחלים — הוותיק והמשתלם בישראל

---

## Section order (top → bottom)

| # | Section | Component file | Anchor ID | Kicker / headline |
|---|---------|----------------|-----------|-------------------|
| 1 | Hero | `src/lib/components/Hero.svelte` | — | טסים ללמוד בחו״ל? **הביטוח** זה הדבר האחרון שצריך להלחיץ אתכם |
| 2 | Questions | `src/lib/components/Questions.svelte` | — | רגע לפני שסוגרים · 5 שאלות שחייבים לשאול **לפני** שבוחרים ביטוח |
| 3 | Benefits | `src/lib/components/Benefits.svelte` | — | הנתון שאומר הכל · לא סתם **95% מהסטודנטים** הישראלים בחו״ל בוחרים בנחלים |
| 4 | Tracks (pricing plans) | `src/lib/components/Tracks.svelte` | — | סמסטר? תואר ברפואה? יש מסלול · מסמסטר **ועד שש שנים** |
| 5 | **Join (quote / signup)** | `src/lib/components/Join.svelte` | `#join`, `#whatsapp` | לוקח 2 דק׳ · **כמה זה עולה לכם?** |
| 6 | Countries | `src/lib/components/Countries.svelte` | `#countries` | 25 יעדים · בחרו **את המדינה שלכם** |
| 7 | Insurability | `src/lib/components/Insurability.svelte` | `#insurability` | רק בנחלים · **ברות ביטוח** — הכיסוי שאין לאף אחד אחר |
| 8 | Compare | `src/lib/components/Compare.svelte` | `#compare` | בלי אותיות קטנות · מה יש לנחלים **שאין לאף אחד אחר?** |
| 9 | Gear (equipment insurance) | `src/lib/components/Gear.svelte` | `#gear` | בטחו את הציוד **ב־92% הנחה** |
| 10 | How it works | `src/lib/components/HowItWorks.svelte` | `#how` | לא מרגישים טוב? **בשלושה צעדים פשוטים** |
| 11 | Testimonials (videos) | `src/lib/components/VideoRow.svelte` | `#testimonials` | בלי פילטרים · סטודנטים (והורים) **מספרים** |
| 12 | FAQ | `src/lib/components/Faq.svelte` | `#faq` | שאלות ותשובות על **ביטוח סטודנטים בחו״ל** |
| 13 | Knowledge (videos) | `src/lib/components/VideoRow.svelte` | `#knowledge` | שווה לדעת · מידע נוסף שכל סטודנט בחו״ל חייב לדעת |

---

## Page assembly

```txt
src/routes/+page.svelte
├── Hero
├── Questions
├── Benefits
├── Tracks
├── Join
├── Countries
├── Insurability
├── Compare
├── Gear
├── HowItWorks
├── VideoRow (sectionId="testimonials", data in +page.svelte)
├── Faq
└── VideoRow (sectionId="knowledge", dark variant, data in +page.svelte)
```

Video lists (`testimonials`, `knowledge`) are defined as arrays in `+page.svelte` and passed as props to `VideoRow`.

---

## Anchors & in-page links

| Anchor | Used by | Notes |
|--------|---------|-------|
| `#join` | Section ID on Join | Quote/signup form — name, phone, country, duration |
| `#whatsapp` | Element ID inside Join | WhatsApp card with direct link to CEO |
| `#countries` | Section ID on Countries | Country picker + world map |
| `#insurability` | Section ID on Insurability | ברות ביטוח explainer |
| `#compare` | Section ID on Compare | Feature comparison table |
| `#gear` | Section ID on Gear | Laptop / phone / luggage insurance |
| `#how` | Section ID on HowItWorks | 3-step medical flow |
| `#testimonials` | `VideoRow` `sectionId` | 9 student/parent testimonial videos |
| `#faq` | Section ID on Faq | Accordion FAQ (10 items + JSON-LD) |
| `#knowledge` | `VideoRow` `sectionId` | 6 educational videos |

---

## Shared UI & assets

| Resource | Location |
|----------|----------|
| Global styles & design tokens | `src/app.css` |
| Design system reference | `docs/design-system.md` |
| Reveal animation action | `src/lib/actions/reveal.ts` |
| Count-up animation action | `src/lib/actions/countup.ts` |
| Country map pin data | `src/lib/data/mappins.json` |
| Logos, backgrounds, people photos | `src/lib/assets/` |

---

## When editing a section

1. Find the row in the table above → open the component file.
2. If the change affects page order or adds/removes a section, update this file and `src/routes/+page.svelte`.
3. New scroll targets: add a stable `id` on the `<section>` and document it here.
4. For colors, spacing, typography — see `docs/design-system.md`.
