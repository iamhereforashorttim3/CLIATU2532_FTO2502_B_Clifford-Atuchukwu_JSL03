//Creating an array for the initial tasks
const taskList = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

//the for loop is meant to run 3 times to represent the amount of tasks needed
for (let i = 0; i < 3; i++) {
  const id = taskList.length + 1; //This creates the unique ID for each task as the number increases by 1 through each loop
  const newTitle = prompt(`Enter the title of task ${id}`);
  const newDesc = prompt(`Enter the description of task ${id}`);
  let newStatus = prompt(`Enter the progress of task ${id}`).toLowerCase(); //The toLowerCase turns any input into lowercase be it upper, lower or a mix of the two

  while (
    newStatus !== "todo" &&
    newStatus !== "doing" &&
    newStatus !== "done"
  ) {
    //This is to make sure that the input is valid
    alert("Invalid status. Please enter 'todo' 'doing', or 'done'.");
    newStatus = prompt(`Enter the progression for task ${id}`).toLowerCase();
  }

  //Making the task object and pushing it into the array
  const task = {
    id: id,
    title: newTitle,
    description: newDesc,
    status: newStatus,
  };
  taskList.push(task); //Adding a new task to the taskList
}
//This is to tell the user that they've reached the max number of new entries
alert("There are enough tasks on your board, please check them in the console");

console.log("All Tasks:", taskList);

const completedTasks = taskList.filter((task) => task.status === "done");
console.log("Completed Tasks", completedTasks);
