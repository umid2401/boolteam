document.addEventListener('DOMContentLoaded', () => {
    const openSidebarButton = document.querySelector('.mobile-sidebar-button');
    const mobileSidebar = document.querySelector('.mobile-sidebar');

    function closeMobileSidebar() {
        if (mobileSidebar && mobileSidebar.classList.contains('open')) {
            mobileSidebar.classList.remove('open');
        }
    }

    if (openSidebarButton && mobileSidebar) {
        openSidebarButton.addEventListener('click', () => {
            mobileSidebar.classList.toggle('open');
        });

        // Ekran o'lchami o'zgarganda tekshirish
        window.addEventListener('resize', () => {
            if (window.innerWidth > 480) {
                closeMobileSidebar();
            }
        });
    } else {
        console.error("Ochish tugmasi yoki mobil sidebar elementi topilmadi.");
    }

    // Sahifa birinchi marta yuklanganda ham kichik ekranda bo'lsa, yopiq bo'lsin (ixtiyoriy)
    if (window.innerWidth <= 480 && mobileSidebar && !mobileSidebar.classList.contains('open')) {
        mobileSidebar.classList.remove('open'); // Agar qandaydir sababga ko'ra ochiq bo'lsa
    }
});