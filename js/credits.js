const   sortOrder = document.querySelectorAll('[data-num="0"]'),
        sortOrderNext = document.querySelectorAll('[data-num="1"]'),
        sortCustomer = document.querySelectorAll('[data-num="5"]'),
        sortCustomerNext = document.querySelectorAll('[data-num="6"]'),
        sortBtns = document.querySelectorAll('.credits__sort-btn'),
        tableInfoRow = document.querySelectorAll('.table__info-row'),
        orderId = document.querySelectorAll('.order__id'), 
        customerId = document.querySelectorAll('.customer__id'),
        table = document.querySelector('table'),
        tableTitleRow = document.querySelector('.table__title-row'),
        tableRow = '.table__row',
        tableCell = '.table__info';
        
 
sortBtns.forEach(sort => {
    sort.addEventListener('click', () => {
        sortBtns.forEach(elem => {
            elem.classList.remove('active')
        })
        sort.classList.add('active');
        if(sort.getAttribute('id') == "customer"){
            renderRows(sortCustomerId())
            for(let i = 0; i < sortOrder.length; i++){
                tableInfoRow[i].insertBefore(sortOrder[i], sortCustomerNext[i]);
                tableInfoRow[i].insertBefore(sortCustomer[i], sortOrderNext[i]);
            }
        }else {
            renderRows(sortOrderId())
            for(let j = 0; j < sortOrder.length; j++){
                tableInfoRow[j].insertBefore(sortOrder[j], sortOrderNext[j]);
                tableInfoRow[j].insertBefore(sortCustomer[j], sortCustomerNext[j]);
            }
        }
    })
})

function sortOrderId(){
    let orders = [];

    for(let i = 0; i < orderId.length; i++ ) { 
        orders.push(orderId[i].textContent.trim())   
        orderId[i].closest(tableCell).setAttribute('id', orderId[i].textContent.trim() );
    } 
    orders.sort(function(a,b){ 
        return a-b
    })  
    return orders
}


function sortCustomerId(){
    let  customers = [];

    for(let i = 0; i < customerId.length; i++ ) {  
        customers.push(customerId[i].textContent.trim())
        customerId[i].closest(tableCell).setAttribute('id', customerId[i].textContent.trim() );
    } 
    customers.sort(function(a,b){ 
        return a-b
      })

    return customers
}
  
function renderRows(list) {   
        list.forEach(code => { 
            document.getElementById(code).closest(tableRow).setAttribute("data-code", list.indexOf(code));
        }) 

        for (let i = 0; i < list.length; i++) { 
            table.appendChild(document.querySelector(`[data-code="${i}"]`) )
        } 
}
 