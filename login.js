const form = document.querySelector("#login-form");
const input = document.querySelector("#login-form input");
const h2 = document.querySelector("#username");
const userNameDiv = document.querySelector("#username-div");
const resetBtn = document.querySelector("#resetBtn");

const USER_NAME = "username";
const HIDDEN_CLASS_NAME = "hidden";

function handleForm(event) {
  event.preventDefault();
  const userName = input.value;
  localStorage.setItem(USER_NAME, userName);
  paintName(userName);
}

function paintName(username) {
  form.classList.add(HIDDEN_CLASS_NAME);
  userNameDiv.classList.remove(HIDDEN_CLASS_NAME);
  h2.innerText = `Hello! ${username}.`;
  resetBtn.addEventListener("click", reset);
}

const localStorageName = localStorage.getItem(USER_NAME);

if (!localStorageName) {
  form.addEventListener("submit", handleForm);
} else {
  paintName(localStorageName);
}

function reset() {
  localStorage.removeItem(USER_NAME);
  userNameDiv.classList.add(HIDDEN_CLASS_NAME);
  form.classList.remove(HIDDEN_CLASS_NAME);
  form.addEventListener("submit", handleForm);
}
