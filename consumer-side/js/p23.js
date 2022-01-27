const   p23Row = document.querySelector('.for-change-title'),
        p23RowTitle = document.querySelector('.p23 .row__title'),
        p23Wrapper = document.querySelector('.p23__wrapper'),
        btn = document.querySelector('.button');


pathLocation = "/saara/pages/p19.html";
 
 
btn.addEventListener('click', (e)=> {    
    e.preventDefault() ; 
    backPageArr.push('/saara/pages/p23.html');
    sessionStorage.setItem('boolean' , "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = pathLocation; 
}); 

window.addEventListener('load', ()=> {
    if(window.innerWidth < 992){
        changeContent() 
    }
})
window.addEventListener('resize', ()=> {
    if(window.innerWidth < 992){
        changeContent() 
    }else {
        returnContent()
    }
})

  
function changeContent() { 
    p23Row.appendChild(p23RowTitle);  
}
function returnContent() { 
    p23Wrapper.appendChild(p23RowTitle);  
}