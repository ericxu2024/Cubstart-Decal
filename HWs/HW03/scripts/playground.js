// Part 2
const countDisplay = document.getElementById("count-display");
const subtractButton = document.getElementById("subtract");
const addButton = document.getElementById("add");




// Part 3:

let count = 0;

function increaseCount() {
  count += 1;
  countDisplay.textContent = count;
}
addButton.addEventListener("click", increaseCount);

// Add subtractButton's event listener, with an arrow function ( () => { function goes here} ):
subtractButton.addEventListener("click", () => {
  count -= 1;
  countDisplay.textContent = count;
});




// Part 5:

const taskName = document.getElementById("task-name");
const taskList = document.getElementById("tasks");
// Initialize the const submitButton, from the id "submit":
const submitButton = document.getElementById("submit");
// Initialize the const clearButton, from the id "clear":
const clearButton = document.getElementById("clear");




// Part 6:
submitButton.addEventListener("click", () => {
  if (taskName.value != "") {
      // Initialize a const variable named "task", and set it equal to a new li element. 
      const task = document.createElement('li');
      task.textContent = taskName.value; // Here you set the li element you created to have the text value in the input field!
      // Add this task to the end of taskList (this is the list you initialized earlier!).
      taskList.appendChild(task)
  }
});

clearButton.addEventListener("click", () => {
  taskList.replaceChildren();
  taskName.value = "";
});

taskName.addEventListener("input", () => {
  if (taskName.value == "Cal Hacks") {
    countDisplay.style.color = "steelblue";
  }
});
