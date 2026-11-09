# Pixel Labs Clone

A pixel-perfect clone of [spiritual-pixel-craft-labs.base44.app](https://spiritual-pixel-craft-labs.base44.app) — a high-converting agency website designed for influencer marketing businesses, built with React, TypeScript, Tailwind CSS, Framer Motion, and Radix UI.

## Features & Highlights

- **Pixel-Perfect Fidelity**: Exact typography (Manrope, Inter, IBM Plex Mono), spacing, borders, shadows, and color tokens (`hsl(18 100% 50%)` vibrant orange accent, `#0A0A0A` dark contrast).
- **Exact Animations**:
  - **Scroll Progress Bar**: Real-time spring-physics progress bar anchored at the top of the viewport (`useScroll` + `useSpring`).
  - **Scroll Reveals**: Smooth staggered reveals on view entry (`whileInView`, `duration: 0.75s`, custom cubic-bezier easing `[0.16, 1, 0.3, 1]`).
  - **Sticky Stacking Cards (Benefits)**: 6 benefit cards that smoothly stack on top of each other as you scroll down with calculated top offsets and z-indexes.
  - **Interactive 3D Perspective Tilt (CTA)**: Real-time 3D rotation (`perspective: 1300`, `rotateX`, `y`, `opacity`) linked to scroll progress.
  - **Infinite Marquee Ticker**: Seamless looping banner (`LAUNCH FAST • CONVERT HARDER • PIXEL LABS •`) with dual-mode rendering (scroll-linked on desktop, CSS continuous loop on mobile).
  - **Mobile Sticky Scroll Transitions**: Scroll-driven sticky card morphing and horizontal step carousel on mobile viewports.
  - **Animated Accordion (FAQ)**: Radix UI accordion with smooth height animation and rotating `+` icon that transitions 45 degrees to `×`.
  - **Interactive Booking Form**: Multi-step lead form with selectable chips, validation, and submission confirmation state.
- **Routing & Subpages**: Complete client-side routing for Home (`/`), Privacy Policy (`/privacy`), Terms of Service (`/terms`), and 404 Not Found (`*`).

## Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Primitives**: Radix UI Accordion
- **Icons**: Lucide React
- **Routing**: React Router v6

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or pnpm / yarn

### Installation

```bash
git clone https://github.com/kiragamingofficial95-cmd/pixel-labs-clone.git
cd pixel-labs-clone
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```
