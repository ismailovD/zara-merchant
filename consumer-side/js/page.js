const   backPage = document.querySelectorAll('.back-page');

let pathLocation,
    backLocation,
    trueOrFalse = sessionStorage.getItem('boolean'), 
    dataStorage = sessionStorage.getItem('backPage'),
    backPageArr;  

if(dataStorage){
    backPageArr = dataStorage.split(','); 
}
console.log(backPageArr);
if(Boolean(trueOrFalse)){ 
    backLocation = backPageArr[backPageArr.length - 1]; 
    console.log(backLocation);  
}else {
    backPageArr.pop();
    console.log(backPageArr);
    backLocation = backPageArr[backPageArr.length - 1];
    console.log(backLocation);
} 
console.log(backPageArr);
backPage.forEach(back => { 
    back.addEventListener('click', (e) => {
        e.preventDefault(); 
        sessionStorage.setItem('boolean' , ""); 
        sessionStorage.setItem('backPage', backPageArr);
        console.log(backPageArr); 
        location.href = backLocation; 
    })
})
 