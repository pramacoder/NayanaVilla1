# Testing and Quality Assurance — Nayana Villa

- **Version:** 1.0
- **Scope:** Portfolio 01 MVP

---

## 1. Testing Objectives

Verify that the website:
- Works across supported viewport sizes.
- Supports English and Indonesian.
- Has functional navigation and gallery interactions.
- Validates booking inquiries correctly.
- Generates a correctly encoded WhatsApp inquiry.
- Meets baseline accessibility, SEO, and performance expectations.
- Can be built and deployed reliably.

## 2. Test Levels

### Unit tests
Test isolated functions and validation:
- Inquiry schema.
- Date validation.
- WhatsApp message builder.
- Locale/content utilities.
- Accommodation data helpers.

### Component tests
Test:
- Language switcher.
- Mobile navigation.
- Inquiry form.
- Gallery filter.
- Lightbox controls.
- Error and success states.

### Integration tests
Test:
- Inquiry form validation to summary.
- Summary to WhatsApp URL generation.
- Locale routing and page navigation.
- Accommodation card to detail page.

### End-to-end tests
Use Playwright or another suitable browser automation tool if available:
- Homepage to accommodation detail.
- Homepage to booking inquiry.
- English/Indonesian switching.
- Mobile navigation.
- Gallery interaction.
- Invalid and valid inquiry submission.

## 3. Viewport Matrix

| Device class | Width | Required |
|---|---:|---|
| Small mobile | 375 px | Yes |
| Standard mobile | 390 px | Yes |
| Tablet | 768 px | Yes |
| Desktop | 1440 px | Yes |

Check:
- No horizontal overflow.
- No clipped text.
- Images crop intentionally.
- Buttons and links are usable.
- Navigation does not overlap content.
- Forms fit the viewport.

## 4. Functional Test Cases

### Navigation
- [ ] Logo returns to the localized homepage.
- [ ] Every navigation item opens the correct page.
- [ ] Active state is correct.
- [ ] Mobile menu opens and closes.
- [ ] Escape closes the mobile menu.
- [ ] Focus remains usable and visible.

### Localization
- [ ] English pages render.
- [ ] Indonesian pages render.
- [ ] Language switcher changes locale.
- [ ] Language switcher preserves equivalent page when possible.
- [ ] No missing translation keys.
- [ ] Form errors and metadata are localized.

### Accommodation
- [ ] Listing displays all configured items.
- [ ] Cards navigate to the correct slug.
- [ ] Detail pages display correct data.
- [ ] Invalid slug displays not-found state.
- [ ] Inquiry CTA carries selected accommodation when supported.

### Gallery
- [ ] Images display correctly.
- [ ] Filters return the expected category.
- [ ] Lightbox opens.
- [ ] Lightbox closes with close control.
- [ ] Escape closes lightbox.
- [ ] Keyboard navigation works where implemented.
- [ ] Informative images have meaningful alt text.

### Booking inquiry — invalid cases
- [ ] Missing name is rejected.
- [ ] Invalid email is rejected.
- [ ] Missing check-in is rejected.
- [ ] Past check-in is rejected.
- [ ] Check-out equal to check-in is rejected.
- [ ] Check-out before check-in is rejected.
- [ ] Guest count below one is rejected.
- [ ] Guest count above configured limit is rejected.
- [ ] Missing privacy acknowledgement is rejected.
- [ ] Excessively long optional message is rejected.

### Booking inquiry — valid cases
- [ ] Valid form can proceed to summary.
- [ ] Summary matches entered values.
- [ ] Message includes dates, guest count, name, and selected accommodation where relevant.
- [ ] Special characters are encoded correctly.
- [ ] WhatsApp destination is configured correctly.
- [ ] Missing WhatsApp configuration displays a fallback.
- [ ] UI clearly states that the visitor must manually send the message.
- [ ] UI does not claim booking confirmation.

## 5. Accessibility Checklist

- [ ] Semantic landmarks are present.
- [ ] One clear H1 exists per page.
- [ ] Heading levels are logical.
- [ ] All interactive controls work by keyboard.
- [ ] Focus indicators are visible.
- [ ] Form controls have labels.
- [ ] Errors are associated with relevant fields.
- [ ] Color contrast is checked.
- [ ] Images have appropriate alt attributes.
- [ ] Lightbox has accessible labels and close behavior.
- [ ] Reduced-motion preference is respected.
- [ ] Touch targets are comfortably usable.

Aim for WCAG 2.2 AA practices.

## 6. SEO Checklist

- [ ] Unique title for each page and locale.
- [ ] Unique meta description.
- [ ] Canonical URL configured correctly.
- [ ] Alternate language metadata configured where appropriate.
- [ ] Open Graph metadata.
- [ ] Sitemap generated.
- [ ] Robots file generated.
- [ ] Descriptive URL structure.
- [ ] Semantic HTML.
- [ ] Image alt text reviewed.
- [ ] No accidental `noindex` on public portfolio pages.

## 7. Performance Checklist

- [ ] Hero image optimized.
- [ ] Below-the-fold images lazy-loaded.
- [ ] Image dimensions/aspect ratios defined.
- [ ] No unnecessary client components.
- [ ] No unnecessary third-party scripts.
- [ ] Fonts loaded efficiently.
- [ ] Layout shifts reviewed.
- [ ] Production build tested.

### Lighthouse targets
| Category | Target |
|---|---:|
| Performance | 85+ |
| Accessibility | 90+ |
| Best Practices | 90+ |
| SEO | 90+ |

These are targets for review, not guaranteed scores. Record actual scores and explain any remaining issues.

## 8. Release Gate

Do not mark the project release-ready until:
- All P0 PRD requirements pass.
- Primary user flows pass.
- Both locales are reviewed.
- No critical broken links remain.
- No known critical accessibility issue remains.
- Production build succeeds.
- Environment variables are documented.
- Demo disclaimer and asset credits are present.
- Production deployment is manually verified.

## 9. Test Report Template

```text
Test run date:
Commit/version:
Environment:

Unit tests:
Component tests:
Integration tests:
E2E tests:

Viewport review:
- 375 px:
- 390 px:
- 768 px:
- 1440 px:

Accessibility:
SEO:
Lighthouse:
Production build:

Bugs found:
Known limitations:
Release decision: PASS / BLOCKED
```
