# CLAUDE.md — APEX Semester OS
> Read this file first. Every session. No exceptions.
> Keep this file under 100 lines. Do not add to it without permission.

---

## WHAT THIS PROJECT IS

A personal semester schedule PWA for Romel Lartey — Computer Engineering, University of Ghana Legon, Level 200 Semester 2 (2025/2026). It combines the official CPEN academic timetable with a personal productivity layer: backend sessions, ML study, robotics competition prep, and study groups. Dark terminal aesthetic. Feels like a builder's OS, not a student planner.

**Single deliverable:** `index.html` + `manifest.json` + `sw.js` + `icons/`. No backend. No npm. No build step. Opens directly in a browser.

---

## READ THESE FILES FIRST (in this order)

```
1. CLAUDE.md                ← you are here
2. docs/MASTER_CONTEXT.md   ← timetable data, design system, full spec — READ ONLY
3. docs/OBJECTIVES.md       ← phased build checklist — update status after every task
4. logs/BUILD_LOG.md        ← append every action taken
5. logs/SUGGESTIONS.md      ← log ideas here, never act on them without approval
```

**MASTER_CONTEXT.md is READ ONLY. Never modify it.**

---

## TECH STACK

- HTML + CSS + Vanilla JS — single `index.html`, fully inline
- Fonts: `JetBrains Mono` + `Syne` — loaded from Google Fonts
- PWA: `manifest.json` + `sw.js` — cache-first, offline-capable
- Storage: `localStorage` only — no database, no server
- Icons: Unicode only — no icon libraries

---

## HARD RULES (Non-Negotiable)

1. **No "Dr. Mills" anywhere in the UI.** Use "ML Meeting" only.
2. **No external CSS or JS frameworks.** No Tailwind, Bootstrap, React, Alpine, jQuery.
3. **No Inter, Roboto, Arial, or system fonts.** `Syne` + `JetBrains Mono` only.
4. **Block positioning is pixel-precise.** `1 minute = 1.4px`. Calculate `topPx` and `heightPx` from the exact time data in MASTER_CONTEXT.md. Do not approximate.
5. **No silent overlaps.** If two blocks touch, render a visible 2–5px gap between them.
6. **No generic AI aesthetics.** No purple gradients, no white backgrounds, no card shadows that look like Bootstrap.
7. **Saturday 10:00–13:00 Backend Sprint is SACRED.** It gets `border: 1px solid #4caf50`, `box-shadow: 0 0 8px #4caf5022`, and a `⬡ SACRED` green tag. Nothing is scheduled over it.
8. **Footer is fixed.** Left: `APEX · Romel Lartey · 2025/2026`. Right: `github.com/iamromelalvin7`. Both in JetBrains Mono, 9px, `#2a2a2a`. Do not change this.

---

## BEHAVIOR RULES

- **Explain before doing.** State what you're about to build and why, then build it.
- **One phase at a time.** Complete Phase N fully before starting Phase N+1.
- **Log everything.** After every file created or modified, append to `BUILD_LOG.md`.
- **Checkpoint before proceeding.** At the end of each phase, output a checkpoint report: files created, tasks completed, blockers, next phase.
- **Ask before deviating.** If MASTER_CONTEXT.md and your judgment conflict, ask. Do not silently override the spec.
- **Flag don't fix.** If you spot an issue outside your current phase, log it in `SUGGESTIONS.md` and continue. Do not fix things you weren't asked to fix.

---

## WHAT CLAUDE GETS WRONG ON THIS PROJECT — WATCH FOR THESE

- Approximating block heights instead of calculating from minutes
- Putting CPEN 202 at 8:30–10:25 on Wednesday — it ends at **09:25** per the official timetable
- Wednesday ML Meeting at 17:00 — it starts at **17:30** (CPEN 206 LAB ends 17:25)
- Using `top` as a JavaScript variable name — it clashes with `window.top` and crashes the renderer
- Overlapping blocks on Wednesday (CPEN 202 + CBAS 210 both at 9:30) — they are in the same day column; show them side-by-side or flag the clash
- Building all 7 days before verifying Mon/Tue render correctly — always verify 2 days first

---

## BUILD SEQUENCE (Phases)

```
Phase 1 — Scaffold + PWA        (index.html shell, manifest, sw.js, font imports)
Phase 2 — Design System         (CSS tokens, header, footer, legend — no timetable yet)
Phase 3 — Desktop Grid          (time axis, 7-column layout, Mon + Tue blocks verified)
Phase 4 — All Day Data          (remaining 5 days, SACRED block, overlap fixes)
Phase 5 — Mobile View           (day tabs, stacked cards, auto-select today)
Phase 6 — Interactions          (current time indicator, block detail modal, week summary)
Phase 7 — Polish + Ship         (DevTools audit, 47-block count, PWA install check)
```

Phase 2 does not start until Phase 1 checkpoint is confirmed.
Phase 3 does not start until Phase 2 checkpoint is confirmed.
And so on.

---

*APEX Semester OS · CLAUDE.md v1.0 · June 2026*
