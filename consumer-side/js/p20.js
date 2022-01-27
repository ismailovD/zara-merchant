const   radioChoose = document.querySelectorAll('.choose__label'),  
        parent = '.choose__card',
        btn = document.querySelector('.button');


 
const locationObj = {
    location1 : "/saara/pages/p21.html",
    location2 : "/saara/pages/p21.html",
    location3 : "/saara/pages/p8.html", 
}
 
btn.addEventListener('click', (e)=> {    
    e.preventDefault() ; 
    backPageArr.push('/saara/pages/p20.html');
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
            elem.closest(parent).classList.add('active');
            pathLocation = locationObj[elem.closest(parent).getAttribute('data-location')]; 
            btn.disabled = false;
        }   
    })
})
 