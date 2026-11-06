/* AUSPIEY landing page interactions */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const progressBar = document.getElementById("progressBar");
  const backToTop = document.getElementById("backToTop");
  const sections = [...document.querySelectorAll("main section[id]")];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Mobile navigation
  function closeMenu() {
    primaryNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("menu-open");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    primaryNav.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  [...primaryNav.querySelectorAll("a")].forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });

  // Smooth anchor scrolling with a fallback for browsers with reduced motion.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      if (history.replaceState) history.replaceState(null, "", targetId);
    });
  });

  // Scroll progress and back-to-top visibility.
  function updateScrollUI() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    backToTop.classList.toggle("visible", window.scrollY > 450);
  }
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  // Highlight the navigation link for the section currently in view.
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  // Reveal elements as they enter the viewport.
  const revealElements = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach(element => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealElements.forEach(element => revealObserver.observe(element));
  }

  // Contact form validation. This demo does not send data to a backend.
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const fields = {
    fullName: { input: document.getElementById("fullName"), error: document.getElementById("nameError") },
    email: { input: document.getElementById("email"), error: document.getElementById("emailError") },
    subject: { input: document.getElementById("subject"), error: document.getElementById("subjectError") },
    message: { input: document.getElementById("message"), error: document.getElementById("messageError") }
  };

  function setFieldError(field, message) {
    field.error.textContent = message;
    field.input.classList.toggle("invalid", Boolean(message));
    field.input.setAttribute("aria-invalid", String(Boolean(message)));
  }

  function validateForm() {
    let valid = true;
    const name = fields.fullName.input.value.trim();
    const email = fields.email.input.value.trim();
    const subject = fields.subject.input.value.trim();
    const message = fields.message.input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const checks = [
      ["fullName", name ? "" : "Please enter your full name."],
      ["email", !email ? "Please enter your email address." : (!emailPattern.test(email) ? "Please enter a valid email address." : "")],
      ["subject", subject ? "" : "Please enter a subject."],
      ["message", message ? "" : "Please enter a message."]
    ];

    checks.forEach(([key, error]) => {
      setFieldError(fields[key], error);
      if (error) valid = false;
    });
    return valid;
  }

  Object.values(fields).forEach(field => {
    field.input.addEventListener("input", () => {
      setFieldError(field, "");
      formStatus.textContent = "";
      formStatus.className = "form-status";
    });
  });

  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    formStatus.textContent = "";
    formStatus.className = "form-status";

    if (!validateForm()) {
      formStatus.textContent = "Please correct the highlighted fields and try again.";
      formStatus.classList.add("error");
      const firstInvalid = contactForm.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    formStatus.textContent = "Thank you! Your form has been validated successfully. This demo does not send messages to a server.";
    formStatus.classList.add("success");
    contactForm.reset();
    Object.values(fields).forEach(field => setFieldError(field, ""));
  });

  // Keep the copyright year current.
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});
