const contentRight = document.querySelector('.p16__right'),
    offer = document.querySelector('.p16__offer'),
    btnText = document.querySelector('.btns__text'),
    btn = document.querySelector('.button');

pathLocation = "/saara/pages/photo.html";

 
btn.addEventListener('click', (e) => {
    e.preventDefault();
    backPageArr.push('/saara/pages/p16.html');
    sessionStorage.setItem('boolean', "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = pathLocation;
});

 
window.addEventListener('load', () => {
    if (window.innerWidth < 992) {
        changeContent()
    }
})
window.addEventListener('resize', () => {
    if (window.innerWidth < 992) {
        changeContent()
    } else {
        returnContent()
    }
})


function changeContent() {
    btnText.appendChild(offer);
}
function returnContent() {
    contentRight.appendChild(offer);;
}