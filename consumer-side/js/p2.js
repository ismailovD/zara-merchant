let arrCountry = ["China" ,"Japan","Thailand","United States","India","Malaysia","Republic of Korea","Hong Kong","Taiwan","Philippines","Australia","Vietnam","Russia","France","","Germany","Israel","Sweden","Italy","Netherlands","Greece","Spain","Austria","United Kingdom","Belgium","United Arab Emirates","Kazakhstan","Portugal","Saudi Arabia","Denmark","Slovenia","Iran","Norway","Mexico","Canada","Syria","Ukraine","Cyprus","Czech Republic","Switzerland","Iraq","Turkey","Romania","Lebanon","Hungary","Georgia","Brazil","Azerbaijan","Palestine","Republic of Lithuania","Oman","Slovakia","Serbia","Finland","Iceland","Republic of Moldova","Bulgaria","Macedonia","Liechtenstein","Jersey","Poland","Ireland","Croatia","Bosnia and Herzegovina","Estonia","Latvia","Hashemite Kingdom of Jordan","Kyrgyzstan","RÃ©union","Isle of Man","Libya","Luxembourg","Armenia","British Virgin Islands","Yemen","Belarus","Gibraltar","Kenya","Chile","Qatar","Kuwait","Guadeloupe","Martinique","French Guiana","Dominican Republic","Guam","U.S. Virgin Islands","Puerto Rico","Mongolia","New Zealand","Singapore","Indonesia","Nepal","Papua New Guinea","Pakistan","Panama","Costa Rica","Peru","Belize","Nigeria","Venezuela","Bahamas","Morocco","Colombia","Seychelles","Barbados","Egypt","Argentina","Brunei","Bahrain","Aruba","Saint Lucia","Bangladesh","Tokelau","Cambodia","Macao","Maldives","Afghanistan","New Caledonia","Fiji","Wallis and Futuna","Albania","Uzbekistan","Montenegro","North Korea","Vatican City","Antarctica","Bermuda","CuraÃ§ao","Ecuador","South Africa","Saint Kitts and Nevis","Samoa","Bolivia","Guernsey","Malta","Tajikistan","Zimbabwe","Liberia","Ghana","Tanzania","Zambia","Madagascar","Angola","Namibia","Ivory Coast","Sudan","Uganda","Cameroon","Malawi","Gabon","Mali","Benin","Chad","Botswana","Cape Verde","Rwanda","Republic of the Congo","Mozambique","Gambia","Lesotho","Mauritius","Algeria","Guinea","Congo","Swaziland","Burkina Faso","Sierra Leone","Somalia","Niger","Central African Republic","Togo","Burundi","Equatorial Guinea","South Sudan","Senegal","Mauritania","Djibouti","Comoros","Tunisia","Mayotte","Bhutan","Greenland","Kosovo","Cayman Islands","Jamaica","Guatemala","Marshall Islands","Monaco","Anguilla","Grenada","Paraguay","Montserrat","Turks and Caicos Islands","Antigua and Barbuda","Tuvalu","French Polynesia","Solomon Islands","Vanuatu","Suriname","Cook Islands","Kiribati","Niue","Tonga","French Southern Territories","Norfolk Island","Turkmenistan","Pitcairn Islands","San Marino","Ã…land","Faroe Islands","Svalbard and Jan Mayen","Cocos [Keeling] Islands","Nauru","South Georgia and the South Sandwich Islands","U.S. Minor Outlying Islands","Sint Maarten","Guinea-Bissau","Saint Martin","Saint Vincent and the Grenadines","Saint Pierre and Miquelon","Saint-BarthÃ©lemy","Dominica","SÃ£o TomÃ© and PrÃ­ncipe","Falkland Islands","Northern Mariana Islands","East Timor","Bonaire","American Samoa","Federated States of Micronesia","Palau","Guyana","Honduras","Nicaragua","El Salvador","Andorra","Myanmar [Burma]","Sri Lanka","Haiti","Trinidad and Tobago","Laos","Uruguay","Eritrea","Cuba","Saint Helena","Christmas Island","Ethiopia","British Indian Ocean Territory"];
class Add {
    constructor(option) {
        this.add = document.querySelector(option.el);
        this.input = this.add.querySelector('input');
        this.dropdown = this.add.querySelector('.global__search-dropdown');
        this.list = this.add.querySelector('.global__search-list'); 
        this.items = [];
        this.addElements = [];  
        this.itemHeight;
        this.itemMax = 5; 

        this.input.addEventListener('input', (e) => { 
            if (this.items.length > 0) {
                this.removeItems();
            }
            if (this.input.value.length > 0 && this.input.value.trim() !== '') {  
                this.list.scroll(0, 0);
                let filterArr = this.filterItems(arrCountry, this.input.value.trim());
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
        this.input.addEventListener('focusout', () => {
           setTimeout(() => {
            this.hideList(); 
           }, 150)
        }); 
    }
    filterItems(arr, query) {
        return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1 && el[0].toLowerCase() == query[0].toLowerCase());
    }
    showList(arr) {
        this.dropdown.classList.add('visible'); 
        arr = arr.sort((a, b) => {
            if (a.length > b.length) {
                return 1
            } else if (a.length < b.length) {
                return -1
            } else return 0
        })
        arr.forEach(item => {
            let sample = document.createElement('li');
            sample.classList.add('global__search-item');
            sample.innerText = item; 
            this.list.appendChild(sample)
        }) 
        this.itemHeight = parseInt(window.getComputedStyle(this.list.children[0],null).getPropertyValue("height"));  
        this.list.style.maxHeight =   this.itemHeight * this.itemMax + 'px';  
        this.selectItem()
    }
    hideList() {
        this.list.scroll(0, 0);
        this.dropdown.classList.remove('visible'); 
        this.removeItems()
    }
    selectItem() { 
        this.items = this.add.querySelectorAll('.global__search-item');
        this.listControl()  
        this.items.forEach(el => { 
            el.addEventListener('click', (e) => { 
                e.preventDefault();
                this.input.value = el.textContent;
                setTimeout(() => {
                    this.hideList();  
                }, 100)
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
    listControl() {
        let j = -1,
            scrl = this.itemMax,
            scrl2 ;
        window.addEventListener('keydown', (e) => { 
            if( e.keyCode === 40 && j < this.items.length ) { 
                if(j < this.items.length - 1){
                    j++; 
                }  
                console.log(j, scrl, scrl2);
                if(j - this.itemMax >= 0 && j >= scrl  ) {    
                    this.list.scroll(0, (j - this.itemMax) *  this.itemHeight + this.itemHeight);   
                    scrl2 = j - this.itemMax; 
                } 
                this.items.forEach(item => item.classList.remove('choose'));
                this.items[j].classList.add('choose');  
                
                this.selected(this.items[j]);  

            }else if (e.keyCode === 38 && j >= 0){ 
                if(j > 0){
                    j--;
                    
                } 
                console.log(scrl2, scrl , j);
                if(j < this.items.length - this.itemMax && j <= scrl2) { 
                    this.list.scroll(0, this.itemHeight * j) ; 
                    scrl = j + this.itemMax;
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
                this.hideList()  
            }
                    
        }, {once: true});
        
    } 
}


const formSelect = new Add({
    el: '.global__form'
})



const   cards = document.querySelectorAll('.card'),
        btn = document.querySelector('.button');

cards.forEach(e => {
    for (let i = 0; i < 4; i++) {
        cards[i].classList.add('show')
    } 
    e.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('active')
        })
        e.classList.add('active')
        btn.disabled = false;
    })
})