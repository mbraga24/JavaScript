let todos = ["Finish Fron-End"]

export function showList() {
  console.log("****************************");
    todos.forEach((todo, index) => {
      console.log(index + ": " + todo);
    })
  console.log("****************************");
}

export function addTodo() {
  let newTodo = prompt("Enter new todo:");
  todos.push(newTodo);
  console.log("Todo: " + newTodo + " added to the list.");
}

export function deleteTodo() {
  let index = prompt("What is the index of the todo you'd like to remove?");
  let deletedItem = todos[index];
  todos.splice(index, 1);
  console.log("Todo " + deletedItem + " removed from the list.");
}

// export { showList, addTodo, deleteTodo };