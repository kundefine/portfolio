# Design System Documentation: The Hyper-Space Architect

## 1. Overview & Creative North Star
**Creative North Star: The Kinetic Laboratory**

This design system is built to transform a software engineer’s portfolio from a static resume into a high-fidelity digital terminal. We are moving away from the "flat" web. The goal is to create an environment that feels like a sophisticated HUD (Heads-Up Display) or a high-end IDE. 

We achieve an "Editorial High-Tech" look by breaking the traditional grid. We use intentional asymmetry—such as overlapping project cards and offset typography—to create a sense of motion and depth. This isn't just about showing work; it’s about demonstrating a mastery of digital space. Through the use of glassmorphism and tiered tonal surfaces, the interface should feel like layers of data floating in a deep-space void.

---

## 2. Colors
Our palette is anchored in the abyss. We use deep, charcoal-slates to provide a canvas where light and data can truly pop.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or layout boundaries. 
Structure must be achieved through:
*   **Tonal Shifts:** Transitioning from `background` (#060e20) to `surface_container_low` (#091328).
*   **Negative Space:** Using the Spacing Scale to let elements breathe.
*   **Light Spills:** Using subtle gradients to imply a boundary without a hard stroke.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack. The deeper the element's function (like a code snippet), the lower it sits in the "well."
*   **Base:** `surface` (#060e20) for the main viewport.
*   **Sections:** Use `surface_container_low` for large content blocks.
*   **Cards/Elements:** Use `surface_container_high` (#141f38) to bring interactive elements toward the user.

### The "Glass & Gradient" Rule
To achieve a signature look, floating elements (like Navigation Bars or Modals) must use Glassmorphism.
*   **Formula:** `surface_variant` (#192540) at 60% opacity + `backdrop-blur: 20px`.
*   **Signature Textures:** For primary CTAs, do not use flat colors. Apply a subtle linear gradient from `primary` (#8ff5ff) to `primary_container` (#00eefc) at a 135-degree angle to simulate a light source.

---

## 3. Typography
We utilize a high-contrast typographic scale to create an authoritative, editorial feel.

*   **Display & Headlines (Space Grotesk):** This is our "Engineered" voice. Space Grotesk’s geometric terminals feel precise and high-tech. Use `display-lg` for hero statements with tight letter spacing (-0.02em) to create a "blocky" impact.
*   **Body & Labels (Inter):** Inter provides the "Human" balance. It is highly legible and neutral, ensuring that complex technical descriptions remain accessible.
*   **Editorial Layout:** Don't center-align everything. Use `headline-lg` offset to the left, with `body-md` descriptions tucked into the right-hand column of a shifted grid.

---

## 4. Elevation & Depth
Depth in this system is a product of light, not lines.

### The Layering Principle
Instead of a shadow, place a `surface_container_highest` element inside a `surface_container_low` container. This creates a "soft lift" that feels architectural rather than "pasted on."

### Ambient Shadows & Glowing Borders
*   **Ambient Shadows:** For floating elements, use extra-diffused shadows. 
    *   *Shadow Color:* Use `on_surface` (#dee5ff) at 5% opacity.
    *   *Blur:* 40px to 60px.
*   **The "Ghost Border":** If accessibility requires a container boundary, use the `outline_variant` token at 15% opacity. It should be barely visible—a "whisper" of a line.
*   **Glowing Accents:** For active states, use a 1px inner-glow using the `primary` token (#8ff5ff). This simulates the edge-lighting found in premium hardware.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`). `xl` roundedness. No border. On hover, add a 4px outer glow of `surface_tint`.
*   **Secondary:** Ghost style. No fill. 1px "Ghost Border" (`outline_variant` at 20%). On hover, fill with `surface_bright` at 10% opacity.
*   **Tertiary:** Text only using `primary` color. `label-md` typography, all caps with 0.1em letter spacing.

### Chips (Tech Stack Tags)
*   **Style:** `surface_container_highest` background with `on_surface_variant` text.
*   **Detail:** A 4px circle of `secondary` (#ac89ff) on the left side to denote "Active System" status.

### Input Fields
*   **Style:** `surface_container_lowest` (total black) background. 
*   **Focus State:** The bottom border animates from 0% to 100% width using the `tertiary` (#65afff) color. No full-box stroke.

### Cards (Project Showcase)
*   **Rule:** Forbid divider lines.
*   **Implementation:** Separate the project image from the metadata using a 32px vertical gap. Use `surface_container_high` for the card body. On hover, the card should scale by 1.02% and the "Ghost Border" should increase in opacity to 40%.

### Additional Component: The "Code Terminal"
A specific container for displaying code snippets.
*   **Background:** `surface_container_lowest`.
*   **Detail:** Three window control dots (using `error`, `primary`, and `secondary` at 50% opacity) in the top-left corner to lean into the software engineer aesthetic.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts where text and images overlap slightly to create depth.
*   **Do** use `secondary` (#ac89ff) and `tertiary` (#65afff) for syntax highlighting and small data callouts.
*   **Do** prioritize "Breathing Room." If a section feels crowded, double the padding instead of adding a divider.

### Don't
*   **Don't** use 100% white (#FFFFFF). Always use `on_surface` (#dee5ff) to prevent "retina burn" on dark backgrounds.
*   **Don't** use standard drop shadows (Black with 25% opacity). They look "muddy" on slate backgrounds.
*   **Don't** use sharp 0px corners. Even the most "technical" elements should have at least the `sm` (0.25rem) radius to feel premium.