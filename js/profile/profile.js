document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const toggleBtn = document.querySelector(".dropdown-toggle");
    toggleBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("active");
    });
    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });
});
//menu for profile
document.addEventListener("DOMContentLoaded", () => {
    let menuToggle = document.querySelector(".menu-toggle-links");
    let menu = document.querySelector(".tabs");

    function toggleMenu(event) {
      event.stopPropagation();
      menu.classList.toggle("show");
    }

    function closeMenu() {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    }

    function updateElements() {
      menuToggle = document.querySelector(".menu-toggle-links");
      menu = document.querySelector(".tabs");

      if (menuToggle && menu) {
        menuToggle.addEventListener("click", toggleMenu);
        const menuLinks = menu.querySelectorAll("a");
        menuLinks.forEach(link => link.addEventListener("click", closeMenu));
      }
    }

    updateElements();
    window.addEventListener("resize", updateElements);

    document.addEventListener("click", (event) => {
      if (menu.classList.contains("show") && !menu.contains(event.target)) {
        closeMenu();
      }
    });
  });

//toast
const showToast = () => {
    let container = document.querySelector(".toast-container");
    container.style.display = "block";
    setTimeout(() => {
      
        setTimeout(() => container.style.display = "none", 500);
    }, 3000);
};
setInterval(showToast, 5000);
document.querySelector(".close-btn").onclick = () => {
    let container = document.querySelector(".toast-container");
    setTimeout(() => container.style.display = "none", 0);
};
//ikonka settings
const settings = document.querySelector(".settings");
const icon = document.querySelector(".icons_");

icon.addEventListener("click", (e) => {
    e.stopPropagation();
    settings.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (!settings.contains(e.target) && !icon.contains(e.target)) {
        settings.classList.remove("show");
    }
});
// 
const menuBtn = document.querySelector(".menu-btn1");
const menu_right = document.querySelector(".menu-hidden");

function toggleMenu() {
    if (window.innerWidth < 1600) {
        menu_right.classList.toggle("show");
    }
}
menuBtn.addEventListener("click", toggleMenu);
// Resize hodisasi
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1600) {
        menu_right.classList.remove("show"); 
    }
});
// Tashqariga bosganda yopiladi
document.addEventListener("click", (e) => {
    if (!menu_right.contains(e.target) && !menuBtn.contains(e.target)) {
        menu_right.classList.remove("show");
    }
});
