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
    spaceBetween: 10, // Отступы между слайдами
    freeMode: true, // Включаем свободный режим
    freeModeSticky: false, // Отключаем "прилипание" слайдов
    grabCursor: true, // Делаем курсор "рукой"
    enabled: true,
    breakpoints: {
        851: {
            enabled: false,
            spaceBetween: 0,
        }
    },
    on: {
        setTranslate(swiper, translate) {
          swiper.wrapperEl.style.transform = `translate3d(${translate + 10}px, 0px, 0px)`;
        }
      }
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

// ScrollTO
document.querySelectorAll('.header__list-item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      burger.classList.remove('active');
      menu.classList.remove('active');
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
// Header

let lastScrollTop = 0;
const header = document.querySelector(".header");
const mainBlock = document.querySelector("main");
const headerHeight = header.offsetHeight;
mainBlock.style.paddingTop = headerHeight + "px";

window.addEventListener("scroll", () => {

    if (window.scrollY > headerHeight) {
        header.style.position = `fixed`;
        if (window.scrollY > lastScrollTop) {
            // Скроллим вниз — скрываем шапку
            header.style.transform = `translateY(-100%)`;
        } else {
            // Скроллим вверх — показываем шапку
            header.style.transition = `0.3s ease-in-out 0s`;
            header.style.transform = `translateY(0)`;
        }
    } 
    if(window.scrollY === 0) {
        setTimeout(() => {
            if(window.scrollY === 0) {
                header.style.position = `absolute`;
                header.style.transition = `none`;
            }
        }, 300);
    }

    lastScrollTop = window.scrollY;
});
