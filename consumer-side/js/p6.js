const   radioChoose = document.querySelectorAll('.choose__card'),  
        parent = '.choose__card',
        btn = document.querySelector('.button');


 pathLocation = "/saara/pages/p7.html";
const locationObj = {
    location1 : "/saara/pages/option.html",
    location2 : "/saara/pages/p9.html",
    location3 : "/saara/pages/p12.html", 
}
 
btn.addEventListener('click', (e)=> {    
    e.preventDefault() ; 
    backPageArr.push('/saara/pages/p6.html');
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
            pathLocation = locationObj[elem.getAttribute('data-location')];
            btn.disabled = false;
        }  
    })
})
 