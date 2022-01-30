const   dataInputs = document.querySelectorAll('.bank-account__form-inp'),
        btnContinue = document.querySelector('.bank-account__form-btn');
 

dataInputs.forEach(el =>  {
    el.addEventListener('input', () => { 
        confirm(); 
    })
});
 
 

console.log(dataInputs);
function confirm() {  
    let confirmArr = [];
    dataInputs.forEach(el =>  {
        if(el.value.trim().length > 0 ){
            confirmArr.push('true')
    }});
    if(confirmArr.every(el => el == 'true') && dataInputs.length == confirmArr.length){
        btnContinue.disabled = false;
    }else {
        btnContinue.disabled = true;
    }
}