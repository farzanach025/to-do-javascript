const todoList = [
  {
    name: "make dinner",
    dueDate: "2023-06-24",
  },
  {
    name: "make lunch",
    dueDate: "2023-06-24",
  },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject, index) {
    // this loop is same as below
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
    todoList.splice(${index}, 1);
    renderTodoList();
    " class= "delete-todo-button"> Delete</button>
    `;
    todoListHTML += html;
  });

  /*for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const {name,dueDate} = todoObject

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
    todoList.splice(${i}, 1);
    renderTodoList();
    " class= "delete-todo-button"> Delete</button>
    `;
    todoListHTML += html;
  } */
  console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-date-input");
  const dueDate = dateInputElement.value;

  console.log("dateInputElement", dateInputElement);
  todoList.push({
    // name:name,
    //dueDate : dueDate if both name is same we can use like below
    name,
    dueDate,
  });
  console.log("todoList", todoList);
  inputElement.value = "";
  renderTodoList();
}
