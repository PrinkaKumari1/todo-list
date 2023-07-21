import React, { useEffect, useState } from "react";
import CreateTask from "../modal/CreateTask";
import TheCard from "./TheCard";

export const TodoList = ({ todos }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggleModal = () => {
    setModalOpen((prevOpen) => !prevOpen);
  };

  const deleteTask = (taskToDelete) => {
    let tempList = taskList.filter((task) => task.id !== taskToDelete.id);
    setTaskList(tempList);
    localStorage.setItem("taskList", JSON.stringify(tempList));
  };

  const saveTask = (taskObj) => {
    localStorage.setItem("taskList", JSON.stringify([...taskList, taskObj]));
    setTaskList([...taskList, taskObj]);
    setModalOpen(false);
  };

  useEffect(() => {
    if (taskList.length === 0) {
      setTaskList(todos);
    }
  }, [taskList, todos]);

  return (
    <div>
      <div className="header  p-4 ">
        <h3 className="rounded-md mb-6 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Todo List
        </h3>
        <button className=" px-4 py-2 rounded-md flex" style={{'marginInline':'auto'}} onClick={toggleModal}>
          <svg  
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
               Create Task
        </button>
      </div>
      <div className="card-container">
        {taskList.map((todo) => (
          <TheCard
            key={todo.id}
            taskObj={todo}
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
            deleteTask={deleteTask}
          />
        ))}

        <CreateTask open={modalOpen} onClose={toggleModal} onSave={saveTask} />
      </div>
    </div>
  );
};
