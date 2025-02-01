if (!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}
function count(){
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    currentCounter = localStorage.setItem('counter',counter);

    
    if (counter % 10 === 0){
        alert( `You are now on number ${counter}`);
    }
    
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h1').innerHTML = localStorage.getItem('current');
    document.querySelector('button').onclick = count;
});

const TimeInterval = setInterval(count, 1000);

setTimeout(() => {
    clearInterval(TimeInterval);
    alert(`Time is out at ${localStorage.getItem('counter')}`);
}, 5000);


