const   addBtn = document.querySelector('.add__btn'), 
        addParent = '.add',
        addItems = document.querySelectorAll('.add__item'),
        addReasonContent = document.querySelector('.add-reason'), 
        policyItems = document.querySelectorAll('.commonly__item'),
        policyScroll = document.querySelector('.commonly__list'),
        samplesAdd  = document.querySelectorAll('.commonly__item-plus'),
        reasonList = document.querySelector('.question__list'),
        saveReason = document.querySelector('.add-reason__save'),
        poperBg = document.querySelector('.warning__wrapper'),
        poperClose = document.querySelector('.warning__close'), 
        upgradeBtn = document.querySelector('#applicable-upgrade'),
        applicableAddInput = document.querySelector('.applicable__text-input'),
        body = document.querySelector('body');
        
 
addBtn.addEventListener('click', () => {   
        addBtn.closest(addParent).classList.toggle('show-select') 
}); 
 
 

addItems.forEach(item => {
     item.addEventListener('click', () => { 
         if(item.getAttribute('data-status') == "on"){
            createReason (item.getAttribute('data-value'))  
            item.closest(addParent).classList.remove('show-select');
            item.classList.add('item-selected')
            item.setAttribute('data-status', "off");
         } 
     })
})

saveReason.addEventListener('click', (event) => {
    poperBg.classList.add('show')
    body.style.overflow = "hidden"
})

poperClose.addEventListener('click', () => {
    poperBg.classList.remove('show')
    body.style.overflow = "visible"
})

let itemCount = 4;
function listHeight() {
    if(policyItems.length > itemCount){
        
        let  marginB = window.getComputedStyle(policyItems[0], null).getPropertyValue("margin-bottom"),
            borderSize = parseInt(window.getComputedStyle(policyItems[0], null).getPropertyValue("border").split(' ')[0]),
            heightSum = 0; 
            for(let i = 0; i < itemCount; i++) { 
                heightSum +=  policyItems[i].clientHeight
            } 
        policyScroll.style.height = `${(heightSum + borderSize * 2 * itemCount) + (parseInt(marginB) * (itemCount - 1)) }px`
    }
} 
listHeight() 
window.addEventListener('resize', () => {
    listHeight();
})

function createReason (name) { 
    let reason = document.createElement('li'); 
    reason.classList.add('question__item'); 
    reason.setAttribute('data-id', name)
    reason.innerHTML = `
        <span class="question__delete">
            <svg class="question__delete-icon">
                <use
                    xlink:href="../svg/sprite.svg#x"></use>
            </svg>
        </span>
        <span class="question__name ">
            ${name}
        </span>   
    `
    reasonList.appendChild(reason); 
    delReason()
}

function delReason() {
    let deleteReason = document.querySelectorAll('.question__delete');
    deleteReason.forEach(elem => {
        elem.addEventListener('click', () => {  
            addItems.forEach(e => { 
                if(e.getAttribute('data-value') == elem.closest('.question__item').getAttribute('data-id')){ 
                    e.setAttribute('data-status', 'on')
                    e.classList.remove('item-selected')
                }
            })
            elem.closest('.question__item').remove(); 
            
        })
    })
}
const   nameReason = document.querySelector('#name-reason'),
        inpExhcange = document.querySelector('#exchange-inp'),
        inpReturn = document.querySelector('#return-inp'),
        collectRadio = document.querySelectorAll('.collection__radio'),
        collectTag =document.querySelector('#tag'),
        collectFront =document.querySelector('#front'),
        collectBack =document.querySelector('#back'),
        collectDefect =document.querySelector('#defect'),
        applicableRadio = document.querySelectorAll('.applicable__radio');


const reasons = {
    damage: {
        name: "Item is damaged",
        exchange: true,
        return: true,
        collection: "yes",
        tag: true,
        front: true,
        back: false,
        defective: false,
        applicable: "all"
    },
    size: {
        name: "Size doesn’t fit",
        exchange: true,
        return: false,
        collection: "no",
        tag: false,
        front: true,
        back: false,
        defective: false,
        applicable: "selected"
    },
    wrong: {
        name: "Wrong product received",
        exchange: false,
        return: true,
        collection: "multiple",
        tag: true,
        front: true,
        back: true,
        defective: false,
        applicable: "all"
    },
    defect: {
        name: "Item is defective",
        exchange: false,
        return: false,
        collection: "no",
        tag: false,
        front: false,
        back: true,
        defective: true,
        applicable: "selected"
    },
}  
samplesAdd.forEach(sample => {
    sample.addEventListener('click', () => {
        let example = sample.closest('.commonly__item').getAttribute('data-reason'); 
        nameReason.value = reasons[example].name;
        inpExhcange.checked = reasons[example].exchange;
        inpReturn.checked = reasons[example].return;
        collectRadio.forEach(collect => {
            if(collect.getAttribute('id') == reasons[example].collection){
                collect.checked = true;
            }
        });
        collectTag.checked = reasons[example].tag;
        collectFront.checked = reasons[example].front;
        collectBack.checked = reasons[example].back;
        collectDefect.checked = reasons[example].defective;
        applicableRadio.forEach(appl => {
            if(appl.getAttribute('id') == reasons[example].applicable){
                appl.checked = true;
            }
        });
    })
})
 
upgradeBtn.addEventListener('click', () => {
    applicableRadio.forEach(radio => {
        radio.addEventListener('change', () => { 
                applicableAddInput.classList.add('show')
        })
        radio.disabled = false;
    })
}) 