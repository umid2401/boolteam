const sidebarItems = document.querySelectorAll('.sidebar__item');
const sidebarLinks = document.querySelectorAll('.sidebar__link');
const headerButton = document.querySelector('.header__button');
const sidebarSection = document.querySelector('.sidebar__section');
let isExpanded = false;
headerButton.addEventListener('click', () => {
    isExpanded = !isExpanded;
    sidebarSection.classList.toggle('expanded', isExpanded);
    sidebarLinks.forEach(link => {
        link.classList.toggle('row', isExpanded);
    });
});
sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.stopPropagation();
        isExpanded = false;
        sidebarSection.classList.remove('expanded');
        sidebarLinks.forEach(linkElement => {
            linkElement.classList.remove('row');
        });
        sidebarItems.forEach(item => item.classList.remove('active'));
        event.target.closest('.sidebar__item').classList.add('active');
    });
});