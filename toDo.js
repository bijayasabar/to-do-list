let inputs= document.getElementById('inp');
let text= document.querySelector('.text');

function add(){
    if(inputs.value == ''){
        alert('Please Enter Your Task');

    }
    else{
        let newEle= document.createElement('ul');
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>` ;
        text.appendChild(newEle);
        inputs.value='';
        // if you don't use this inputs.value, whatever you wrote will still be visible on the input tag element, to get it, do practical.
        newEle.querySelector('i').addEventListener('click', remove);
        function remove(){
            newEle.remove();
        }
        // remove() means; when we click the button, the entire element will remove so the syntax is newEle.remove()
    }
}