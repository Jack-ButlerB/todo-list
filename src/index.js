import "./styles.css";
import {
  createItemModal,
  renderTodoItem,
  renderTodoItem2,
  renderNewTodoItemButton,
  renderAllTodos,
} from "./render";

class TodoItem {
  constructor(id, title, description, dueDate, priority, notes) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

// hard coded toDos

const FirstTodoItem = new TodoItem(
  1,
  "Buy shoes",
  "I am hoping to buy shoes",
  "01/05/2025",
  "urgent",
  "N/A"
);
const secondTodoItem = new TodoItem(
  1,
  "Buy shoes",
  "I am hoping to buy shoes",
  "01/05/2025",
  "urgent",
  "N/A"
);

const toDoList = [FirstTodoItem, secondTodoItem];

console.log(FirstTodoItem);

function addToArray(
  titleParam,
  descriptionParam,
  dueDateParam,
  priorityParam,
  notesParam
) {
  const inputtedTodoItem = new TodoItem(
    toDoList.length + 1,
    titleParam,
    descriptionParam,
    dueDateParam,
    priorityParam,
    notesParam
  );
  toDoList.push(inputtedTodoItem);
  console.log(toDoList);
}
// createItemModal();
// renderTodoItem();
// renderTodoItem2(FirstTodoItem);
// renderTodoItem2(secondTodoItem);
renderAllTodos(toDoList, addToArray, toDoList);

// renderNewTodoItemButton(addToArray, toDoList);
