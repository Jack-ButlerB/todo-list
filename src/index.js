import "./styles.css";
import { createItemModal } from "./render";

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

const FirstTodoItem = new TodoItem(
  "Buy shoes",
  "I am hoping to buy shoes",
  "01/05/2025"
);

console.log(FirstTodoItem);

createItemModal();
