function hello(){
    const container = document.querySelector('h1');
    if (container.innerHTML === 'Hello!'){
        container.innerHTML = 'Goodbye'; 
    }else{
        container.innerHTML = 'Hello!';
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick = hello;
});