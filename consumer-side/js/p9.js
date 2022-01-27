const btn = document.querySelector('.button');

pathLocation = "/saara/pages/p16.html";
 
btn.addEventListener('click', (e) => {
    e.preventDefault();
    backPageArr.push('/saara/pages/p9.html');
    sessionStorage.setItem('boolean', "true");
    sessionStorage.setItem('backPage', backPageArr);
    location.href = pathLocation;
}); 