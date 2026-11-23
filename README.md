# Sarath — Interactive Product Designer Portfolio

A responsive, single-page product design portfolio for Sarath.

## Features
- Six case studies across Capillary Technologies, Onsurity, and a personal design-system exploration
- Interactive category filters and detailed case-study dialog
- Light/dark theme toggle
- A functional three-step *fictional* subscription UX demo (runs entirely in-browser, stores no form data)
- Mobile navigation, keyboard-friendly controls, motion preferences, and scrolling effects
- No app build step, backend, or secrets required

## Publish on GitHub Pages
1. Go to **Settings → Pages** for this repository:
   https://github.com/Sarath-41/Sarath007001/settings/pages
2. Set **Source** to **Deploy from a branch**.
3. Select branch **main**, folder **/(root)**, and click **Save**.
4. Once GitHub Pages reports successful publication, the site will be accessible at:
   https://sarath-41.github.io/Sarath007001/

GitHub may need a little time to publish the site after enabling Pages. Edits pushed to the main branch will redeploy automatically.

## Edit the content
- `index.html`: structure, page copy and illustrated preview markup.
- `style.css`: themes, layout, components, motion, responsive styles.
- `script.js`: case-study details, filters, theme switcher and interactive demo.

The illustrated project previews are *original concepts*, not production screenshots. The sample demo is fictional and does not create real subscriptions. Verify any employer-specific details and obtain permission before adding confidential product material.

Contact links currently point to the public GitHub profile; swap them for verified professional contact and social channels if desired.

## Run locally
Open `index.html` in a browser, or launch any static server from the repository directory:
```bash
python3 -m http.server 8080
```
Then visit http://localhost:8080.
