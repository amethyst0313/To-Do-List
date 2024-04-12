import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTasks() {
    const newTasks = document.getElementById("inputTask").value;
    document.getElementById("inputTask").value = "";
    if (newTasks.trim() !== "") {
      setTasks((task) => [...task, newTasks]);
      setNewTask("");
    }
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function removeTasks(index) {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
  }

  return (
    <div>
      <h1>To-Do-List</h1>
      <div className="inputTask-container">
        <input type="text" placeholder="Enter a task . . ." id="inputTask" />
        <button id="addBtn" onClick={addTasks}>
          Add
        </button>
      </div>

      <div className="taskList-container">
        <div className="taskList">
          <div className="task">
            <ol>
              {tasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <div className="taskBtn">
                    <button id="moveUpBtn" onClick={() => moveTaskUp(index)}>
                      <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                    <button
                      id="moveDownBtn"
                      onClick={() => moveTaskDown(index)}
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                    <button id="removeBtn" onClick={() => removeTasks(index)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
