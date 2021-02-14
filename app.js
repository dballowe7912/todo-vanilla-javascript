// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

// Event Handlers
function handleSubmitForm(event){
    event.preventDefault();
    let input = document.querySelector('input');
    if (input !== '') {
        addTodo(input.value)
    } else {
        return;
    }
    input.value = '';
}

function addTodo(todo) {
   const ul = document.querySelector('ul');
   const li = document.createElement('li');
   li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>'
   `;
   li.classList.add('todo-list-item');
   ul.appendChild(li);
}

function handleClickDeleteOrCheck(event) {
    if (event.target.name === 'checkButton'){
        checkTodo(event);
    }
    if (event.target.name === 'deleteButton'){
        deleteTodo(event);
    }
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-list-item-fall');
}

function handleClearAll(event) {
    document.querySelector('ul').innerHTML = '';
}