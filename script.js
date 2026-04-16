document.addEventListener('DOMContentLoaded', function () {

    var burger = document.getElementById('burgerBtn');
    var dropdown = document.getElementById('menuDropdown');

    function closeMenu() {
        burger.classList.remove('active');
        dropdown.classList.remove('open');
    }

    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        dropdown.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target) && !burger.contains(e.target)) {
            closeMenu();
        }
    });

    dropdown.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    var header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var question = item.querySelector('.faq-question');
        question.addEventListener('click', function () {
            var isActive = item.classList.contains('active');
            faqItems.forEach(function (i) { i.classList.remove('active'); });
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    var fadeEls = document.querySelectorAll('.service-card, .value-item, .faq-item, .about-text, .contact-info-centered');
    fadeEls.forEach(function (el) { el.classList.add('fade-in'); });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    fadeEls.forEach(function (el) { observer.observe(el); });

});
