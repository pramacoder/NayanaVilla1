# Product Requirements Document (PRD)
## Nayana Villa — Luxury Tropical Villa Website

- **Version:** 1.0
- **Status:** Initial product specification
- **Product type:** Responsive property/hospitality website
- **Brand:** Nayana Villa (fictional)
- **Languages:** English (`en`) and Indonesian (`id`)
- **Primary market:** Indonesia and international travelers
- **MVP model:** Property information + booking inquiry

---

## 1. Product Overview

Nayana Villa is a fictional boutique luxury villa concept in Ubud, Bali. The website demonstrates how a property business can present its identity, accommodation, facilities, gallery, and location through a polished digital experience.

The website also provides a booking inquiry form that prepares a message for WhatsApp. It does not provide real-time availability, payment processing, or confirmed reservations.

### Tagline
**Where Nature Meets Serenity.**

### Product statement
A calm, premium, bilingual digital presence that helps prospective guests discover the property and contact its representative.

## 2. Background and Problem

Potential guests often need to gather property information from multiple sources. A dedicated website can centralize:
- Property identity and story.
- Accommodation types and illustrative details.
- Facilities and experiences.
- Property photography.
- Location information.
- Contact and inquiry instructions.

The demo should show a property owner how a professional website can improve information clarity and make inquiries easier.

## 3. Goals

### 3.1 Business goals
1. Demonstrate professional website development for property and hospitality businesses.
2. Present property information in a structured and attractive way.
3. Make it easy for visitors to submit an inquiry.
4. Provide a reusable foundation for future property website projects.

### 3.2 User goals
1. Understand the property's concept.
2. Browse accommodation options.
3. Review facilities and gallery images.
4. Find location and contact information.
5. Submit an inquiry in their preferred language.

### 3.3 Portfolio goals
Demonstrate:
- UI/UX design and responsive implementation.
- Next.js and TypeScript development.
- Reusable component architecture.
- Bilingual localization.
- Form validation and URL generation.
- Accessibility and SEO fundamentals.
- Deployment and project documentation.

## 4. Non-Goals

The MVP does not include:
- Real-time room availability.
- A guaranteed or instant booking confirmation.
- Online payment or payment gateway.
- Guest accounts.
- Admin dashboard.
- Database-backed reservation management.
- Channel manager integration with OTA platforms.
- Property management, tenant management, or staff scheduling.

These may be considered in later portfolio projects or a separately scoped client project.

## 5. Target Users and Personas

### Persona A — International Traveler
- Prefers English.
- Wants clear property information and attractive photography.
- Needs accommodation capacity, facilities, and location details.
- Wants a straightforward way to ask about dates and rates.

### Persona B — Domestic Traveler
- Prefers Bahasa Indonesia.
- Wants clear information about rooms, facilities, policies, and contact.
- May prefer WhatsApp communication.

### Persona C — Couple or Leisure Traveler
- Looks for a peaceful, premium stay.
- Values visual presentation, privacy information, and experience details.

### Persona D — Family Traveler
- Needs guest capacity, bedroom details, and relevant facilities.
- Needs to understand whether the accommodation suits their group.

### Persona E — Property Owner (portfolio evaluator)
- Wants to see how a website could represent their property.
- Evaluates visual quality, mobile usability, inquiry flow, and professionalism.

## 6. Scope and Priorities

### P0 — Must Have (MVP)
- Responsive global layout.
- Homepage.
- About page/section.
- Accommodation listing.
- Accommodation detail page.
- Facilities page.
- Gallery with lightbox.
- Location page.
- Contact page.
- Booking inquiry page/form.
- English and Indonesian localization.
- Language switcher.
- Form validation.
- WhatsApp message generation.
- SEO metadata and sitemap.
- Accessible navigation and form controls.

### P1 — Should Have
- Gallery category filtering.
- Map embed or clearly marked illustrative map.
- Subtle motion and image reveal.
- Custom not-found page.
- Privacy notice.
- Shareable Open Graph metadata.
- Analytics integration only if privacy requirements are addressed.

### P2 — Later
- CMS.
- Database-backed inquiry storage.
- Admin dashboard.
- Availability calendar.
- Email notification.
- Full booking engine.
- Payment integration.

## 7. Sitemap and Information Architecture

