const   mainCheckbox = document.querySelector('.main-checkbox'), 
        exchangeInputs = document.querySelectorAll('.exchanges__input'),
        speedItem = ".exchanges__speed-item",
        speedRadio = document.querySelectorAll('.exchanges__speed-item .exchanges__radio'),
        speedChekcs = document.querySelectorAll('.exchanges__speed-input');
 
 

mainCheckbox.addEventListener('change' , ()=> {
    if(mainCheckbox.checked){
        exchangeInputs.forEach(inp => {
            inp.setAttribute('disabled', true)
        })
    }else {
        exchangeInputs.forEach(inp => {
            inp.removeAttribute('disabled')
        })
    }
})

speedRadio.forEach(checkbox => { 
    checkbox.addEventListener('change', () => { 
        // speedChekcs.forEach(choose => {
        //     choose.checked = false;
        // })
        speedRadio.forEach(checking => {
            checking.closest(speedItem).classList.remove('visible');
            if(checking.checked) {
                checking.closest(speedItem).classList.add('visible')
           }
        }) 
      
    })
})
 
