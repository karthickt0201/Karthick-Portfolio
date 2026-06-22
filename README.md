# Karthick T — Angular Developer Portfolio

A real Angular 18 application (standalone components, signals, a custom scroll-reveal directive) built to showcase Angular skills directly through the code — not just describe them on a resume.

## What's inside

- `src/app/components/` — one component per section (header, hero, about, skills, projects, experience, contact, footer)
- `src/app/data/portfolio-data.ts` — all your content (name, projects, skills, experience) in one file. Edit this file to update anything on the page without touching component code.
- `src/app/directives/reveal.directive.ts` — a small reusable directive for scroll-triggered animations
- `public/assets/resume/Karthick_T_Resume_Software_Engineer_V2.pdf` — the file the "Resume" / "Download resume" buttons link to. Replace this file any time you update your resume — keep the filename the same, or update the path in `header.component.html` and `contact.component.html`.

## Run it locally

You need Node.js installed (v18 or newer) — nodejs.org

```bash
npm install
npm start
```

Then open http://localhost:4200 in your browser.

## Deploy it for free — 3 options

### Option 1: Vercel (easiest, recommended)

1. Push this folder to a new GitHub repository (see "Push to GitHub" below).
2. Go to vercel.com -> sign up with your GitHub account (free).
3. Click "Add New -> Project", select your repository.
4. Vercel auto-detects Angular. Just click "Deploy".
5. You'll get a free live URL like karthick-portfolio.vercel.app in about a minute.
6. Every time you push new changes to GitHub, Vercel redeploys automatically.

### Option 2: Netlify

1. Push this folder to GitHub.
2. Go to netlify.com -> sign up with GitHub (free).
3. Click "Add new site -> Import an existing project", pick your repo.
4. Set:
   - Build command: npm run build
   - Publish directory: dist/portfolio/browser
5. Click "Deploy site". You'll get a free URL like karthick-portfolio.netlify.app.

### Option 3: GitHub Pages (no separate sign-up needed)

1. Push this folder to GitHub.
2. Run:
   npm install -g angular-cli-ghpages
   npm run build -- --base-href=https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   npx angular-cli-ghpages --dir=dist/portfolio/browser
3. Your site goes live at https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/

Recommendation: Use Vercel. It's the fastest to set up and has the simplest free workflow for Angular.

## Push to GitHub (needed for all 3 options above)

cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main

Create the empty repository on GitHub first (github.com -> New repository) before running the last two commands.

## After deploying

- Add the live URL to your Naukri profile, LinkedIn, and resume.
- Also push the code itself to GitHub and link your GitHub profile — recruiters checking your profile will see real, working Angular code, not just a resume claim.
