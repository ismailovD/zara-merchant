const   inputOrder = document.querySelector('.form__order'),
        inputAuth = document.querySelector('.form__auth'),
        inputInfo = document.querySelector('.form__info'),
        inputHover = document.querySelector('.form__info-hover'),
        btn = document.querySelector('.form__btn'),
        inValNum = document.querySelector('.form__valid-num'),
        inValEmail = document.querySelector('.form__valid-email');

        inputOrder.addEventListener('input', ()=> { 
            if(inputOrder.value == "911"){
                inputOrder.classList.add('form__invalid')
                inValNum.classList.add('active')
            }else {
                inputOrder.classList.remove('form__invalid')
                inValNum.classList.remove('active')
            }
            confirm()
            
        })
        inputAuth.addEventListener('input', ()=> { 
            if(inputAuth.value == "911"){
                inputAuth.classList.add('form__invalid')
                inValEmail.classList.add('active')
            }else {
                inputAuth.classList.remove('form__invalid')
                inValEmail.classList.remove('active')
            }  
            confirm()
        })
        
        inputInfo.addEventListener('mouseenter' , () => {
            inputHover.style.opacity = "1" 
        })
        inputInfo.addEventListener('mouseleave' , () => {
            inputHover.style.opacity = "0"
        })

btn.addEventListener('click', (e)=> {   
    if(inputOrder.value.length > 0 && inputAuth.value.length > 0){
        e.preventDefault() 
        location.href = "/saara/pages/items.html";
    }
})

function confirm() { 
    if(inputOrder.value.length > 0 && inputAuth.value.length > 0) {
        btn.disabled = false;
    }else  btn.disabled = true;
}