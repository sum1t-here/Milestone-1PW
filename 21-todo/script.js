const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function addTodo() {
  const todoText = todoInput.value;

  if (todoText !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
            <span>${todoText}</span>
            <button onclick="editTodo(this)">Edit</button>
            <button onclick="deleteTodo(this)">Delete</button>
        `;

    todoList.appendChild(listItem);
    todoInput.value = '';
  }
}

function editTodo(button) {
  const listItem = button.parentElement;
  const span = listItem.querySelector('span');
  const newTodoText = prompt('Edit todo:', span.textContent);

  if (newTodoText !== null) {
    span.textContent = newTodoText;
  }
}

function deleteTodo(button) {
  const listItem = button.parentElement;
  todoList.removeChild(listItem);
}
