# Event Registration Website

A responsive, frontend-only college event discovery and student registration portal built as a **Web Technology Mini-Project** for **Pratibha College of Commerce and Computer Science (PCCCS), Chinchwad, Pune**.

---

## 1. Project Overview
The **Event Registration Website** allows students at Pratibha College of Commerce and Computer Science to explore upcoming campus activities, including **Hackathon 2026**, **Freshers Party 2026**, **AI Tech Challenge**, **Startup Spark**, **Quiz Quest**, and **Cyber Shield Summit**. Students can view detailed event guidelines, search and filter events dynamically, and complete their event registration online. Upon successful submission, a unique Registration ID is generated and a digital receipt is displayed which can be printed directly from the browser.

---

## 2. Objectives
- Provide a clean, practical online platform for Pratibha College event management.
- Demonstrate fundamental core concepts of **HTML5**, **CSS3**, and **JavaScript ES6**.
- Implement client-side form validation and browser **LocalStorage** persistence.
- Design a fully responsive web interface compatible with desktops, tablets, and smartphones.
- Ensure 100% compatibility with static web hosting like **GitHub Pages** without server-side dependencies.

---

## 3. Features & Event Lineup
- **Featured Events:**
  1. **Hackathon 2026** (Competition) – 12-hour software sprint & prototype building.
  2. **Freshers Party 2026** (Creative) – Cultural welcome event with Mr. & Ms. Fresher contest.
  3. **AI Tech Challenge** (Technical) – Machine learning & prompt engineering contest.
  4. **Startup Spark** (Workshop) – Entrepreneurship guidance & business pitch presentation.
  5. **Quiz Quest** (Competition) – Inter-departmental tech & general trivia buzzer quiz.
  6. **Cyber Shield Summit** (Technical) – Ethical hacking & network defense summit.
- **Responsive Navigation:** Sticky navigation bar with mobile hamburger menu drawer.
- **Search & Category Filtering:** Instant live text search and single-click category filtering (Technical, Workshop, Competition, Creative).
- **URL Parameter-Based Details Page:** Passes event IDs via URL query string (`event-details.html?id=hackathon`) to load detailed eligibility and rules.
- **Client-Side Form Validation:** Inline error messages for full name, roll number, email address, 10-digit Indian mobile number, college, department, year, and event selection.
- **Unique Registration ID Generator:** Generates custom registration IDs (e.g. `EVT-2026-4891`).
- **LocalStorage Data Persistence:** Saves submitted registration data in browser memory without requiring PHP or MySQL.
- **Printable Confirmation Receipt:** Clean receipt page (`success.html`) with customized print styles (`@media print`) that automatically hides site navigation and footers during printing.

---

## 4. Technologies Used
- **HTML5:** Semantic document structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), forms, and labels.
- **CSS3:** Custom CSS variables, Flexbox layout, CSS Grid, media queries for mobile responsiveness, hover state transitions, and `@media print` rules.
- **JavaScript (ES6):** DOM manipulation, event listeners, URLSearchParams parsing, regular expression validation, array methods (`filter`, `map`, `find`), and `localStorage` API.

---

## 5. Project Structure
```text
event-registration/
│
├── index.html              # Home page with hero section & featured events
├── events.html             # All events listing with live search & filters
├── event-details.html      # Detailed event view with rules & eligibility
├── register.html           # 9-field student registration form
├── success.html            # Confirmation receipt page with print feature
├── about.html              # Mini-project overview & concepts demonstrated
├── contact.html            # PCCCS Contact desk & inquiry demo form
│
├── css/
│   └── style.css           # Single unified responsive stylesheet
│
├── js/
│   └── script.js           # Main JavaScript logic & event data
│
├── images/                 # Custom SVG illustrations for event banners
│   ├── hero-banner.svg
│   ├── hackathon.svg
│   ├── freshers-party.svg
│   ├── ai-tech-challenge.svg
│   ├── startup-spark.svg
│   ├── quiz-quest.svg
│   └── cyber-shield-summit.svg
│
├── README.md               # Complete project documentation
└── VIVA.md                 # 18+ Viva voce questions and concise answers
```

---

## 6. College Contact & Address
- **College Name:** Pratibha College of Commerce and Computer Science (PCCCS)
- **Address:** Block D-III, Plot No. 3, Kalbhor Nagar, Behind Auto Cluster, Chinchwad, Pune, Maharashtra – 411019
- **Email:** events@pcccs.edu.in / info@pcccs.edu.in
- **Phone:** 020-2741-2400 / 01

---

## 7. How to Run Locally
Because this project is built using pure frontend technologies (HTML, CSS, JavaScript), no server setup (such as Apache, Nginx, or XAMPP) is required:

1. Clone or download this project folder to your local machine.
2. Open the folder `event-registration/`.
3. Double-click `index.html` to open the website directly in any modern web browser.

---

## 8. How to Deploy on GitHub Pages
1. Create a public repository on GitHub named `event-registration`.
2. Push all project files (`index.html`, `css/`, `js/`, `images/`, etc.) to the `main` branch.
3. On GitHub, go to **Settings** > **Pages** > **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then click **Save**.
