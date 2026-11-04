# Implementation Guide — Nayana Villa

- **Version:** 1.0
- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Scope:** Portfolio 01 MVP

---

## 1. Implementation Strategy

Build the website milestone by milestone. Do not generate the whole application in one pass.

Before each milestone:
1. Read `AGENTS.md`.
2. Read the relevant PRD and design requirements.
3. Inspect the current repository.
4. Confirm the intended scope and acceptance criteria.

After each milestone:
1. Run lint.
2. Run type checking.
3. Run relevant tests.
4. Run production build when appropriate.
5. Inspect the UI at required viewport widths.
6. Fix errors.
7. Update documentation.
8. Report evidence of completion and known limitations.

## 2. Recommended Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js App Router | React application |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | Design tokens |
| Components | shadcn/ui selectively | Do not force every component into the design |
| Localization | next-intl | English and Indonesian |
| Validation | Zod | Inquiry schema |
| Forms | React Hook Form (optional) | Use only if it simplifies implementation |
| Icons | Lucide | Consistent icon set |
| Images | next/image | Optimized image rendering |
| Deployment | Vercel | Portfolio deployment |

Avoid adding a database or ORM in Portfolio 01. The inquiry form prepares a WhatsApp message and does not persist reservations.

## 3. Proposed Folder Structure

```text
nayana-villa/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── accommodation/
│   │   ├── gallery/
│   │   └── facilities/
│   └── icons/
├── messages/
│   ├── en.json
│   └── id.json
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       ├── about/
│   │       ├── accommodation/
│   │       │   └── [slug]/
│   │       ├── facilities/
│   │       ├── gallery/
│   │       ├── location/
│   │       ├── contact/
│   │       └── booking/
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   ├── accommodation/
│   │   ├── gallery/
│   │   ├── booking/
│   │   └── ui/
│   ├── config/
│   │   └── site.ts
│   ├── data/
│   │   ├── accommodation.ts
│   │   ├── facilities.ts
│   │   └── gallery.ts
│   ├── i18n/
│   │   ├── routing.ts
│   │   └── request.ts
│   ├── lib/
│   │   ├── booking.ts
│   │   ├── whatsapp.ts
│   │   └── validation.ts
│   └── styles/
│       └── globals.css
├── docs/
├── AGENTS.md
├── README.md
├── .env.example
└── package.json
```

This is a target structure, not a requirement to create empty files. Adjust to the installed Next.js and localization versions while preserving separation of concerns.

## 4. Content Architecture

Keep repeated property content outside page components.

Suggested typed accommodation shape:

```ts
type LocalizedText = {
  en: string;
  id: string;
};

type Accommodation = {
  slug: string;
  name: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  coverImage: string;
  gallery: string[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  areaSqm?: number;
  amenities: LocalizedText[];
  indicativePrice?: {
    amount: number;
    currency: "IDR";
    label: LocalizedText;
  };
};
```

All values are illustrative. Do not imply live rates or availability.

## 5. Localization

- Configure `en` and `id`.
- Default locale: `en`.
- Keep messages in `messages/en.json` and `messages/id.json`.
- Include navigation, CTA, footer, form labels, errors, metadata, and page content.
- Use locale-aware links.
- Preserve the current page during language switching when possible.
- Add a translation parity check or manual review checklist.

## 6. Booking Inquiry Implementation

### Suggested schema

```ts
import { z } from "zod";

export const inquirySchema = z
  .object({
    checkIn: z.string().min(1),
    checkOut: z.string().min(1),
    guests: z.coerce.number().int().min(1).max(20),
    accommodationSlug: z.string().optional(),
    name: z.string().trim().min(2).max(100),
    email: z.string().email().max(254),
    contactNumber: z.string().max(30).optional(),
    message: z.string().max(1000).optional(),
    privacyAccepted: z.literal(true),
  })
  .refine(
    (value) => new Date(value.checkOut) > new Date(value.checkIn),
    {
      message: "Check-out must be after check-in.",
      path: ["checkOut"],
    }
  );
```

The implementation must also reject past check-in dates using a consistent date-only comparison strategy. Avoid timezone bugs by treating date inputs as calendar dates rather than casually converting them to local timestamps.

