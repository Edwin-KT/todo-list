export default function addNewTaskDialog() {
  const dialog = document.getElementById("new-task-dialog");
  dialog.innerHTML = "";
  const dialogForm = document.createElement("form");
  dialogForm.id = "new-task-form";

  const titlePair = document.createElement("div");
  titlePair.innerHTML = `<label for="title">Title:</label>
          <input type="text" id="title" name="title" required />`;

  const descriptionPair = document.createElement("div");
  descriptionPair.innerHTML = `<label for="description">Description:</label>
          <input type="text" id="description" name="description" required />`;

  const saveTaskBtn = document.createElement("button");
  saveTaskBtn.setAttribute("type", "submit");
  saveTaskBtn.id = "save-task-btn";

  dialogForm.append(titlePair, descriptionPair, saveTaskBtn);

  dialog.append(dialogForm);
}
