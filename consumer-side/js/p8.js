const   radioChoose = document.querySelectorAll('.some__label'),
        parent = '.some__card',
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
            k.classList.remove('active')
        })  
            elem.classList.add('active') 
            btn.disabled = false; 
    })
})

 