### WhatsApp message generation

- Build the message from validated values.
- Include property name and inquiry details.
- Use `encodeURIComponent`.
- Read the destination number from configuration/environment.
- Do not include unnecessary personal information.
- Do not send automatically.
- Open WhatsApp only after the visitor intentionally activates the action.
- Clearly explain that the visitor must manually send the message.

If the WhatsApp number is not configured, show an informative fallback.

## 7. Image and Asset Handling

- Store approved local assets in `public/images/`.
- Maintain an asset manifest containing filename, source, license/permission, and credit.
- Use responsive image sizing.
- Define image dimensions/aspect ratios.
- Use priority loading only for the main above-the-fold hero image when appropriate.
- Lazy-load non-critical images.
- Never hotlink assets without permission.
- Do not use real property images in a way that falsely implies the depicted property is Nayana Villa.

## 8. Milestones

### Milestone 1 — Project Foundation
Tasks:
- Inspect repository and environment.
- Initialize or verify Next.js App Router.
- Configure TypeScript strict mode.
- Configure Tailwind.
- Configure localization.
- Establish folder structure.
- Add global CSS and design tokens.
- Configure fonts.
- Add environment example.

Acceptance:
- Application starts.
- Locale routing works.
- No TypeScript or build errors.
- Global tokens and fonts are available.

### Milestone 2 — Design System and Shared Components
Tasks:
- Navbar.
- Mobile navigation.
- Footer.
- Buttons.
- Section container.
- Typography primitives.
- Language switcher.
- Basic form styles.

Acceptance:
- Components follow `DESIGN.md`.
- Mobile menu works.
- Keyboard focus is visible.
- Both locales render correctly.

### Milestone 3 — Homepage
Tasks:
- Hero.
- Introduction.
- Philosophy.
- Accommodation preview.
- Experience highlights.
- Gallery preview.
- Location preview.
- Final CTA.

Acceptance:
- All sections are responsive.
- CTA destinations are valid.
- Content is localized.
- Images have correct alt behavior.

### Milestone 4 — Internal Pages
Tasks:
- About.
- Accommodation listing.
- Accommodation detail.
- Facilities.
- Gallery and lightbox.
- Location.
- Contact.

Acceptance:
- All sitemap pages exist.
- Dynamic slugs work.
- Not-found state works.
- Gallery controls work.
- No placeholder links.

### Milestone 5 — Booking Inquiry
Tasks:
- Inquiry form.
- Date and guest validation.
- Summary state.
- WhatsApp message generation.
- Fallback if destination is not configured.
- Privacy notice.

Acceptance:
- Valid and invalid cases tested.
- Correct localized message generated.
- No false booking confirmation.
- No inquiry data stored in MVP.

### Milestone 6 — Quality Assurance
Tasks:
- Responsive checks.
- Accessibility checks.
- SEO metadata.
- Sitemap and robots.
- Performance review.
- Functional testing.
- Link audit.
- Translation review.

Acceptance:
- Tests pass.
- No critical accessibility or navigation issues remain.
- Production build succeeds.
- Lighthouse targets reviewed and results documented.

### Milestone 7 — Deployment and Handover
Tasks:
- Configure production environment.
- Deploy to Vercel.
- Verify production routes.
- Verify inquiry destination.
- Complete README.
- Prepare screenshots and demo walkthrough.
- Document known limitations.

Acceptance:
- Public demo URL works.
- No secret values exposed.
- Both locales and inquiry flow verified in production.

## 9. Suggested Scripts

Use scripts compatible with the selected package versions. Typical examples:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run"
  }
}
```

Do not add a script that references a tool not installed in the project.

## 10. AI Agent Reporting Format

At the end of each milestone, report:

```text
Milestone:
Status: PASS / BLOCKED / IN PROGRESS

Implemented:
- ...

Verification:
- Lint:
- Typecheck:
- Tests:
- Build:
- Responsive review:

Known issues:
- ...

Files changed:
- ...

Next milestone:
- ...
```

Never report PASS if a required check was skipped or failed.
