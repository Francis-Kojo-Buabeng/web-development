document.addEventListener('DOMContentLoaded',function(){
    //By default submit button is disabled
   document.querySelector('#submit').disabled = true;

    //When key is pressed in the input element the function runs
   document.querySelector('#tasks').onkeyup = ()=>{
        const InputValues = document.querySelector('#tasks').value;
        if (InputValues.length > 0){
            document.querySelector('#submit').disabled = false;
        }else{
            document.querySelector('#submit').disabled = true;
        }
        
   }
    document.querySelector('form').onsubmit = function(){
        const Task = document.querySelector('#tasks').value;
        const li = document.createElement('li');
        li.innerHTML = Task;
        document.querySelector('ul').append(li);
      
        document.querySelector('#tasks').value = '';//clears the input button after submit

        document.querySelector('#submit').disabled = true; //disable the submit button after submit

        //stop form from submitting
       return false;
    }
});


// remembrance of how to use the diabled property
/*
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#submit').disabled = true;
    this.document.querySelector('#tasks').onkeyup = ()=>{
        if (document.querySelector('#task').value.length > 0){
            document.querySelector('#submit').disabled = false;
        }
        
    }
    |
    |
    |codes
    |
    |
    |
    |
    |

ocument.querySelector('#submit').disabled = true;
});
*/