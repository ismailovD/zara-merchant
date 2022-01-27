const   radioChoose = document.querySelectorAll('.choose__card'),  
        parent = '.choose__card';


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
 
