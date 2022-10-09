const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // -> JSON을 이용하여 String 의 형태로 변환
  // JSON.parse를 사용하면 String 을  다시 array의 형태로 변환할수있다.
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); // event가 발생한 target의 부모인 li를 삭제한다 -> 이러면 삭제가 가능해짐
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // -> filter는 배열의 각요소마다 return이 true 일때만 배열에 남겨두고 false면 배열에서 삭제
  saveToDos();
}

function paintToDo(newTodo) {
  // list추가
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  span.style.color = "white";
  const button = document.createElement("button");
  button.innerText = "❌";
  button.style.background = "transparent";
  button.style.border = "none";

  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // Date,now -> 랜덤한 id를 위해
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos(); // newTodo를 local storage에 저장 localstorage에 array로 저장 불가능 텍스트의 형태로만 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // -> 이전의 내용도 toDos에 저장한다.
  parsedToDos.forEach(paintToDo);
}
