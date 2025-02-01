
document.addEventListener('DOMContentLoaded', function(){


   const asyncfunction = fetch('https://pokeapi.co/api/v2/pokemon/')

   const inputValue = document.querySelector('#pokename').value.toLower

   asyncfunction = inputValue
   .then(response => {

        if (!response.ok){
            console.log(response.status);
        }

        return response.json()

   })
   .then(data => {
        const img = data;
        console.log(img);

   })


   //.catch(console.error('Could not fetch resource'))

    
});
























// document.addEventListener('DOMContentLoaded', function() {
//     fetch('https://api.exchangeratesapi.io/latest?base=USD')
//         .then(response => {
//             // Check for successful response (status code 200-299)
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`); // Throw an error if not successful
//             }
//             return response.json(); // Parse the response body as JSON only if the request was successful
//         })
//         .then(data => {
//             // Now you can work with the JSON data
//             console.log(data); // Log the data to the console
//             // ... further processing of the data
//         })
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//             // Handle errors gracefully here. Display an error message to the user, etc.
//         });
// });




// fetch('https://www.api.exchangerate.api/latest?base=USD')
// .then(response =>{
//     if(!response.ok){
//     throw new Error((`There has been a problem ${response.status}`));
//     }
//      return response.json()
    
// });