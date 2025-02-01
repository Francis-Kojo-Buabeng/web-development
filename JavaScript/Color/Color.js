
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('select').onchange = function(){
        document.querySelector('#p-tag').style.color = this.value;
    }
});















//Updated Version 1.0
/*
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('button').forEach((button)=>{
        button.onclick = ()=>{
            document.querySelector('#hello').style.color = button.dataset.color; // the button is argument/parameter
        }
    });
});
*/







// First code || Old Version

/* 
document.addEventListener('DOMContentLoaded', function(){

    document.querySelectorAll('button').forEach(function (button){
         button.onclick = function(){
            document.querySelector('#hello').style.color = button.dataset.color;        
            }   
     });
    
 });
 */

