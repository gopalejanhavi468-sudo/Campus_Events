# Event Registration Website

A responsive, frontend-only college event discovery and student registration portal built as a **B.Tech Web Technology Mini-Project**.

---

## 1. Project Overview
The **Event Registration Website** allows college students to explore upcoming technical fests, workshops, coding contests, and creative competitions. Students can view detailed event guidelines, search and filter events dynamically, and complete their event registration online. Upon successful submission, a unique Registration ID is generated and a digital receipt is displayed which can be printed directly from the browser.

---

## 2. Objectives
- Provide a clean, practical online platform for college event management.
- Demonstrate fundamental core concepts of **HTML5**, **CSS3**, and **JavaScript ES6**.
- Implement client-side form validation and browser **LocalStorage** persistence.
- Design a fully responsive web interface compatible with desktops, tablets, and smartphones.
- Ensure 100% compatibility with static web hosting like **GitHub Pages** without server-side dependencies.

---

## 3. Features
- **Responsive Navigation:** Sticky navigation bar with mobile hamburger menu drawer.
- **Dynamic Event Showcase:** Displays realistic college events with date, venue, fee, and status.
- **Search & Category Filtering:** Instant live text search and single-click category filtering (Technical, Workshop, Competition, Creative).
- **URL Parameter-Based Details Page:** Passes event IDs via URL query string (`event-details.html?id=tech-fest`) to load detailed eligibility and rules.
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
├── contact.html            # Contact desk & enquiry demo form
│
├── css/
│   └── style.css           # Single unified responsive stylesheet
│
├── js/
│   └── script.js           # Main JavaScript logic & event data
│
├── images/                 # Custom SVG illustrations for event banners
│   ├── hero-banner.svg
│   ├── tech-fest.svg
│   ├── robotics-workshop.svg
│   ├── coding-competition.svg
│   ├── cad-design.svg
│   ├── photography-contest.svg
│   └── project-exhibition.svg
│
├── README.md               # Complete project documentation
└── VIVA.md                 # 18+ Viva voce questions and concise answers
```

---

## 6. How to Run Locally
Because this project is built using pure frontend technologies (HTML, CSS, JavaScript), no server setup (such as Apache, Nginx, or XAMPP) is required:

1. Clone or download this project folder to your local machine.
2. Open the folder `event-registration/`.
3. Double-click `index.html` to open the website directly in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Brave).
4. Alternatively, use VS Code extension **Live Server** to preview the project at `http://127.0.0.1:5500/index.html`.

---

## 7. How to Deploy on GitHub Pages
To publish this website online for free using GitHub Pages:

1. Create a public repository on GitHub named `event-registration`.
2. Push all project files (`index.html`, `css/`, `js/`, `images/`, etc.) to the `main` branch.
3. On GitHub, go to **Settings** > **Pages** (under Code and automation).
4. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. GitHub Pages will build your site and generate a live URL (e.g. `https://your-username.github.io/event-registration/`).

---

## 8. How Registration Works (Frontend-Only Architecture)
Since this initial version does not use PHP or a database:
1. When the user fills out the form on `register.html` and clicks **Submit Registration**, JavaScript intercept the submit event (`e.preventDefault()`).
2. Input values are validated against rules (e.g. required field checks, valid email pattern, 10-digit mobile regex).
3. On valid input, JavaScript generates a unique ID (e.g., `EVT-2026-7319`) and attaches the registration timestamp.
4. The registration object is stored in browser storage using `localStorage.setItem("latestRegistration", JSON.stringify(regData))`.
5. The browser redirects to `success.html`, where JavaScript retrieves `latestRegistration` from `localStorage` and displays the receipt.

> **Note:** `localStorage` is used temporarily for client-side persistence in this frontend-only version. It stores data within the user's browser session.

---

## 9. Future Scope (Planned Upgrades)
When backend and database concepts are introduced in future semesters:
- **PHP Backend Integration:** Replace client-side submission with PHP scripts (`register.php`) handling server-side request processing.
- **MySQL Database Integration:** Store registrations permanently in a relational database table (`registrations`) with foreign keys linking to an `events` table.
- **Server-Side Validation:** Add PHP validation and sanitization (`filter_var`, `mysqli_real_escape_string`) to protect against SQL Injection and XSS.
- **Admin Management Dashboard:** Build an administrative panel for faculty coordinators to view, filter, export (CSV/PDF), and approve registered student lists.
- **Automated Email Confirmation:** Integrate PHPMailer / SMTP to send digital entry tickets with QR codes directly to registered student email addresses.
