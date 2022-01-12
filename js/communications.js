const   textareaParent = ".templates",
        textareasCommun = document.querySelectorAll('.templates__textarea'),
        symbolCurent = '.templates__symbols-curent',
        symbolMax = '.templates__symbols-max';
 
textareasCommun.forEach(writeTable => {
    let parent =  writeTable.closest(textareaParent);
    parent.querySelector(symbolMax).textContent = writeTable.getAttribute('maxlength');
    writeTable.addEventListener('input', () => { 
       parent.querySelector(symbolCurent).textContent = writeTable.value.length;  
    })
})
 