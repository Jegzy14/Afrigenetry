# AfriGenetry Link redesign concept

This project is an independent website redesign concept for AfriGenetry Link, created for portfolio and demonstration purposes. It is not an official AfriGenetry Link website.

## Project overview

The redesign is built to communicate a credible, modern, research-driven African organization operating at the intersection of genomics, health, education and innovation.

## Design objectives

- Clarify the organization’s purpose and value proposition
- Improve information architecture and discovery
- Create a premium editorial and scientific visual system
- Support research, education, partnerships and participation journeys
- Maintain accessibility and responsive behavior across devices

## UX problems addressed

- Information overload on the existing site
- Weak distinction between research, education and opportunity content
- Generic NGO look without a strong scientific identity
- Limited clarity for researchers, students and institutional partners
- Mobile navigation and forms that need stronger treatment

## Design system

- Color palette: deep navy, African green, warm gold, warm neutral backgrounds
- Typography: Manrope / Inter pairing
- Layout: editorial grids, strong spacing, reduced-card approach for premium feel
- Components: buttons, cards, filters, forms, accordions, research lists and event blocks

## Technology

- HTML
- CSS
- Vanilla JavaScript
- No external frontend frameworks or libraries

## Page structure

- index.html
- about.html
- research.html
- programs.html
- program-detail.html
- events.html
- event-detail.html
- resources.html
- publications.html
- opportunities.html
- partnerships.html
- contact.html

## JavaScript functionality

- Mobile navigation
- Research and resource filtering
- Search for resource and publication discovery
- Form validation for contact and partnership requests
- Scroll reveal and back-to-top interaction
- Accordion behavior

## Accessibility decisions

- Semantic heading structure
- Keyboard-friendly navigation and focus states
- Form labels, aria attributes and validation messaging
- Sufficient contrast and reduced motion support
- Responsive behavior for smaller screens

## Performance decisions

- Lightweight static files
- Minimal JavaScript
- Responsive images
- No unnecessary dependencies or libraries

## How to run locally

From the project folder, run a local static server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## How to replace assets

Update image URLs in the HTML files or replace the image folders with project-specific assets. The current design uses remote image URLs for fast concept development.

## How to connect forms

The current forms are front-end only and validate input in the browser. To connect them to a real backend, replace the form submission logic in `js/forms.js` with an API request or a mailing service integration.

## How to integrate a CMS later

A future CMS could replace the static content with a structured content source such as JSON, a headless CMS or a lightweight API.

## How to connect a real search system

The current search is client-side only. A real search layer can be added with a search API, a CMS index or a server-side endpoint that filters and returns results.

## How to integrate event or resource data later

The current prototype uses static content blocks. In a production build, the content could be hooked into structured JSON or a CMS collection for events, publications and resources.
