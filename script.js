document.getElementById('add-button').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
  const input = document.getElementById('todo-input');
  const todoText = input.value.trim();

  if (todoText === '') {
    alert('Please enter a task!');
    return;
  }

  const todoList = document.getElementById('todo-list');

  // Create todo item
  const todoItem = document.createElement('div');
  todoItem.className = 'todo-item';

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      todoTextElement.style.textDecoration = 'line-through';
    } else {
      todoTextElement.style.textDecoration = 'none';
    }
  });

  // Todo text
  const todoTextElement = document.createElement('span');
  todoTextElement.textContent = todoText;

  // Delete icon
  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fas fa-trash delete-icon';
  deleteIcon.addEventListener('click', function () {
    todoList.removeChild(todoItem);
  });

  // Append elements to todo item
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoTextElement);
  todoItem.appendChild(deleteIcon);

  // Append todo item to the list
  todoList.appendChild(todoItem);

  // Clear input
  input.value = '';
}