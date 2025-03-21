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
        0: {
            slidesOffsetBefore: 150,
        },
        501: {
            slidesOffsetBefore: 210,
        },
        851: {
            enabled: false,
            spaceBetween: 0,
            slidesOffsetBefore: 0,
        }
    },
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

// Burger

const htmlElement = document.querySelector('html');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

function removeBurger(e) {
    if (!header.contains(e.target)) {
        htmlElement.classList.remove('lock'); 
        burger.classList.remove('active');
        menu.classList.remove('active');
        document.removeEventListener('click', removeBurger);
    }
}

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    htmlElement.classList.toggle('lock');
    document.addEventListener('click', removeBurger);
});

// ScrollTO
document.querySelectorAll('.header__list-item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      htmlElement.classList.remove('lock'); 
      burger.classList.remove('active');
      menu.classList.remove('active');
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        if (targetElement.offsetTop < window.scrollY) {
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
              });
        } else {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
              });
        }

      }
    });
  });    

// Highliting-box

const highlitingBoxes = document.querySelectorAll(".highliting-box");

highlitingBoxes.forEach(box => {
    const highlitingBoxesSpans = Array.from(box.children).filter(child => child.tagName === "SPAN");

    let LastSpan = null;

    let translateYValue = 0;

    let SpanTranslateY = 0

    if (window.innerWidth > 600) {
        translateYValue = 10;
    } else {
        translateYValue = 5;
    }

    

   

for (let index = 0; index < highlitingBoxesSpans.length; index++) {

    let highlitingSpan = highlitingBoxesSpans[index];


    if(index !== 0) {
        SpanTranslateY = SpanTranslateY + translateYValue;
        highlitingSpan.style.transform = `translateY(-${SpanTranslateY}px)`;
        if(highlitingSpan.offsetWidth > LastSpan.offsetWidth) {
            highlitingSpan.classList.add("wider-last")
            LastSpan.classList.add("shorter-next")
        } else {
            highlitingSpan.classList.add("shorter-last")
            LastSpan.classList.add("wider-next")
        }
    }

    if(index + 1 === highlitingBoxesSpans.length) {
        box.style.height = `${box.offsetHeight - SpanTranslateY}px`
    }



    LastSpan = highlitingSpan;

    
}
})


