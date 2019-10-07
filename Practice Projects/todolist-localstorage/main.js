let form = document.querySelector("form");
let todoList = document.getElementById("containerList");
let input = document.getElementById("user-todo");
let button = document.getElementById("clear");

let todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

localStorage.setItem('todos', JSON.stringify(todosArray));

let storage = JSON.parse(localStorage.getItem('todos'));

form.addEventListener("submit", (event) => {
  event.preventDefault();

  todosArray.push(input.value);

  localStorage.setItem('todos', JSON.stringify(todosArray));
  todoMaker(input.value);
  input.value = "";
})

function todoMaker(inputValue) {
  let item = document.createElement("li");
  item.textContent = inputValue;
  todoList.appendChild(item);
}
storage.map((todoItem) => {
  todoMaker(todoItem);
})

button.addEventListener("click", () => {
    localStorage.clear();
    while(todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }
})
