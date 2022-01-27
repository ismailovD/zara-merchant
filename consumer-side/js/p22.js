const   cardNum = document.querySelector('.bank-card__input'),
        cardDate = document.querySelector('.bank-card__date'),
        cardCvv = document.querySelector('.bank-card__cvv'),
        passIcon = document.querySelector('.bank-card__icon'),
        radioChoose = document.querySelectorAll('.choose__label'),  
        parent = '.choose__card',  
        btn = document.querySelector('.button');


pathLocation = "/saara/pages/p23.html";
 
 
btn.addEventListener('click', (e)=> {    
    e.preventDefault() ; 
    backPageArr.push('/saara/pages/p22.html');
    sessionStorage.setItem('boolean' , "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = pathLocation; 
}); 

const query = ['input', 'change']



query.forEach(even => {
    cardNum.addEventListener(even, formatCardCode, false); 
    cardDate.addEventListener(even, formatCardDate, false); 
    cardCvv.addEventListener(even, formatCardCvv, false); 
})

function formatCardCode() {
    let Temp = this.value.replace(/[^\d]/g, '').substring(0,16);
    if(Temp != ''){

        Temp = Temp.match(/.{1,4}/g); 
        Temp = Temp.join('   ');

    } 
  this.value = Temp;
   
};

function formatCardDate() {
    let Temp = this.value.replace(/[^\d]/g, '').substring(0,16);
    if(Temp != ''){

        Temp = Temp.match(/.{1,2}/g); 
        Temp = Temp.join('/');

    } 
  this.value = Temp;
   
};



let Sign="",
    ValueInter ;

function formatCardCvv() {
    let Temp = this.value.replace(/[^\d]/g, '').substring(0,16); 
  this.value = Temp;
};

 
 
passIcon.addEventListener('click', () => {
    cardCvv.classList.toggle('show')
    if(cardCvv.classList.contains('show')){
        cardCvv.setAttribute('type', 'text')
    }else {
        cardCvv.setAttribute('type', 'password')
    }
    let src = passIcon.children[0].getAttribute('xlink:href'),
        srcReplace = passIcon.getAttribute('data-replace');
    passIcon.children[0].setAttribute('xlink:href', srcReplace);
    passIcon.setAttribute('data-replace', src); 
})




radioChoose.forEach(elem => {
    elem.addEventListener('click', () => {
        radioChoose.forEach(k => {
            k.closest(parent).classList.remove('active')
        })  
            elem.closest(parent).classList.add('active') 
            btn.disabled = false; 
    })
})