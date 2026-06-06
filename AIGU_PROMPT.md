# AIGU — Semester OS · Build Prompt
## Version: 1.0 · Gabriel Kwaku Asante · UG CPEN Level 200

---

## MISSION

Build a production-grade, mobile-responsive Progressive Web App (PWA) called **AIGU — Semester OS**.

This is a personal semester schedule dashboard for Gabriel Kwaku Asante, a Computer Engineering student at the University of Ghana. It combines an official academic timetable with a personal daily structure (morning routine, ML/AI learning, book studies, quiet time). The aesthetic is a dark terminal/IDE theme — disciplined, sharp, technical. It must feel like a builder's operating system, not a student planner.

---

## TECH STACK

- **Framework:** Vanilla HTML + CSS + JavaScript (single file: `index.html`)
- **No frameworks, no npm, no build step.** Must open directly in a browser.
- **PWA:** Full manifest + service worker for offline support and "Add to Home Screen"
- **Storage:** `localStorage` for any user preferences
- **Fonts:** Load from Google Fonts — `JetBrains Mono` (monospace, for times/labels) + `Syne` (display, for titles)
- **Icons:** Unicode symbols only. No external icon libraries.

---

## FILE STRUCTURE

```
aigu-semester-os/
├── index.html          ← Single-file app (HTML + CSS + JS inline)
├── manifest.json       ← PWA manifest
├── sw.js               ← Service worker
└── icons/
    ├── icon-192.png    ← PWA icon
    └── icon-512.png    ← PWA icon
```

> For icons: dark square (`#0f0f0f` bg), green (`#4caf50`) inner square with rounded corners, letter "A" in white JetBrains Mono bold centered. If PNG generation is not possible, use an SVG data URI in the manifest instead.

---

## DESIGN SYSTEM (EXACT — DO NOT DEVIATE)

### Color Tokens
```css
--bg: #080808;
--surface: #0f0f0f;
--surface2: #141414;
--border: #1e1e1e;
--border2: #2a2a2a;
--text: #e8e8e8;
--text-muted: #555;
--text-dim: #333;
--accent: #4caf50;

/* Block type colors */
--lecture-bg: #0a1929;      --lecture-border: #1565c0;  --lecture-text: #90caf9;
--lab-bg: #12082a;          --lab-border: #6a1b9a;      --lab-text: #ce93d8;
--ml-bg: #1a1100;           --ml-border: #e65100;       --ml-text: #ffcc80;
--study-bg: #061a0e;        --study-border: #2e7d32;    --study-text: #81c784;
--routine-bg: #0d0d16;      --routine-border: #3949ab;  --routine-text: #9fa8da;
--review-bg: #0d0d0d;       --review-border: #333;      --review-text: #888;
--church-bg: #1a0a1a;       --church-border: #7b1fa2;   --church-text: #ce93d8;
--social-bg: #001a12;       --social-border: #00695c;   --social-text: #80cbc4;
--flex-bg: #111108;         --flex-border: #827717;     --flex-text: #f9a825;
```

### Typography
- **Display/Title:** `Syne`, bold, white — for `AIGU` heading only
- **Labels/Times/Tags:** `JetBrains Mono` — for all time labels, block tags, footer text
- **Body/Block titles:** `Syne` — for block names and descriptions

### Sacred block
- Saturday 11:30–15:30 (Studies) is marked SACRED.
- It gets `border: 1px solid #4caf50`, `box-shadow: 0 0 8px #4caf5022`, and a `⬡ SACRED` tag in green.

---

## LAYOUT — TWO VIEWS

### View 1: DESKTOP GRID (≥768px)
A 7-column grid timetable, one column per day (MON → SUN), time axis on the left running 05:00 → 23:30. Blocks are absolutely positioned within each day column using pixel offsets calculated from time. 1 minute = 1.4px.

### View 2: MOBILE STACK (< 768px)
Day tabs at the top (MON TUE WED THU FRI SAT SUN). Tap a tab to show that day's blocks stacked vertically in time order. Blocks are full-width cards with time, title, subtitle, and a colored left border.

Both views on the same page. Use a CSS media query to switch.

---

