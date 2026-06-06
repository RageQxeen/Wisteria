# Wisteria RP World Guide

This is a static website designed to run on GitHub Pages.

## Files

- `index.html` - Main website content and layout.
- `styles.css` - All visual styling.
- `script.js` - Navigation switching, mobile menu, and race filtering.
- `assets/images/` - Place future images here.

## How to use on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this project.
3. Go to Settings > Pages.
4. Under Branch, select `main` and `/root`.
5. Save and wait for GitHub Pages to publish.

## Adding images later

Place images in `assets/images/`, then replace image placeholder divs in `index.html` with image tags like:

```html
<img src="assets/images/vixen-market.jpg" alt="The Vixen Market skyline" class="section-image" />
```

You can add `.section-image` to `styles.css` if needed:

```css
.section-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}
```


## Included Image Assets

The site now includes the provided Wisteria images inside `assets/images/` and references them directly from the HTML for GitHub Pages compatibility. Replace or rename images inside that folder as needed, then update the matching `<img src="...">` paths in `index.html`.


## Latest image update

Additional Wisteria banners, location headers, city maps, holiday headers, and character/faction visuals have been added under `assets/images/`.


## Latest Update
- Overview banner now displays as a full horizontal image.
- Current Play Focus uses a 250x250 graphic at `assets/images/current-play-focus.png`.
