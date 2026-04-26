const content_dir = 'contents/';
const config_file = 'config.yml';
const section_names = ['home', 'publications', 'awards', 'projects'];

window.addEventListener('DOMContentLoaded', () => {
    // Activate Bootstrap scrollspy on the main nav.
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when a nav link is clicked.
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    document.querySelectorAll('#navbarResponsive .nav-link').forEach((navItem) => {
        navItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
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