## THE TIMETABLE DATA (EXACT — THIS IS THE GROUND TRUTH)

> Implement EXACTLY as specified. Do not invent, modify, or omit any block.

---

### MONDAY
| Time | Type | Title | Subtitle | Tag |
|------|------|-------|----------|-----|
| 05:30–06:30 | routine | Morning Routine | Quiet time · Bath · Light exercise | MORNING |
| 06:30–08:00 | review | Pre-Class Review | 30min review before leaving | REVIEW |
| 08:00 | — | Leave for Campus | — | DEPART |
| 08:30–10:25 | lecture | CPEN 208 | Software Engineering · SF-F2 | LECTURE |
| 10:30–13:25 | lab | CPEN 208 LAB | Software Engineering · Huawei Lab | LAB |
| 13:30–15:25 | lecture | SENG 202 | Differential Equations · JQB 09 | LECTURE |
|16:00–16:25|Eat |
|16:25–18:25|Sleep Time|
| 19:00–21:30 | study | Book Studies | Course readings · 2.5hrs | STUDY |
| 21:30–22:30 | ml | ML / AI Learning | Machine Learning · AI fundamentals | ML |
| 22:30–23:30 | review | Wind Down | Reflect · Prepare tomorrow | REST |

---

### TUESDAY
| Time | Type | Title | Subtitle | Tag |
|------|------|-------|----------|-----|
| 05:30–06:30 | routine | Morning Routine | Quiet time · Bath · Light exercise | MORNING |
| 06:30–07:00 | review | Pre-Class Review | 30min review before leaving | REVIEW |
| 07:00 | — | Leave for Campus | — | DEPART |
| 07:30–09:25 | lecture | CPEN 212 | Data Communications · SF-F2 | LECTURE |
| 9:30–11:25 | lecture | CPEN 204 | Data Structures & Algorithms · EW-S2 | LECTURE |
| 12:30–15:25 | lab | CPEN 204 LAB | Data Structures & Algorithms · Huawei Lab | LAB |
| 15:30–17:25 | lab | SENG 202 TUT | Differential Equations · NNB1 | TUTORIAL |
| 18:00 - 18:45 | Sleep |
| 19:00–21:30 | study | Book Studies | Course readings · 2.5hrs | STUDY |
| 21:30–22:30 | ml | ML / AI Learning | Machine Learning · AI fundamentals | ML |
| 22:30–23:30 | review | Wind Down | Reflect · Prepare tomorrow | REST |

---

### WEDNESDAY
| Time | Type | Title | Subtitle | Tag |
|------|------|-------|----------|-----|
| 05:30–06:30 | routine | Morning Routine | Quiet time · Bath · Light exercise | MORNING |
| 06:30–07:00 | review | Pre-Class Review | 30min review before leaving | REVIEW |
| 07:00 | — | Leave for Campus | — | DEPART |
| 07:30–09:25 | lecture | CPEN 202 | Computer Systems Design · SF-F2 | LECTURE |
| 09:30–11:25 | lecture | CBAS 210 | Academic Writing II · JQB 22 | LECTURE |
| 12:30–15:25 | lab | CPEN 212 LAB | Data Communications · Electronics Lab | LAB |
| 15:30–17:25 | lab | CPEN 206 LAB | Linear Circuits · Electronics Lab | LAB |
| 18:00 - 18:45 | Sleep |
| 19:00–21:30 | study | Book Studies | Course readings · 2.5hrs | STUDY |
| 21:30–22:30 | ml | ML / AI Learning | Machine Learning · AI fundamentals | ML |
| 22:30–23:30 | review | Wind Down | Reflect · Prepare tomorrow | REST |



---

