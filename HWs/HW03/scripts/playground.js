// Part 2
const countDisplay = document.getElementById("count-display");
const subtractButton = document.getElementById("subtract");
const addButton = /* YOUR CODE HERE */




// Part 3:

let count = 0;

function increaseCount() {
  count += 1;
  countDisplay.textContent = count;
}
addButton.addEventListener("click", increaseCount);

// Add subtractButton's event listener, with an arrow function ( () => { function goes here} ):
/* YOUR CODE HERE */




// Part 5:

const taskName = document.getElementById("task-name");
const taskList = document.getElementById("tasks");
// Initialize the const submitButton, from the id "submit":
/* YOUR CODE HERE */
// Initialize the const clearButton, from the id "clear":
/* YOUR CODE HERE */




// Part 6:
submitButton.addEventListener("click", () => {
  if (taskName.value != "") {
      // Initialize a const variable named "task", and set it equal to a new li element. 
      /* YOUR CODE HERE */
      task.textContent = taskName.value; // Here you set the li element you created to have the text value in the input field!
      // Add this task to the end of taskList (this is the list you initialized earlier!).
      taskList./*YOUR CODE HERE*/
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
