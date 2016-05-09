//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); // incomplete-tasks
var completedTaskHolder = document.getElementById("completed-tasks"); // completed-tasks


//New Task List Item
var createNewTaskElement = function(taskString){
  var listItem = document.createElement("li");
  //input checkbox
  var checkBox = document.createElement("input"); //checkbox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input");
  //button.edit
  var editButton = document.createElement("button");
  //button.delete
  var deleteButton = document.createElement("button");
  //Each of these elements needs modifying
  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  //Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}


//Add a new task
var addTask = function(){
  console.log("Add task...")
  var listItem = createNewTaskElement(taskInput.value);
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";
}

//Edit existing task
function editTask(){
  console.log("Edit task...")
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  if(containsClass){
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }
  listItem.classList.toggle("editMode");
}

//Delete an existing task
function deleteTask(){
  console.log("Delete task...")
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
}

//Mark a task as complete
function taskCompleted(){
  console.log("Task complete...")
  var listItem = this.parentNode;
  completedTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

//Mark a task as Incomplete
function taskIncomplete(){
  console.log("Task Incomplete...")
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}


var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
  console.log("Bind list item events");
  // select list item's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  // bind editTask to edit button
  editButton.onclick = editTask;
  // bind deleteTask to delete button
  deleteButton.onclick = deleteTask;
  // bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function(){
  console.log("Ajax Request");
}

//Set the click handler to the addTask function
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//Cycle over incompleteTaskHolder ul list items
for(var i = 0; i < incompleteTaskHolder.children.length; i++){
  // bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

//Cycle over completedTaskHolder ul list items
for(var i = 0; i < completedTaskHolder.children.length; i++){
  // bind events to list item's children (taskIncomplete)
  bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}


