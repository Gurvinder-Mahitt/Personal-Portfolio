# Gurvinder Singh — Personal Portfolio Website

<div align="center">

  <h3><em>Analytical Thinking. Creative Execution.</em></h3>

  <p>
    A dark cinematic, editorial personal portfolio built with semantic HTML5, modern CSS3, and performant vanilla JavaScript with progressive GSAP & Lenis smooth scrolling.
  </p>

  <p>
    <a href="https://github.com/Gurvinder-Mahitt"><img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github" alt="GitHub"></a>
    <a href="https://www.linkedin.com/in/gurvinder-"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn"></a>
    <a href="https://www.justcareersguide.in/"><img src="https://img.shields.io/badge/Blog-Just%20Careers-FF5722?style=for-the-badge" alt="Just Careers"></a>
    <img src="https://img.shields.io/badge/Status-Active-28a745?style=for-the-badge" alt="Status">
    <img src="https://img.shields.io/badge/License-ISC-blue?style=for-the-badge" alt="License">
  </p>

  <p>
    <a href="#-overview">Overview</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-portfolio-sections">Sections</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-deployment">Deployment</a> •
    <a href="#-customization">Customization</a> •
    <a href="#-connect">Connect</a>
  </p>

</div>

---

## ✦ Overview

This repository hosts the official personal portfolio website for **Gurvinder Singh**, an engineering undergraduate at **VNIT Nagpur** (Class of 2027) working across three interconnected disciplines:

