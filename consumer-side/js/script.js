const cards = document.querySelectorAll('.card'),
    radioReason = document.querySelectorAll('.reason__label'),
    radioChoose = document.querySelectorAll('.choose__label'),
    closeTextarea = document.querySelector('.other__close'),
    photos = document.querySelectorAll('.photo__table-img'),
    callTable = document.querySelectorAll('.call-table'),
    closeTable = document.querySelector('.photo__modal-close'),
    photoTable = document.querySelector('.photo__modal'), 
    photoCard = document.querySelectorAll('.photo__card'),
    photoRow = document.querySelector('.photo__row'),
    btn = document.querySelector('.button'),
    itemsRight = document.querySelector('.items__right'),
    itemsContent = document.querySelector('.items__content');
 
window.addEventListener('load', () => {
    if(itemsRight.clientWidth == 0){
        itemsContent.classList.add('change')
    }
})
    
  


cards.forEach(e => {
    for (let i = 0; i < 4; i++) {
        cards[i].classList.add('show')
    } 
    e.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('active')
        })
        e.classList.add('active')
        btn.disabled = false;
    })
})

btn.addEventListener('click', (e)=> {    
        e.preventDefault() 
        location.href = "/saara/pages/reason.html"; 
}, false)




