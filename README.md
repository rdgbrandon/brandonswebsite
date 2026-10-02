# Brandon Rodriguez's research website

A responsive, static academic portfolio. No build step, package installation, analytics, or external font service is required.

## Preview

Run `python -m http.server 8765` from this folder, then open http://localhost:8765.
You can also open `index.html` directly.

## Files

- `index.html`: biography, publications, projects, education, and experience.
- `styles.css`: responsive layout, self-hosted fonts, illustrations, and print styles.
- `script.js`: mobile navigation and current-section navigation indicator.
- `papers/Brandon_Rodriguez_CV.pdf`: the supplied October 2026 CV.
- `papers/`: research paper and thesis PDFs.
- `fonts/` and `img/`: existing local typefaces and photographs.

## Publish to UF

Upload `index.html`, `styles.css`, `script.js`, `favicon.svg`, `robots.txt`, and the `fonts/`, `img/`, and `papers/` directories to the document root serving `https://www.cise.ufl.edu/~brandonrodriguez/` using your existing UF publishing method. All asset links are relative and work under this subdirectory. Keep a backup of the deployed site before replacing its files.

The canonical URL and social sharing metadata point to the UF address. `vercel.json` remains available for optional Vercel hosting; change the canonical metadata if the primary public address changes.

## Content maintenance

The supplied CV is the source for current positions, education, publications, and project descriptions. The existing repository supplied personal interests, photographs, paper files, and the CondVQA repository link. Research illustrations are conceptual diagrams, not experimental results. Replace the CV PDF at its existing path when updating it, and update the corresponding page text.

The page works without JavaScript; the mobile menu becomes an inline navigation row. Animations and smooth scrolling respect reduced-motion preferences.
