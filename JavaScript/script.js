

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("button").addEventListener('click',count);
});

let counter = 0;
function count(){
    counter++;
    document.querySelector("h1").innerHTML = counter;
    if (counter % 5 === 0){
        alert(`The counter is now ${counter}`);
    }
}


document.addEventListener("DOMContentLoaded",function(){
    let all = document.querySelectorAll("button");
    for (let i = 0; i <= 2; i++){
        document.querySelectorAll("button")[i].onclick = function(){
        document.querySelector("body").style.background = "red";
    }
    }
})
