// Language Toggle
document.getElementById("lang-toggle").addEventListener("click", function () {
    const currentLang = document.documentElement.lang;
    const isArabic = currentLang === "ar";

    // Toggle language
    document.documentElement.lang = isArabic ? "en" : "ar";

    // Update button text
    this.textContent = isArabic ? "ع" : "EN";

    const translations = {
        ar: {
            home: "الرئيسية",
            services: "الخدمات",
            contact: "اتصل بنا",
            about: "حول",
            "hero-title": "شركة دلتا البطحاء التجارية",
            "hero-subtitle": "مصدر موثوق لقطع غيار السيارات الأصلية",
            "hero-desc": "!نوفر قطع غيار سيارات عالية الجودة لتلبية احتياجاتك. تصفح مجموعة منتجاتنا الواسعة",
            explore: "استكشاف الخدمات",
            "footer-rights": "© 2024 .شركة دلتا البطحاء للتجارة. جميع الحقوق محفوظة",
            "footer-contact": "هاتف: +123-456-7890 | بريد إلكتروني: contact@deltaparts.com",
            cars: {
                altima: "التيما",
                armada: "ارمادا",
                cedric: "سيدريك",
                civilian: "سفليان",
                datsun: "داتسون",
                kicks: "كيكس",
                laurel: "لوريل",
                navara: "نافارا",
                pathfinder: "باثفايندر",
                patrol: "باترول",
                sentra: "سنترا",
                sunny: "صني",
                tiida: "تيدا",
                urvan: "اورفان",
                xterra: "اكستيرا",
                xtrail: "اكستريل",
            },
        },
        en: {
            home: "Home",
            services: "Services",
            contact: "Contact",
            about: "About",
            "hero-title": "DELTA AL-BATT'HA TRADING CO.",
            "hero-subtitle": "Your Trusted Source for Genuine Car Parts",
            "hero-desc": "We offer high-quality, reliable car parts to meet your needs. Browse our wide range of products!",
            explore: "Explore Services",
            "footer-rights": "© 2024 DELTA AL-BATT'HA TRADING CO. All rights reserved.",
            "footer-contact": "Phone: +123-456-7890 | Email: contact@deltaparts.com",
            cars: {
                altima: "Altima",
                armada: "Armada",
                cedric: "Cedric",
                civilian: "Civilian",
                datsun: "Datsun",
                kicks: "Kicks",
                laurel: "Laurel",
                navara: "Navara",
                pathfinder: "Pathfinder",
                patrol: "Patrol",
                sentra: "Sentra",
                sunny: "Sunny",
                tiida: "Tiida",
                urvan: "Urvan",
                xterra: "X-Terra",
                xtrail: "X-Trail",
            },
        },
    };

    const langToApply = isArabic ? translations.en : translations.ar;

    // Update text dynamically
    document.querySelectorAll("[data-key]").forEach((el) => {
        const key = el.getAttribute("data-key");
        el.textContent = langToApply[key];
    });

    // Update car names dynamically
    document.querySelectorAll(".car").forEach((car) => {
        const carId = car.id;
        car.textContent = langToApply.cars[carId];
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