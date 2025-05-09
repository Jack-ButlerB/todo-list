const body = document.querySelector("body");
const todoItemsContainer = document.getElementById("todoItemsContainer");

export function createItemModal(addToArrayParam, toDoListParam) {
  const createItemDiv = document.createElement("div");
  createItemDiv.setAttribute("class", "todoItemContainer");

  todoItemsContainer.appendChild(createItemDiv);
  const dialogForm = document.createElement("form");
  createItemDiv.appendChild(dialogForm);

  const todoItemDetails = {
    title: "Title:",
    description: "Description:",
    dueDate: "Due Date:",
    priority: "Priority:",
    notes: "Notes:",
  };
  for (const [key, value] of Object.entries(todoItemDetails)) {
    const detailDiv = document.createElement("div");
    detailDiv.setAttribute("id", key);
    detailDiv.setAttribute("class", "todoFormDiv");
    dialogForm.appendChild(detailDiv);
    const detailLabel = document.createElement("label");
    detailLabel.textContent = value;
    detailDiv.appendChild(detailLabel);
    const detailInput = document.createElement("input");
    detailInput.setAttribute("id", "inputted" + key);
    detailInput.setAttribute("type", "text");
    detailDiv.appendChild(detailInput);
  }
  const sumbitButton = document.createElement("button");
  sumbitButton.setAttribute("type", "submit");
  sumbitButton.textContent = "Add Todo Item";
  dialogForm.appendChild(sumbitButton);
  sumbitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputtedTitle = document.getElementById("inputtedtitle");
    const inputtedDescription = document.getElementById("inputteddescription");
    const inputtedDueDate = document.getElementById("inputteddueDate");
    const inputtedPriority = document.getElementById("inputtedpriority");
    const inputtedNotes = document.getElementById("inputtednotes");
    addToArrayParam(
      inputtedTitle.value,
      inputtedDescription.value,
      inputtedDueDate.value,
      inputtedPriority.value,
      inputtedNotes.value
    );
    createItemDiv.remove();
    renderAllTodos(toDoListParam);
  });
}
export function renderTodoItem() {
  const createItemDiv = document.createElement("div");
  createItemDiv.setAttribute("class", "todoItemContainer");

  todoItemsContainer.appendChild(createItemDiv);
  const dialogForm = document.createElement("form");
  createItemDiv.appendChild(dialogForm);

  const todoItemDetails = {
    title: "Title:",
    description: "Description:",
    dueDate: "Due Date:",
    priority: "Priority:",
    notes: "Notes:",
  };
  for (const [key, value] of Object.entries(todoItemDetails)) {
    const detailDiv = document.createElement("div");
    detailDiv.setAttribute("id", key);
    detailDiv.setAttribute("class", "todoFormDiv");
    dialogForm.appendChild(detailDiv);
    const detailLabel = document.createElement("label");
    detailLabel.textContent = value;
    detailDiv.appendChild(detailLabel);
    const detailInput = document.createElement("input");
    detailInput.setAttribute("name", key);
    detailInput.setAttribute("type", "text");
    detailInput.setAttribute("id", key + "input");
    detailDiv.appendChild(detailInput);
  }
}
export function renderTodoItem2(todoItem) {
  const titleParam = todoItem.title;
  const descriptionParam = todoItem.description;
  const dueDateParam = todoItem.dueDate;
  const priorityParam = todoItem.priority;
  const notesParam = todoItem.notes;

  const createItemDiv = document.createElement("div");
  createItemDiv.setAttribute("class", "todoItemContainer");

  todoItemsContainer.appendChild(createItemDiv);
  const dialogForm = document.createElement("form");
  createItemDiv.appendChild(dialogForm);

  const todoItemDetails = [
    ["title", "Title:", titleParam],
    ["description", "Description:", descriptionParam],
    ["dueDate", "Due Date:", dueDateParam],
    ["priority", "Priority:", priorityParam],
    ["notes", "Notes:", notesParam],
  ];
  for (const todoItemDetail of todoItemDetails) {
    const detailDiv = document.createElement("div");
    detailDiv.setAttribute("id", todoItemDetail[0]);
    detailDiv.setAttribute("class", "todoFormDiv");
    dialogForm.appendChild(detailDiv);
    const detailLabel = document.createElement("label");
    detailLabel.textContent = todoItemDetail[1];
    detailDiv.appendChild(detailLabel);
    const detailInput = document.createElement("input");
    detailInput.setAttribute("name", todoItemDetail[0]);
    detailInput.setAttribute("type", "text");
    if (todoItem) {
      detailInput.setAttribute("value", todoItemDetail[2]);
      detailInput.setAttribute("readOnly", "true");
    }
    detailDiv.appendChild(detailInput);
  }
}

export function renderNewTodoItemButton(addToArrayParam, toDoListParam) {
  const newTodoItemButton = document.createElement("button");
  newTodoItemButton.textContent = "+";
  newTodoItemButton.setAttribute("id", "newTodoItemButton");
  todoItemsContainer.appendChild(newTodoItemButton);
  newTodoItemButton.addEventListener("click", function (e) {
    newTodoItemButton.remove();
    createItemModal(addToArrayParam, toDoListParam);
  });
}

export function renderAllTodos(toDoListParam, addToArray, toDoList) {
  todoItemsContainer.replaceChildren();
  for (const toDos of toDoListParam) {
    renderTodoItem2(toDos);
  }
  renderNewTodoItemButton(addToArray, toDoList);
}
