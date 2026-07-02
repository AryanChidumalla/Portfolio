# Portfolio — React + Vite + Tailwind

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Editing content

Everything you're likely to change lives in **`src/data/portfolioData.js`**:
name, subtitle, stats, social links, resume path, hero copy, the four
recruiter-filter fields, all projects (tagged `web` / `data` / `sde`),
skills, and engineering-log entries. No component code needs to change
to update copy or add a project — just add an object to the `projects`
array with a matching `category`.

To swap the placeholder avatar/project graphics for real images, replace
the initials block in `Sidebar.jsx` and the icon placeholder in
`ProjectCard.jsx` with an `<img>` tag pointing at files in `public/`.

## Structure

```
src/
  data/portfolioData.js   ← single source of truth for content
  components/
    Sidebar.jsx            ← fixed left profile anchor + mobile drawer
    Hero.jsx                ← headline + intro
    RecruiterSelector.jsx  ← the field filter (web / data / sde / all)
    ProjectMatrix.jsx       ← filtered project grid
    ProjectCard.jsx         ← single case-study card
    Skills.jsx               ← skill dashboard grid
    EngineeringLog.jsx       ← writing list
    Footer.jsx                ← nav links + contact CTA
  App.jsx
  main.jsx
  index.css
```
