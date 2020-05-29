let newtask = document.getElementById('newtask');
let add = document.getElementById('addtask');
let ul = document.getElementById('todolist');

add.onclick = function() {
    //local variables
    let li = document.createElement('li');
    let span = document.createElement('span');
    
    //text
    span.innerText = newtask.value;
    let xBtn = document.createElement('button')

    //up button
    let up = document.createElement('button');
    up.innerText = '🔺'

    //down

    let down = document.createElement('button');
    down.innerText = '🔽'

    //cross button
    xBtn.innerText = '✖';
    xBtn.onclick = (event) => {
        event.target.parentElement.remove();
    }

    //up 
    up.onclick = (event) => {
        ul.insertBefore(event.target.parentElement,event.target.parentElement.previousElementSibling)
    }

    down.onclick = (event) => {
        ul.insertBefore(event.target.parentElement.nextElementSibling,event.target.parentElement)
    }
    
    //adding to dom
    li.appendChild(xBtn)
    li.appendChild(up)
    li.appendChild(down)
    li.appendChild(span)
    ul.appendChild(li)
}