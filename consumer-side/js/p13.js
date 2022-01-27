const   contentHidden = document.querySelector('.p13__content.hidden'),
        contentLeft = document.querySelector('.p13__left'),
        contentRight = document.querySelector('.p13__right'),
        btn = document.querySelector('.button');


 pathLocation = "/saara/pages/p14.html";
 
btn.addEventListener('click', (e)=> {    
e.preventDefault() ; 
backPageArr.push('/saara/pages/p13.html');
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
    contentLeft.appendChild(contentRight);  
}
function returnContent() {
    contentHidden.appendChild(contentRight);  
}