```text
/
├── /[locale]
│   ├── /                  Homepage
│   ├── /about             About the Villa
│   ├── /accommodation     Accommodation listing
│   │   └── /[slug]        Accommodation detail
│   ├── /facilities        Facilities and experiences
│   ├── /gallery           Photo gallery
│   ├── /location          Location information
│   ├── /contact           Contact information
│   └── /booking           Booking inquiry
```

Locales:
- `/en/...`
- `/id/...`

The implementation may use locale-aware routing. Ensure the root route redirects to the default locale or presents a deliberate language selection experience.

### Main navigation
- Home
- About
- Stay / Accommodation
- Experience / Facilities
- Gallery
- Location
- Contact
- Book Your Stay (primary CTA)

### Footer
- Brand and short description.
- Main navigation.
- Contact details (fictional demo details).
- Social links only when valid demo destinations are configured.
- Location label.
- Language switcher.
- Copyright and demo disclaimer where appropriate.

## 8. Functional Requirements

### FR-01 — Homepage
The homepage must present the property brand and guide visitors to key content.

Required sections:
1. Hero image, brand statement, and CTA.
2. Short introduction.
3. Property philosophy or story.
4. Featured accommodation.
5. Experience/facilities highlights.
6. Gallery preview.
7. Location preview.
8. Final booking CTA.

Acceptance criteria:
- Hero and primary CTA are visible without confusing layout.
- All section links navigate to valid destinations.
- Content is available in both locales.
- Layout works at mobile, tablet, and desktop widths.
- Images have appropriate alternative text or empty alt when decorative.

### FR-02 — About
Present the fictional property's story, design philosophy, and hospitality concept.

Acceptance criteria:
- Clear page heading and structured content.
- No unsubstantiated real-world claims.
- Localized content.
- CTA to accommodation or inquiry.

### FR-03 — Accommodation Listing
Display accommodation types as cards or editorial list items.

Each accommodation record should support:
- Slug.
- Localized name and description.
- Cover image.
- Image gallery references.
- Maximum guest capacity.
- Bedroom and bathroom counts.
- Area (illustrative).
- Amenities.
- Indicative price (optional and clearly labeled as demo).
- Featured flag.

Acceptance criteria:
- Each item links to its detail page.
- Data is sourced from a typed content file, not duplicated in page markup.
- All values are identified as illustrative demo data where relevant.

### FR-04 — Accommodation Detail
Display:
- Accommodation name.
- Image gallery.
- Description.
- Capacity.
- Bedroom/bathroom information.
- Amenities.
- Illustrative price or “contact for rates”.
- Booking inquiry CTA.

Acceptance criteria:
- Unknown slugs show a proper not-found state.
- CTA carries the selected accommodation into the inquiry form where practical.
- No availability is represented as live unless a real availability source is implemented.

### FR-05 — Facilities and Experiences
Group amenities into clear categories, for example:
- In-villa comfort.
- Outdoor spaces.
- Guest services.
- Nearby experiences (only if clearly presented as illustrative).

Acceptance criteria:
- Facilities are represented consistently.
- Avoid claims that imply a real operating property.

### FR-06 — Gallery
Support:
- Responsive image grid.
- Category labels or filters.
- Lightbox.
- Keyboard close/navigation where supported.
- Descriptive alt text.

Acceptance criteria:
- Images load without broken states.
- Lightbox can be closed using a visible control and Escape key.
- Controls have accessible labels.
- Category filters work and provide an empty state if needed.

### FR-07 — Location
Show:
- Fictional location description.
- Area highlights written as general illustrative copy.
- Map or map placeholder clearly identified as illustrative.
- Directions CTA only when a valid destination URL exists.

Acceptance criteria:
- Do not publish invented exact street addresses or coordinates.
- Do not imply the fictional property can be visited.
- Location content is localized.

### FR-08 — Contact
Show configured demo contact channels and a contact CTA.

Acceptance criteria:
- No private real contact details.
- Links are valid or intentionally disabled with explanatory text.
- Contact information is localized where relevant.

