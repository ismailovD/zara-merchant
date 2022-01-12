const   tableTabs = document.querySelectorAll('.return__item'),
        tables = document.querySelectorAll('.table'), 
        detailsContent = document.querySelector('.details'),
        screenMore = document.querySelector('.details__user'),
        seeMore = document.querySelector('.details__history-link'),
        historyCommit = document.querySelector('.details__history-events'),   
        warningMsg = document.querySelector('.warning'),
        warningClose = document.querySelector('.warning__close'),
        textareaParent = ".pop-up",
        textareasPopUp = document.querySelectorAll('.pop-up__textarea'),
        symbolCurent = '.pop-up__symbols-curent',
        symbolMax = '.pop-up__symbols-max',
        radioChoose = document.querySelectorAll('.choose__label'),
        detailBtns = document.querySelectorAll('.details__btn'),
        popUpBg = document.querySelector('.pop-up__wrapper'),
        popUpBlock = document.querySelectorAll('.pop-up__block'),
        popUpClose = document.querySelectorAll('.pop-up__close'),
        popUpCheck = document.querySelectorAll('.pop-up__input'), 
        popUpEdit = document.querySelectorAll('.pop-up__edit-icon'),
        popUpEmail = '.pop-up__label-hidden',
        popUpCheckParent = '.pop-up__changing-block',
        body = document.querySelector('body');

        
   
 
 
tableTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tableTabs.forEach(el => {
            el.classList.remove('active')
        });
        tab.classList.add('active');
        tables.forEach(table => {
            table.classList.remove('show');
        });
        document.querySelector('#' + tab.getAttribute('data-table')).classList.add("show");
    })
})

function someHistory() {
    for (let key of historyCommit.children) {
        key.style.display = "none"
    }
    for (let i = 0; i < 5; i++) {
        historyCommit.children[i].style.display = "flex"
    }
}
someHistory()


function allHistory() {
    for (let key of historyCommit.children) {
        key.style.display = "flex"
    }
}
seeMore.addEventListener('click', () => {
    screenMore.classList.toggle('active'); 
    if (screenMore.classList.contains('active')) {
        allHistory()
        seeMore.innerHTML = "See less..."
    } else {
        for (let key of historyCommit.children) {
            key.style.display = "none"
        }
        for (let i = 0; i < 5; i++) {
            historyCommit.children[i].style.display = "flex"
        }
        seeMore.innerHTML = "See all..."
    }

})
 
warningClose.addEventListener('click', () => {
    warningMsg.classList.add('hide');
    setTimeout(() => {warningMsg.classList.add('close')},400)
})
 
textareasPopUp.forEach(writeTable => {
    let parent =  writeTable.closest(textareaParent);
    parent.querySelector(symbolMax).textContent = writeTable.getAttribute('maxlength');
    writeTable.value = 'Gets filled based selection on top. Can be edited if Others is selected in top drop down.'
    writeTable.addEventListener('input', () => { 
       parent.querySelector(symbolCurent).textContent = writeTable.value.length;  
    })
})

radioChoose.forEach(elem => {
    elem.addEventListener('click', () => { 
        radioChoose.forEach(k => {
            k.classList.remove('active')
        })
        if (elem.querySelector('input').checked) {
            elem.classList.add('active')
        }
    })
})

detailBtns.forEach(button => {
    button.addEventListener('click', () => { 
        button.classList.add('active');
        popUpBg.classList.add('show');
        setTimeout(() => {popUpBg.classList.add('change-bg');} , 200)
        let btnId = button.getAttribute('data-id'); 
        document.querySelector('#'+ btnId).classList.add('active');
        setTimeout(() => {document.querySelector('#'+ btnId).classList.add('visible')} , 200)
        // body.style.overflow = 'hidden'
    })
})

popUpClose.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        popUpBlock.forEach(block => {
            block.classList.remove('visible')
            setTimeout(() => {block.classList.remove('active')} , 200)
        })
        detailBtns.forEach(btns => {
            btns.classList.remove('active')
        })
        // popUpBg.classList.remove('show');
        setTimeout(() => {popUpBg.classList.remove('change-bg')} , 100)
        setTimeout(() => {popUpBg.classList.remove('show')} , 300)
        body.style.overflow = 'visible'
    })
})

// popUpBg.addEventListener('click', (e) => {
//     if(e.target === popUpBg ) { 
//         popUpBlock.forEach(block => {
//             block.classList.remove('active')
//         })
//         detailBtns.forEach(btns => {
//             btns.classList.remove('active')
//         })
//         popUpBg.classList.remove('show');
//         body.style.overflow = 'visible'
//     }
// })

popUpCheck.forEach(inp => {
    inp.addEventListener('change', () => {
        let parent = inp.closest(popUpCheckParent);
        if(inp.checked) { 
            parent.querySelector(popUpEmail).classList.add('show')
        }else  parent.querySelector(popUpEmail).classList.remove('show')
    })
})


popUpEdit.forEach(edit => {
    edit.addEventListener('click', () => { 
        let el = edit.previousElementSibling;
        el.disabled = false;  
        el.setAttribute('data-value', el.value); 
        el.addEventListener('change', () => {
            el.disabled = true;
        })
    })
})

class Tabs {
    constructor(option){
        this.tabs = document.querySelectorAll(option.el);
        this.screen = document.querySelectorAll(option.screen);

        this.tabs.forEach(tab => {
             
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                this.tabs.forEach(elem => {
                    elem.classList.remove('active')
                })
                this.screen.forEach(show => {
                    show.classList.remove('active')
                })
                tab.classList.add('active')
                let screen = document.querySelector('#' + tab.getAttribute('data-id')); 
                screen.classList.add('active') 
            })
            
        })
        this.screen.forEach(show => {
            this.targetPicture(show) 
        })
    }
    targetPicture(parent) {
      let   items =  parent.querySelectorAll('.details__picture-item'),
            targetImg = parent.querySelector('.details__target-img');
         
        items.forEach(el => {
            if(el.classList.contains('active')){
                targetImg.setAttribute('src', el.children[0].getAttribute('src'))
            }
            el.addEventListener('click', (e)=> {
                e.preventDefault();
                items.forEach(delActive => delActive.classList.remove('active'));
                el.classList.add('active');
                targetImg.setAttribute('src', el.children[0].getAttribute('src'))
            })
        })
    }
}


const panelTabs = new Tabs({
    el: '.details__samples-tab',
    screen : '.details__screen'
})