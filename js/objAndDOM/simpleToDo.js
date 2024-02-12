let b = document.querySelector("body");
let container = document.createElement("div");
let wrapper = document.createElement("div");
let header = document.createElement("header");
let heading1 = document.createElement("h1");
let form = document.createElement("div");
let inpt = document.createElement("input");
let addBtn = document.createElement("button");
let todoContainer = document.createElement("div");
let todoList = document.createElement("ul");
let link = document.createElement("link");

link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute(
  "href",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
);
document.head.appendChild(link);
b.setAttribute(
  "style",
  "min-height: 100vh;background: linear-gradient(217deg, #833471, rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, #0984e3, rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, #00b894, rgba(0, 0, 255, 0) 70.71%);background-repeat: no-repeat;"
);
container.setAttribute("style", "width: 100%; margin: 0 auto;");
wrapper.setAttribute(
  "style",
  "width: 100%; display: flex; flex-direction: column; justify-content: center;align-items: center;padding: 20px 0;gap: 8px"
);
todoContainer.setAttribute(
  "style",
  "display: flex;align-items: center;justify-content: center;"
);
form.setAttribute(
  "style",
  "display: flex;justify-content: center;align-items: center;gap:8px"
);
inpt.setAttribute(
  "style",
  "border:none;border-radius:8px;outline: none;padding:4px 8px"
);
addBtn.innerHTML = `<i class="far fa-plus-square"></i>`;
addBtn.setAttribute(
  "style",
  "color:green;border:none;border-radius:8px;display: flex;justify-content: center;align-items: center;padding: 6px 12px"
);
heading1.textContent = "TO DO";
heading1.style.color = "white";
header.append(heading1);
todoList.setAttribute(
  "style",
  "display: flex;flex-direction: column;justify-content: center;align-items: center;gap:8px;padding:0;"
);
form.append(inpt, addBtn);
todoContainer.append(todoList);
todoContainer.setAttribute(
  "style",
  "display: flex;flex-direction: column;justify-content: center;align-items: center;gap:8px"
);
wrapper.append(header, form, todoContainer);
container.append(wrapper);
b.append(container);

function addToDo(a) {
  a.preventDefault();
  let todo = inpt.value;
  if (todo !== "") {
    createTodo(todo);
  } else {
    alert("you can't add empty todo");
  }
}

function createTodo(todo) {
  const li = document.createElement("li");
  li.innerText = todo;
  todoList.appendChild(li);
  li.setAttribute(
    "style",
    "display: flex;justify-content: center;align-items: center;gap:8px;list-style-type:none;color:black;background:white;border-radius:8px;padding:12px"
  );
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
  deleteBtn.setAttribute(
    "style",
    "border:none;border-radius:8px;padding: 4px 8px;color:green;"
  );
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = `<i class="far fa-check-square"></i>`;
  doneBtn.setAttribute(
    "style",
    "border:none;border-radius:8px;padding: 4px 8px;color:red;"
  );
  deleteBtn.addEventListener("click", () => li.remove());
  doneBtn.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });
  li.append(doneBtn, deleteBtn);
  todoList.append(li);
  todoContainer.appendChild(todoList);
  inpt.value = "";
}
addBtn.addEventListener("click", addToDo);
