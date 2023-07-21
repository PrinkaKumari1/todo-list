import React, {  useState } from "react";


export default function TheCard({ title, id, completed, deleteTask, taskObj }) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const handleDelete = () => {
    deleteTask(taskObj);
  };

  const handleComplete = () => {
    setIsCompleted(!isCompleted);

  };

  return (
    <div className="cards p-6  border border-gray-200 rounded-lg shadow hover:border-green hover:border-2 ">
      <div className="flex flex-col text-start">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          Task {id}
        </h5>
        <p className="font-normal font-bol text-lg ">{title}</p>
      </div>
      <div>
        <input
          type="radio"
          className="mr-3 cursor-pointer text-peach hover:text-green focus:ring-green focus:text-peach border border-green"
          style={{ outline: "none"}}
          checked={isCompleted}
          onChange={handleComplete}
        />
        <div>
          <button
            className="relative top-[50px]  right-[5px] cursor-pointer text-green hover:text-peach"
            style={{ border: "none", outline: "none"}}
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
