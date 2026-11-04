# AGENTS.md — Nayana Villa

## Project Context
Nayana Villa is a fictional luxury tropical villa website created as a professional portfolio demonstration. It demonstrates website development capabilities for property owners and hospitality businesses.

- Brand: Nayana Villa
- Tagline: Where Nature Meets Serenity.
- Fictional location: Ubud, Bali, Indonesia
- Primary language: English (`en`)
- Secondary language: Indonesian (`id`)
- Product type: Responsive property and hospitality website
- MVP booking model: Inquiry form that prepares a WhatsApp message; it is not a confirmed reservation engine.

## Mandatory Documentation
Before making changes, read:
1. `README.md`
2. `docs/PRD.md`
3. `docs/DESIGN.md`
4. `docs/IMPLEMENTATION.md`
5. `docs/TESTING.md`
6. `docs/CONTENT_GUIDE.md`

## Technical Standards
- Use Next.js App Router and TypeScript.
- Use Tailwind CSS and reusable React components.
- Use `next-intl` or an equivalent documented localization solution.
- Use Zod for form validation.
- Use `next/image` for local images.
- Keep content and translations separate from presentation components.
- Prefer server components; use client components only when interaction requires them.
- Avoid unnecessary dependencies and premature backend complexity.

## Design Rules
- Follow the Tropical Luxury direction in `docs/DESIGN.md`.
- Use Cormorant Garamond for display headings and DM Sans for body text.
- Use the documented color tokens and spacing scale.
- Use generous whitespace and strong photography.
- Maintain consistent buttons, forms, navigation, cards, and section widths.
- Build mobile-first and verify desktop layouts.
- Avoid generic SaaS styling, excessive gradients, excessive rounded cards, and decorative clutter.

## Internationalization
- Support English and Indonesian on every applicable page.
- Keep translations in centralized message files.
- Do not hardcode translated strings inside reusable UI components.
- The language switcher should preserve the current page when an equivalent localized route exists.
- Localize page metadata and form labels.
- Set English as the default locale.

## Booking Inquiry Rules
- Portfolio 01 is an inquiry website, not a full booking engine.
- Validate check-in, check-out, guest count, name, and email.
- Check-out must be later than check-in; past check-in dates are invalid.
- Generate a URL-encoded WhatsApp message using a configured business number.
- The visitor must manually send the message.
- Never show a reservation as confirmed merely because the inquiry was submitted or WhatsApp was opened.
- Clearly label all availability and pricing as illustrative demo content.

## Content Integrity and Assets
- Nayana Villa is fictional.
- Use simulated property data and clearly identify it as demonstration content where appropriate.
- Do not invent real guest testimonials, awards, certifications, ratings, or business claims.
- Use only images that are licensed, owned, generated, or otherwise permitted for portfolio use.
- Keep image credits and license notes in `docs/CONTENT_GUIDE.md` or a dedicated asset manifest.
- Do not use real people's personal data in demo forms or screenshots.

## Security and Privacy
- Do not commit secrets, API keys, private phone numbers, or credentials.
- Use environment variables for configurable contact details.
- Collect only the minimum information needed for an inquiry.
- Provide a clear privacy notice near the inquiry form.
- Do not log sensitive form data unnecessarily.

## Code Quality
- Use strict TypeScript types.
- Avoid `any` unless justified and documented.
- Avoid duplicated components and monolithic page files.
- Use clear naming conventions.
- Handle loading, empty, error, and success states where applicable.
- Ensure keyboard access, visible focus states, and meaningful labels.
- Do not leave placeholder links or inert controls.

## Development Workflow
1. Inspect the repository before editing.
2. Read the relevant project documentation.
3. Identify the current milestone.
4. State the intended scope before substantial changes.
5. Implement only the agreed milestone.
6. Run linting, type checking, tests, and production build as appropriate.
7. Inspect the UI at mobile, tablet, and desktop widths.
8. Fix discovered issues.
9. Update documentation when implementation decisions change.
10. Report completed work, verification performed, and known limitations.

## Milestone Control
Follow `docs/IMPLEMENTATION.md` in order. Do not silently skip milestones. Do not begin Portfolio 02 or Portfolio 03 while Portfolio 01 is incomplete.

A milestone is complete only when its acceptance criteria are met and verification results are reported.

## Final Principle
Understand the user and business need first. Build a professional, maintainable, accessible, responsive hospitality website. Prioritize business value and user experience over unnecessary technical complexity.
