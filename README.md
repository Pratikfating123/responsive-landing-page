# AUSPIEY | Responsive Landing Page

A modern, responsive technology-themed landing page created as **Task 1 (Easy)** for the AUSPIEY internship project.

## Project Description

This project introduces AUSPIEY through a clean, professional single-page website. It demonstrates core frontend development skills including semantic HTML, responsive CSS layouts, accessible navigation, scroll interactions, and client-side form validation.

## Project Objective

Build a professional landing page that works across desktop, tablet, and mobile devices using only HTML5, CSS3, and vanilla JavaScript.

## Technologies Used

- **HTML5:** Semantic page structure and accessible form controls.
- **CSS3:** Responsive layouts, CSS Grid, Flexbox, gradients, transitions, and animations.
- **JavaScript (Vanilla):** Mobile menu, active navigation, scroll progress, reveal effects, back-to-top, and form validation.
- **Google Fonts:** DM Sans and Manrope (optional online font enhancement).

No frontend frameworks or CSS libraries are used.

## Features

- Responsive sticky navigation with a mobile hamburger menu.
- Hero section with a CSS-built technology illustration.
- About, features, skills, workflow, CTA, contact, and footer sections.
- Smooth in-page navigation.
- Active section highlighting.
- Scroll reveal animations using `IntersectionObserver`.
- Scroll progress indicator.
- Back-to-top button.
- Contact form validation for required fields and email format.
- Dynamic copyright year.
- Keyboard-friendly navigation and reduced-motion support.
- No local image assets required. Main visuals are created with CSS and inline SVG.

## Project Folder Structure

```text
responsive-landing-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## Installation Instructions

1. Download or clone this project.
2. Extract the ZIP file if you downloaded it as an archive.
3. Open the `responsive-landing-page` folder in Visual Studio Code.
4. Confirm that `index.html`, `css/style.css`, and `js/script.js` are present.

## How to Run

### Option 1: Open directly

Double-click `index.html` to open the website in your browser.

### Option 2: VS Code Live Server

1. Open VS Code.
2. Select **File → Open Folder** and choose `responsive-landing-page`.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html`.
5. Select **Open with Live Server**.

The browser will open the local website. Save your files to see changes after the browser refreshes.

## Screenshots

Add your own screenshots after running the project:

| Screenshot | File |
|---|---|
| Desktop homepage | `screenshots/desktop-home.png` |
| Mobile homepage | `screenshots/mobile-home.png` |
| Contact section | `screenshots/contact-section.png` |

Create a `screenshots` folder in the project root and place your captured images there. Then update this table if your filenames differ.

## Contact Form Note

The contact form performs browser-side validation only. It checks required fields and validates the email format, then displays a confirmation message. **It does not send email or store messages.** A backend service or form provider must be connected for real submissions.

## Learning Outcomes

By completing this task, you can demonstrate:

- Writing semantic HTML5.
- Creating responsive layouts with CSS Grid and Flexbox.
- Using CSS variables and reusable styles.
- Building mobile navigation with JavaScript.
- Handling scroll events and `IntersectionObserver`.
- Validating forms with JavaScript.
- Considering accessibility and reduced-motion preferences.
- Organizing a small frontend project into separate files.

## Future Improvements

- Connect the contact form to a secure backend or form service.
- Add real company contact and social media links.
- Add project case studies and testimonials.
- Add automated accessibility and cross-browser tests.
- Add optimized, locally hosted imagery if required.

## Author & Internship Details

- **Project:** Responsive Landing Page
- **Task Number:** Task 1 (Easy)
- **Company:** AUSPIEY
- **Project Type:** Frontend Web Development
- **Technologies:** HTML5, CSS3, Vanilla JavaScript
- **Author:** Pratik Fating

---

Made with curiosity and a focus on practical frontend learning.
