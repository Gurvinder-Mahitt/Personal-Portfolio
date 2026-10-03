# Gurvinder Singh — Portfolio Website
## Master Build Plan & Creative Brief

**Prepared for:** Claude Code build handoff
**Site format:** Single continuous scrolling static site (`index.html` / `style.css` / `script.js` / `/assets`)
**Working title:** Gurvinder Singh — *Analytical Thinking. Creative Execution.*
**Status:** Awaiting approval to build

---

## Website overview

A premium personal portfolio for **Gurvinder Singh** — a Mining Engineering undergraduate at VNIT Nagpur (Class of 2027) who works across three disciplines: **data & business analysis**, **data science / data engineering**, and **writing & content**. The site frames these not as three résumés stapled together, but as one point of view: *understand complex systems, find the useful answer, and communicate it clearly.*

The experience is **one continuous cinematic scroll** broken into three creative chapters — Analytical & Professional Work, Creative Work & Writing, and Personal Philosophy & Contact — each with its own visual identity but a shared type, color, and motion system. Case studies live as in-page sections so the first release ships as the required static structure; any flagship project can graduate to its own static page later.

- **Primary audience:** recruiters, hiring managers, collaborators, and businesses seeking analytical or content help.
- **Primary action:** email Gurvinder. LinkedIn is the secondary, professional-networking action.
- **Core promise:** turn complexity into clarity through analytical thinking and creative execution.

## Core positioning

**Positioning statement**
Gurvinder Singh brings engineering discipline, data fluency, business perspective, and clear writing together to turn complex problems into practical insights and compelling stories.

**One-line introduction**
*I turn complex data, business problems, and ideas into actionable insights, practical solutions, and compelling stories.*

**Brand line** — *Analytical Thinking. Creative Execution.*
**Supporting mantra** — *Think deeply. Build intelligently. Communicate creatively.*
**Chapter-three sign-off** — *Discipline compounds. Curiosity creates possibilities.*

Present Gurvinder as an emerging, multidimensional professional with evidence of curiosity and applied work. Do **not** imply seniority, commercial track record, or client outcomes that aren't verified. Keep academic projects, personal projects, and writing clearly what they are.

## Brand personality

- **Analytical** — precise, structured, evidence-minded.
- **Curious** — genuinely interested in systems, people, and how things work.
- **Creative** — turns insight into story and useful experience.
- **Disciplined** — consistent and considered, never self-aggrandizing.
- **Approachable** — direct, warm, collaborative.

Copy is confident, specific, and plain. Avoid "data wizard," inflated impact claims, and unsupported metrics.

## Visual direction

**Dark Cinematic × Liquid Glass × Editorial Minimalism.** A near-black canvas, warm-white type, restrained champagne-bronze highlights, dramatic-but-soft light, generous negative space, and occasional glass surfaces. Cinematic atmosphere always serves a clear information hierarchy — the visitor should feel they're exploring the mind and work of a multidimensional professional, and still be able to read every project.

Oversized type is a visual element, but content stays scannable. Grain is a subtle, lightweight overlay excluded from text layers. Glass and glow are accents, not the default panel treatment. Avoid template card grids, bright gradients, decorative charts without meaning, and motion that competes with content.

## Higgsfield Seedance 2.0 asset generation

Generate **three 1080p clips, 8–12 seconds each**, sharing one identity, wardrobe logic, lighting language, and color grade.

