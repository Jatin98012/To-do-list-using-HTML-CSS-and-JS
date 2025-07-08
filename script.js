function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const tableBody = document.getElementById("taskTableBody");

  const row = document.createElement("tr");

  const taskCell = document.createElement("td");
  taskCell.innerText = task;

  const statusCell = document.createElement("td");
  const status = document.createElement("span");
  status.innerText = "pending";
  status.classList.add("status", "pending");
  status.onclick = function () {
    if (status.innerText === "pending") {
      status.innerText = "Completed";
      status.classList.remove("pending");
      status.classList.add("completed");
    } else {
      status.innerText = "pending";
      status.classList.remove("completed");
      status.classList.add("pending");
    }
  };
  statusCell.appendChild(status);

  const deleteCell = document.createElement("td");
  deleteCell.innerHTML = "🗑️";
  deleteCell.classList.add("delete-btn");
  deleteCell.onclick = function () {
    row.remove();
  };

  row.appendChild(taskCell);
  row.appendChild(statusCell);
  row.appendChild(deleteCell);

  tableBody.appendChild(row);
  input.value = "";
}
