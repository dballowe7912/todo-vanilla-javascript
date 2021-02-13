document.querySelector('.addTodoForm').addEventListener('submit', handleSubmit);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);

function handleSubmit(event) {
    event.preventDefault();
    let input = document.querySelector('.addTodoInput');
    if (input !== '') {
        addTodo(input.value)
    }
    input.value = '';
}

const addTodo = (todo) => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
    <span class='todo-item'>${todo}</span>
    <button name="checkButton"><i class="fas fa-check-square"></i></button>
    <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function handleClickDeleteOrCheck(event) {
    if (event.target.name === 'checkButton') {
        checkTodo(event);
    } else if (event.target.name === 'deleteButton') {
        deleteTodo(event);
    }
}

function checkTodo(event) {
    console.log('clicked')
    let item = event.target.parentNode;
    if (item.style.textDecoration == 'line-through') {
        item.style.textDecoration == 'none';
    } else item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-list-item-fall');
}