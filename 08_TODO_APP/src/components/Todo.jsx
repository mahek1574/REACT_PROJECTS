import { useState, useEffect } from "react";
import TodoInput from "./Todoinput";
import TodoItem from "./Todoitem";

function Todo() {
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (deleteIndex) => {
    const newTasks = tasks.filter((_, index) => index !== deleteIndex);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <br />
      <TodoInput onAdd={handleAddTask} />
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
}

export default Todo;
