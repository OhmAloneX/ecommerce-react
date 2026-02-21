import { useState } from "react";
import "./css/todolist.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const reorder = (from, to) => {
    const newTasks = [...tasks];
    const moved = newTasks.splice(from, 1)[0];
    newTasks.splice(to, 0, moved);
    setTasks(newTasks);
  };

  return (
    <div className="App-link">
      <h2 className="title">Sortable To-Do List</h2>

      <div className="input-row">
        <input
          value={input}
          placeholder="Enter a task"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask}>Add</button>

      </div>

      <ul>
        {tasks.map((task, i) => (
          <li
            key={i}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => reorder(e.dataTransfer.getData("text"), i)}
          >
            <span
              draggable
              onDragStart={(e) => e.dataTransfer.setData("text", i)}
              onClick={() => toggleDone(i)}
              className={task.done ? "completed" : ""}
            >
              {task.text}
            </span>
            
            <button onClick={() => deleteTask(i)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;