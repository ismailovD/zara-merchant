const   renamePolicy = document.querySelector('.policy__edit-icon'),
        namePolicy = document.querySelector('.policy__name'),
        policyItems = document.querySelectorAll('.commonly__item'),
        policyScroll = document.querySelector('.commonly__list'),
        samplesAdd  = document.querySelectorAll('.commonly__item-plus');
   
 
const policies = {
    sale: {
        name: "Sale",
        select1: "Do not accept",
        select2: "Only Return",
        select3: "Only Exchange"
    },
    value: {
        name: "Value",
        select1: "Only Return",
        select2: "Do not accept",
        select3: "Only Return"
    },
    country: {
        name: "Country",
        select1: "Only Exchange",
        select2: "Do not accept",
        select3: "Only Return"
    },
    time: {
        name: "Time",
        select1: "Do not accept",
        select2: "Only Exchange",
        select3: "Do not accept"
    },
} 
 
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
let clicked = true;
renamePolicy.addEventListener('click', () => {
    if(clicked){
        console.log(clicked, "0");
        namePolicy.classList.add('rename')
        clicked = false;
        namePolicy.setAttribute('contenteditable', true);
        namePolicy.addEventListener('keydown', (e) => {
            if(e.keyCode === 13 ){  
                console.log(clicked, "1"); 
                rename ()   
            }
        })
        
    }else {  
        console.log(clicked, "2");
        rename ()
    }
   
   
})

function rename() {
        clicked = true;
        let newName = namePolicy.innerHTML.replace(/\&nbsp;/g,'').trim() 
        if(newName === ""){
            namePolicy.innerHTML = namePolicy.getAttribute('data-default-name')
        }else {
            newName = newName.charAt(0).toUpperCase() + newName.slice(1);
            namePolicy.innerHTML = newName
        }
        namePolicy.removeAttribute('contenteditable'); 
        namePolicy.classList.remove('rename'); 
        console.log(clicked, "3");
        return
}


samplesAdd.forEach(sample => {
    sample.addEventListener('click', () => {
        let example = sample.closest('.commonly__item').getAttribute('data-policy'),
            selects = document.querySelectorAll(selectParent); 
        namePolicy.innerHTML = policies[example].name; 
        for(let i = 0; i < selects.length; i++){
            selects[i].querySelector('.select__btn').textContent = policies[example]["select"+ [i+1]]
        } 
    })
});

