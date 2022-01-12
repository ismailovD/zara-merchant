const   policyItems = document.querySelectorAll('.commonly__item'),
        policyScroll = document.querySelector('.commonly__list'),
        samplesAdd  = document.querySelectorAll('.commonly__item-plus'),
        reasonList = document.querySelector('.question__list'),
        saveReason = document.querySelector('.add-reason__save'),
        poperBg = document.querySelector('.warning__wrapper'),
        poperClose = document.querySelector('.warning__close'), 
        upgradeBtn = document.querySelector('#applicable-upgrade'),
        applicableAddInput = document.querySelector('.applicable__text-input'),
        body = document.querySelector('body');
 

const swiperBrands = new Swiper('.brands__swiper', { 
    loop: true, 
    slidesPerView: 1,  
    watchSlidesVisibility: true,
    watchSlidesProgress: true, 
    spaceBetween:30,
    updateOnWindowResize:true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpointsBase: 'container',
    breakpoints: {
        350: {
            slidesPerView:2, 
        } ,
        550: {
           slidesPerView: 3, 
         },
         750: {
           slidesPerView: 4, 
         },
         1150: {
           slidesPerView: 5,
           spaceBetween: 15,
         },
         1350: {
           slidesPerView: 6,
           spaceBetween: 15,
         } 
       },    
})
 