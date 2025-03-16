const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});
// swiper 
new Swiper(".firstscreen__swiper", {
    slidesPerView: "auto", // Слайды не сжимаются
    spaceBetween: 0, // Отступы между слайдами
    freeMode: true, // Включаем свободный режим
    freeModeSticky: false, // Отключаем "прилипание" слайдов
    grabCursor: true, // Делаем курсор "рукой"
    enabled: true,
    breakpoints: {
        851: {
            enabled: false 
        }
    }
});
new Swiper(".price__swiper", {
    slidesPerView: "auto", // Слайды не сжимаются
    spaceBetween: 0, // Отступы между слайдами
    freeMode: true, // Включаем свободный режим
    freeModeSticky: false, // Отключаем "прилипание" слайдов
    grabCursor: true, // Делаем курсор "рукой"
    enabled: true,
    // breakpoints: {
    //     851: {
    //         enabled: false 
    //     }
    // }
});
// popup
const popup = document.querySelector(".order-popup");
const openPopups = document.querySelectorAll(".btn");
const closePopup = document.querySelector(".order-popup__exit-img");

    openPopups.forEach(btn => {
        btn.addEventListener("click", () => {
            popup.classList.add("active");
        })  
    })


closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
});

// Закрытие при клике вне окна
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("active");
    }
});
