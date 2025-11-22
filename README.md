# Shaoguang Wang | Academic Homepage

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fshaoguangwang.github.io%2F&label=Status)](https://shaoguangwang.github.io/)
![License](https://img.shields.io/badge/license-MIT-blue)

This repository contains the source code for my personal academic website: [**https://shaoguangwang.github.io/**](https://shaoguangwang.github.io/).

The website is designed with a **minimalist academic style**, focusing on clean typography, responsive layout, and content readability. It is hosted on GitHub Pages and uses a dynamic Markdown parsing approach.

## ✨ Features

- **Minimalist Design**: Clean "Left-Text-Right-Image" layout optimized for academic profiles.
- **Responsive**: Fully adapted for mobile devices, tablets, and desktops.
- **Dynamic Content**: Content is written in Markdown (`.md`) and rendered dynamically via JavaScript, requiring no build step (Jekyll/Hugo independent).
- **LaTeX Support**: Integrated with [MathJax](https://docs.mathjax.org/en/latest/index.html) for rendering mathematical formulas.
  - Inline: `$ E=mc^2 $`
  - Block: `$$ \sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6} $$`

## 📂 Project Structure

The project structure is organized to separate content from logic and styling:

```text
.
├── index.html          # The main entry point (Layout skeleton)
├── contents/           # Content files (Edit these to update the website)
│   ├── home.md         # Intro & News
│   ├── publications.md # Papers list
│   ├── projects.md     # Projects list
│   └── ...
├── static/
│   ├── css/            # Stylesheets (main.css contains the custom styling)
│   ├── js/             # JavaScript logic for parsing Markdown
│   └── assets/         # Images and icons
└── README.md
```

## 🛠️ How it Works

Unlike traditional static site generators, this website does not require compiling. 
When the page loads, JavaScript fetches the Markdown files from the `contents/` directory, parses them into HTML, and injects them into the `index.html` structure.

### Customization

To update the website content:
1.  **Modify Text**: Edit the `.md` files in the `contents/` folder.
2.  **Modify Styles**: Edit `static/css/main.css`.
3.  **Update Images**: Place new images in `static/assets/img/` and update references in the Markdown files.

## 🚀 Deployment

This project is deployed using **GitHub Pages**.
Any changes pushed to the `main` branch are automatically live within minutes.


## 📄 License

This project is open source and available under the [MIT License](LICENSE).