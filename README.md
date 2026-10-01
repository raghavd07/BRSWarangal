# Bharat Rashtra Samithi (BRS) – Warangal East Constituency Official Website

A modern, responsive, high-performance React homepage built for **Bharat Rashtra Samithi (BRS) – Warangal East Constituency, Telangana, India**.

---

## 🎨 Visual Identity & Brand Design System

- **Primary Magenta / Pink:** `#EC2588` (Dominant civic brand color)
- **Dark Magenta:** `#C91870` / `#9E0E54` (Hover states & headers)
- **Pale Pink:** `#F9EAF1` / `#FDF2F7` (Background strips & badges)
- **Charcoal:** `#24212A` / `#16141C` (Readable high-contrast typography & dark footer)
- **Accent Green:** `#31552D` (Header top line & civic accents)
- **Typography:** `Inter` (Body & UI), `Outfit` (Headings & Brand Title), and `Tiro Telugu` (Authentic Telugu typography)

---

## 🚀 Key Features & Sections

1. **Two-Tier Header:**
   - **Top Accent Line:** Subtle dark green line (`#31552D`) at the very top.
   - **Left Identity:** Official circular BRS Logo and the BRS Warangal party banner (`brs banner warangal.png`).
   - **Middle Leadership:** Three leadership portraits (D. Vinay Bhaskar, K. T. Rama Rao, K. Chandrashekar Rao) with titles and subtle vertical dividers.
   - **Right Corner Heritage:** Framed images of **Telangana Thalli** and **Amaraveerula Stupam** cleanly positioned with no text labels as requested.
   - **Navigation Bar:** Full-width magenta navbar (`#EC2588`) with Home, About, Media, Downloads, Contact Us, Manifesto / Documents, Poll Information, interactive dropdowns, and social media channels.
   - **Mobile Menu:** Accessible hamburger menu toggle with animated slide-down drawer.

2. **Hero Activities Carousel:**
   - Full-width hero banner (420–550px) featuring the **Amaraveerula Stupam** tribute slide, **Telangana Thalli** cultural legacy slide, and Warangal East development slides.
   - Automatic rotation (5.5s), pause-on-hover, touch swipe navigation, keyboard arrow support, and respect for `prefers-reduced-motion` via `motion/react`.

3. **Media Category Strip:**
   - Horizontally arranged category cards: **NEWS** (magenta icon) | **PHOTOS** (charcoal icon) | **VIDEOS** (charcoal icon) that smoothly scroll to their respective sections.

4. **Latest News & Announcements:**
   - Responsive 3-column card grid with sample civic development updates, dates, reading times, tags, and interactive **Read Full Announcement** modal.

5. **Recent Photos Gallery:**
   - 6-tile responsive photo grid featuring supplied photos (Amaraveerula Stupam, Telangana Thalli, D. Vinay Bhaskar) and labelled event placeholders.
   - Interactive Lightbox with prev/next navigation and captions.

6. **Recent Videos Preview:**
   - 3 video cards with play button overlays, duration badges, and interactive video stream preview dialogs.

7. **Constituency Leadership:**
   - Three leadership cards highlighting:
     1. **D. Vinay Bhaskar** (Primary visual emphasis, former MLA & Chief Whip)
     2. **K. T. Rama Rao (KTR)** (Working President, BRS Party)
     3. **K. Chandrashekar Rao (KCR)** (Founder & President, BRS Party)
   - Profile modal displaying verified designations, public service pillars, and focus areas.

8. **About Warangal East Constituency:**
   - Introductory civic paragraph and 3 compact information blocks:
     - **Constituency Information** (Fort Warangal, GWMC, key sectors)
     - **Public Announcements** (Grievance schedules, civic advisories)
     - **Office & Contact Information** (Central Office placeholders & grievance hours)

9. **Upcoming Events Preview:**
   - 3 event cards with calendar date badges (Month, Day, Year), venue information, and sample schedule notices.

10. **Full-Width Footer:**
    - Dark charcoal background (`#16131D`) with green & magenta accent dividers.
    - Official circular BRS Logo, constituency mission statement, quick navigation links, civic portal shortcuts, office coordinates, social media links, and interactive legal policy modals.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite 8
- **Language:** JavaScript & JSX
- **Styling:** Vanilla CSS with comprehensive CSS custom properties (Design System in `src/index.css`)
- **Animations:** Motion for React (`motion/react`) with accessible `useReducedMotion` support
- **Icons:** Lucide React + custom SVG brand icons (`src/components/SocialIcons.jsx`)
- **Data Architecture:** Fully separated data files in `src/data/` for future Node.js/Express API integration.

---

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or later, tested on v24.12.0)
- npm (v9 or later)

### Installation

```bash
# Clone or navigate to the repository
cd "BRS Party Warangal Site"

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the local Vite development server
npm run dev
```

The application will be accessible at `http://127.0.0.1:5173/`.

### Building for Production

```bash
npm run build
```

This compiles optimized static assets into the `dist/` folder ready for deployment.
