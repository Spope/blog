# Hugo Blog — Project Context

## Stack

- **Hugo** 0.160.0 extended (installed via Homebrew)
- **Theme** — [Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke), stored in `themes/ananke/`. The theme's `.git` folder was removed so it can be committed as plain files in the project repo.
- **GLightbox** — loaded from CDN (jsDelivr), no npm/Node required.

---

## Project structure

```
blog/
├── hugo.toml                          ← site config
├── content/
│   └── posts/
│       └── my-post/                   ← page bundle (preferred format)
│           ├── index.md               ← post content
│           └── pics/                  ← images and videos for this post
├── layouts/
│   ├── partials/
│   │   └── head-additions.html        ← overrides the empty theme hook
│   └── shortcodes/
│       ├── thumb.html                 ← resized thumbnail → lightbox
│       ├── gallery.html               ← responsive 2-column grid wrapper
│       └── video.html                 ← video preview → lightbox
├── static/
│   └── css/
│       └── custom.css                 ← gallery + video responsive styles
├── themes/
│   └── ananke/                        ← theme files (do not edit)
└── public/                            ← generated output, always disposable
```

---

## Customizations

### `layouts/partials/head-additions.html`

Overrides the empty hook Ananke provides in `<head>`. Hugo always checks `layouts/` before `themes/`, so this replaces the theme file without touching it.

Does three things:
1. Loads GLightbox CSS from CDN
2. Loads GLightbox JS from CDN
3. Runs a JS snippet on `DOMContentLoaded` that wraps every `<img>` inside `.nested-copy-line-height` (Ananke's post content div) in a `<a class="glightbox">` link, then calls `GLightbox()` once. Video files (`.mp4`, `.webm`, `.ogg`) are skipped because the `video` shortcode already outputs its own lightbox link.

### `layouts/shortcodes/thumb.html`

Resizes an image at build time using Hugo's built-in image processing and outputs a thumbnail. The full-size URL is stored in a `data-fullsrc` attribute so the JS lightbox link points to the original.

Usage (image must be inside the page bundle):
```
{{< thumb src="pics/photo.jpg" alt="Description" >}}
{{< thumb src="pics/photo.jpg" alt="Description" width="400" >}}  ← default width: 300px
```

### `layouts/shortcodes/gallery.html`

A paired shortcode that wraps `thumb` and `video` shortcodes in a `.thumb-gallery` flex container. CSS makes it display 2 items per row, responsive down to squares on mobile.

Usage:
```
{{< gallery >}}
{{< thumb src="pics/a.jpg" alt="..." >}}
{{< thumb src="pics/b.jpg" alt="..." >}}
{{< video src="pics/clip.mp4" alt="..." >}}
{{< /gallery >}}
```

All items inside a gallery (images and videos) are part of the same GLightbox gallery and can be navigated with arrow keys or swipe.

### `layouts/shortcodes/video.html`

Outputs a video preview (first frame, no controls) wrapped in a GLightbox link with `data-type="video"`. Works standalone or inside a `gallery`. A CSS `▶` overlay signals it is a video.

Usage:
```
{{< video src="pics/clip.mp4" alt="Description" >}}
```

### `static/css/custom.css`

Styles for the gallery grid and video thumbnails:
- `.thumb-gallery` — flexbox, wraps every 2 items
- `.thumb-gallery .thumb-item` — `flex: 0 0 calc(50% - 4px)`, overflow hidden
- `.thumb-item.thumb-video` — `aspect-ratio: 16/9`, play icon via `::after`
- Mobile (`≤ 480px`) — items forced to `aspect-ratio: 1` (square)

---

## Content conventions

### Page bundles (always use this format)

Each post is a **directory** with an `index.md` and its media alongside it:

```
content/posts/my-post/
├── index.md
└── pics/
    ├── photo.jpg
    └── clip.mp4
```

Never create both `my-post.md` and `my-post/` at the same time — Hugo will fail to associate images as page resources, and shortcodes will silently output nothing.

### Plain Markdown images

Standard Markdown image syntax works and is automatically included in the lightbox:
```markdown
![Alt text](pics/photo.jpg)
```

### Front matter

Posts use TOML front matter (the `+++` block). Key fields:
```toml
+++
date = '2026-01-01T00:00:00+02:00'
draft = true      # hidden from normal builds, visible with --buildDrafts
title = 'My Post'
tags = ['tag1', 'tag2']
+++
```

### HTML comments in Markdown

```html
<!-- This will not appear on the page -->
```

---

## Common commands

```bash
# Local dev server (includes draft posts, cleans stale files first)
rm -rf public/ && hugo server --buildDrafts

# Production build
rm -rf public/ && hugo

# Install Hugo (first time)
brew install hugo
```

### Stale files in `public/`

Hugo never deletes files from `public/` on its own. If you delete a post or rename a file, always `rm -rf public/` before rebuilding. `public/` is 100% generated and safe to delete at any time.

---

## Known gotchas

- **Flat file + bundle conflict** — if Vim (or any editor) creates `my-post.md` while `my-post/index.md` exists, Hugo silently breaks resource loading for that post. Always open `content/posts/my-post/index.md` directly.
- **`cleanDestinationDir` config** — does not reliably clean `public/` in this setup. Use `rm -rf public/` instead.
- **Image paths in shortcodes** — paths are relative to the page bundle root, so `pics/photo.jpg` not just `photo.jpg`.
- **Shortcode syntax** — use `{{< shortcode >}}`, not `{{</* shortcode */>}}` (the latter is the escaped form used in documentation and renders as literal text).
