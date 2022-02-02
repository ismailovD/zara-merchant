

const swiper2 = new Swiper(".thumbSwiper", {
    slidesPerView: 2, 
    freeMode: true,
    watchSlidesProgress: true 
 });

const swiper = new Swiper(".optionSwiper", { 
    spaceBetween: 20,
    thumbs: {
        swiper: swiper2,
    } 
});

const tabs = document.querySelectorAll('.option__tab'),
        items = document.querySelectorAll('.option__list-item'),
        targetImg = document.querySelector('.option__target-img'),
        optionRowTitle = document.querySelector('.option .row__title'),
        optionRow = document.querySelector('.option__row'),
        optionWrapper =document.querySelector('.option__wrapper'),
        oprionRight = document.querySelector('.option__right'),
        optionsPanel = document.querySelector('.option__panel'),
        btns = document.querySelectorAll('.button'),
        loadProgress = document.querySelector('.photo__load-progress');
        
        // body = document.querySelector('body'),
        // slideColor = document.querySelector('.slide-color'),
        // slideOther = document.querySelector('.slide-other'),
        // btnColor = document.querySelector('#color-btn'),
        // btnOther = document.querySelector('#other-btn');



pathLocation = '/saara/pages/p20.html'
 
btns.forEach(btn => {
    btn.addEventListener('click', (e)=> {    
        e.preventDefault(); 
        backPageArr.push('/saara/pages/option.html');
        sessionStorage.setItem('boolean' , "true");
        sessionStorage.setItem('backPage', backPageArr); 
        location.href = pathLocation; 
    }); 
})


let activeTab = sessionStorage.getItem('tab');

if(activeTab == "1"){
    swiper2.slideTo(0);
    swiper.slideTo(0);
}else if (activeTab == "2"){
    swiper2.slideTo(1);
    swiper.slideTo(1);
}

items.forEach(card => {
    if(card.classList.contains('active')){ 
        loadPhoto()
        setTimeout(() => {
            targetImg.classList.add('show')
            targetImg.setAttribute('src', card.children[0].getAttribute('src'))
        }, 1500)
    }
    card.addEventListener('click', ()=> {  
        loadPhoto(); 
        targetImg.classList.remove('show')
        items.forEach(e => e.classList.remove('active'))
        card.classList.add('active');
        console.log("sf");
        setTimeout(() => {
            targetImg.classList.add('show')
            targetImg.setAttribute('src', card.children[0].getAttribute('src'))
        }, 1400)
    })
    
})

 function loadPhoto() { 
    loadProgress.closest('.photo__load').classList.remove('hide');
    setTimeout(() => { loadProgress.classList.add('work')}, 700);
    setTimeout(()=> { loadProgress.closest('.photo__load').classList.add('hide')}, 1400);
    setTimeout(()=> { loadProgress.classList.remove('work')}, 1400)  ;
 }
 
class Color {
    constructor(option) {
        this.elements = document.querySelectorAll(option.el);
        this.elements.forEach(e => {
            e.style.background = e.getAttribute('data-color');
            e.children[0].style.border =  `2px solid ${e.getAttribute('data-color')}`   
        })
    }
}


const colorInput = new Color({
    el: '.option__choise-circle'
})


window.addEventListener('load', ()=> {
    if ( window.innerWidth < 1200) {
        changeContent() 
    }
}) 
window.addEventListener('resize', ()=> { 
    if ( window.innerWidth < 1200) {
        changeContent() 
    }
    else {
        returnContent()
    }
})




function changeContent() {
    optionRow.appendChild(optionRowTitle);   
}
function returnContent() { 
    optionWrapper.insertBefore(optionRowTitle, optionsPanel);  
}

// function changeBtn() {
//     console.log(slideColor);
//     if(slideColor.classList.contains('swiper-slide-active')){
//         body.appendChild(btnColor);
//         slideOther.appendChild(btnOther);
//     }else {
//         body.appendChild(btnOther);
//         slideColor.appendChild(btnColor);
//     } 
// }
// function returnBtn() { 
//     slideColor.appendChild(btnColor);
//     slideOther.appendChild(btnOther);
// }