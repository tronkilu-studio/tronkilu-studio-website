# tronkilu.studio

Personal site of Ergi Shkëlzeni, visual designer and illustrator based in Grenoble, France.

Static HTML, CSS and vanilla JavaScript. No build step, no frameworks, no trackers, no cookies. Served over HTTPS on GitHub Pages.

## Structure

```
index.html              Redirects to /en/, /fr/ or /al/ (saved choice, then browser language)
en/ fr/ al/             One folder per language
  index.html            Homepage
  privacy/index.html    Privacy policy
  legal/index.html      Legal notice
privacy/ legal/         Redirects to the language version
404.html                Not found page
assets/fonts/           Archivo (variable, self-hosted)
assets/video/           Hero video
assets/                 Favicons, share image
sitemap.xml robots.txt  Search engines
CNAME                   Custom domain
```

Each language page is pre-rendered in its language. All copy also lives in an `I18N` object near the bottom of each HTML file, with English, French and Albanian side by side.

## Licence

All content, illustrations and code in this repository are © Ergi Shkëlzeni. Published for transparency, not for reuse.
