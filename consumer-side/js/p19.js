const btn = document.querySelector('.button'); 

pathLocation = "/saara/pages/form.html";
 
btn.addEventListener('click', (e) => {
    e.preventDefault();
    backPageArr.push('/saara/pages/p19.html');
    sessionStorage.setItem('boolean', "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = pathLocation;
}); 