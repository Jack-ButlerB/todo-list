import "./styles.css";
import { renderTodoListSelectors, renderAllTodos } from "./render";

class TodoItem {
  constructor(id, title, description, dateCreatedString, list) {
    this.id = id;
    this.title = title;
    this.description = description;
    if (dateCreatedString) {
      this.dateCreated = new Date(dateCreatedString);
    } else {
      this.dateCreated = new Date();
    }
    this.list = list;
  }
}

function readStorage() {
  const todoList = JSON.parse(localStorage.getItem("storedTodoList"));
  const sortableTodoList = todoList.map(
    (todo) =>
      new TodoItem(
        todo.id,
        todo.title,
        todo.description,
        new Date(todo.dateCreated),
        todo.list
      )
  );
  const sortedTodoList = sortableTodoList.sort(
    (a, b) => a.dateCreated - b.dateCreated
  );
  "2025-07-18T09:15:19.695Z" - "2025-07-18T09:14:04.157Z";
  console.log("sorted todoList", sortedTodoList);
  return todoList;
}

function setStorage(todoList) {
  localStorage.setItem("storedTodoList", JSON.stringify(todoList));
  console.log("stringify todoList" + localStorage.getItem("storedTodoList"));
  console.log("populating storage");
}

function getNewId(todoList) {
  if (todoList.length === 0) {
    return 1;
  }

  const ids = todoList.map((e) => e.id);

  return Math.max(...ids) + 1;
}

function addItem(titleParam, descriptionParam, listParam) {
  const todoList = readStorage();
  const inputtedTodoItem = new TodoItem(
    getNewId(todoList),
    titleParam,
    descriptionParam,
    undefined,
    listParam
  );
  todoList.push(inputtedTodoItem);
  console.log("Add", todoList);
  setStorage(todoList);
  renderAllTodos(readStorage(), addItem, editItem, deleteItem);
}

function editItem(todoItem) {
  const todoList = readStorage();
  console.log("todoitem before edit", todoItem);
  // Other option is to splice and then re-insert into original place in array
  const updatedTodoList = todoList.filter(
    (element) => element.id !== todoItem.id
  );
  updatedTodoList.push(todoItem);
  setStorage(updatedTodoList);
  renderAllTodos(readStorage(), addItem, editItem, deleteItem);
}
function deleteItem(todoItem) {
  const todoList = readStorage();
  console.log("passed todoItem to delete", todoItem);
  console.dir(todoItem, { depth: null });
  console.log("when deleting todoList", readStorage());
  const todoItemIndex = todoList.findIndex((e) => e.id === todoItem.id);
  todoList.splice(todoItemIndex, 1);
  console.log("delete", todoList);
  setStorage(todoList);
  renderAllTodos(readStorage(), addItem, editItem, deleteItem);
}

const selectableTodoLists = ["Today", "Tomorrow"];

if (!localStorage.getItem("storedTodoList")) {
  setStorage([
    new TodoItem(
      0,
      "Wash clothes",
      "For Demo, pre-saved in application storage",
      undefined,
      "Today"
    ),
    new TodoItem(
      1,
      "Hang washing",
      "For Demo, pre-saved in application storage",
      undefined,
      "Tomorrow"
    ),
  ]);
}
renderTodoListSelectors(
  readStorage(),
  addItem,
  editItem,
  deleteItem,
  selectableTodoLists
);

renderAllTodos(readStorage(), addItem, editItem, deleteItem);