### THURSDAY
| Time | Type | Title | Subtitle | Tag |
|------|------|-------|----------|-----|
| 05:30–06:30 | routine | Morning Routine | Quiet time · Bath · Light exercise | MORNING |
| 06:30–09:00 | review | Pre-Class Review | 30min review before leaving | REVIEW |
| 09:00 | — | Leave for Campus | — | DEPART |
| 09:30–10:25 | lecture | CPEN 206 | Linear Circuits · WW-S3 | LECTURE |
| 10:30–12:25 | lab | SENG 202 LAB | Differential Equations · JQB 14 | LAB |
| 12:30–15:25 | lab | CPEN 202 LAB | Computer Systems Design · Electronics Lab | LAB |
| 19:00–21:30 | study | Book Studies | Course readings · 2.5hrs | STUDY |
| 21:30–22:30 | ml | ML / AI Learning | Machine Learning · AI fundamentals | ML |
| 22:30–23:30 | review | Wind Down | Reflect · Prepare tomorrow | REST |

---

### FRIDAY
| Time | Type | Title | Subtitle | Tag |
|------|------|-------|----------|-----|
| 05:30–06:30 | routine | Morning Routine | Quiet time · Bath · Light exercise | MORNING |
| 06:30–07:15 | flex | Morning Flex | Still figuring this out — free block | FLEX |
| 07:15 | — | Leave for Campus (if needed) | — | DEPART |
| 13:30–15:30 | lab | CPEN 202 LAB | Computer Systems Design · Electronics Lab | LAB |
| 19:00–21:30 | study | Book Studies | Course readings · 2.5hrs | STUDY |
| 21:30–22:30 | ml | ML / AI Learning | Machine Learning · AI fundamentals | ML |
| 22:30–23:30 | review | Wind Down | Reflect · Prepare tomorrow | REST |

---

### SATURDAY
| Time | Type | Title | Subtitle | Tag |
|------|------|-------|----------|-----|
| 05:30–06:30 | routine | Jogging | Morning run | RUN |
| 07:00–09:00 | routine | Bath & Laundry | Wash day | WASH |
| 09:00–11:00 | routine | Rest | — | REST |
| 11:30–15:30 | study | Studies | SACRED — nothing moves this | SACRED |
| 16:00–18:00 | ml | ML / AI Learning | Machine Learning · Deep focus | ML |
| 18:00–22:00 | social | Rehearsals + Errands | Rehearsals · Ironing clothes · General prep | EVENING |
| 22:00–23:30 | review | Wind Down | — | REST |

> ⚠️ Saturday 11:30–15:30 Studies block is SACRED. Style with green border + glow + `⬡ SACRED` tag.

---

### SUNDAY
| Time | Type | Title | Subtitle | Tag |
|------|------|-------|----------|-----|
| 07:00–09:30 | church | Church Service | Sunday service | CHURCH |
| 10:00–12:00 | routine | Nap | Rest and recovery | NAP |
| 12:00–17:00 | study | Studies | Full study block — all subjects | STUDY |
| 17:00–19:00 | social | Movie + Meal | Unwind · Watch something · Eat well | CHILL |
| 19:30–20:30 | social | Executive Meeting | — | MEETING |
| 20:30–22:30 | review | Weekly Planning | Week review · Self-reflection · Next week plan | PLAN |
| 22:30–23:30 | review | Wind Down | — | REST |

---

## BLOCK ANATOMY

Every block renders:
```
┌──────────────────────────────┐  ← colored left border (2px)
│ 09:30 – 10:25                │  ← JetBrains Mono, 8px, muted
│ CPEN 208                     │  ← Syne bold, 10px, white
│ Software Engineering · SF-F2 │  ← Syne, 8.5px, muted
│ [LECTURE]                    │  ← JetBrains Mono tag, 7px
└──────────────────────────────┘
```

Blocks too short to show all four lines gracefully hide subtitle then tag in that order.

---

## PWA REQUIREMENTS

### manifest.json
```json
{
  "name": "AIGU — Semester OS",
  "short_name": "AIGU",
  "description": "Semester schedule dashboard for Gabriel Kwaku Asante · UG CPEN Level 200",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#080808",
  "theme_color": "#080808",
  "icons": [
    { "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### sw.js (Service Worker)
Cache-first strategy. Cache: `index.html`, `manifest.json`, Google Fonts. On fetch: serve from cache, fall back to network. Cache version string: `aigu-os-v1`.

---

## ADDITIONAL UI COMPONENTS

### Header
```
UNIVERSITY OF GHANA · SCHOOL OF ENGINEERING SCIENCES · CPEN
AIGU — Semester OS                    [green accent on "Semester OS"]
Gabriel Kwaku Asante  ·  Level 200  ·  Sem 2  ·  2025/2026
───────────────────── (thin separator line)
```

### Current Time Indicator (Desktop only)
A thin horizontal green line (`#4caf50`, 1px, full width, z-index above blocks) showing current time on the timetable. Labeled with current time in JetBrains Mono at the left edge. Updates every 60 seconds. Only shows on the current day's column.

