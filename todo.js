const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoUl = document.querySelector("#todo-ul");

todoForm.addEventListener("submit", handleToDoForm);

let toDos = [];

function handleToDoForm(event) {
  event.preventDefault();
  const toDo = todoInput.value;
  const toDoObject = { id: Date.now(), text: toDo };
  toDos.push(toDoObject);
  localStorage.setItem("todo", JSON.stringify(toDos));
  todoInput.value = "";
  paintToDo(toDoObject);
}

function paintToDo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.classList.add("todo-span");
  const button = document.createElement("button");
  button.classList.add("todo-btn");
  todoUl.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = todo.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
  const deleteTarget = event.path[1];
  deleteTarget.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteTarget.id));
  localStorage.setItem("todo", JSON.stringify(toDos));
}

const localStorageToDo = localStorage.getItem("todo");

if (localStorageToDo) {
  const newToDo = JSON.parse(localStorageToDo);
  toDos = newToDo;
  newToDo.forEach((item) => paintToDo(item));
}
