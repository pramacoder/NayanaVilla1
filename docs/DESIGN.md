# Design System — Nayana Villa
## Shoreline Calm

- **Version:** 1.1
- **Brand:** Nayana Villa (fictional)
- **Design direction:** Shoreline Calm / Coastal Elegance
- **Primary language:** English
- **Secondary language:** Indonesian

---

## 1. Design Vision

Create a calm, premium boutique hospitality experience inspired by coastal architecture, ocean breezes, and relaxing shorelines.

The design should feel:
- Breezy.
- Fresh.
- Elegant.
- Calm.
- Editorial.
- Premium without being ostentatious.

The website should use photography as a major storytelling element. Layout, typography, and whitespace should support the images rather than compete with them.

## 2. Visual References and Principles

Use visual references such as:
- Coastal villa architecture and ocean views.
- Clean white stone, light timber, and breezy linens.
- Boutique resort editorial websites.
- Premium travel and hospitality photography.

Do not copy another website's layout or brand assets. References are for mood and design direction only.

### Principles
1. Photography-led storytelling.
2. Generous whitespace.
3. Strong typographic hierarchy.
4. Restrained color usage.
5. Consistent grid and spacing.
6. Subtle motion.
7. Mobile-first usability.
8. Clear and accessible calls to action.

## 3. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `teal-300` | `#A2B8B8` | Primary structural background (headers, search bars), muted accents |
| `blue-600` | `#006BB3` | Primary buttons, strong accents, active states |
| `blue-500` | `#006DFF` | Interactive highlights, links |
| `indigo-600` | `#4E37B6` | Secondary vibrant accent |
| `white` | `#FFFFFF` | Main page background, card backgrounds |
| `gray-100` | `#EEEEEE` | Secondary background, subtle borders/dividers |
| `gray-600` | `#4B4B4B` | Secondary text, muted details |
| `gray-800` | `#212121` | Main body text and headings |
| `gray-900` | `#111111` | Deep contrast elements |
| `black` | `#000000` | Deepest contrast, strict typography |

### Color rules
- Crisp white (`#FFFFFF`) is the dominant page background.
- Muted teal (`#A2B8B8`) is used for major UI panels like headers and booking bars to create a calm, shoreline feel.
- Ocean blues (`#006BB3`, `#006DFF`) are reserved for important actions, links, and contrast.
- Use dark gray (`#212121` or `#4B4B4B`) for readable body text instead of stark black where possible.
- Verify actual contrast ratios; do not assume a palette is automatically accessible (especially white text on `#A2B8B8`).
- Avoid introducing extra colors without documenting their purpose.

## 4. Typography

### Font pairing
- Display/headings: Cormorant Garamond.
- Body/UI: DM Sans.

### Hierarchy
| Token | Suggested desktop size | Usage |
|---|---:|---|
| Display | 64–88 px | Hero headline |
| H1 | 48–64 px | Main page title |
| H2 | 36–48 px | Section heading |
| H3 | 24–32 px | Card or subsection heading |
| Body Large | 18–20 px | Introductory copy |
| Body | 15–17 px | Main text |
| Small | 12–14 px | Captions and labels |

Use responsive `clamp()` values rather than fixed sizes where appropriate. Maintain comfortable line lengths and line heights.

## 5. Layout and Grid

### Content widths
- Maximum content width: 1280 px.
- Reading width: 680–760 px.
- Desktop horizontal padding: 64 px.
- Tablet horizontal padding: 32 px.
- Mobile horizontal padding: 20 px.

### Spacing scale
| Token | Value |
|---|---:|
| `space-1` | 4 px |
| `space-2` | 8 px |
| `space-4` | 16 px |
| `space-6` | 24 px |
| `space-8` | 32 px |
| `space-12` | 48 px |
| `space-16` | 64 px |
| `space-24` | 96 px |
| `space-30` | 120 px |

Typical section spacing:
- Desktop: 96–120 px.
- Tablet: 72–96 px.
- Mobile: 56–72 px.

Use a consistent grid. Avoid arbitrary widths and inconsistent alignment between pages.

## 6. Photography and Image Treatment

