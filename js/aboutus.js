// Language Toggle
document.getElementById("lang-toggle").addEventListener("click", function () {
    const currentLang = document.documentElement.lang;
    const isArabic = currentLang === "ar";

    // Toggle language
    document.documentElement.lang = isArabic ? "en" : "ar";

    // Update button text
    this.textContent = isArabic ? "ع" : "EN";

    const translations = {
        en: {
            home: "Home",
            services: "Services",
            contact: "Contact",
            about: "About",
            "about-title": "About Us",
            "our-story-title": "Our Story",
            "our-story-desc": "Established in 1990, DELTA AL-BATT'HA TRADING CO. has been a trusted retailer of genuine NISSAN auto parts for over three decades.",
            "our-mission-title": "Our Mission",
            "our-mission-desc": "To provide authentic NISSAN auto parts that meet the highest standards of quality.",
            "our-vision-title": "Our Vision",
            "our-vision-desc": "To become the most reliable and customer-focused retailer of NISSAN auto parts.",
            "footer-rights": "© 2024 DELTA AL-BATT'HA TRADING CO. All rights reserved.",
            "footer-contact": "Phone: +123-456-7890 | Email: contact@deltaparts.com",
        },
        ar: {
            home: "الرئيسية",
            services: "الخدمات",
            contact: "اتصل بنا",
            about: "حول",
            "about-title": "حول الشركة",
            "our-story-title": "قصتنا",
            "our-story-desc": "تأسست شركة دلتا البطحاء التجارية في عام 1990 وكانت ولا تزال موردًا موثوقًا لقطع غيار السيارات الأصلية لشركة نيسان.",
            "our-mission-title": "مهمتنا",
            "our-mission-desc": "توفير قطع غيار نيسان الأصلية التي تلبي أعلى معايير الجودة.",
            "our-vision-title": "رؤيتنا",
            "our-vision-desc": "أن نصبح المورد الأكثر موثوقية واهتماماً بالعملاء لقطع غيار نيسان.",
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

