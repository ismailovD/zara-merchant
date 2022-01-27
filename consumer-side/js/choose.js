const   radioChoose = document.querySelectorAll('.choose__label'), 
        parent = '.choose__card',
        btn = document.querySelector('.button');


radioChoose.forEach(elem => {
    elem.addEventListener('click', () => {
        radioChoose.forEach(k => {
            k.closest(parent).classList.remove('active')
        }) 
        if(elem.querySelector('input').checked){
            elem.closest(parent).classList.add('active') 
            btn.disabled = false;
        }  
    }) 
})

btn.addEventListener('click', (e)=> {    
    e.preventDefault() 
    location.href = "/saara/pages/photo.html"; 
})