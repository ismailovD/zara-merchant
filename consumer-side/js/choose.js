const   radioChoose = document.querySelectorAll('.some__label'),  
        btn = document.querySelector('.button');


radioChoose.forEach(elem => {
    elem.addEventListener('click', () => {
        radioChoose.forEach(k => {
            k.classList.remove('active')
        }) 
        if(elem.querySelector('input').checked){
            elem.classList.add('active') 
            btn.disabled = false;
        }  
    }) 
})

btn.addEventListener('click', (e)=> {    
    e.preventDefault() 
    location.href = "/saara/pages/photo.html"; 
})