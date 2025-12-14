# Front-End Components
A collection of reusable front-end UI components, examples, and small utilities for quick prototyping and inclusion in projects. Each folder contains a standalone example HTML file plus any CSS/JS/assets needed.

## Contents
- `alert/` — Alert examples
- `buttons/` — Various button styles and demos
- `cards/` — Card UI examples
- `confirm/` — Confirm dialog examples
- `Digital Clock With Reflection/` — Clock demo with reflection effect
- `Front-End Tutorials/` — Tutorial pages and Sass sources
- `images/` — Project images
- `images slider/` — Image slider demo
- `loading/` — Loading animation demo
- `nav/` — Navigation examples
- `radios/` — Custom radio inputs
- `select/` — Custom select demos
- `show-hide password/` — Show/hide password UI
- `Sidebar Menu/` — Sidebar menu demo
- `webfonts/` — Local webfonts
- `all.min.css` — Global compiled CSS used by some demos
- Other CSS/JS files within component folders as needed

## Quick Start
1. Browse the folder and open any demo in a browser:
   - Open the folder for a component and load the HTML file (e.g., `buttons/button1.html`).
2. To reuse a component in your project:
   - Copy the component folder (e.g., `cards/`) into your project.
   - Include the component CSS and JS (or merge into your build).
   - Import `all.min.css` if you want the project's shared styles:
```html
<link rel="stylesheet" href="path/to/all.min.css">
```
3. For JS-driven demos, include the script(s) from the component folder, e.g.:
```html
<script src="path/to/component/main.js"></script>
```

## Usage Tips
- Many demos are standalone and demonstrate one UI element — copy only the files you need.
- If you use the Sass sources (found under `Front-End Tutorials/css/sass/`), compile them into your project's stylesheet.
- Keep file paths intact if demos reference relative assets (images or fonts).

## Development
- Edit the HTML/CSS/JS files directly for small tweaks.
- If you use Sass, the `_tutorials.scss` and subfolders contain partials that can be imported into your main Sass build.

## License
Use these components freely in personal and commercial projects. If you want a formal license, add a `LICENSE` file (e.g., MIT).

