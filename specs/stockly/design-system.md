# Stockly Design System

Based on the Stockly landing page mockup at https://stockly-30f7fc.webflow.io/

---

## Brand Identity

**Name:** stockly (lowercase)
**Tagline:** "Inventory at the speed of speech"
**Alternative Tagline:** "Speech to Sheets"

**Brand Personality:**
- Modern & Professional
- Tech-Forward
- Minimalist & Clean
- Approachable but Sophisticated

---

## Color Palette

### Primary Colors
- **Background Dark:** #000000 or very dark navy (~#0A0B0F)
- **Text Light:** #FFFFFF (white)
- **Text Secondary:** #A0A0A0 (light gray)

### Accent Colors
- **Primary CTA:** Bright accent color (likely blue/purple gradient or solid bright color)
- **Success:** Green tones for completed states
- **Warning:** Amber for alerts/low stock
- **Error:** Red for errors
- **Info:** Blue for informational elements

### UI Element Colors
- **Card Background:** Slightly lighter than page background (~#1A1B1F)
- **Border/Divider:** Subtle gray (#2A2B2F)
- **Hover State:** Lighter shade or accent color overlay

---

## Typography

### Font Stack
- **Primary Font:** Modern sans-serif (likely Inter, SF Pro, or similar)
- **Fallback:** system-ui, -apple-system, sans-serif

### Type Scale
- **H1 (Hero):** ~48-64px, bold/extrabold, tight line-height
  - Example: "Inventory at the speed of speech."
- **H2 (Section Headers):** ~32-40px, bold, medium line-height
  - Example: "The problem you know too well"
- **H3 (Subsection):** ~24-28px, semibold
  - Example: "Inventory Takes Too Long"
- **Body Large:** ~18-20px, regular, comfortable line-height (1.6)
- **Body:** ~16px, regular, line-height 1.5
- **Small/Caption:** ~14px, regular or medium
- **Label/Tag:** ~12px, uppercase, semibold, letter-spacing

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800 (for hero text)

---

## Spacing System

Based on 8px base unit:

- **xs:** 4px (0.5rem)
- **sm:** 8px (1rem)
- **md:** 16px (2rem)
- **lg:** 24px (3rem)
- **xl:** 32px (4rem)
- **2xl:** 48px (6rem)
- **3xl:** 64px (8rem)
- **4xl:** 96px (12rem)

### Section Spacing
- Between major sections: 80-120px (responsive)
- Within sections: 40-60px
- Between elements: 16-24px
- Tight groupings: 8-12px

### Container
- **Max Width:** ~1200-1280px
- **Padding:** 20px mobile, 40px tablet+

---

## Component Specifications

### Navigation Bar
- **Height:** 64-80px
- **Position:** Sticky top
- **Logo:** "stockly." lowercase, left-aligned
- **Links:** Horizontal, right-aligned, ~16px text
- **CTA Button:** "Get in touch" styled as primary button
- **Background:** Dark with subtle blur/transparency
- **Border:** Subtle bottom border

### Buttons

#### Primary CTA
- **Padding:** 12px 24px (or 14px 32px for hero)
- **Border Radius:** 6-8px
- **Font:** Semibold, 16px
- **Background:** Gradient or solid accent color
- **Hover:** Slight brightness increase, smooth transition
- **Text:** "Get on the waitlist", "Get in touch"

#### Secondary Button
- **Style:** Outline or ghost
- **Padding:** 12px 24px
- **Border:** 1-2px solid
- **Hover:** Fill with subtle background

### Input Fields
- **Height:** 44-48px (touch-friendly)
- **Border Radius:** 6-8px
- **Border:** 1px solid subtle gray
- **Focus:** Accent color border, subtle glow
- **Placeholder:** Light gray text
- **Background:** Slightly lighter than page background

### Cards
- **Background:** Dark card color (#1A1B1F)
- **Border Radius:** 12-16px
- **Padding:** 24-32px
- **Border:** 1px solid very subtle (#2A2B2F) or none
- **Shadow:** Subtle, or rely on border for definition
- **Hover:** Slight lift or brightness increase

### Badges/Tags
- **Text:** 12px, uppercase, semibold, letter-spacing: 0.05em
- **Padding:** 4px 12px
- **Border Radius:** 4px or full pill
- **Background:** Semi-transparent or subtle color
- **Examples:** "Our Pre-Launch Waitlist", "What we're solving"

### Step Indicators (Numbered Circles)
- **Size:** 40-48px diameter
- **Background:** Accent color or subtle gradient
- **Text:** Bold number, white
- **Border:** Optional stroke

### Expandable Feature Cards (Accordion)
- **Collapsed:** Title + icon visible
- **Expanded:** Title + description + image visible
- **Transition:** Smooth height animation (300ms)
- **Indicator:** Chevron or plus/minus icon
- **Spacing:** 16-20px between cards

---

## Layout Patterns

### Hero Section
- **Layout:** Centered content, full-width
- **Vertical Padding:** 80-120px
- **Elements:**
  - Badge at top
  - Large H1 headline
  - Subheadline below
  - Email form (inline input + button)
- **Alignment:** Center

### 3-Column Grid
- **Desktop:** 3 equal columns with gap (24-32px)
- **Tablet:** 2 columns
- **Mobile:** 1 column stack
- **Card Style:** Each column is a card with icon, title, description

### Step-by-Step Process
- **Layout:** Vertical flow or horizontal 3-column
- **Elements:** Numbered circle + step title + description + note
- **Spacing:** Generous vertical space between steps

### Footer CTA
- **Layout:** Centered, similar to hero but shorter
- **Background:** Could be slightly different shade for contrast
- **Elements:** H2 + subheadline + email form

---

## Interactive States

### Hover
- **Buttons:** Brightness +10-15%, smooth transition (200ms)
- **Links:** Underline or color change
- **Cards:** Slight lift (translateY -2px) + shadow increase

### Focus
- **Inputs:** Accent color border + subtle glow
- **Buttons:** Outline with offset for accessibility
- **Links:** Visible focus ring

### Active/Pressed
- **Buttons:** Slight scale down (0.98) or brightness decrease

### Disabled
- **Opacity:** 0.5
- **Cursor:** not-allowed
- **Interactive:** false

### Loading
- **Spinner:** Animated circular spinner
- **Skeleton:** Pulsing gray placeholder
- **Progress:** Loading bar or dots

---

## Mobile Responsive Behavior

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Mobile Adaptations
- **Navigation:** Hamburger menu (likely)
- **3-Column Grids:** Stack to 1 column
- **Font Sizes:** Scale down 10-20%
- **Padding:** Reduce outer padding to 20px
- **Buttons:** Full-width on mobile for CTAs
- **Forms:** Full-width inputs

---

## Animations

### Page Transitions
- **Duration:** 300-400ms
- **Easing:** ease-in-out or custom cubic-bezier

### Scroll Animations
- **Fade In:** Opacity 0 → 1 on scroll into view
- **Slide Up:** translateY(20px) → 0 on scroll
- **Stagger:** Delay between items (50-100ms)

### Microinteractions
- **Button Hover:** Scale 1 → 1.02 or brightness change
- **Card Hover:** Lift (translateY -4px) + shadow
- **Accordion Expand:** Height smooth transition
- **Loading:** Pulse or spin animation

---

## Voice Interface Specific Design

### Microphone Button
- **Size:** Large, 80-120px diameter
- **Position:** Centered on page
- **States:**
  - **Idle:** Neutral color (gray), subtle pulse
  - **Listening:** Active color (red/blue), pulsing animation
  - **Processing:** Spinner or dots animation
  - **Speaking:** Wave animation or pulse
- **Icon:** Microphone SVG, centered
- **Shadow:** Prominent shadow for depth

### Chat Messages
- **User Messages:**
  - Right-aligned
  - Background: Accent color or subtle gray
  - Padding: 12px 16px
  - Border Radius: 16px (speech bubble)
  - Max Width: 70-80%
- **AI Messages:**
  - Left-aligned
  - Background: Darker card color
  - Styling: Same as user but different color
- **Timestamp:** Small text, subtle color, below message
- **Spacing:** 12px between messages

### Example Prompt Chips
- **Style:** Small pill buttons
- **Padding:** 8px 16px
- **Border Radius:** Full pill (999px)
- **Background:** Transparent with border, or subtle fill
- **Hover:** Fill with accent color
- **Text:** 14px, medium weight

---

## Accessibility Considerations

### Color Contrast
- **Text on Dark:** White text (#FFFFFF) on dark background
- **Minimum Contrast:** 4.5:1 for normal text, 3:1 for large text (WCAG AA)

### Focus Indicators
- **Visible:** All interactive elements must have visible focus state
- **Offset:** 2px offset for clarity
- **Color:** High contrast outline

### Touch Targets
- **Minimum Size:** 44x44px for mobile
- **Spacing:** 8px between adjacent touch targets

### Screen Readers
- **ARIA Labels:** All icons and buttons
- **Semantic HTML:** Proper heading hierarchy
- **Alt Text:** All images and icons

---

## Dark Theme Tokens (Tailwind)

```css
/* Backgrounds */
bg-background: #000000 or #0A0B0F
bg-card: #1A1B1F
bg-muted: #2A2B2F

/* Text */
text-foreground: #FFFFFF
text-muted-foreground: #A0A0A0

/* Borders */
border-border: #2A2B2F

/* Accent */
bg-accent: [Bright color - blue/purple]
text-accent-foreground: #FFFFFF
```

---

## Implementation Notes

### Tailwind Config
- Use shadcn/ui color tokens for consistency
- Extend with custom colors if needed
- Configure dark mode as default

### Component Library
- Use shadcn/ui components as base
- Customize with Stockly design specs
- Accordion for feature cards
- Dialog for modals
- Badge for tags

### Fonts
- Install Inter or similar modern sans-serif
- Configure in next.config.js and tailwind.config.ts

---

## Example Component Classes

```tsx
// Hero Headline
className="text-5xl md:text-6xl font-extrabold text-center leading-tight"

// Section Header
className="text-3xl md:text-4xl font-bold text-center mb-12"

// Card
className="bg-card border border-border rounded-2xl p-8"

// Primary Button
className="bg-accent text-accent-foreground font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all"

// Input
className="bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-accent"

// Badge
className="text-xs uppercase font-semibold tracking-wide bg-muted/50 px-3 py-1 rounded"
```