### Desired image direction
- Coastal views and shoreline elements.
- Clean villa architecture with natural sunlight.
- White stone, light timber, and poolside aesthetics.
- Calm bedrooms with bright, airy feel.
- Pools and outdoor spaces.
- Editorial hospitality photography.

### Image rules
- Use only images with a valid license or permission.
- Store local image assets in `public/images/`.
- Maintain an asset manifest with source, license, and credit.
- Use descriptive filenames.
- Define aspect ratios to prevent layout shift.
- Use `next/image` where suitable.
- Provide useful alt text for informative images.
- Use empty alt text for purely decorative images.
- Avoid stretching or excessive filters.
- Keep a consistent photographic tone.

### Suggested aspect ratios
| Use | Ratio |
|---|---|
| Hero | 16:9 or wide cinematic |
| Accommodation card | 4:5 or 3:2 |
| Gallery | Mix of 4:5, 3:2, and 1:1 |
| Editorial split section | 4:5 or 3:2 |

## 7. Component Standards

### Navigation
- Minimal desktop navigation with a `teal-300` background or transparent over hero.
- Brand mark is clear and not oversized.
- Active page state is subtle.
- Mobile navigation has a clear open/close state.
- Book CTA is visually distinct.

### Buttons
Primary:
- `white` background with `gray-800` text (for buttons inside the `teal-300` panels).
- `blue-600` background with `white` text (for main content areas).
- Clear action label.
- Visible hover, focus, active, and disabled states.

Secondary:
- Transparent or `gray-100` background.
- `gray-800` border/text.
- Same height and typography as primary.

Avoid button styles that change unpredictably between pages.

### Cards
- Use restrained borders (e.g., `gray-100`) or subtle separation.
- Let photography and typography define hierarchy.
- Avoid excessive shadows and rounded corners (use slightly rounded corners as seen in the mockup).
- Maintain consistent image ratios and internal spacing.

### Forms
- Visible labels.
- Muted teal (`teal-300`) background for main search/booking forms.
- Clear required/optional states.
- Helpful validation text.
- Keyboard focus states.
- Adequate touch target sizes.
- Clear submit and error states.

### Footer
- `gray-900` or `teal-300` background.
- `white` text.
- Consistent link spacing.
- Contact and navigation grouped logically.
- Include fictional demo disclosure where appropriate.

## 8. Motion and Interaction

Use motion to clarify state and add refinement, not to distract.

Suggested:
- 200–300 ms hover transitions.
- 250–400 ms menu transitions.
- 300–500 ms subtle reveal transitions.
- Gentle image hover treatment.

Requirements:
- Respect `prefers-reduced-motion`.
- Do not hijack scrolling.
- Do not make essential content dependent on animation.
- Avoid heavy parallax.
- Ensure animated content remains readable.

## 9. Responsive Behavior

Test at minimum:
- Mobile: 375 px and 390 px.
- Tablet: 768 px.
- Desktop: 1440 px.

Responsive rules:
- Stack editorial columns on small screens.
- Avoid horizontal overflow.
- Keep body text readable.
- Make navigation usable by touch and keyboard.
- Ensure booking CTA is discoverable.
- Use responsive image crops intentionally.
- Do not simply shrink the desktop layout.

## 10. Accessibility

- Use semantic landmarks.
- Use one clear H1 per page.
- Preserve heading order.
- Provide visible focus indicators.
- Ensure keyboard access.
- Label form inputs.
- Announce validation errors appropriately.
- Use descriptive link text.
- Check color contrast (ensure text on `teal-300` backgrounds is readable).
- Support reduced motion.
- Ensure lightbox controls are accessible.

## 11. Design Review Checklist

- [ ] All pages use the documented palette (Shoreline Calm).
- [ ] Typography hierarchy is consistent.
- [ ] Section spacing is consistent.
- [ ] Navigation and footer are consistent.
- [ ] Buttons have consistent states.
- [ ] Images use intentional crops and ratios.
- [ ] Mobile layouts are purpose-designed.
- [ ] No horizontal overflow.
- [ ] Focus states are visible.
- [ ] Motion respects reduced-motion preferences.
- [ ] No decorative element harms readability.