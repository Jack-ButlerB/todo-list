const body = document.querySelector("body");
export function renderTodoListSelectors(
  todoList,
  addItem,
  editItem,
  deleteItem,
  selectableTodoLists
) {
  const todoListSelectorContainer = document.createElement("div");
  todoListSelectorContainer.setAttribute("class", "todoListSelectorContainer");

  const allTodos = document.createElement("button");
  allTodos.textContent = "All";
  allTodos.setAttribute("class", "todoListSelector");
  allTodos.addEventListener("click", function () {
    renderAllTodos(todoList, addItem, editItem, deleteItem);
  });
  todoListSelectorContainer.appendChild(allTodos);

  selectableTodoLists.forEach(function (selectedtodoList) {
    const todoListSelector = document.createElement("button");
    todoListSelector.textContent = selectedtodoList;
    todoListSelector.setAttribute("class", "todoListSelector");
    todoListSelector.addEventListener("click", function () {
      console.log(selectedtodoList, "selectedtodoList");
      renderAllTodos(todoList, addItem, editItem, deleteItem, selectedtodoList);
    });
    todoListSelectorContainer.appendChild(todoListSelector);
  });
  body.appendChild(todoListSelectorContainer);
}

export function renderTodoInputModal(addItem, editItem, todoToEdit) {
  const todoInputDialog = document.createElement("dialog");
  todoInputDialog.setAttribute("id", "todoInputDialog");

  todoItemsContainer.appendChild(todoInputDialog);
  const todoInputForm = document.createElement("form");
  todoInputForm.setAttribute("id", "todoInputForm");
  todoInputDialog.appendChild(todoInputForm);

  const todoItemDetails = {
    title: "Title:",
    description: "Description:",
    list: "List",
  };
  for (const [key, value] of Object.entries(todoItemDetails)) {
    const detailDiv = document.createElement("div");
    detailDiv.setAttribute("id", key);
    detailDiv.setAttribute("class", "todoParamDiv");
    todoInputForm.appendChild(detailDiv);
    const detailLabel = document.createElement("p");
    detailLabel.textContent = value;
    detailDiv.appendChild(detailLabel);
    const detailInput = document.createElement("input");
    detailInput.setAttribute("id", "inputted" + key);
    detailInput.setAttribute("type", "text");
    detailInput.style.alignContent = "right";
    console.log(key);
    // console.log("todoToEdit[key]", todoToEdit[key]);
    detailInput.value = todoToEdit ? todoToEdit[key] : "";
    detailDiv.appendChild(detailInput);
  }
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = todoToEdit ? "Update Details" : "Add Todo Item";
  todoInputForm.appendChild(submitButton);
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const inputtedTitle = document.getElementById("inputtedtitle");
    const inputtedDescription = document.getElementById("inputteddescription");
    const inputtedList = document.getElementById("inputtedlist");
    if (todoToEdit) {
      todoToEdit.title = inputtedTitle.value;
      todoToEdit.description = inputtedDescription.value;
      todoToEdit.list = inputtedList.value;
      console.log("event listener", todoToEdit);
      editItem(todoToEdit);
    } else {
      addItem(
        inputtedTitle.value,
        inputtedDescription.value,
        inputtedList.value
      );
    }
    todoInputDialog.remove();
  });
  todoInputDialog.showModal();
}
export function renderTodoItem(todoItem, addItem, editItem, deleteItem) {
  const titleParam = todoItem.title;
  const descriptionParam = todoItem.description;
  const todoItemDiv = document.createElement("div");
  todoItemDiv.setAttribute("class", "todoItemContainer");
  todoItemsContainer.appendChild(todoItemDiv);
  class createTodoItemDetails {
    constructor(indentifier, lable, value) {
      this.indentifier = indentifier;
      this.lable = lable;
      this.value = value;
    }
  }
  const todoItemDetails = [
    new createTodoItemDetails("title", "Title: ", titleParam),
    // new createTodoItemDetails("description", "Description: ", descriptionParam),
  ];
  for (const todoItemDetail of todoItemDetails) {
    const detailDiv = document.createElement("div");
    detailDiv.setAttribute("id", todoItemDetail.indentifier);
    detailDiv.setAttribute("class", "todoParamDiv");
    todoItemDiv.appendChild(detailDiv);
    const detailLabel = document.createElement("p");
    detailLabel.textContent = todoItemDetail.lable;
    detailDiv.appendChild(detailLabel);
    const detailValue = document.createElement("p");
    detailValue.setAttribute("value", todoItemDetail.indentifier);
    detailValue.textContent = todoItemDetail.value;
    detailDiv.appendChild(detailValue);
  }

  const buttonDiv = document.createElement("div");
  todoItemDiv.appendChild(buttonDiv);
  buttonDiv.setAttribute("id", "buttonDiv");
  buttonDiv.setAttribute("class", "todoParamDiv");

  const editButton = document.createElement("button");
  editButton.setAttribute("id", "editButton");
  editButton.setAttribute("class", "buttons");
  editButton.textContent = "More Details";
  todoItemDiv.appendChild(editButton);
  editButton.addEventListener("click", function (e) {
    console.log(todoItem);
    renderTodoInputModal(addItem, editItem, todoItem);
  });

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.setAttribute("class", "buttons");
  deleteButton.textContent = "Delete";
  todoItemDiv.appendChild(deleteButton);
  deleteButton.addEventListener("click", function (e) {
    deleteItem(todoItem);
  });
  buttonDiv.appendChild(editButton);
  buttonDiv.appendChild(deleteButton);
}

export function renderNewTodoItemButton(addItem, editItem) {
  const newTodoItemButton = document.createElement("button");
  newTodoItemButton.textContent = "+";
  newTodoItemButton.setAttribute("id", "newTodoItemButton");
  todoItemsContainer.appendChild(newTodoItemButton);
  newTodoItemButton.addEventListener("click", function (e) {
    renderTodoInputModal(addItem, editItem);
  });
}

export function renderAllTodos(
  toDoList,
  addItem,
  editItem,
  deleteItem,
  selectedList
) {
  if (document.getElementById("todoItemsContainer")) {
    const todoItemsContainer = document.getElementById("todoItemsContainer");
    todoItemsContainer.replaceChildren();
  } else {
    const todoItemsContainer = document.createElement("div");
    todoItemsContainer.setAttribute("id", "todoItemsContainer");
    body.appendChild(todoItemsContainer);
  }

  if (selectedList) {
    console.log(selectedList);
    for (const toDo of toDoList) {
      if (toDo.list === selectedList) {
        renderTodoItem(toDo, addItem, editItem, deleteItem);
      }
    }
  } else {
    for (const toDo of toDoList) {
      renderTodoItem(toDo, addItem, editItem, deleteItem);
    }
  }

  console.log("final console.log of renderAllTodos", toDoList);
  renderNewTodoItemButton(addItem, editItem);
  if (toDoList.length > 7) {
    console.log("todoList array is larger than 7, removing descriptive text");
    const siteFooterExplainer = document.getElementById("siteExplainerText");
    siteFooterExplainer ? siteFooterExplainer.remove() : null;
  }
  // todoItemsContainer.remove;
}
