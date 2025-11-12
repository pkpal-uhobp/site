// Reworked mobile menu logic
document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById('navbarToggler');
    const overlay = document.getElementById('navbarOverlay');
    const panel = document.getElementById('mobileMenuPanel');
    const closeBtn = document.getElementById('menuCloseBtn');
    const links = Array.from(document.querySelectorAll('.mobile-nav-link'));

    function openMenu() {
        overlay.hidden = false;
        requestAnimationFrame(() => {
            overlay.classList.add('show');
            document.body.classList.add('menu-open');
        });
        toggler.setAttribute('aria-expanded', 'true');
        // Фокус на первую ссылку для доступности
        links[0]?.focus();
    }

    function closeMenu() {
        overlay.classList.remove('show');
        document.body.classList.remove('menu-open');
        toggler.setAttribute('aria-expanded', 'false');
        // Ждем окончание transition чтобы скрыть
        setTimeout(() => {
            overlay.hidden = true;
        }, 350);
    }

    function toggleMenu() {
        if (overlay.classList.contains('show')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    toggler?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    closeBtn?.addEventListener('click', () => closeMenu());

    // Закрытие по клику вне панели
    overlay?.addEventListener('click', (e) => {
        if (!panel.contains(e.target)) {
            closeMenu();
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('show')) {
            closeMenu();
        }
    });

    // Клик по ссылке = переход + закрытие
    links.forEach((link) => {
        link.addEventListener('click', () => {
            closeMenu();
            setActiveLink(link.getAttribute('href'));
        });
    });

    // Подсветка активной ссылки по hash
    function setActiveLink(hash) {
        links.forEach((l) => l.classList.remove('nav-link--active'));
        if (!hash) return;
        const target = links.find((l) => l.getAttribute('href') === hash);
        target?.classList.add('nav-link--active');
    }

    // При загрузке если уже есть hash (перезагрузка)
    setActiveLink(window.location.hash);

    // При прокрутке / переходе (опционально можно усложнить: вычисление секции в viewport)
    window.addEventListener('hashchange', () => {
        setActiveLink(window.location.hash);
    });
});
