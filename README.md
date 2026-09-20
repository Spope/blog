# blog.spope.fr

A personal project archive built with [Hugo](https://gohugo.io/), a static site
generator. There is no database, no server-side code and no build step beyond
Hugo itself: Markdown files in `content/` plus HTML templates in `layouts/` are
compiled into a folder of plain HTML/CSS/JS, which GitHub Pages serves.

---

## Requirements

| Tool | Why | Install |
|---|---|---|
| **Hugo extended** | builds the site | `brew install hugo` |
| exiftool | strips EXIF metadata (GPS, camera) from photos | `brew install exiftool` |
| ffmpeg | strips metadata from `.mp4` videos | `brew install ffmpeg` |

The *extended* build is required (it is what Homebrew installs by default).
CI pins Hugo **0.160.0**; anything of that version or newer works locally.

No Node, npm or Go dependencies — nothing to `npm install`.

---

## Project structure

```
blog/
├── hugo.toml                  ← site config (title, baseURL, taxonomies)
├── archetypes/default.md      ← template used by `hugo new`
├── content/
│   ├── _index.md              ← homepage front matter
│   └── posts/
│       └── my-post/           ← one directory per post ("page bundle")
│           ├── index.md       ← the post itself
│           └── pics/          ← its images and videos
├── layouts/                   ← the custom theme (overrides everything)
│   ├── _default/baseof.html   ← HTML skeleton: <head>, footer, lightbox markup
│   ├── _default/single.html   ← a post page
│   ├── home.html              ← the index (numbered list + hover preview)
│   ├── partials/
│   │   └── head-additions.html← Umami analytics tag
│   └── shortcodes/            ← gallery / thumb / video (see below)
├── static/                    ← copied verbatim to the site root
│   ├── css/blog.css           ← all styles
│   ├── js/blog.js             ← hover preview + lightbox
│   └── images/hero.jpg
├── scripts/strip-exif.sh      ← metadata cleaner for media
├── .github/workflows/hugo.yaml← build + deploy pipeline
├── public/                    ← generated output (gitignored, disposable)
└── resources/                 ← Hugo's image-resize cache (gitignored)
```

**Templating.** Hugo looks in `layouts/` before `themes/`, so every file above
wins over the theme. `hugo.toml` still declares `theme = 'ananke'` from the
original setup, but no Ananke template is used any more — the site renders
entirely from `layouts/`.

---

## Running it locally

```bash
hugo server -D
```

Then open <http://localhost:1313/>. The server watches the files and reloads the
browser on every save. `-D` (`--buildDrafts`) also renders posts marked
`draft = true`, which is how a post in progress is previewed.

To reproduce exactly what production will look like (drafts excluded):

```bash
rm -rf public/ && hugo
```

`public/` is 100% generated and safe to delete at any time. Hugo never removes
stale files from it on its own, so after deleting or renaming a post, wipe the
folder before rebuilding, otherwise the old page stays around.

---

## Writing a post

### 1. Create the page bundle

```bash
hugo new posts/my-post/index.md
mkdir content/posts/my-post/pics
```

A post is always a **directory** containing `index.md`, with its media in
`pics/` next to it. This is what lets the shortcodes find the images as "page
resources". Never create both `my-post.md` and `my-post/` — Hugo then silently
stops associating the images and the galleries render empty.

### 2. Fill in the front matter

The `+++` block at the top of `index.md` is TOML metadata, not content:

```toml
+++
date = '2026-04-04T21:45:14+02:00'
draft = true                       # true = only visible with `hugo server -D`
title = 'Scissor Lamp'
description = 'Raising the light'  # subtitle on the index and post page
tags = ['lamp', 'LED', 'diy']
featured_image = 'pics/beauty1.jpg'# thumbnail + hover preview on the index
+++
```

`featured_image` is a path relative to the bundle, and the file must live inside
the post directory.

### 3. Add media with the shortcodes

Shortcodes are template calls usable from Markdown. Paths are relative to the
post directory.

```
{{< thumb src="pics/photo.jpg" alt="Description" >}}        square thumbnail, opens in the lightbox
{{< thumb src="pics/photo.jpg" alt="..." size="400" >}}     default size is 600px
{{< video src="pics/clip.mp4" alt="Description" >}}         video tile with a ▶ badge
```

Wrap several of them in a `gallery` to get the two-column grid — everything
inside one gallery becomes a single lightbox set, navigable with the arrow keys
or by swiping:

```
{{< gallery >}}
{{< thumb src="pics/1.jpg" >}}
{{< thumb src="pics/2.jpg" >}}
{{< video src="pics/clip.mp4" >}}
{{< /gallery >}}
```

Plain Markdown images (`![Alt](pics/photo.jpg)`) also work and are displayed
full width in the text column.

Thumbnails are generated at build time by Hugo and cached in `resources/`; the
lightbox always links to the original file.

### 4. Strip the metadata from the media

Photos out of a phone carry GPS coordinates and device info. Before committing:

```bash
./scripts/strip-exif.sh
```

It rewrites every image and `.mp4` under `content/posts/` in place.

### 5. Proofread (optional)

`/proofread content/posts/my-post/index.md` in Claude Code reviews the English
and writes an `index_corrected.md` next to it, marked as a draft.

### 6. Publish

Set `draft = false`, then commit and push (see below). A post is only built for
production once that flag is off.

---

## Deploying to production

**Pushing to `main` is the deploy.** There is no manual upload step.

```bash
git add .
git commit -m "feat: new post"
git push origin main
```

`.github/workflows/hugo.yaml` then runs on GitHub Actions:

1. checks out the repo,
2. installs pinned versions of Hugo, Dart Sass, Go and Node,
3. runs `hugo build --gc --minify --baseURL <pages url>`,
4. uploads `public/` as a Pages artifact,
5. deploys it to GitHub Pages.

It takes roughly a minute or two. Progress and failures are visible in the
repo's **Actions** tab; a red build means nothing is deployed and the previous
version stays live.

The workflow also has `workflow_dispatch`, so a rebuild can be triggered by hand
from the Actions tab without a new commit — useful after changing a repository
setting rather than a file.

### About the URL

`hugo.toml` sets `baseURL = 'http://blog.spope.fr/'` for local use, but the CI
build overrides it with the URL that GitHub Pages reports, so the custom domain
is configured in the repository's **Settings → Pages**, not in the repo files.
There is deliberately no `static/CNAME` file; if the custom domain ever gets
dropped after a deploy, that setting is the place to check.

### What is not deployed

`public/` and `resources/` are gitignored. They are rebuilt from scratch by CI
on every run, so they never need to be committed.

---

## Analytics

`layouts/partials/head-additions.html` loads [Umami](https://umami.is/)
(cloud-hosted, cookieless) on every page. Removing that one file removes all
tracking.

---

## Troubleshooting

**A gallery renders empty / an image is missing.** The path is relative to the
post bundle (`pics/photo.jpg`, not `/pics/photo.jpg` or an absolute path), and
the file must be inside the post directory. Hugo prints a `WARN ... not found in
page bundle` line when a shortcode cannot resolve its file — read the build
output.

**A deleted post is still on the local site.** `rm -rf public/` and rebuild.

**A post does not appear in production.** It is probably still `draft = true`.

**`languageCode was deprecated` warning.** Harmless with the current Hugo
version; `hugo.toml` will eventually need `locale` instead.

**Editing the design.** All styles live in `static/css/blog.css` (CSS variables
for colours and fonts at the top), all behaviour in `static/js/blog.js`. Both
are served as-is, with no compilation — a browser refresh is enough.
