// Language Toggle
document.getElementById("lang-toggle").addEventListener("click", function () {
    const currentLang = document.documentElement.lang;
    const isArabic = currentLang === "ar";

    // Toggle language
    document.documentElement.lang = isArabic ? "en" : "ar";

    // Update button text
    this.textContent = isArabic ? "EN" : "ع";

    const translations = {
        en: {
            home: "Home",
            services: "Services",
            contact: "Contact",
            about: "About",
            "contact-title": "Contact Us",
            "contact-desc": "We'd love to hear from you! Please fill out the form below.",
            "name-label": "Your Name:",
            "name-placeholder": "Enter your name",
            "email-label": "Your Email:",
            "email-placeholder": "Enter your email",
            "message-label": "Your Message:",
            "message-placeholder": "Write your message here",
            "send-button": "Send Message",
            "footer-rights": "© 2024 DELTA AL-BATT'HA TRADING CO. All rights reserved.",
            "footer-contact": "Phone: +123-456-7890 | Email: contact@deltaparts.com",
        },
        ar: {
            home: "الرئيسية",
            services: "الخدمات",
            contact: "اتصل بنا",
            about: "حول",
            "contact-title": "اتصل بنا",
            "contact-desc": "نود أن نسمع منك! يرجى ملء النموذج أدناه.",
            "name-label": "اسمك:",
            "name-placeholder": "أدخل اسمك",
            "email-label": "بريدك الإلكتروني:",
            "email-placeholder": "أدخل بريدك الإلكتروني",
            "message-label": "رسالتك:",
            "message-placeholder": "اكتب رسالتك هنا",
            "send-button": "إرسال الرسالة",
            "footer-rights": "© 2024 شركة دلتا البطحاء التجارية. جميع الحقوق محفوظة.",
            "footer-contact": "الهاتف: +123-456-7890 | البريد الإلكتروني: contact@deltaparts.com",
        },
    };

    const langToApply = isArabic ? translations.en : translations.ar;

    // Update text dynamically
    document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        el.textContent = langToApply[key];
    });

    // Update placeholders
    document.getElementById("name").setAttribute("placeholder", langToApply["name-placeholder"]);
    document.getElementById("email").setAttribute("placeholder", langToApply["email-placeholder"]);
    document.getElementById("message").setAttribute("placeholder", langToApply["message-placeholder"]);
});

// Hamburger Menu Toggle
document.getElementById("hamburger-menu").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");

    // Smooth animation for opening/closing
    if (navLinks.classList.contains("show")) {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
        navLinks.style.opacity = "1";
    } else {
        navLinks.style.maxHeight = null;
        navLinks.style.opacity = "0";
    }
});