let arrCountry = ["China" ,"Japan","Thailand","United States","India","Malaysia","Republic of Korea","Hong Kong","Taiwan","Philippines","Australia","Vietnam","Russia","France","","Germany","Israel","Sweden","Italy","Netherlands","Greece","Spain","Austria","United Kingdom","Belgium","United Arab Emirates","Kazakhstan","Portugal","Saudi Arabia","Denmark","Slovenia","Iran","Norway","Mexico","Canada","Syria","Ukraine","Cyprus","Czech Republic","Switzerland","Iraq","Turkey","Romania","Lebanon","Hungary","Georgia","Brazil","Azerbaijan","Palestine","Republic of Lithuania","Oman","Slovakia","Serbia","Finland","Iceland","Republic of Moldova","Bulgaria","Macedonia","Liechtenstein","Jersey","Poland","Ireland","Croatia","Bosnia and Herzegovina","Estonia","Latvia","Hashemite Kingdom of Jordan","Kyrgyzstan","RÃ©union","Isle of Man","Libya","Luxembourg","Armenia","British Virgin Islands","Yemen","Belarus","Gibraltar","Kenya","Chile","Qatar","Kuwait","Guadeloupe","Martinique","French Guiana","Dominican Republic","Guam","U.S. Virgin Islands","Puerto Rico","Mongolia","New Zealand","Singapore","Indonesia","Nepal","Papua New Guinea","Pakistan","Panama","Costa Rica","Peru","Belize","Nigeria","Venezuela","Bahamas","Morocco","Colombia","Seychelles","Barbados","Egypt","Argentina","Brunei","Bahrain","Aruba","Saint Lucia","Bangladesh","Tokelau","Cambodia","Macao","Maldives","Afghanistan","New Caledonia","Fiji","Wallis and Futuna","Albania","Uzbekistan","Montenegro","North Korea","Vatican City","Antarctica","Bermuda","CuraÃ§ao","Ecuador","South Africa","Saint Kitts and Nevis","Samoa","Bolivia","Guernsey","Malta","Tajikistan","Zimbabwe","Liberia","Ghana","Tanzania","Zambia","Madagascar","Angola","Namibia","Ivory Coast","Sudan","Uganda","Cameroon","Malawi","Gabon","Mali","Benin","Chad","Botswana","Cape Verde","Rwanda","Republic of the Congo","Mozambique","Gambia","Lesotho","Mauritius","Algeria","Guinea","Congo","Swaziland","Burkina Faso","Sierra Leone","Somalia","Niger","Central African Republic","Togo","Burundi","Equatorial Guinea","South Sudan","Senegal","Mauritania","Djibouti","Comoros","Tunisia","Mayotte","Bhutan","Greenland","Kosovo","Cayman Islands","Jamaica","Guatemala","Marshall Islands","Monaco","Anguilla","Grenada","Paraguay","Montserrat","Turks and Caicos Islands","Antigua and Barbuda","Tuvalu","French Polynesia","Solomon Islands","Vanuatu","Suriname","Cook Islands","Kiribati","Niue","Tonga","French Southern Territories","Norfolk Island","Turkmenistan","Pitcairn Islands","San Marino","Ã…land","Faroe Islands","Svalbard and Jan Mayen","Cocos [Keeling] Islands","Nauru","South Georgia and the South Sandwich Islands","U.S. Minor Outlying Islands","Sint Maarten","Guinea-Bissau","Saint Martin","Saint Vincent and the Grenadines","Saint Pierre and Miquelon","Saint-BarthÃ©lemy","Dominica","SÃ£o TomÃ© and PrÃ­ncipe","Falkland Islands","Northern Mariana Islands","East Timor","Bonaire","American Samoa","Federated States of Micronesia","Palau","Guyana","Honduras","Nicaragua","El Salvador","Andorra","Myanmar [Burma]","Sri Lanka","Haiti","Trinidad and Tobago","Laos","Uruguay","Eritrea","Cuba","Saint Helena","Christmas Island","Ethiopia","British Indian Ocean Territory"];
// const requestUrl = 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json';
// const xhr = new XMLHttpRequest();

// xhr.open('GET', requestUrl, true);
// xhr.responseType = 'json';
// xhr.send() 

// xhr.onload = function() {
//   let countryList = xhr.response;
//   countryFunction(countryList);
// }

