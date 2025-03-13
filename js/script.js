const burger = document.querySelector('.header__burger');
burger.addEventListener('click', e => {
    burger.classList.toggle('active');
    document.querySelector('.header__wrapper').classList.toggle('active');
});