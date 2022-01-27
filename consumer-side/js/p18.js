const   contentLeft = document.querySelector('.p18__left'),
        contentRight = document.querySelector('.p18__right'),
        wrapperRight = document.querySelector('.content__right'),
        contentBtns = document.querySelector('.p18__buttons'),
        dropBtn = document.querySelector('.p18__payment-btn'),
        btn = document.querySelector('.button');


 pathLocation = "/saara/pages/p17.html";
 
btn.addEventListener('click', (e)=> {    
    e.preventDefault() ; 
    backPageArr.push('/saara/pages/p21.html');
    sessionStorage.setItem('boolean' , "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = pathLocation; 
}); 
dropBtn.addEventListener('click', () => {
    location.href = '/saara/pages/p19.html';
})
window.addEventListener('load', ()=> {
    if(window.innerWidth < 768){
        changeContent() 
    }
})
window.addEventListener('resize', ()=> {
    if(window.innerWidth < 768){
        changeContent() 
    }else {
        returnContent()
    }
})




function changeContent() {
    contentLeft.appendChild(contentRight); 
    contentLeft.appendChild(contentBtns); 
}
function returnContent() {
    wrapperRight.appendChild(contentRight); 
    contentRight.appendChild(contentBtns); 
}
