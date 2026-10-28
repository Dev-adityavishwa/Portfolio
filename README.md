# Aditya Vishwakarma — Software Engineer Portfolio

A premium, modern personal portfolio website engineered with **React.js**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **EmailJS**.

Designed with a futuristic, minimal dark aesthetic inspired by modern SaaS products and technical engineering portfolios.

---

## 🚀 Tech Stack

- **Framework:** React.js (Functional Components, React Hooks)
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4, Glassmorphism, CSS Custom Properties
- **Motion & Animations:** Framer Motion
- **Icons:** Lucide React & Custom SVG Brand Icons
- **Contact Service:** EmailJS (`@emailjs/browser`) with graceful local simulation & fallback
- **Interactive Confetti:** Canvas Confetti

---

## 📂 Project Architecture

```
A_Portfolio/
├── index.html                     # HTML5 entry with fonts & AV SVG favicon
├── vite.config.js                 # Vite + Tailwind CSS plugin config
├── .env.example                   # EmailJS credentials template
├── src/
│   ├── main.jsx                   # React root entry
│   ├── App.jsx                    # Single-page layout assembler
│   ├── index.css                  # Tailwind v4, custom scrollbars, theme glows
│   │
│   ├── components/                # Modular UI Components
│   │   ├── Navbar.jsx             # Sticky frosted glass, active spy, mobile drawer
│   │   ├── Hero.jsx               # Dynamic role typewriter, interactive terminal/code card
│   │   ├── About.jsx              # Bio narrative, 3 pillar cards, core metrics
│   │   ├── Skills.jsx             # Categorized tech grid, tab filters, no fake progress bars
│   │   ├── Projects.jsx           # Featured layout, category filters, detail inspector
│   │   ├── ProjectCardPreview.jsx # High-tech custom SVG/canvas previews for projects
│   │   ├── ProjectModal.jsx       # Deep-dive architecture and technical highlights modal
│   │   ├── Experience.jsx         # Institutional governance and workshop leadership timeline
│   │   ├── Education.jsx          # B.Tech CS (BIET Jhansi) & Diploma IT (Govt Poly Lucknow)
│   │   ├── Achievements.jsx       # Wipro WILP selection & technical milestones
│   │   ├── Contact.jsx            # Functional EmailJS form, copy email, response SLA
│   │   ├── Footer.jsx             # Brand monogram, quick links, back-to-top button
│   │   └── BrandIcons.jsx         # GitHub and LinkedIn SVG components
│   │
│   └── data/                      # Data-driven configuration (edit without touching JSX)
│       ├── personal.js            # Personal profile, bio, socials, status
│       ├── skills.js              # Tech stack organized by domain
│       ├── projects.js            # Detailed project descriptions, tech tags, links
│       ├── experience.js          # Verified leadership and community roles
│       ├── education.js           # Verified academic records & institutions
│       └── achievements.js        # Honors, selections, and certifications
```

---

## ⚡ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📬 Configuring EmailJS (Optional)

To enable live email delivery directly to your inbox from the contact form:

1. Create a free account at [EmailJS](https://www.emailjs.com/).
2. Add an Email Service (e.g. Gmail).
3. Create an Email Template with fields `{{name}}`, `{{email}}`, `{{subject}}`, and `{{message}}`.
4. Copy your credentials into a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

> **Note:** If these environment variables are left blank, the portfolio automatically operates in a simulated demo mode that delivers instant user feedback and opens a pre-filled `mailto:` client so no transmission is lost.

---

## 📝 Customizing Content

All text and portfolio data are separated from UI logic inside `src/data/`:
- **Change Bio or Links:** Edit `src/data/personal.js`
- **Add or Remove Skills:** Edit `src/data/skills.js`
- **Add New Projects:** Edit `src/data/projects.js`
- **Update Experience or Roles:** Edit `src/data/experience.js`
- **Update Education:** Edit `src/data/education.js`
- **Add Achievements:** Edit `src/data/achievements.js`

---

## 🌐 Deployment

### Deploying to Vercel
1. Push your repository to GitHub.
2. Import the project on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. (Optional) Add your EmailJS environment variables in Vercel Project Settings.
5. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.
