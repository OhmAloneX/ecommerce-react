import { useState } from "react";

export default function App() {
  const a = 0;
  const [count, setCount] = useState(0);
  const students = ["Anne ", " Bob", " Charlie"];


  const [task, setTasks] = useState([]); //Store Task
  const [input, setInput] = useState(""); //Store Input Value

  const addTask = () => {
    if (input.trim() === "") return; //Prevent adding empty tasks
    setTasks([...task, input]); // Add new task to the list
    setInput(""); //Clear input field
  }
  return (
    <>
      <h2>{a > 5 ? "Welcome" : "Please Login."}</h2>
      <p >Count: {count}</p>
      <button onClick = {() => setCount(count + 1)} > Increase </button>
      <button onClick = {() => setCount(count - 1)} > decrease </button>
      <button onClick = {() => setCount(count => 0)} > Reset </button>
    <ul>
      {students.map((student, index) =>(
        <li key={index}>{students}</li>
      ))}
    </ul>
    </>
  );
}

