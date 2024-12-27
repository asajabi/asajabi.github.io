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
            "services-title": "Our Services",
            "engine-title": "Engine Parts",
            "engine-desc": "We provide high-quality engine parts for all car models, ensuring performance and durability.",
            "suspension-title": "Suspension Systems",
            "suspension-desc": "Our suspension parts ensure a smooth and safe driving experience.",
            "electrical-title": "Electrical Components",
            "electrical-desc": "Reliable and long-lasting electrical components for all your needs.",
            "accessories-title": "Accessories",
            "accessories-desc": "Upgrade your car with premium accessories for better style and functionality.",
            "footer-rights": "© 2024 DELTA AL-BATT'HA TRADING CO. All rights reserved.",
            "footer-contact": "Phone: +123-456-7890 | Email: contact@deltaparts.com",
        },
        ar: {
            home: "الرئيسية",
            services: "الخدمات",
            contact: "اتصل بنا",
            about: "حول",
            "services-title": "الخدمات",
            "engine-title": "أجزاء المحرك",
            "engine-desc": "نقدم أجزاء محرك عالية الجودة لجميع طرازات السيارات لضمان الأداء والمتانة.",
            "suspension-title": "أنظمة التعليق",
            "suspension-desc": "تضمن أجزاء التعليق الخاصة بنا تجربة قيادة سلسة وآمنة.",
            "electrical-title": "المكونات الكهربائية",
            "electrical-desc": "مكونات كهربائية موثوقة وطويلة الأمد لجميع احتياجاتك.",
            "accessories-title": "الإكسسوارات",
            "accessories-desc": "قم بترقية سيارتك باستخدام إكسسوارات متميزة لتحسين المظهر والوظائف.",
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
        navLinks.style.opacity = "2";
    } else {
        navLinks.style.maxHeight = null;
        navLinks.style.opacity = "0";
    }
});

