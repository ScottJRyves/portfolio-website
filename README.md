# Scott Ryves — Data Analyst Portfolio

A lightweight personal portfolio website showcasing my data analytics, machine-learning and software-development projects.

The site is built with Astro and deployed as a static website. It is designed to provide recruiters with a clear overview of my skills, featured work, GitHub repositories and CV.

## Featured Projects

- **Project Ingress** — Python and Flask data-ingestion pipeline using NLP preprocessing, TF-IDF keyword extraction and sentiment analysis
- **Deprivation and Food Hygiene Analysis** — Tableau data-preparation and dashboard project exploring relationships between deprivation and food-hygiene ratings
- **Malware Classification ML Pipeline** — supervised machine-learning project using pandas and scikit-learn
- **ScottishGlen Asset Tracking System** — C# WinUI 3 application using MVVM, Entity Framework Core and NVD vulnerability scanning

## Technologies Used

- Astro
- TypeScript
- HTML
- CSS

## Project Structure

```text
portfolio-website/
├── public/
│   ├── cv/
│   ├── images/
│   ├── _headers
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Security and Privacy

The site is statically generated and does not use:

- a database
- user accounts
- cookies
- analytics tracking
- a contact-form backend
- API keys or private credentials

Custom security headers are configured through `public/_headers`.

## Portfolio

The live site is available at:

```text
scott-ryves.com
```
