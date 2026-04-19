# Project Context: VeloGenie Tech Solutions

This document serves as a high-level summary and technical guide for developers working on the VeloGenie codebase. Read this first whenever you are starting a new task or making architectural changes.

---

## 🎯 Project Vision
VeloGenie is a premium web engineering agency specializing in high-performance, dark-themed, glassmorphic digital experiences. The codebase prioritizes **speed**, **visual aesthetics**, and **smooth transitions**.

## 🏗 Core Architecture
- **Framework:** React 19 + Vite.
- **Routing:** React Router 7 (managed in `src/App.jsx`).
- **State Management:** React Context API (`src/context/TransitionContext.jsx`) for global loading/transition states.
- **Animations:** Framer Motion (used for entry animations, layout transitions, and the Preloader).
- **Backend:** Supabase (Client configured in `src/lib/supabase.js`).

## 📂 Key Directory Breakdown
- `src/sections/`: Contains the primary building blocks of the application. Most "pages" are just compositions of these sections (e.g., `Hero`, `Services`, `TechnicalAudit`).
- `src/components/`: Reusable atomic UI elements like `Button`, `Header`, and `Preloader`.
- `src/styles/`: Contains global variables (`GlobalStyles.css`) and modular styles.
- `src/lib/`: Third-party service initializations (currently only Supabase).

## 🛠 Technical Patterns

### 1. Adding a New Section/Page
1. Create a `.jsx` and a `.module.css` file in `src/sections/`.
2. Wrap the top-level section div in a `ScrollReveal` component (if applicable) for consistent entry animations.
3. Add the route in `src/App.jsx`.

### 2. Styling (Dark Mode & Glassmorphism)
- Use CSS Modules for component-level styles.
- Respect the variables in `src/styles/GlobalStyles.css` (e.g., `--accent-primary`, `--bg-dark`).
- Use `backdrop-filter: blur()` extensively for the "glass" effect.

### 3. Backend (Supabase)
- **Forms:** The `RequestQuote` and `TechnicalAudit` sections are designed to interact with Supabase tables.
- **Environment Variables:** Requires `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env.local`.

### 4. Transitions & Loading
- The `Preloader` is controlled by `TransitionContext`.
- `AnimatePresence` in `AppContent` ensures smooth unmounting of the loader before components render.

## 🚀 Deployment & Infrastructure
- **Vercel:** Primary hosting for the frontend.
- **Netlify:** Secondary option with `netlify.toml` configured for SPA routing.
- **Vite:** Build tool with optimized production output in `dist/`.

## 📌 Development Principles
1. **Performance First:** Images should be optimized; minimize heavy library usage.
2. **Micro-Animations:** Use subtle Framer Motion `whileHover` or `whileTap` on all interactive links.
3. **Responsive Consistency:** Test all sections across different viewport widths using the responsive classes.

---

**Founder Context:** This project was co-founded by **Varun Ahankari** and **Jayesh Gupta**, headquartered at 2104, Sunscape, Sobha Hillview Apartment, Thalagattapura, Bengaluru.
