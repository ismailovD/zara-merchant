const inpEmail = document.querySelector('.form__email'),
        inpName = document.querySelector('.form__name'),
        inpStore = document.querySelector('.form__store'),
        btn = document.querySelector('.part__form-btn'),
        invalidEmail = document.querySelector('.part__invalid-email');


        inpEmail.addEventListener('input', ()=> { 
            if(inpEmail.value == "911"){
                inpEmail.classList.add('form__invalid')
                invalidEmail.classList.add('active')
            }else {
                inpEmail.classList.remove('form__invalid')
                invalidEmail.classList.remove('active')
            }
            confirm()
            
        })
        inpName.addEventListener('input', ()=> { 
            if(inpName.value == "911"){
                inpName.classList.add('form__invalid') 
            }else {
                inpName.classList.remove('form__invalid') 
            }
            confirm()
            
        })
        inpStore.addEventListener('input', ()=> { 
            if(inpStore.value == "911"){
                inpStore.classList.add('form__invalid') 
            }else {
                inpStore.classList.remove('form__invalid') 
            }
            confirm()
            
        })

        function confirm() {
            if(inpEmail.value.length > 0 && inpName.value.length > 0 && inpStore.value.length > 0) {
                btn.disabled = false;
            }else  btn.disabled = true;
        }
        