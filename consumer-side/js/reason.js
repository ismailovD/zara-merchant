const radioReason = document.querySelectorAll('.reason__label'),
    radioChoose = document.querySelectorAll('.choose__label'),
    otherTextarea = document.querySelector('.other__textarea'),
    closeTextarea = document.querySelector('.other__close'),   
    btn = document.querySelector('.button');

const locationObj = {
    location1 : "/saara/pages/photo.html",
    location2 : "/saara/pages/p6.html",
    location3 : "/saara/pages/p6.html",
    location4 : "/saara/pages/p6.html",
    location5 : "/saara/pages/photo.html",
}

let pathLocation;
    radioReason.forEach(el => { 
        el.addEventListener('click', () => {
            radioReason.forEach(lab => {
    
                lab.classList.remove('active')
            })
            btn.disabled = false;
            if(el.classList.contains('other')){
                pathLocation = locationObj[el.getAttribute('data-location')]
                btn.disabled = true;
                closeTextarea.classList.add('show');
                otherTextarea.classList.add('show')
            }else {
                otherTextarea.classList.remove('show')
                closeTextarea.classList.remove('show');
            }
            if (el.querySelector('input').checked) {
                el.classList.add('active')
                pathLocation = locationObj[el.getAttribute('data-location')]
            }
            
        })
        
    })
    otherTextarea.addEventListener('input', ()=> { 
        if(otherTextarea.value.length > 0) { 
            btn.disabled = false;
        }else {
            btn.disabled = true;
        }
    })

    closeTextarea.addEventListener('click', () => { 
        setTimeout(() => {
            otherTextarea.value = ""
            closeTextarea.classList.remove('show');
            otherTextarea.classList.remove('show')
        },100)
        
    })
   
let backPageArr = [];
backPageArr.push('/saara/pages/reason.html');
sessionStorage.setItem('backPage', backPageArr)
 
console.log(backPageArr);
btn.addEventListener('click', (e)=> {    
        e.preventDefault() 
        sessionStorage.setItem('boolean' , "true")
        location.href = pathLocation; 
})