**Identity reference:** Use the supplied portrait `ChatGPT Image Sep 24, 2026, 11_17_30 PM.png` (the requested `Media` folder wasn't present; this project-root portrait — dark studio, gold turban — is the identity source, and a cinematic crop is saved at `/assets/gurvinder-portrait.jpg`). Preserve his **actual face and gold turban** faithfully; do not invent identifying features. Confirm likeness before any publish.

**Production spec:** 1920×1080, 24 or 30 fps, web-optimized **MP4 (H.264)** plus **WebM** where practical, **muted**, no audio dependency. Compose a clean, text-free negative-space zone for HTML copy — **no baked-in text, logos, UI labels, or fabricated dashboards/metrics**. Deliver a **poster frame** per clip. Keep masters outside the web payload; ship compressed derivatives under `/assets`.

**Reusable prompt scaffold (paste per scene):**
> Cinematic 1080p, 8–12s. Consistent identity from reference image — young man, gold Sikh turban, calm confident expression, faithful face. Near-black environment `#0A0A0B`, warm champagne-bronze rim light `#C8A882`, soft atmospheric haze, fine floating dust, shallow depth of field, filmic grain, no text, no on-screen UI, ample negative space for a headline. [SCENE ACTION].

### Three cinematic scenes

#### Scene 01 — The Introduction *(Chapter 1 hero)*
A slow, controlled camera orbit around Gurvinder in a nearly black studio, black shirt and gold turban, warm bronze rim light gradually revealing his face through subtle haze and drifting dust. Thoughtful confidence — not a motivational-speaker pose. Leave the frame spacious for the headline.
**Message:** *Analytical Thinking. Creative Execution.*

#### Scene 02 — The Mind of a Builder *(Chapter 1 → 2 bridge)*
A refined analytical workspace. Gurvinder works at a desk as abstract, legible data points evolve into a single clear insight; a slow side-to-front push. Precision of a tech lab, warmth of a creative studio. Keep screens abstract or composite real supplied project visuals in post — never present generated dashboards as real work.
**Message:** *Turning complexity into clarity.*

#### Scene 03 — The Creative Philosophy *(Chapter 3 close)*
A wide sunrise landscape; Gurvinder in understated dark clothing and turban as the camera slowly pulls back to reveal scale and warm light breaking the horizon. Calm, ambitious, reflective. Engineering, writing, and athletics appear only as subtle motifs, never a fitness showcase. End on open negative space for the contact prompt.
**Message:** *Discipline compounds. Curiosity creates possibilities.*

**Sequencing:** three separate source clips edited into one continuous, chapter-based scroll — bridged by shared color grade, match cuts / soundless fades, typography, and scroll timing. They are *edited* into one story, not one physically continuous take.

## Website structure

One continuous scroll, three chapters, anchored navigation throughout.

1. **Navigation** — wordmark, compact chapter links, persistent "Let's work together" action, scroll progress cue.
2. **Hero** (Scene 01) — name, brand line, one-line intro, primary + secondary CTA.
3. **Animated stats strip** — verified, non-quantified-claim facts only (see below).
4. **Mission** — bridging data, technology, business, and creativity.
5. **Three pillars** — Analytics & BI · Data Science & Intelligent Solutions · Writing & Communication.
6. **Selected work** (Scene 02 bridge) — three flagship case-study sections + a supporting project list.
7. **Story** — engineering foundation, expanding interests, the *Just Careers* thread, working philosophy.
8. **Writing / Just Careers** — asymmetric editorial feature linking to the live blog.
9. **Final CTA** (Scene 03) — invitation, email, LinkedIn.
10. **Footer** — name, brand line, verified links, year, back-to-top.

## Hero section

Lead with **Gurvinder Singh** and **"Analytical Thinking. Creative Execution."** Support with the one-line intro. Scene 01 plays muted behind a contrast scrim with a composed poster fallback; the first viewport must convey name, field, value, and next action **without** requiring scroll or video playback.
- **Primary:** *Let's work together* → `mailto:mahittgurvinder@gmail.com`
- **Secondary:** *Explore selected work* → work section.

Kinetic headline: the brand line assembles word-by-word on load (respecting reduced-motion, which shows it instantly).

## Animated stats strip

The brief supplied **no achievement metrics**, and none will be invented. The strip animates only **truthful, verifiable facts** drawn from the brief, counting/fading in on scroll:
- **2027** — graduating class, VNIT Nagpur
- **3** — disciplines: Data · Business · Creative
- **5** — featured projects
- **1** — live blog, *Just Careers*

If Gurvinder later supplies real quantified results (readers, project outcomes), swap them in with context. Never animate placeholder numbers presented as achievements.

## Mission section

**Heading:** *Make complexity useful.*
Connect data, technology, business, and creativity so decisions are better informed and ideas are easier to act on. Grounded in the brief — not framed as proven client impact.

## Three pillars section

**01 — Data Analytics & Business Intelligence.** Raw data into useful analysis via Python, SQL, Excel, Power BI, statistics, dashboards, and business-focused storytelling.
**02 — Data Science & Intelligent Solutions.** ML models, predictive analytics, anomaly detection, and data-driven tools for real problems — stated with question, method, limitations, and result; never implied as deployed or clinically validated unless verified.
**03 — Content Writing, Blogging & Copywriting.** Informative, engaging, SEO-aware content, career guides, and copy that makes complex ideas approachable — anchored by *Just Careers*.

## Story section

First-person, grounded in the brief: Mining Engineering at VNIT Nagpur (graduating 2027); engineering taught systematic thinking about complex systems; interests expanded into analytics, ML, BI, and technology through project work; writing and the *Just Careers* blog grew a parallel craft in making information useful; research, entrepreneurship events, leadership, and athletics mentioned only with verified specifics. Close on the philosophy: **Think deeply. Build intelligently. Communicate creatively.** No invented chronology, awards, or roles.

## Product / Service / Community section

Present the three pillars as ways Gurvinder can contribute — areas of focus and collaboration, not an established agency or a service track record. Link *Just Careers* as the known publishing project. Clear email action throughout.

## Featured work / content section

Editorial, scroll-driven showcase (not a uniform card grid). Three flagships lead with large cinematic visuals, subtle parallax, and hover states; the rest sit in a supporting list.

1. **AI-Powered Fulfillment Anomaly Detection Engine**
2. **Pizza Sales Analytics Dashboard**
3. **Real-Time Slope Stability Monitoring System**
4. **Customer Churn Forecasting**
5. **ML-Powered Autism Screening Analysis**

Flagship case-study frame: **problem → data → approach → tools → insight → outcome → limitations.** Use only supplied, genuine screenshots and verified outcomes — otherwise restrained typographic project panels, never fabricated dashboards, metrics, datasets, deployed status, or URLs. Treat the autism screening work as **educational/research scope only**, never a diagnostic product. Link GitHub (`https://github.com/Gsingh-io`) and *Just Careers* (`https://www.justcareersguide.in/`); add per-project links once supplied.

## Final CTA section

**Heading:** *Have a problem worth solving? Let's talk.*
- **Primary:** `mailto:mahittgurvinder@gmail.com`
- **Secondary:** LinkedIn (professional networking) — insert only once the exact profile URL is supplied; ship with a clearly disabled/"coming soon" state until then, never a fabricated URL.
Both actions keyboard-accessible and visible on mobile.

## Footer

Gurvinder Singh, brand line, email, verified GitHub and *Just Careers* links, dynamic copyright year, back-to-top. LinkedIn added when known. No legal/privacy links unless data collection is actually added.

## Complete visual style guide

| Role | Color | Use |
|---|---|---|
| Main background | `#0A0A0B` | Page canvas |
| Secondary surface | `#111113` | Alternating sections |
| Raised surface | `#1A1A1E` | Glass panels / controls |
| Primary text | `#F5F0EB` | Headlines, key copy |
| Secondary text | `#A8A29E` | Supporting copy |
| Accent | `#C8A882` | Highlights, focus, thin rules |

Bronze used sparingly; maintain **WCAG AA** contrast for essential text and controls. Thin rules and broad spacing for editorial structure. Soft ambient shadows; glass panels keep a solid-enough fallback. Grain subtle, non-blocking, off text. Photography/video use a consistent charcoal + warm-bronze grade.

## Typography

- **Headlines / display:** **Sora** (700/600), tight tracking, oversized with `clamp()`.
- **Body / interface:** **Inter** (400/500), short measure, comfortable line-height.
- Fallbacks: Georgia-class serif is *not* used; system sans (`-apple-system, Segoe UI, Roboto`) backs both. Load from Google Fonts CDN with `font-display: swap`, preconnect, non-blocking.
- Fluid sizing throughout; oversized type is never the only navigation cue. Kinetic type on the hero and chapter titles only.

## Animation direction

Deliberate and smooth: controlled image/text reveals, restrained parallax, short entrances, subtle section transitions, small interaction feedback. **GSAP + ScrollTrigger** for scroll-linked sequences (video/image-sequence scrubbing on the hero, stat counters, pinned chapter transitions on desktop). **Lenis** for buttery smooth scrolling with native fallback. No long intro locks, scroll-jacking traps, strobing, or animate-everything. Fully honor `prefers-reduced-motion: reduce` — same content and hierarchy, motion removed/shortened, no layout shift.

## Interaction design

- Nav links scroll to labelled sections; active state has a non-color-only cue.
- Project previews: visible focus states, keyboard-operable links, hover reveals that are not the only way to reach content.
- CTAs use meaningful labels and work without JavaScript.
- Background clips start muted and never obscure content; any exposed control has accessible play/pause + mute state.
- Focus-visible outlines, semantic landmarks, descriptive alt text, adequate touch targets. No custom cursor that blocks native pointer/touch/keyboard.

## Scroll behavior

Natural vertical narrative with section-level transitions and a continuous chapter feel. Scene clips may pin briefly **on desktop only**, staying usable with trackpad, keyboard, and reduced-motion. Never trap scrolling. Anchor targets offset for the fixed nav.

## Mobile behavior

First-class mobile: stacked content, readable headlines, reachable CTAs, compressed nav, poster or lower-res video, heavy parallax/pinning disabled. Crop video to keep Gurvinder visible with a static fallback; prevent horizontal overflow; all project evidence and links usable without hover.

## Technical implementation

**Required files:** `index.html` (semantic structure + content), `style.css` (responsive system, layout, reduced-motion), `script.js` (nav, GSAP/ScrollTrigger/Lenis init, progressive enhancement, graceful fallbacks), `/assets/` (images, posters, video, project media — relative paths).

**Stack & loading:**
- Static HTML/CSS/vanilla JS only — **no React, Next.js, or build step**.
- Pinned CDN links for **GSAP**, **ScrollTrigger**, **Lenis**; initialize after DOM ready; degrade gracefully if a CDN script is missing (site remains readable, native scroll).
- Video/image-sequence scrubbing where it strengthens the story; `loading="lazy"` below the fold; explicit dimensions/aspect-ratios to prevent layout shift; posters for all video; defer below-fold video.
- Keep all media local under `/assets` with relative paths; don't depend on remote screenshots for core content.
- Metadata: descriptive title, meta description, theme-color, Open Graph/Twitter preview, favicon if a mark exists.
- Validate at mobile + desktop widths, keyboard-only, reduced-motion, and with video/CDN unavailable. Optimize for fast first paint; nothing heavy loads before the hero is visible.

**Content & asset integrity:**
- Never fabricate achievements, stats, case-study findings, testimonials, client names, project links, or credentials.
- Confirm the genuine portrait before identity-consistent video generation.
- Obtain the LinkedIn URL before publishing it.
- Use supplied genuine screenshots for previews; otherwise restrained typographic panels.

---

## Implementation handoff for Claude Code

Build the approved site in this project root. Inspect existing files and preserve useful user-authored material. Ship a responsive, accessible, single-page continuous-scroll site using only `index.html`, `style.css`, vanilla `script.js`, and `/assets` — no framework, no build step. Apply the visual system, chapter order, copy, and motion direction above. Use the cinematic portrait in the hero and genuine project media where supplied; until real screenshots exist, use clearly illustrative photography or typographic panels, never mock dashboards or invented results. Pinned CDNs for GSAP, ScrollTrigger, Lenis with native-scroll fallback. Keep stats truthful and unquantified until real figures arrive; email is the working primary CTA; LinkedIn stays a labelled placeholder until its URL is supplied. Deliver polished fallbacks for any missing media, and don't imply video assets that haven't actually been generated. The result should feel Awwwards-caliber — cinematic composition, huge kinetic typography, buttery smooth scroll, subtle grain, premium transitions — while staying readable, fast, keyboard-accessible, and fully usable with reduced motion or no video.



