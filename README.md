
# All Things Crochet — complete four-page website

A responsive website about crochet and amigurumi with a custom original logo, an image gallery, practical articles, three complete original crochet patterns, and an interactive yarn yardage calculator.

## Open the website

1. Open `index.html` in any modern browser.
2. Use the top menu to visit **HOME**, **AMIGURUMI**, **TIPS**, or **PATTERNS & TOOLS**.
3. On Patterns & Tools, adjust the calculator measurements to see estimates update automatically.
4. For an online website, upload all files and the `assets` folder to a static host such as Netlify, GitHub Pages, or your own hosting service. Keep the relative filenames and folder layout unchanged.

The HTML, CSS, JavaScript, logo, and favicon are included. You can edit the design in `styles.css`, or website content in the four `.html` files. `build_site.py` contains the original page-generation source; changing that script and rerunning it will regenerate the HTML pages. Avoid rerunning it after editing HTML directly.

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
