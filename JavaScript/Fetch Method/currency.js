document.addEventListener('DOMContentLoaded',function(){
          //Synchronous way
     // fetch("https://api.exchangeratesapi.io/latest?base=USD")
     // .then(response => {
     //      if (!response.ok){
     //           console.log(`There is a problem during fetch ${response.status}`);
     //      }else{
     //           return response.json();
     //      }
     // })
     // .then(data =>{
     //      console.log(data);
     // })

     // .catch(error => {
     //      console.error("There has been error in fetch operation: ", error)
     // });

     // fetch("https://jsonplaceholder.typicode.com/posts")
     // .then(response => response.json())
     // .then(data=> {
     //      const apiDataBody = data[0].body;
     //      document.querySelector('body').innerHTML = apiDataBody;
     // })
     // .catch(err=> console.log("Error: Something bad happened"))


          //Asynchronous way
   async function getApi() {
     try{
          const response = await fetch('https://randomuser.me/api/');
          const data = await response.json();
          console.log(data)
     }
     catch(error){
          console.error(`Error: ${error.status}`);
     }
     

   }

   getApi();
 });


