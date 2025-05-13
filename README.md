# 🎨 Etch‑a‑Sketch

A lightweight, vanilla‑JavaScript recreation of the classic Etch‑a‑Sketch toy.
Draw on a dynamic grid, switch between **hover** and **click** modes, fade your strokes with an **opacity** toggle, and reset the canvas to any size up to 100 × 100, all in the browser.

---

## Demo

Available on [https://kzeen.github.io/Etch-a-Sketch/](https://kzeen.github.io/Etch-a-Sketch/)

---

## Features

| Category           | Details                                                                             |
| ------------------ | ----------------------------------------------------------------------------------- |
| **Dynamic Grid**   | Generates an adjustable grid (default **16×16**, up to **100×100**) entirely in JS. |
| **Color Palette**  | 11 preset colors + a **Random** option that picks a fresh hex every stroke.         |
| **Drawing Modes**  | **Hover** (paint while moving) or **Click** (paint on click). Toggle instantly.     |
| **Opacity Fade**   | Optional mode that reduces a cell’s opacity by 0.1 each time it’s painted.          |
| **Reset & Resize** | “Reset Grid” clears everything and lets you enter a new dimension.                  |
| **Pure Vanilla**   | No dependencies, no build step, just open `index.html`.                             |

---

## Usage Guide

1. **Pick a color** in the side menu. Choose **Random** for rainbow strokes.
2. Select a **drawing mode**:

    - **Hover** – paint while moving over the grid.
    - **Click** – paint only on mouse down / touch.

3. Toggle **Decrease Opacity** to build layers or shading. Each pass darkens the cell.
4. Hit **Reset Grid** to wipe everything. You’ll be prompted for a new grid size (1–100).

> **Tip:** The first color square (red) is selected by default every time you load or reset.

---

## Tech Stack

-   **HTML5** – semantic markup
-   **CSS3** – Flexbox layout, custom palette, keyframe animation
-   **JavaScript (ES6+)** – DOM manipulation & event handling

No external libraries / frameworks — perfect for learning or demonstrating core front‑end concepts.

---

## Roadmap / Ideas

-   ✅ **Current:** basic drawing, opacity mode, random colors
-   ⏩ **Planned:**

    -   Save / export canvas as PNG
    -   Touch gesture optimizations
    -   Keyboard shortcuts (e.g., `R` to reset, `O` to toggle opacity)
    -   Dark‑mode theme switch

---

## Acknowledgements

-   Inspired by [The Odin Project](https://www.theodinproject.com/) “Etch‑a‑Sketch” assignment.
-   Random‑color gradient animation adapted from various CodePen snippets.
-   Pixel‑perfect nostalgia powered by your browser. ✨
