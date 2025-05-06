const sidebarItems = document.querySelectorAll('.sidebar__item');
const sidebarLinks = document.querySelectorAll('.sidebar__link');
const main = document.querySelectorAll(".main");
const headerButton = document.querySelector('.header__button');
const sidebarSection = document.querySelector('.sidebar__section');
const sidebarSocial = document.querySelector(".sidebar__socials");
const sidebarCopyright = document.querySelector(".sidebar__copyright");
const sidebarLine = document.querySelectorAll(".sidebar__line");
const bottombar = document.querySelector(".bottom-bar");
let isExpanded = false;
sidebarSocial.style.display = 'none';
sidebarCopyright.style.display = 'none';
headerButton.addEventListener('click', () => {
    isExpanded = !isExpanded;
    sidebarSection.classList.toggle('expanded', isExpanded);
    sidebarLinks.forEach(link => {
        link.classList.toggle('row', isExpanded);
    });
    sidebarSocial.style.display = isExpanded ? 'flex' : 'none';
    sidebarCopyright.style.display = isExpanded ? 'flex' : 'none';
    sidebarLine.forEach(line => { 
        line.style.borderTop = isExpanded ? '0.5px solid white' : 'none';
        line.style.borderBottom = isExpanded ? '0.5px solid white' : 'none';
    });
    if (window.innerWidth <= 768) {
        bottombar.classList.toggle('show-bottom', isExpanded);
    }
    if (window.innerWidth >= 1300&& window.innerWidth<=2000) {
        main.forEach(m => {
            m.classList.toggle('expand', isExpanded);
        });
    }

    
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
        sidebarSocial.style.display = 'none';
        sidebarCopyright.style.display = 'none';
        sidebarLine.forEach(line => { 
            line.style.borderTop =  'none';
            line.style.borderBottom = 'none';
        });
        if (window.innerWidth <= 768) {
            bottombar.classList.remove('show-bottom');
        }

    });
});
  