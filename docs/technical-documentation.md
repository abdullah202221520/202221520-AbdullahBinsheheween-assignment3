# Technical Documentation: Assignment 3

## 1. Overview

This portfolio is a static, client-side website built with **HTML5**, **CSS3**, and **vanilla JavaScript**. It encompasses advanced functionalities for Assignment 3 including external API data fetching, LocalStorage state management, dynamic UI filtering, and complex Regex validation. It implements a premium glassmorphism aesthetic using responsive design.

| Layer    | Technology        |
|----------|-------------------|
| Markup   | HTML5             |
| Styling  | CSS3 (Flexbox, Grid, CSS Variables) |
| Behavior | Vanilla JavaScript, Fetch API, LocalStorage |
| Assets   | Images in `assets/images/` |

---

## 2. Project Structure

```
id-name-assignment3/
├── index.html          # Single-page structure
├── css/
│   └── styles.css      # All styles (variables, glassmorphism, layouts)
├── js/
│   └── script.js       # Advanced logic, state management, and API calls
├── assets/
│   └── images/         # Project screenshots (e.g. ghostwriter.png, mahamma.png, homelab.png)
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md  # This file
```

---

## 3. HTML Structure

- **Doctype & Meta:** `UTF-8`, viewport for responsive behavior, `lang="en"`.
- **Sections:**
  - **Header:** `<nav>` with logo, links, and "Toggle Dark Mode" button.
  - **Main:**
    - `#hero` — Introduction and visitor name prompt that populates via LocalStorage.
    - `#about` — About Me section describing interests.
    - `#projects` — Dynamic project grid with active `.filter-controls` (`All`, `Web`, `CLI`, `Infra`).
    - `#github-section` — Asynchronous container populated by the Github REST API.
    - `#contact` — Interactive form structured for regex JS validation feedback.
  - **Footer:** Standard structural wrapper.

---

## 4. CSS Architecture & Glassmorphism

### 4.1 CSS Variables & Themes
- Global theming is controlled via `:root` CSS variables handling `bg-primary`, `bg-secondary`, `nav-bg`, `text-main`, and `glass-bg` properties.
- **Default (Light) Mode:** Utilizes white and off-white/grey adjacent backdrops with deep indigo accents.
- **Dark Mode:** Toggling the `.dark-mode` class redefines these CSS variables instantly to `#251b4b` deep purple layouts.

### 4.2 Layout & Effects
- **Glassmorphism:** Navigation menus and project cards employ `background: rgba(255,255,255,0.05)` and `backdrop-filter: blur(10px)` to achieve floating, translucent aesthetics.
- **Hover States:** Project cards scale up (`transform: translateY(-8px)`) and cast dynamic box-shadows.
- **Responsive Grids:** `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))` automatically restructures layout to fit mobile without any `@media` queries.
- **Transitions:** Global `transition: background-color 0.3s, color 0.3s;` on structural DOM targets provides buttery-smooth dark-mode toggling across states.

---

## 5. JavaScript (Advanced Logic)

### 5.1 State Management (`localStorage`)
- **`darkModeToggle()`:** Modifies class lists and writes `theme` property to LocalStorage. On DOM Load, it checks memory to instantly apply preferences.
- **`Visitor Name`:** Checks LocalStorage for a `visitorName` to swap out the default header, removing the prompt. Saves to memory either proactively via the hero button or passively when the form is submitted.

### 5.2 API Integration
- **`fetchGitHubProjects()`:** An `async` function using native `fetch()` against `https://api.github.com/users/abdullah202221520`. Displays a loading state, throws explicit errors for `catch` blocks if status codes fail, and injects HTML literal string templates natively into the DOM directly.

### 5.3 Complex Logic Actions
- **`setupFilters()`:** Traverses `.project-card` DOM attributes to compare against `data-filter` buttons. It uses `display: none` to instantly redraw category structures natively without reloading.
- **`setupFormValidation()`:** Intercepts default form post actions (`event.preventDefault()`). It performs explicit length checking on variables and Regex strict matching (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) on client emails, publishing success or error UI coloring without refreshing.
- **`setGreeting()`:** Checks JS `Date().getHours()` to inject temporal "Good Morning/Evening" salutations.

---

## 6. Assets & Performance

- **Lazy Loading:** All intensive `<img>` items invoke `loading="lazy"` tags.
- **Imagery:** Locally hosts structured web/cli architecture implementations alongside graphical representations for Homelab setups, stored in `/assets/images`.

---

## 7. Accessibility

- Implements strict, well-structured nested logic tags (`<main>`, `<nav>`, `<section>`, `header`). No inline `<br>` styling structures out of place.
- All non-ornamental pictures involve concise `alt="[describe image]"` identifiers.
