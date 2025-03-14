const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});
// swiper 
new Swiper(".swiper", {
    slidesPerView: "auto", // Слайды не сжимаются
    spaceBetween: 0, // Отступы между слайдами
    freeMode: true, // Включаем свободный режим
    freeModeSticky: false, // Отключаем "прилипание" слайдов
    grabCursor: true, // Делаем курсор "рукой"
    enabled: true,
    breakpoints: {
        851: {
            enabled: false // Включается на экранах <= 850px
        }
    }
});
