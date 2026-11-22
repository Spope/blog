# Hugo Blog — Project Context

## Stack

- **Hugo** extended, installed via Homebrew locally. CI pins **0.160.0** in `.github/workflows/hugo.yaml`; anything newer works locally.
- **No theme.** Every template lives in `layouts/` (Hugo 0.146+ folder structure). Ananke was used originally and has been removed entirely.
- **No dependencies.** Plain CSS and vanilla JS in `static/` — no npm, no CDN libraries. Only external loads: Google Fonts (Inter, JetBrains Mono) and Umami analytics.
- **Hosting** — GitHub Pages, deployed by pushing to `main`.

---

## Project structure

```
blog/
├── hugo.toml                          ← site config
├── archetypes/default.md              ← template used by `hugo new`
├── content/
│   ├── _index.md                      ← homepage front matter (title only)
│   └── posts/
│       ├── _index.md                  ← build options: no /posts/ list page
│       └── my-post/                   ← page bundle (always use this format)
│           ├── index.md               ← post content
│           └── pics/                  ← images and videos for this post
├── layouts/
│   ├── baseof.html                    ← HTML skeleton: <head>, lightbox markup, footer
│   ├── home.html                      ← index: numbered list + sticky hover preview
│   ├── page.html                      ← a post: sticky aside + prose + older/newer nav
│   ├── 404.html                       ← "page not found", post-page styling
│   ├── _partials/
│   │   └── head-additions.html        ← Umami analytics script
│   └── _shortcodes/
│       ├── gallery.html               ← 2-column grid wrapper
│       ├── thumb.html                 ← resized square thumbnail → lightbox
│       └── video.html                 ← video tile → lightbox
├── static/
│   ├── css/blog.css                   ← all styles
│   └── js/blog.js                     ← ToC scrollspy, homepage hover, lightbox
├── scripts/strip-exif.sh              ← strips metadata from images and .mp4
├── .claude/commands/proofread.md      ← /proofread command
└── public/                            ← generated output, always disposable
```

---

## What gets published

Only the homepage, the posts, `404.html`, the RSS feed (`index.xml`) and `sitemap.xml`.

- **Tag and category pages are disabled** — `disableKinds = ['taxonomy', 'term']` in `hugo.toml`. `tags` in front matter are kept as metadata but generate no pages.
- **No `/posts/` list page** — `content/posts/_index.md` sets `build.render = 'never'` and `build.list = 'never'`. The posts themselves still publish, and `.PrevInSection` / `.NextInSection` still work.
- With no theme, any page kind without a matching template in `layouts/` makes Hugo warn. Add a template before enabling a new page kind.

---

## Templates

### `layouts/baseof.html`

Shared skeleton. Sets `<html lang>` from `site.Language.Locale` (the `locale` key in `hugo.toml`), loads fonts, `/css/blog.css` and `/js/blog.js`, and contains the lightbox markup (`#lightbox`) used on every page. Child templates fill `{{ define "main" }}` and may override `{{ define "title" }}`.

### `layouts/home.html`

Lists `where .Site.RegularPages "Section" "posts"`, numbered in reverse. Each post's `featured_image` is resized to a 128×168 row thumbnail and also shown full size in the sticky preview panel on hover. If the post's `featured_image_class` contains `contain`, the image is fitted instead of cropped.

### `layouts/page.html`

Post page. The aside shows date, title, `description` and the table of contents; the body is `.prose`. Older/newer links use `.PrevInSection` / `.NextInSection`.

### `layouts/_partials/head-additions.html`

Umami analytics script, included from `baseof.html`. To disable tracking, empty the file — don't delete it, or the build fails.

---

## Shortcodes

Paths are relative to the post bundle (`pics/photo.jpg`). A missing file produces a build warning, not an error.

### `thumb`

Crops the image to a square at build time (`.Fill`, default 600px) and outputs `.tile[data-src][data-type=image]`. The lightbox opens the original file.
```
{{< thumb src="pics/photo.jpg" alt="Description" >}}
{{< thumb src="pics/photo.jpg" alt="Description" size="400" >}}
```

### `video`

Outputs `.tile.tile-video[data-type=video]` with a muted first-frame `<video>` and a `▶ VIDEO` badge. Inside a gallery it opens in the lightbox; standalone it is shown 16:9, full width.
```
{{< video src="pics/clip.mp4" alt="Description" >}}
```

### `gallery`

Paired shortcode; wraps tiles in `.media-group`, a 2-column CSS grid.
```
{{< gallery >}}
{{< thumb src="pics/a.jpg" alt="..." >}}
{{< thumb src="pics/b.jpg" alt="..." >}}
{{< video src="pics/clip.mp4" alt="..." >}}
{{< /gallery >}}
```

---

## `static/js/blog.js`

Three independent blocks:
1. **ToC scrollspy** — highlights the current heading in the post aside.
2. **Homepage hover** — shows the hovered post's preview image. On touch screens in the 2-column layout, the first tap previews and the second tap opens the post.
3. **Lightbox** — collects every `.tile` and plain `<img>` inside `.prose`, in page order, into one set for the whole post. Arrow keys and swipe navigate, Esc closes. Plain images use `data-fullsrc` if present, otherwise `src`.

---

## Design system (`static/css/blog.css`)

- Colours: `--bg: #F6F4EF`, `--ink: #111`, `--ink-soft: #5a564e`, `--accent: #C64B2E`
- Fonts: Inter (body), JetBrains Mono (dates, labels, metadata)
- Homepage: 1360px max width, list + 420px sticky preview
- Post: 1100px max width, 300px aside + 640px prose

---

## Content conventions

### Page bundles

Each post is a **directory** with `index.md` and its media in `pics/`:
```bash
hugo new content posts/my-post/index.md
mkdir content/posts/my-post/pics
```

Never create both `my-post.md` and `my-post/` — Hugo stops associating the images as page resources and the shortcodes output nothing.

### Front matter

TOML (`+++` block):
```toml
+++
date = '2026-01-01T00:00:00+02:00'
draft = true                        # hidden unless built with -D
title = 'My Post'
description = 'Short subtitle'      # shown on the index and post aside; no trailing period
tags = ['tag1', 'tag2']             # metadata only, no tag pages
featured_image = 'pics/1.jpg'       # index thumbnail + hover preview; must be in the bundle
featured_image_class = 'contain'    # optional: show the whole image instead of cropping
+++
```

### Plain Markdown images

`![Alt text](pics/photo.jpg)` renders full width in the prose column and is included in the lightbox.

---

## Common commands

```bash
# Local dev server, including drafts
hugo server -D

# Production build
rm -rf public/ && hugo

# Strip metadata from media before committing (all posts, or one folder/file)
./scripts/strip-exif.sh
./scripts/strip-exif.sh content/posts/my-post
```

Hugo never deletes files from `public/`. After deleting or renaming a post, `rm -rf public/` before rebuilding.

---

## Known gotchas

- **Flat file + bundle conflict** — if an editor creates `my-post.md` next to `my-post/index.md`, resource loading breaks silently for that post. Always open `content/posts/my-post/index.md` directly.
- **`cleanDestinationDir`** — does not reliably clean `public/` in this setup. Use `rm -rf public/`.
- **`.Params` vs site params** — `$p.Params.x` reads only the page's front matter; it never falls back to `[params]` in `hugo.toml`.
- **Shortcode syntax** — use `{{< shortcode >}}`, not `{{</* shortcode */>}}` (the escaped form used in documentation, which renders as literal text).
