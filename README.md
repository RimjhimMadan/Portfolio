# Rimjhim Madan — Personal Portfolio Website ("The Pipeline")

A production-ready, dark editorial-technical portfolio for **Rimjhim Madan** (Software Engineer | Full Stack Developer | Machine Learning).

Built around the conceptual metaphor of a **Continuous Data Pipeline**:
`Raw Signal (00) -> Clean (01) -> Tokenize (02) -> Vectorize (03) -> Classify (04) -> Benchmark (05) -> Validate (06) -> Ship (07)`.

---

## Technical Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Smooth Scrolling**: Lenis
- **Typography (Self-Hosted via Fontsource)**:
  - *Instrument Serif*: Editorial headlines
  - *Inter Tight*: Technical body text
  - *JetBrains Mono*: Code tokens, numerals, pipeline metadata
- **Color System**:
  - `ink`: `#0B0D10` (Dark canvas base)
  - `graphite`: `#12161B` (Card surfaces)
  - `hairline`: `#232A33` (Precision technical borders)
  - `bone`: `#E8E6E1` (High-contrast typography)
  - `muted`: `#9AA1AB` (Secondary annotations)
  - `signal`: `#FF5B2E` (Single primary vibrant accent)
  - `verified`: `#5CE1C8` (ML benchmarks & verified states)

---

## Project Structure

```
├── public/
│   ├── Rimjhim_Madan_Resume.pdf    # Local copy of official resume
│   ├── favicon.svg                 # Precision SVG crosshair icon
│   └── robots.txt                  # Search engine crawlers policy
├── src/
│   ├── components/
│   │   ├── layout/                 # Navigation, PipelineNav, Footer
│   │   ├── sections/               # Hero, About, Skills, Projects, Experience, Achievements, Education, Contact
│   │   ├── ui/                     # SkipLink, ReticleCursor, MagneticButton, MetricCounter
│   │   └── viz/                    # HeroCanvas, PipelineLab, ViewfinderViz, SkillGraphViz, DashboardFragViz
│   ├── data/
│   │   └── content.js              # Single Source of Truth for all facts & copy
│   ├── hooks/                      # useActiveSection, useInView, useMagnetic, useReducedMotion
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Quickstart & Local Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
The site will run locally at `http://localhost:3000` (or the next available port).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## Single Source of Truth (`src/data/content.js`)

All copy, project facts, academic coursework, metrics, and links are managed in `src/data/content.js`.
To update content:
1. Open `src/data/content.js`.
2. Update relevant fields in `PERSONAL_INFO`, `PROJECTS`, `SKILL_CATEGORIES`, `EXPERIENCE`, `CERTIFICATIONS`, `LEADERSHIP`, or `EDUCATION`.
3. If public GitHub repository URLs become available, add the URL string to `githubUrl` in `PROJECTS` (the UI will automatically render the external link button).

---

## Contact Form Configuration (`VITE_FORM_ENDPOINT`)

The contact form in Stage 07 is configured to POST JSON payloads:
```json
{
  "name": "Sender Name",
  "email": "sender@example.com",
  "message": "Project or inquiry message"
}
```

### Setting the Endpoint:
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Set your webhook or serverless function endpoint:
   ```env
   VITE_FORM_ENDPOINT=https://api.formspree.io/f/your_form_id
   ```
3. **Graceful Fallback**: If `VITE_FORM_ENDPOINT` is omitted or empty, the application automatically triggers an interactive prefilled `mailto:madaanrimjhim6@gmail.com` link and notifies the user directly.

---

## Deployment Steps

### Vercel
1. Push code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio launch"
   git remote add origin https://github.com/RimjhimMadan/portfolio.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. (Optional) Add `VITE_FORM_ENDPOINT` in Vercel Environment Variables.
8. Click **Deploy**.

### Netlify
1. Connect repository in [Netlify](https://netlify.com).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add `VITE_FORM_ENDPOINT` under Site Configuration > Environment Variables.
5. Deploy Site.