### Week Summary Bar (below grid)
A single row of 7 small day cards showing:
- Day name
- Count of university blocks
- Count of personal blocks
- A small colored dot for the dominant block type

### Legend
Horizontal flex row at bottom. Each entry: colored 8×8px square + label. Use block type colors from design system.

### Footer
```
Left:  AIGU · Gabriel Kwaku Asante · 2025/2026
Right: UG · CPEN · Level 200
```
Both in JetBrains Mono, 9px, `#2a2a2a`.

---

## MOBILE-SPECIFIC BEHAVIOUR

- Day tabs: 7 pill-shaped tabs at the top. Active tab: `#4caf50` text, `#0a2010` background, green bottom border.
- Today's tab auto-selected on load using `new Date().getDay()`.
- Blocks stack vertically, full width, 8px gap, 16px left border accent.
- Time shown above each block in JetBrains Mono.
- Current time indicator on mobile becomes a banner: `"NOW — HH:MM"` in green at top of active day view.

---

## INTERACTION STATES

- Block hover (desktop): slight brightness increase, `cursor: default`
- Block click: opens a bottom sheet / modal showing full block details. Tap outside or press ESC to close.
- Day tab click (mobile): smooth crossfade between day views (`opacity` transition, 150ms)

---

## WHAT NOT TO DO

- Do NOT use any external CSS framework (no Tailwind, no Bootstrap)
- Do NOT use any JavaScript framework (no React, no Vue, no Alpine)
- Do NOT use Inter, Roboto, Arial, or system fonts
- Do NOT approximate block heights — calculate them precisely from the time data
- Do NOT silently overlap blocks — if two blocks touch, give them a 2–5px gap
- Do NOT make the time axis start after 05:00 — the axis must cover 05:00 → 23:30 fully
- Do NOT use purple gradients on white backgrounds or any generic AI aesthetic
- Do NOT include any third-party branding or watermarks

---

## BUILD SEQUENCE

Build in this exact order:

```
Phase 1 — Scaffold + PWA
  Create index.html skeleton, manifest.json, sw.js
  Register service worker
  Verify PWA installability in Chrome DevTools → Application → Manifest

Phase 2 — Design System
  Implement all CSS custom properties
  Import Google Fonts (JetBrains Mono + Syne)
  Build header, footer, legend components
  Layout shell only — no timetable yet

Phase 3 — Desktop Timetable Grid
  Build time axis (05:00–23:30)
  Build 7-column day grid
  Implement block positioning engine (topPx / heightPx from time)
  Render Monday + Tuesday blocks and verify pixel accuracy

Phase 4 — All Day Data
  Add all 7 days' blocks using the exact data above
  Verify SACRED block styling on Saturday
  Verify Friday flex block is clearly marked

Phase 5 — Mobile View
  Day tabs component
  Mobile block cards
  Auto-select today on load
  Current time banner

Phase 6 — Interactions
  Current time indicator (desktop)
  Block click → detail modal
  Week summary bar

Phase 7 — Polish + Test
  Test at 375px (iPhone SE) and 1280px (desktop)
  Test PWA install flow
  Verify all blocks are present and correctly positioned
  Final check: correct name, no external branding, correct footer
```

---

## DELIVERABLE

A folder `aigu-semester-os/` containing `index.html`, `manifest.json`, `sw.js`, and the `icons/` directory. The app must:

1. Open in any browser from the file system with no server required
2. Pass PWA installability check in Chrome DevTools
3. Work fully offline after first load
4. Display correctly on mobile (375px) and desktop (1280px+)
5. Contain every block specified above, correctly positioned

No partial builds. No TODOs left in code. Ship the complete thing.
