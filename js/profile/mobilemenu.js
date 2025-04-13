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