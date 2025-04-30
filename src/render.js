const body = document.querySelector("body");
export function createItemModal() {
  const createItemDialog = document.createElement("dialog");
  createItemDialog.setAttribute("class", "todoItemContainer");

  body.appendChild(createItemDialog);
  const dialogForm = document.createElement("form");
  createItemDialog.appendChild(dialogForm);

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
    // detailInput.setAttribute("name", title);
    // detailInput.setAttribute("type", text);
    detailDiv.appendChild(detailInput);
  }
  const sumbitbutton = document.createElement("button");
  sumbitbutton.setAttribute("type", "submit");
  sumbitbutton.textContent = "Add Todo Item";
  dialogForm.appendChild(sumbitbutton);

  createItemDialog.showModal();
  // changing for github
}
