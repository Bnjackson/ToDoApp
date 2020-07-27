const todos = ['item 1', 'item 2', 'item 3', 'item 4'] // Arrays are used to store multiple values in a single variable

function displayTodos() {
  console.log('My todos:', todos);
}

displayTodos()

function addTodo(todo) {
  todos.push(todo);
}

addTodo('new item');

function changeTodos(position, newValue) {
  todos[position] = newValue;
  console.log(displayTodos);
}

changeTodos(0, 'change 1');

function deleteTodo() {
  todos.splice(0, 1);
}


const myName = 'Ben';

function sayName() {
  console.log(myName);
}
sayName();