### FR-09 — Booking Inquiry
Fields:
- Check-in date.
- Check-out date.
- Guest count.
- Preferred accommodation (optional or preselected).
- Full name.
- Email.
- WhatsApp/contact number (optional if WhatsApp message can be sent from the visitor's device).
- Additional message.
- Privacy acknowledgement.

Validation:
- Check-in is not in the past.
- Check-out is after check-in.
- Guest count is at least one and within any configured maximum if a unit is selected.
- Name is required.
- Email is required and valid.
- Input lengths are bounded.
- Privacy acknowledgement is required before preparing the inquiry.

Submission flow:
1. Validate the form.
2. Display a clear summary.
3. Build a localized WhatsApp message.
4. Encode the message safely.
5. Open the configured WhatsApp destination.
6. Explain that the visitor must press Send in WhatsApp.
7. Do not claim the reservation is confirmed.

Acceptance criteria:
- Invalid fields show understandable errors.
- Valid data produces a correctly formatted message.
- The WhatsApp number is configured through an environment variable or safe site configuration.
- If no WhatsApp number is configured, show a graceful fallback rather than a broken link.
- No sensitive form data is sent to analytics.

### FR-10 — Localization
- English is the default locale.
- Indonesian is fully supported.
- Language switcher preserves the equivalent current page when possible.
- Navigation, buttons, form labels, validation messages, metadata, and footer are localized.
- No mixed-language UI strings.

### FR-11 — Responsive Navigation
- Desktop navigation is clear and keyboard accessible.
- Mobile menu opens and closes reliably.
- Escape closes the mobile menu.
- Focus is managed appropriately when menu behavior requires it.
- CTA remains discoverable without obstructing content.

### FR-12 — SEO
- Unique title and description per page and locale.
- Canonical and alternate language metadata where supported.
- Open Graph metadata.
- `sitemap.xml`.
- `robots.txt`.
- Semantic heading hierarchy.
- Descriptive image alt text.
- Clean, readable URLs.

## 9. Non-Functional Requirements

### Performance
- Optimize images and use responsive image sizes.
- Avoid unnecessary client-side JavaScript.
- Lazy-load below-the-fold imagery.
- Prevent layout shift by specifying image dimensions or aspect ratios.
- Avoid heavy animation libraries/features unless justified.

### Accessibility
- Aim for WCAG 2.2 AA practices.
- Keyboard-accessible navigation and controls.
- Visible focus indicators.
- Adequate color contrast.
- Form labels and understandable errors.
- Reduced-motion support.
- Correct heading hierarchy and landmarks.

### Maintainability
- Reusable components.
- Strict TypeScript.
- Centralized content and translations.
- Clear naming and folder conventions.
- Documented setup and environment variables.

### Privacy
- Collect only information needed for an inquiry.
- Explain that the form prepares a WhatsApp message.
- Do not store form submissions in the MVP.
- Do not log personal inquiry data unnecessarily.

## 10. Content and Demo Data

All property content is fictional. The content guide is in `CONTENT_GUIDE.md`.

Do not invent:
- Real guest reviews.
- Ratings.
- Awards.
- Certifications.
- Real occupancy or booking statistics.
- Exact addresses.
- Live availability.

Use licensed or original images and maintain an asset source/credit list.

## 11. Success Metrics

Portfolio quality indicators:
- All P0 requirements implemented.
- All primary user flows pass testing.
- No broken navigation or form interactions.
- Both locales are complete.
- Responsive layout verified at defined viewport widths.
- Production build succeeds.
- Lighthouse target: Performance 85+, Accessibility 90+, Best Practices 90+, SEO 90+ (targets, not guarantees).
- Demo can be explained and presented to a prospective property client.

## 12. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Unlicensed imagery | Use permitted assets and track sources |
| Scope creep into full booking system | Keep MVP inquiry-only |
| Incomplete translations | Maintain translation parity checks |
| Fake property claims | Mark all property content as fictional |
| WhatsApp destination missing | Add environment validation and fallback UI |
| Poor mobile experience | Mobile-first implementation and viewport testing |
| Overengineering | No database or admin dashboard in MVP |

## 13. Definition of Product Completion

Portfolio 01 is complete when:
- All P0 pages and functions are implemented.
- Both languages work consistently.
- Inquiry validation and WhatsApp message generation work.
- All primary links and controls work.
- Mobile/tablet/desktop layouts are checked.
- Accessibility and SEO basics are verified.
- Production build passes.
- Documentation and demo disclaimer are complete.
