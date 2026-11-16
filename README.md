# Building an Adult Spiritual Formation Pathway — Faircreek Church

An interactive **working sketch** for Faircreek Church's effort to build a reproducible adult
spiritual formation pathway over **two years** — Year One roots people in the way of Jesus
(Apprenticeship/The Way, Scripture, Prayer, Community); Year Two sends them outward (Serving,
Personal Testimony/Witness, Generosity). Designed as a shared reference for an initial
conversation with potential teachers and idea shapers — the pathway will take its final shape
around the passions and strengths of the leaders who join.

**Live site:** https://snthor-phd.github.io/FCC-Building-an-ASF-Pathway/

## What's here

- **`index.html`** — the page. Renders everything from `data.js`.
- **`data.js`** — all content lives here as `window.PATHWAY`. Edit this to update the site; no build step.
- **`Faircreek_ASF_Integrated_Planning_Brief_v2.pdf`** — the leadership briefing aligned to the current six-course Foundations roadmap
- **`build_brief.py`** — reproducible source for the Version 2 planning brief
- **`.nojekyll`** — tells GitHub Pages to serve files as-is.

## Sections

1. **The organizing question** — pathway over curriculum
2. **The formation ecology** — seven core practices, tagged by year: Year One (Apprenticeship/The Way, Scripture, Prayer, Community) and Year Two (Serving, Personal Testimony/Witness, Generosity)
3. **The two-year roadmap** — Year One "Rooted" and Year Two "Sent"
4. **Gaps we sense** at Faircreek
5. **A two-year approach** — short, repeatable, leader-led three-to-six-week modules
6. **Foundations as a first-year curriculum spine** — six courses, 18 weeks, and 54 teaching sessions
7. **Resources ↔ Practices** — mapping table (Foundations / BibleProject / Practicing the Way), plus Sabbath, Solitude, Fasting under review
8. **Our first conversation** — the discovery/reflection prompts
9. **The plan, sketched** — action steps and open decisions
10. **The invitation**

## How to update

Edit `data.js` (and re-upload via the GitHub web UI). The page reads content from
`window.PATHWAY` at load, so no rebuild is needed. This document is expected to change as the
pathway is built.

## Milk-to-meat working documents (Nov 2026)

`milk-to-meat/` holds the current discussion set from the FCC-ASF Google Drive folder, exported 14 Nov 2026. Google Docs come as PDF plus Markdown; the deck and the Drive-native PDFs come as PDF only. Drive stays the master copy — re-export here when they change.

| # | Document | Files |
|---|----------|-------|
| 01 | Milk to Meat — Briefing and Current Map (deck) | `.pdf` |
| 02 | ASF Milk-to-Meat Continuum Map | `.pdf`, `.md` |
| 03 | ASF Milk to Meat Continuum and Adult Path | `.pdf`, `.md` |
| 04 | LDP and Our Milk-to-Meat Continuum — How They Fit | `.pdf`, `.md` |
| 05 | From Milk to Meat — LDP Chapter | `.pdf` |
| 06 | LDP Milk-to-Meat Transformation Map | `.pdf` |
| 07 | Faircreek ASF — Where We Stand and Where We Go | `.pdf`, `.md` |
| 08 | ASF Addendum — Forgiveness, Reconciliation and Restoration | `.pdf` |

LDP = Faircreek's Leadership Development Program (the Leadership Development Groups on the Discipleship Flywheel).

## Related

- **Foundations roadmap** (an input to adapt): https://snthor-phd.github.io/FCC-Foundations-Roadmap/

## Design

Matches faircreek.org — orange `#ef7d10`, Poppins headings + Montserrat body, navy panels,
"FOR" motif. Logo and favicon are hotlinked from faircreek.org.