1. **Data Analytics & Business Intelligence** — Uncovering actionable signals from complex data with Python, SQL, and Power BI.
2. **Mining & Systems Engineering** — Applying first-principles engineering, rock mechanics, and IoT sensor streams to geotechnical safety and slope stability monitoring (awarded a ₹1,00,000 Research Fellowship).
3. **Writing & Content Strategy** — Distilling technical concepts into high-impact editorial insights through [*Just Careers*](https://www.justcareersguide.in/).

The portfolio is designed as a **single, continuous cinematic scroll** adhering to a **Dark Cinematic × Liquid Glass × Editorial Minimalism** visual direction.

---

## ⚡ Key Features

- **Dark Cinematic Aesthetic:** Near-black palette (`#0A0A0B`), warm champagne-bronze highlights (`#C8A882`), subtle film grain, and soft ambient lighting.
- **Lenis Smooth Scroll:** Ultra-smooth inertia-based scrolling powered by [Lenis](https://github.com/darkroomengineering/lenis).
- **GSAP & ScrollTrigger Animations:** Elegant scroll-driven typography reveals, kinetic headline split effects, and progressive visual reveals.
- **Particle System Parallax:** Ambient background particles responding dynamically to scroll trajectory with multi-speed parallax.
- **Progressive Enhancement:** Fully accessible experience with graceful fallbacks if JavaScript/GSAP are absent or when `prefers-reduced-motion` is enabled.
- **Dynamic Stats Counters:** Animated counter triggers as visitors scroll through key academic and fellowship milestones.
- **Responsive & Mobile-First:** Fluid typography (`clamp()`), flex/grid layouts, mobile drawer navigation, and accessible ARIA attributes.
- **Zero Heavy Framework Bloat:** Built with lightweight semantic HTML, vanilla CSS, and vanilla JS, packaged with **Vite** for blazing fast local development and optimized production bundling.

---

## 🛠 Tech Stack

### Frontend & Core
- **HTML5:** Semantic markup, SEO meta tags, OpenGraph & Twitter cards, accessibility skiplinks.
- **CSS3:** Modern CSS variables, glassmorphic filters, responsive CSS Grid & Flexbox, fluid clamp scaling.
- **JavaScript (ES6+):** Vanilla modular JS, passive event listeners, IntersectionObserver, requestAnimationFrame loop.

### Animation & Motion Libraries
- [GSAP 3](https://greensock.com/gsap/) — Advanced timeline and element animations.
- [ScrollTrigger](https://greensock.com/scrolltrigger/) — Viewport-based triggers and scrub effects.
- [Lenis](https://github.com/darkroomengineering/lenis) — Smooth scroll engine.

### Typography
- **Headings:** [Sora](https://fonts.google.com/specimen/Sora) (Google Fonts)
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

### Build Tooling
- [Vite 8](https://vitejs.dev/) — Lightning-fast local dev server and optimized rollup production builds.

---

## 📂 Portfolio Sections

| # | Section | Description |
|---|---------|-------------|
| **00** | **Hero** | Kinetic headline, floating particles, ambient glow, and introductory CTA. |
| **01** | **At a Glance** | Animated metric counters (Graduation year, core disciplines, research fellowship). |
| **02** | **What I Do** | 3-pillar breakdown: Data Analytics & BI, Mining Engineering, and Technical Writing. |
| **03** | **Selected Work** | Flagship projects including *AI-Powered Fulfillment Anomaly Detection* and *Pizza Sales Analytics*. |
| **04** | **Featured Research** | Deep dive into the VNIT Nagpur awarded *Real-Time Slope Stability Monitoring System* (₹1L Fellowship). |
| **05** | **My Story** | Journey from engineering foundations to data fluency, ML, and career insights. |
| **06** | **Writing** | Showcase of *Just Careers* editorial blog and technical communication work. |
| **07** | **Philosophy & Contact** | Guiding mantra and direct links to connect via LinkedIn, GitHub, and Email. |

---

## 📁 Project Structure

```text
YT_PF/
├── .gitignore             # Git ignore patterns (node_modules, dist, etc.)
├── assets/                # Optimized imagery & photography assets
│   ├── gurvinder-portrait.jpg
│   ├── hero-mine-atmosphere.jpg
│   ├── project-fulfillment.jpg
│   ├── project-pizza.jpg
│   ├── project-slope.jpg
│   └── README.md
├── index.html             # Main entry point & semantic HTML structure
├── package.json           # Vite scripts and devDependencies
├── package-lock.json      # Dependency lockfile
├── script.js              # Lenis smooth scroll, GSAP triggers, particles, & logic
├── style.css              # Design system, CSS tokens, animations, responsive layout
└── README.md              # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/Gurvinder-Mahitt/YT_PF.git
cd YT_PF
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the URL displayed in your terminal).

### 4. Build for production
```bash
npm run build
```
The optimized static build files will be generated inside the `dist/` directory.

### 5. Preview production build locally
```bash
npm run preview
```

---

## 🌐 Deployment

You can deploy this site in under 2 minutes using any modern static hosting service:

### Option A: GitHub Pages
1. Push your repository to GitHub.
2. Go to **Repository Settings** > **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** (or deploy directly from `main` branch if using root `index.html`).

### Option B: Vercel
1. Install the Vercel CLI: `npm i -g vercel` or link your GitHub repo directly on [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

### Option C: Netlify
1. Connect your repository on [netlify.com](https://www.netlify.com).
2. Build Command: `npm run build`
3. Publish Directory: `dist`

---

## 🎨 Customization

To personalize this website for your own portfolio:

1. **Personal Information & Bio:**
   - Update metadata, titles, and text in [`index.html`](index.html).
2. **Projects & Links:**
   - Replace project titles, GitHub repositories, and descriptions in the `Selected Work` section (`#work`).
3. **Imagery:**
   - Replace the portrait and case study preview images inside the [`assets/`](assets/) folder with your own (recommended web-optimized JPG/WebP).
4. **Theme Colors & Typography:**
   - Modify the CSS design tokens at the top of [`style.css`](style.css) (e.g., `--bg-base`, `--accent-bronze`, `--text-main`).

---

## 📬 Connect

- **GitHub:** [@Gurvinder-Mahitt](https://github.com/Gurvinder-Mahitt)
- **LinkedIn:** [Gurvinder Singh](https://www.linkedin.com/in/gurvinder-)
- **Email:** [gurvindervnit@gmail.com](mailto:gurvindervnit@gmail.com)
- **Editorial Blog:** [Just Careers](https://www.justcareersguide.in/)

---

## 📄 License

This project is licensed under the [ISC License](package.json). Feel free to adapt and use the code for your own portfolio while respecting project authorship.
