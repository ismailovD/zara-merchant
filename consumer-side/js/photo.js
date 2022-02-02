const   photos = document.querySelectorAll('.photo__table-img'),
        callTable = document.querySelectorAll('.call-table'),
        closeTable = document.querySelector('.photo__modal-close'),
        photoTable = document.querySelector('.photo__modal'), 
        photoCard = document.querySelectorAll('.photo__card'),
        photoRow = document.querySelector('.photo__row'),
        btn = document.querySelector('.button');

 
btn.addEventListener('click', (e)=> {    
    e.preventDefault(); 
    backPageArr.push('/saara/pages/photo.html');
    sessionStorage.setItem('boolean' , "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = '/saara/pages/p6.html'; 
}); 
 
let photoArr = [];
let count = 0;

 
photos.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('active')
        count = 1;
    })
})
callTable.forEach(e => {
    e.addEventListener('click', () => {
        photoTable.classList.add('active')
    })
})


closeTable.addEventListener('click', () => {
    photoTable.classList.remove('active')
    if (count) {
        addArray()
        count = 0;
    }
})
function createCard(src) {
    let div = document.createElement('div');
    div.innerHTML = ` 
        <img src="${src}" class="photo__card-add" alt="photo">
        <span class="photo__card-delete">
        <svg class="photo__card-icon">
            <use xlink:href="../svg/sprite.svg#close"></use>
        </svg> 
        </span> 
        <div class="photo__load">
        <p class="photo__load-text">Uploading your files</p>
        <div class="photo__load-line">
            <span class="photo__load-progress"></span>
        </div>
        </div>
        
    `
     
    let classArr = photoCard[1].getAttribute('class').split(' ');
    classArr.forEach(c => {
        div.classList.add(c)
    })
    photoRow.appendChild(div)
}



function renderTable() {
    photoArr = [...new Set(photoArr)] 
    photoArr.forEach(src => {
        createCard(src)
    })
    let loadProgress = document.querySelectorAll('.photo__load-progress');
    loadProgress.forEach(load => {
        setTimeout(() => { load.style.width = '100%' }, 700)
       setTimeout(()=> {load.closest('.photo__load').style.zIndex = '-1';}, 1400) 
    })
    let photoCard = document.querySelectorAll('.photo__card');
    let sp = document.querySelectorAll('.photo__card-delete');
    sp.forEach(el => {
        el.addEventListener('click', () => {
            let imgSrc = el.previousElementSibling.getAttribute('src'),
                num = photoArr.indexOf(imgSrc);
            photoArr.splice(num, 1)
            el.parentElement.remove();
            renderTable()
        })
    })
    let countRenImage = sp.length;
    photos.forEach(pic => {
        pic.classList.remove('active')
    })
    
    if (countRenImage <= 0  ) {
        photoRow.classList.add('justify-content-center');
        photoCard.forEach(box => {  
            for (let i = 0; i < box.childElementCount; i++) {
                if (box.children[i].classList.contains('photo__add')) {
                    box.style.display = "none"
                } else if (box.children[i].classList.contains('photo__empty')) {
                    box.style.display = "block"
                };
            }
        })
    }
    else if( countRenImage >= 3){ 
        photoCard.forEach(box => { 
            for (let i = 0; i < box.childElementCount; i++) {
                if (box.children[i].classList.contains('photo__empty')) {
                    box.style.display = "none"
                } else if (box.children[i].classList.contains('photo__add')) {
                    box.style =    `display:block;
                                            order:1;
                    `
                };
            }
        })
    }
    else { 
        photoCard.forEach(box => {
            for (let i = 0; i < box.childElementCount; i++) {
                if (box.children[i].classList.contains('photo__empty')) {
                    box.style.display = "none" 
                } else if (box.children[i].classList.contains('photo__add')) {
                    box.style =    `display:block;
                                            order:1;
                    `
                };
            }
        })
    } 
    if(photoCard.length < 3){
        photoCard[photoCard.length - 1].classList.add("photo__one") 
        btn.disabled = true; 
    }else if(photoCard.length == 3 ){
        photoCard[photoCard.length - 1].classList.add("photo__one")  
        btn.disabled = false;
    }else {
        btn.disabled = false;
        photoCard.forEach(removeClass => {
            removeClass.classList.remove("photo__one") 
        }) 
    };
    photoArr = [];

}

function addArray() {
    photos.forEach(elem => {
        if (elem.classList.contains('active')) {
            photoArr.push(elem.getAttribute('src'))
        }
    })
    renderTable()

}

renderTable();