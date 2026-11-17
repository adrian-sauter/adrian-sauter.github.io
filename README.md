# adrian-sauter.github.io

Source of my personal website: **https://adrian-sauter.github.io**

Built with Jekyll on the [al-folio](https://github.com/alshedivat/al-folio) theme (MIT license, see [LICENSE](LICENSE)).

## Where things live

| What | Where |
| --- | --- |
| About page, bio, profile picture | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` (PDFs in `assets/pdf/`, previews in `assets/img/publication_preview/`) |
| News items | `_news/` |
| Projects | `_projects/` |
| CV (PDF) | `assets/pdf/Adrian_Sauter_CV.pdf` |
| Site settings | `_config.yml` |

## Publishing

Pushing to `master` runs the **Deploy site** workflow, which builds the site and publishes it to the `gh-pages` branch.

## Running locally

```bash
docker compose up
```

Then open http://localhost:8080.
