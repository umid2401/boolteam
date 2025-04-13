document.addEventListener('DOMContentLoaded', () => {
    const openSidebarButton = document.querySelector('.mobile-sidebar-button');
    const closeSidebarButton = document.querySelector('.close-mobile-button');
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    const sidebarLinks = document.querySelectorAll('.mobile-sidebar .image_links1 .image_link1');

    function openMobileSidebar() {
        if (mobileSidebar) {
            mobileSidebar.classList.add('open');
        }
    }

    function closeMobileSidebar() {
        if (mobileSidebar) {
            mobileSidebar.classList.remove('open');
        }
    }

    if (openSidebarButton && mobileSidebar && closeSidebarButton) {
        openSidebarButton.addEventListener('click', openMobileSidebar);
        closeSidebarButton.addEventListener('click', closeMobileSidebar);

        // Har bir linkga bosilganda menyuni yopish
        sidebarLinks.forEach(link => {
            link.addEventListener('click', closeMobileSidebar);
        });

        // Ekran o'lchami o'zgarganda tekshirish (agar kerak bo'lsa)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 480) {
                closeMobileSidebar();
            }
        });
    } else {
        console.error("Ochish tugmasi, yopish tugmasi yoki mobil sidebar elementi topilmadi.");
    }

    
    if (window.innerWidth <= 480 && mobileSidebar && !mobileSidebar.classList.contains('open')) {
        closeMobileSidebar(); // Agar qandaydir sababga ko'ra ochiq bo'lsa
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebarWrapper = document.querySelector('.sidebar_wrapper');
    const toggleButton = document.querySelector('.toogle-sidebar-button');
    const mainWrapper = document.querySelector('.main_wrapper');
    const linkTexts = document.querySelectorAll('.image_link .link-text');
    const toggleButtonSpan = toggleButton.querySelector('.spans');
    const toggleButtonSvg = toggleButton.querySelector('svg');

    const expandedWidth = '180px';
    const collapsedWidth = '68px';
    const collapseText = '';
    const expandText = 'Свернуть'; // Или другой текст для развернутого состояния

    const updateMainWrapperLayout = (isCollapsed) => {
        mainWrapper.style.marginLeft = isCollapsed ? collapsedWidth : expandedWidth;
        mainWrapper.style.width = `calc(100% - ${isCollapsed ? collapsedWidth : expandedWidth})`;
    };

    // Функция для установки состояния боковой панели
    const setSidebarState = (isCollapsed) => {
        sidebarWrapper.classList.toggle('collapsed', isCollapsed);
        updateMainWrapperLayout(isCollapsed);
        sidebarWrapper.style.width = isCollapsed ? collapsedWidth : expandedWidth;
        toggleButtonSpan.textContent = isCollapsed ? expandText : expandText;
        toggleButtonSvg.style.transform = isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)';

        // Управляем видимостью текста ссылок
        linkTexts.forEach(textElement => {
            textElement.style.opacity = isCollapsed ? 0 : 1;
            textElement.style.width = isCollapsed ? '0' : 'auto';
            textElement.style.overflow = 'hidden';
            textElement.style.marginLeft = isCollapsed ? '-10px' : '0';
        });

        // Сохраняем состояние в локальном хранилище
        localStorage.setItem('sidebarCollapsed', isCollapsed);
    };

    // Проверяем состояние из локального хранилище при загрузке
    const savedState = localStorage.getItem('sidebarCollapsed');
    const initialCollapsedState = savedState === 'true';
    setSidebarState(initialCollapsedState);

    // Обработчик клика на кнопку переключения
    toggleButton.addEventListener('click', () => {
        const isCurrentlyCollapsed = sidebarWrapper.classList.contains('collapsed');
        setSidebarState(!isCurrentlyCollapsed);
    });

    // Добавляем текст к ссылкам, если его нет
    const imageLinks = document.querySelectorAll('.image_link');
    imageLinks.forEach(link => {
        if (!link.querySelector('.link-text')) {
            const text = link.getAttribute('data-text');
            if (text) {
                const span = document.createElement('span');
                span.classList.add('link-text');
                span.textContent = text;
                link.appendChild(span);
            }
        }
    });
});
