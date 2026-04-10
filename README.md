# Let Everyone In — Lovable Sync Repo

This is the **private intermediate repository** used by [Lovable](https://lovable.dev) to sync visual edits to the Let Everyone In website.

> ⚠️ **Do not edit this repo directly or connect Cloudflare Pages to it.** It is a sync intermediary only.

## How this repo fits into the workflow

```
Lovable (editor) → this repo → [GitHub Action: sync.yml] → steadfast-a11y/leteveryonein → Cloudflare Pages → leteveryonein.com
```

- **Lovable** pushes every saved change directly to the `main` branch of this repo.
- A **GitHub Action** (`.github/workflows/sync.yml`) automatically mirrors every push to the canonical production repo: [`steadfast-a11y/leteveryonein`](https://github.com/steadfast-a11y/leteveryonein).
- Cloudflare Pages watches `steadfast-a11y/leteveryonein` and deploys to [leteveryonein.com](https://leteveryonein.com).

## Why does this repo exist?

Lovable creates its own repo when connecting to GitHub and cannot connect to an existing one. This intermediary repo is the bridge between Lovable's editing environment and the canonical production repo under `steadfast-a11y`.

## Live site

[leteveryonein.com](https://leteveryonein.com)