// function countryFunction(jsonObj) {
//   for (var key in jsonObj){
//     arrCountry.push(key)
//     }
// }  
class Add {
    constructor(option) {
        this.add = document.querySelector(option.el);
        this.input = this.add.querySelector('input');
        this.list = this.add.querySelector('.add__list'); 
        this.items = [];
        this.addElements = []; 
        this.targetDelete = undefined;
        this.itemHeight;
        this.itemMax = 5; 

        this.input.addEventListener('input', (e) => { 
            if (this.items.length > 0) {
                this.removeItems();
            }
            if (this.input.value.length > 0) { 
                this.addChoose();
                let filterArr = this.filterItems(arrCountry, this.input.value);
                if (filterArr.length > 0) {
                    this.showList(filterArr)
                } else this.hideList()
            } else this.hideList()

        });
        this.input.addEventListener('keydown', (e) => {
            if(e.keyCode == 40 || e.keyCode == 38) {
                e.preventDefault()
            }
        }); 
        this.input.addEventListener('focusout', (e) => {
            this.list.classList.remove('visible'); 
        }); 
    }
    filterItems(arr, query) {
        return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1 && el[0].toLowerCase() == query[0].toLowerCase());
    }
    showList(arr) {
        this.list.classList.add('visible'); 
        arr = arr.sort((a, b) => {
            if (a.length > b.length) {
                return 1
            } else if (a.length < b.length) {
                return -1
            } else return 0
        })
        arr.forEach(item => {
            let sample = document.createElement('li');
            sample.classList.add('add__item');
            sample.innerText = item; 
            this.list.appendChild(sample)
        }) 
        this.itemHeight = parseInt(window.getComputedStyle(this.list.children[0],null).getPropertyValue("height"));  
        this.list.style.maxHeight =   this.itemHeight * this.itemMax + 'px';  
        this.selectItem()
    }
    hideList() {
        this.list.classList.remove('visible');
        this.removeItems()
    }
    selectItem() {
        this.items = this.add.querySelectorAll('.add__item');
        this.listControl()
        this.items.forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.input.value = el.textContent;
                this.hideList(); 
                this.addChoose();
            })
        })

    }
    removeItems() {
        if (this.items.length > 0) {
            this.items.forEach(elem => {
                elem.parentNode.removeChild(elem)
            })
        }
        this.items = [];
    }
    // targetShow() {

    //     let checkArr = this.addElements.some(el => this.input.value.toLowerCase() === el.toLowerCase() ); 
    //     if (checkArr) {
    //         this.warning.classList.add('show');
    //         setTimeout(() => {
    //             this.warning.classList.remove('show');
    //         }, 2000)
    //     } else {
    //         let targetELement = document.createElement('li'); 
    //         targetELement.classList.add('target__item');
    //         targetELement.innerHTML = `
    //         ${this.input.value}
    //         <button class="target__btn circle">
    //             <svg class="target__icon">
    //                 <use xlink:href="./svg/sprite.svg#close"></use>
    //             </svg> 
    //         </button>  
    //     `
    //         this.targetList.appendChild(targetELement);
    //         this.addElements.push(this.input.value);
    //         this.input.value = '';

    //         let deleteBtn = targetELement.querySelector('.target__btn');
    //         deleteBtn.addEventListener('click', () => {
    //             this.addElements = this.addElements.filter(check => check !== targetELement.innerText);
    //             targetELement.parentNode.removeChild(targetELement); 
    //         })
           
    //     }
        
    // }
    listControl() {
        let j = -1,
            scrl = 5,
            scrl2 ;
        window.addEventListener('keydown', (e) => { 
            if( e.keyCode === 40 && j < this.items.length ) { 
                if(j < this.items.length - 1){
                    j++; 
                }  
                console.log(j, scrl );
                if(j - this.itemMax >= 0 && j >= scrl - 1) {    
                    this.list.scroll(0, (j - this.itemMax) *  this.itemHeight + this.itemHeight);   
                    scrl2 = j; 
                } 
                this.items.forEach(item => item.classList.remove('choose'));
                this.items[j].classList.add('choose');  
                
                this.selected(this.items[j]);  

            }else if (e.keyCode === 38 && j >= 0){ 
                if(j > 0){
                    j--;
                    
                } 
                console.log(j, scrl);
                if(j < this.items.length - this.itemMax && j <= scrl2 - this.itemMax + 1) { 
                    this.list.scroll(0, this.itemHeight * j) ; 
                    scrl = j;
                }
                
                this.items.forEach(item => item.classList.remove('choose'));
                this.items[j].classList.add('choose'); 
                this.selected(this.items[j]) 
            }
        })
    }
    selected(elem){    
        window.addEventListener('keydown', (e) => { 
            if( e.keyCode === 13) {
                this.input.value = elem.textContent;
                this.list.classList.remove('visible'); 
                this.addChoose()
            }
                    
        }, {once: true});
        
    }
    addChoose(){ 
        window.addEventListener('keydown', (e) => { 
            if( e.keyCode === 13) {
                if (this.input.value.length > 0) { 
                    // this.targetShow(); 
                    this.list.classList.remove('visible')
                } 
            }     
        }, {once: true}) 
    }
}


const formSelect = new Add({
    el: '.add'
})

