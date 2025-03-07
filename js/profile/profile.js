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
const menuToggle = document.querySelector(".menu-toggle-links");
const menu = document.querySelector(".tabs");


// menuToggle.addEventListener("click", function (event) {
//     event.stopPropagation();
//     menu.classList.toggle("show");
// });


document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove("show");
    }
});
//toast

const showToast = () => {
    let container = document.querySelector(".toast-container");
    container.style.display = "block";
    setTimeout(() => {
        toast.classList.remove("show");
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

menuBtn.addEventListener("click", () => {
    menu_right.classList.toggle("show");
});

// Tashqariga bosganda yopiladi
document.addEventListener("click", (e) => {
    if (!menu_right.contains(e.target) && !menuBtn.contains(e.target)) {
        menu_right.classList.remove("show");
    }
});
