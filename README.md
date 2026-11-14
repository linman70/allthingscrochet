# All Things Crochet — complete five-page website

A responsive website about crochet and amigurumi with a custom original logo, an image gallery, practical articles, three complete original crochet patterns, and an interactive yarn yardage calculator.

## Open the website

1. Open `index.html` in any modern browser.
2. Use the top menu to visit **HOME**, **AMIGURUMI**, **TIPS**, **PATTERNS**, or **CONTACT**.
3. On Patterns & Tools, adjust the calculator measurements to see estimates update automatically.
4. For an online website, upload all files and the `assets` folder to a static host such as Netlify, GitHub Pages, or your own hosting service. Keep the relative filenames and folder layout unchanged.

The HTML, CSS, JavaScript, logo, and favicon are included. You can edit the design in `styles.css`, or website content in the five `.html` files. `build_site.py` contains the original page-generation source; changing that script and rerunning it will regenerate the HTML pages. Avoid rerunning it after editing HTML directly.

## Images and attribution

The photo galleries use **remote, freely reusable photographs from Wikimedia Commons** so the website needs internet access to display the photos. Images are not bundled in the ZIP. Attribution links, author names, and license types are shown in the **Photo credits & licenses** dropdown in each page footer. Please preserve these credits. Photos are illustrative: original site patterns and photographers' pieces may not match exactly. The main brand logo is an original generated graphic and is included locally as `assets/all-things-crochet-logo.webp`.

Photo license types include Creative Commons Attribution (CC BY), Attribution-ShareAlike (CC BY-SA), and Creative Commons Zero (CC0). Check the linked file page before substantially modifying or redistributing specific photos. The website design and instructional text are separate from the licensed photographs.

## Yardage calculator methodology

For flat, rectangular projects, the calculation is:

`estimated grams = swatch grams × (project width × project height) / (swatch width × swatch height) × (1 + extra allowance / 100)`

`estimated yards = estimated grams × skein yards / skein grams`

`skeins = round up(estimated grams / skein grams)`

Results are approximations, not guarantees. Allow for stitch pattern, gauge, shaping, fringe, and other project differences.

## Disclaimer

Pet-toy projects require supervision. Do not use any yarn toy for a pet that chews or swallows fabric or stuffing. Children's amigurumi should not use small detachable decorations or plastic safety eyes. Patterns use US stitch terminology.


## Page 5: Contact (Formspree)

The website includes `contact.html` with the matching purple-and-blue design and a CONTACT link in the navigation and footer on all five pages. The Home page has a button linking to the dedicated Contact page.

The Contact form uses plain HTML with `action="https://formspree.io/f/mgakonzz"` and `method="POST"`. It collects name, email, subject, and message. A hidden `_subject` field adds an email heading, and a hidden `_gotcha` field provides basic bot filtering. All visible fields are required. No React, server code, JavaScript library, or API key is needed.

Before publishing, make sure Formspree has a verified recipient email for form `mgakonzz`. Upload the entire website folder contents (all HTML files, `styles.css`, `script.js`, and `assets`) to your static web host. Open the published `contact.html`, make a real test submission, and verify it in Formspree and your email inbox. No test submissions were sent during site creation. Formspree normally displays a confirmation page after sending.

The original `build_site.py` is included as legacy reference; rerunning it will overwrite generated HTML pages and can undo the new Contact page navigation changes. Edit the HTML directly rather than regenerating.
