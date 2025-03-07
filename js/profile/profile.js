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
    let toast = document.querySelector(".toast");
    let container = document.querySelector(".toast-container");
    container.style.display = "block";
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => container.style.display = "none", 500);
    }, 3000);
};
setInterval(showToast, 5000);
document.querySelector(".close-btn").onclick = () => {
    let toast = document.querySelector(".card");
    let container = document.querySelector(".toast-container");
    toast.classList.remove("show");
    setTimeout(() => container.style.display = "none", 0);
};


