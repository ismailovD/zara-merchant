const   allChecked = document.querySelector('#all-check'),
        allCheckbox =document.querySelectorAll('.table__check-input'),
        deletePolicy = document.querySelector('.policies__delete'),
        tableRow = '.table__thing-row',
        renamePolicy = document.querySelector('.policy__edit'),
        namePolicy = document.querySelector('.policy__name');
 
allChecked.addEventListener('click',() => {
     if(allChecked.checked){
        allCheckbox.forEach(check => {
            check.checked = true
        })
     }else {
        allCheckbox.forEach(check => {
            check.checked = false
        })
     } 
 })

 deletePolicy.addEventListener('click', () => {
    allCheckbox.forEach(inp => {
        if(inp.checked){
            inp.closest(tableRow).remove();
        }
    })
 })

 