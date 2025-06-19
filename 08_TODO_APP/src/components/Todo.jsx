import { useState } from "react";
import TodoInput from "./Todoinput";
import TodoItem from "./Todoitem";

function Todo() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <br />
      <TodoInput onAdd={handleAddTask} />
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} />
      ))}
    </div>
  );
}

export default Todo;