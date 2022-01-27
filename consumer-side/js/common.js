burgerBtn = document.querySelector('.burger-menu__btn '),
        burgerClose = document.querySelector('.burger-menu__close'),
        burgerMenu = document.querySelector('.menu__small-screen'),
        body = document.querySelector('body');

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    burgerMenu.classList.add('show');
    body.classList.add('hidden')
})
burgerClose.addEventListener('click', (e) => {
    e.preventDefault(); 
    burgerMenu.classList.remove('show');
    body.classList.remove('hidden');
})
window.addEventListener('resize', () => {
    if(window.innerWidth > 991){
        burgerMenu.classList.remove('show');
        body.classList.remove('hidden');
    }
})
