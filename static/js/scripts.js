const content_dir = 'contents/';
const config_file = 'config.yml';
const section_names = ['home', 'publications', 'background', 'service', 'memberships', 'awards', 'projects'];

window.addEventListener('DOMContentLoaded', () => {
    // Keep the current section visible in navigation as the page scrolls.
    const navigationLinks = [...document.querySelectorAll('#navbarResponsive .nav-link')];
    function activateSection(id) {
        navigationLinks.forEach((link) => {
            const active = link.getAttribute('href') === '#' + id;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    }
    activateSection('home');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) activateSection(entry.target.dataset.navSection || entry.target.id);
        });
    }, {rootMargin: '-18% 0px -72% 0px', threshold: 0});
    document.querySelectorAll('body > section, .community-grid > section').forEach((section) => sectionObserver.observe(section));

    // Collapse responsive navbar when a nav link is clicked.
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    document.querySelectorAll('#navbarResponsive .nav-link').forEach((navItem) => {
        navItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Event delegation also covers figures loaded asynchronously from Markdown.
    const figureDialog = document.getElementById('paper-figure-dialog');
    const enlargedFigure = figureDialog.querySelector('.figure-dialog-image');
    let previousOverflow = '';
    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('.paper-figure-trigger');
        if (!trigger) return;
        const image = trigger.querySelector('img');
        enlargedFigure.src = image.currentSrc || image.src;
        enlargedFigure.alt = image.alt;
        document.getElementById('paper-figure-title').textContent = trigger.dataset.figureTitle || 'Paper figure';
        previousOverflow = document.body.style.overflow;
        figureDialog.showModal();
        document.body.style.overflow = 'hidden';
    });
    figureDialog.querySelector('.figure-dialog-close').addEventListener('click', () => figureDialog.close());
    figureDialog.addEventListener('close', () => { document.body.style.overflow = previousOverflow; });
    figureDialog.addEventListener('click', (event) => {
        if (event.target !== figureDialog) return;
        const bounds = figureDialog.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) figureDialog.close();
    });

    // Inject site config (title, name, etc.) from YAML.
    fetch(content_dir + config_file)
        .then((response) => response.text())
        .then((text) => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach((key) => {
                const el = document.getElementById(key);
                if (el) {
                    el.innerHTML = yml[key];
                } else {
                    console.warn(`No element with id "${key}" — skipping.`);
                }
            });
        })
        .catch((error) => console.error('Failed to load config:', error));

    // Render Markdown sections, then trigger MathJax.
    marked.use({ mangle: false, headerIds: false });
    section_names.forEach((name) => {
        fetch(content_dir + name + '.md')
            .then((response) => response.text())
            .then((markdown) => {
                document.getElementById(name + '-md').innerHTML = marked.parse(markdown);
            })
            .then(() => MathJax.typeset())
            .catch((error) => console.error(`Failed to load ${name}.md:`, error));
    });
});
