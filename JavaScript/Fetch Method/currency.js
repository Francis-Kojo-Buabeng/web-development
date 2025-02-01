document.addEventListener('DOMContentLoaded',function(){

     fetch("https://api.exchangeratesapi.io/latest?base=USD")
     .then(response => {
          if (!response.ok){
               console.log(`There is a problem during fetch ${response.status}`);
          }else{
               return response.json();
          }
     })
     .then(data =>{
          console.log(data);
     })

     .catch(error => {
          console.error("There has been error in fetch operation: ", error)
     });
     
});
