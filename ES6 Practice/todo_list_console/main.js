import { showList, addTodo, deleteTodo } from "./lib.js";

window.setTimeout(function() {

let input = prompt("What would you like to do ?");  

while (input !== "quit") {
    
  if (input === "list") {
    showList();
  }  else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  } else {
    alert("Invalid input! Please, refer to the instructions on your left.")
  }

  input = prompt("What would you like to do ?"); 
}

}, 2000);  
