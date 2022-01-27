const   stars = document.querySelectorAll('.star');

let confirm = true,
    firstTime = 0;
stars.forEach(count => {
    if(count.classList.contains('like')){
        firstTime++
    }
});  

stars.forEach(star => {
    
    star.addEventListener('mouseenter', ()=> {
        removeAllLike()
        let order = star.getAttribute('data-position');
        for(let i =0 ; i< order; i++){
            stars[i].classList.add('like')
        }
        star.addEventListener('click', ()=> {
            confirm = false;
            let order = star.getAttribute('data-position');
            firstTime = order;
            for(let i =0 ; i< order; i++){
                stars[i].classList.add('like')
            }
        })
        star.addEventListener('mousedown', ()=> { 
            let order = star.getAttribute('data-position');
            firstTime = order;
            for(let i =0 ; i< order; i++){
                stars[i].classList.add('like-down')
            }
        })
        star.addEventListener('mouseup', ()=> { 
            let order = star.getAttribute('data-position');
            firstTime = order;
            for(let i =0 ; i< order; i++){
                stars[i].classList.remove('like-down')
            }
        })
    }) 
    star.addEventListener('mouseleave', ()=> {
        let order = star.getAttribute('data-position');
        if(confirm){
            removeLike(order);
            addLike(firstTime)
        }else {
            addLike(firstTime)
        }
        confirm = true
    }) 
    
    
})
function addLike(num) {
    for(let i = 0 ; i< num; i++){
        stars[i].classList.add('like')
    }
}
function removeLike(num) {
    for(let i = 0 ; i< num; i++){
        stars[i].classList.remove('like')
    }
}
function removeAllLike() {
    for(let i = 0 ; i< stars.length; i++){
        stars[i].classList.remove('like')
    }
}