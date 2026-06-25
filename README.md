# Yulia Komarova

Modern personal landing page for **Yulia Komarova** — concerts, backstage, sport, art and energy.

## Status

Static GitHub Pages site. Current branch improves the first prototype into a more complete turnkey personal profile.

## Deployment

The repository contains a GitHub Actions workflow:

```text
.github/workflows/pages.yml
```

GitHub Pages should use:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

Expected URL:

```text
https://denis7kom.github.io/yulia-komarova/
```

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages
- GitHub Actions

## Current site features

- Apple-style visual direction;
- liquid glass interface;
- responsive one-page landing;
- canvas aurora background;
- scroll progress bar;
- scroll reveal effects;
- animated counters;
- command palette with `Ctrl/⌘ + K`;
- custom cursor glow;
- magnetic buttons;
- 3D tilt cards;
- spotlight bento cards;
- copyable content brief button;
- favicon;
- no frontend dependencies;
- no backend and no database.

## Content work

Real personal data should be added after filling out:

```text
CONTENT_BRIEF.md
```

The current page intentionally avoids unverified achievements, years of experience, named artists or inflated numbers. Those should be added only after confirmation.

## Suggested next upgrades

- add real public photos in `assets/img`;
- add Open Graph preview image;
- add real cases / events section;
- add Telegram / WhatsApp / email CTA;
- add JSON-LD structured data;
- add multilingual mode if needed;
- add form endpoint if the site needs requests from clients.
