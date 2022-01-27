const   tableTabs = document.querySelectorAll('.return__item'),
        tables = document.querySelectorAll('.table');
        
 
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

 