const   radioChoose = document.querySelectorAll('.choose__label'),
        parent = '.choose__card',
        btn = document.querySelector('.button');


pathLocation = "/saara/pages/p21.html"; 
 
btn.addEventListener('click', (e)=> {    
    e.preventDefault() ; 
    backPageArr.push('/saara/pages/p8.html');
    sessionStorage.setItem('boolean' , "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = pathLocation; 
}); 


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

 