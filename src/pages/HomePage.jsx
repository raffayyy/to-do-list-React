import React from "react";
import AddTaskComponent from "../components/Addtask";
import DisplayTask from "../components/Displaytask";
import Pane from "../components/Pane";
import { useState } from "react";

function HomePage() {
  //States
  const [task, setTask] = useState([]);
  const [display, setDisplay] = useState(false);
  const [checked, setChecked] = useState(null);
  const [title, setTitle] = useState("");

  //Handlers
  const handleSubmit = (val) => {
    setTask((prevTask) => {
      return [...prevTask, val];
    });
  };
  const handleClear = () => {
    setTask([]);
    setDisplay(false);
    setChecked(null);
    setTitle("");
  };

  /**
   * Toggles the state of the display.
   *
   * This function flips the current boolean value of the display state.
   * If the display is currently true, it will be set to false, and vice versa.
   *
   * @function handleDisplay
   * @returns {void} This function does not return a value.
   */
  const handleDisplay = () => {
    setDisplay(!display);
  };
  /**
   * Updates the title of a specific task and resets related states.
   *
   * This function maps over the existing tasks, updating the title of the task
   * that matches the checked task ID with the provided value. It then updates
   * the task state, resets the checked state to null, and sets the display state to false.
   *
   * @function handleSave
   * @param {string} val - The new title to be set for the task.
   * @returns {void} This function does not return a value.
   */
  const handleSave = (val) => {
    const updatedTask = task.map((task) =>
      task.id === checked ? { ...task, title: val } : task,
    );
    setTask(updatedTask);
    setChecked(null);
    setDisplay(false);
  };
  const handleCompleted = () => {
    const updatedTask = task.map((task) =>
      task.id === checked ? { ...task, completed: true } : task,
    );
    setTask(updatedTask);
    setChecked(null);
    setDisplay(false);
  };

  const handleChecked = (id) => {
    setChecked(id);
  };
  const handleEdit = (id) => {
    if (id) {
      setChecked(id);
      setDisplay(true);
      setTitle(task.find((task) => task.id === id).title);
    }
  };
  const handleDeleted = (id) => {
    const updatedTask = task.filter((task) => task.id !== id);
    setTask(updatedTask);
    setChecked(null);
    setDisplay(false);
  };

  return (
    <div className="body flex flex-col items-center justify-center">
      <AddTaskComponent
        handleSubmit={handleSubmit}
        nextIndex={task.length + 1}
        handleClear={handleClear}
      />
      <Pane
        display={display}
        handleDisplay={handleDisplay}
        title={title}
        handleSave={handleSave}
        handleCompleted={handleCompleted}
      />
      <DisplayTask
        tasks={task}
        handleDisplay={handleDisplay}
        handleEdit={handleEdit}
        handleDeleted={handleDeleted}
        checked={checked}
        handleChecked={handleChecked}
      />
    </div>
  );
}

export default HomePage;
