const initialTasks = [
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

for (let i = 0; i < 3; i++) {
  const id = initialTasks.length + 1;
  const newTitle = prompt(`Enter the title of task ${id}`);
  const newDesc = prompt(`Enter the description of task ${id}`);
  let newProg = prompt(`Enter the progress of task ${id}`).toLowerCase();

  while (newProg !== "todo" && newProg !== "doing" && newProg !== "done") {
    alert("Invalid status. Please enter 'todo' 'doing', or 'done'.");
    newProg = prompt(`Enter the progression for task ${id}`).toLowerCase();
  }
  const task = {
    id: id,
    title: newTitle,
    description: newDesc,
    status: newProg,
  };
  initialTasks.push(task);
}

alert("There are enough tasks on your board, please check them in the console");

console.log("All Tasks:", initialTasks);

const completedTasks = initialTasks.filter((task) => task.status === "done");
console.log("Completed Tasks", completedTasks);
