let todos = ["item 1", "item 2", "item 3"] // Arrays are used to store multiple values in a single variable

function displayTodos() {
  console.log('My todos:', todos);
}

displayTodos()

function addTodo(todo) {
  todos.push(todo);
}

addTodo()

function changTodo(position, newValue) {
  todos[position] = newValue;
}

changeTodos(0, 'change 1')
