const toastContainer = document.getElementById('toast-container');
const toasts = document.querySelectorAll('.toast');
let isDragging = false;
let currentToast = null;
let offsetX, offsetY;
const hideDelay = 2000; // Задержка перед началом исчезновения следующего тоста

let timeoutId = null;

function hideToast(toast) {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => {
        toast.remove();
    }, 300); // Длительность анимации скрытия
}

toasts.forEach((toast, index) => {
    const showDelay = 50 * (toasts.length - index);

    // Показать тост с небольшой задержкой для эффекта появления сверху
    setTimeout(() => {
        toast.classList.add('show');

        // Запланировать исчезновение после показа всех тостов
        if (index === 0) {
            timeoutId = setTimeout(() => {
                hideToast(toasts[toasts.length - 1]); // Начать с верхнего
                let i = toasts.length - 2;
                const intervalId = setInterval(() => {
                    if (i >= 0) {
                        hideToast(toasts[i]);
                        i--;
                    } else {
                        clearInterval(intervalId);
                    }
                }, hideDelay);
            }, showDelay + 500); // Небольшая задержка после появления всех
        }
    }, showDelay);

    // Кнопка закрытия
    const closeButton = toast.querySelector('.close-btn');
    closeButton.addEventListener('click', () => {
        clearTimeout(timeoutId); // Отменить автоматическое исчезновение
        clearInterval(intervalId); // Отменить интервал исчезновения
        hideToast(toast);
        // Удалить тост из NodeList, чтобы избежать проблем с индексацией
        const indexToRemove = Array.from(toasts).indexOf(toast);
        if (indexToRemove > -1) {
            toasts.splice(indexToRemove, 1);
        }
    });

    // Перетаскивание
    toast.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentToast = toast;
        toast.style.cursor = 'grabbing';
        offsetX = e.clientX - toast.getBoundingClientRect().left;
        offsetY = e.clientY - toast.getBoundingClientRect().top;
    });
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging || !currentToast) return;
    currentToast.style.left = e.clientX - offsetX + 'px';
    currentToast.style.top = e.clientY - offsetY + 'px';
    // Ограничение движения в пределах видимой области (необязательно, но улучшает UX)
    const rect = currentToast.getBoundingClientRect();
    const containerRect = document.documentElement.getBoundingClientRect();
    currentToast.style.left = Math.max(0, Math.min(rect.left, containerRect.width - rect.width)) + 'px';
    currentToast.style.top = Math.max(0, Math.min(rect.top, containerRect.height - rect.height)) + 'px';
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    if (currentToast) {
        currentToast.style.cursor = 'grab';
        currentToast = null;
    }
});
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


const arrowToggles = document.querySelectorAll('.arrow-toogle');

const checkboxLists = document.querySelectorAll('.checkbox-list');
const inputFields = document.querySelectorAll('.input-data > input[type="text"]'); // inputlarni to'g'riroq olish

// Dastlab barcha checkbox-listlarni yashirish
checkboxLists.forEach(list => {
    list.classList.add('hidden'); // 'hidden' klassi CSSda display: none; yoki shunga o'xshash uslubga ega bo'lishi kerak
});

arrowToggles.forEach((arrow, index) => {
    arrow.addEventListener('click', (event) => {
        const currentArrow = event.target;
        const parentInputData = currentArrow.closest('.input-data');
        const currentCheckboxList = parentInputData.querySelector('.checkbox-list');
        const relatedInput = parentInputData.querySelector('input[type="text"]'); // shu input-data ichidagi inputni olish

        // Barcha ochiq checkbox-listlarni yopish va strelkalarni qaytarish
        checkboxLists.forEach(list => {
            if (list !== currentCheckboxList && list.classList.contains('visible')) {
                list.classList.remove('visible');
                const relatedArrowElement = list.previousElementSibling;
                if (relatedArrowElement && relatedArrowElement.classList.contains('arrow-toogle')) {
                    relatedArrowElement.classList.remove('rotated');
                }
            }
        });

        // Joriy checkbox-listni ochish/yopish va strelkani aylantirish
        currentCheckboxList.classList.toggle('visible');
        currentArrow.classList.toggle('rotated');

        // Hodisani ota-ona elementlarga tarqalishini to'xtatish
        event.stopPropagation();
    });
});

// Boshqa joyga bosilganda barcha ochiq checkbox-listlarni yopish
document.addEventListener('click', () => {
    checkboxLists.forEach(list => {
        if (list.classList.contains('visible')) {
            list.classList.remove('visible');
            const relatedArrowElement = list.previousElementSibling;
            if (relatedArrowElement && relatedArrowElement.classList.contains('arrow-toogle')) {
                relatedArrowElement.classList.remove('rotated');
            }
        }
    });
});

// Checkboxlardagi o'zgarishlarni kuzatish va inputni yangilash
const showmoreButtons = document.querySelectorAll(".show-mores");

showmoreButtons.forEach(button => {
    button.addEventListener("click", () => {
        const parent = button.previousElementSibling;
        const dots = parent.querySelector(".dots");
        const hiddenText = parent.querySelector(".hidden-text");

        if (hiddenText.classList.contains("hidden-active")) {
            hiddenText.classList.remove("hidden-active");
            dots.style.display = "none";
            button.textContent = "Скрыть";
        } else {
            hiddenText.classList.add("hidden-active");
            dots.style.display = "inline";
            button.textContent = "Показать дальше";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const descElements = document.querySelectorAll('.descs');
  
    descElements.forEach(function(descElement) {
      const dotsSpan = descElement.querySelector('.pdots');
      const moreSpan = descElement.querySelector('.pmore');
      const showMoreLink = descElement.querySelector('.show-mores-p');
  
      if (dotsSpan && moreSpan && showMoreLink) {
        moreSpan.style.display = 'none';
  
        showMoreLink.addEventListener('click', function(event) {
          event.preventDefault();
          if (showMoreLink.textContent === 'Показать дальше') {
            dotsSpan.style.display = 'none';
            moreSpan.style.display = 'inline';
            showMoreLink.textContent = 'Скрыть';
          } else {
            dotsSpan.style.display = 'inline';
            moreSpan.style.display = 'none';
            showMoreLink.textContent = 'Показать дальше';
          }
        });
      }
    });
  });