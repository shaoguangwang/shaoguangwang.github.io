# Shaoguang Wang — Academic Homepage

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Site](https://img.shields.io/badge/Live-shaoguangwang.github.io-success)](https://shaoguangwang.github.io/)
[![Built with](https://img.shields.io/badge/Built%20with-HTML%20%2B%20Bootstrap%205-563d7c)](https://getbootstrap.com/)

Source code for my personal academic website at **<https://shaoguangwang.github.io/>**.

The site is a lightweight, build-free static page that renders Markdown content on the client, designed for clean academic use.

---

## Features

- **No build step** — pure HTML / CSS / JS, content authored in Markdown and parsed in the browser via [marked.js](https://github.com/markedjs/marked).
- **Responsive layout** — works on desktop, tablet, and mobile (Bootstrap 5).
- **LaTeX rendering** — math via [MathJax 3](https://www.mathjax.org/) (`$inline$` and `$$display$$`).
- **Modular content** — each section (`home`, `publications`, `awards`, `projects`) lives in its own Markdown file under [`contents/`](contents/).
- **Hosted on GitHub Pages** — push to `main`, the site updates automatically in 1–3 minutes.

---

## Project Structure

```
.
├── index.html              # Page skeleton + section anchors
├── contents/               # Edit these files to update the website
│   ├── config.yml          # Site-wide config (title, name, links)
│   ├── home.md             # Bio, news, education, research interests
│   ├── publications.md     # Paper list
│   ├── awards.md           # Awards / honors
│   └── projects.md         # Selected projects
├── static/
│   ├── css/
│   │   ├── styles.css      # Bootstrap base theme (vendored)
│   │   └── main.css        # Custom academic styling (edit this)
│   ├── js/
│   │   ├── scripts.js      # App entry: loads config + renders Markdown
│   │   ├── marked.min.js   # Markdown parser (vendored)
│   │   ├── js-yaml.min.js  # YAML parser (vendored)
│   │   └── bootstrap.bundle.min.js
│   └── assets/
│       ├── favicon.ico
│       └── img/            # Photo, logos, paper figures
├── LICENSE
└── README.md
```

---

## Local Preview

The site uses `fetch()` to load Markdown files, so opening `index.html` directly with `file://` will not work. Serve it over HTTP:

```bash
# Python (no install needed)
python3 -m http.server 8000

# Or, with Node.js
npx serve -p 8000
```

Then open <http://localhost:8000/>.

> **VS Code users** — install the *Live Server* extension and click "Go Live" for auto-reload on save.

---

## Updating Content

| To change... | Edit... |
| --- | --- |
| Bio / news / education / research interests | [`contents/home.md`](contents/home.md) |
| Publications list | [`contents/publications.md`](contents/publications.md) |
| Awards / honors | [`contents/awards.md`](contents/awards.md) |
| Projects | [`contents/projects.md`](contents/projects.md) |
| Site title, name, social links | [`contents/config.yml`](contents/config.yml) |
| Visual styling (fonts, spacing, colors) | [`static/css/main.css`](static/css/main.css) |
| Photo / paper figures / logos | drop into [`static/assets/img/`](static/assets/img/), then reference from Markdown |

After saving, refresh the browser. To deploy, commit and `git push origin main` — GitHub Pages handles the rest.

---

## Tech Stack

- **HTML5** + **CSS3** (custom `main.css` over vendored Bootstrap 5)
- **JavaScript** (vanilla, no framework)
- **Markdown** rendering: [marked.js 5.x](https://github.com/markedjs/marked)
- **YAML** parsing: [js-yaml](https://github.com/nodeca/js-yaml)
- **Math typesetting**: [MathJax 3](https://www.mathjax.org/)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/)

---

## Acknowledgments

The HTML scaffold is adapted from the [Start Bootstrap — New Age](https://startbootstrap.com/theme/new-age) template (MIT licensed). The dynamic-Markdown loading approach was inspired by community academic homepages on GitHub Pages.

---

## License

Distributed under the [MIT License](LICENSE). © 2024–2026 Shaoguang Wang.
