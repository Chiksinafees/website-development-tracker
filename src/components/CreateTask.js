import React, { useState } from "react";

const CreateTask = ({ addTaskHandler, currentStatus, onClose }) => {
  const [task, setTask] = useState({
    taskName: "",
    taskState: currentStatus,
    taskDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleCreateTask = (e) => {
    e.preventDefault();

    if (!task.taskName.trim()) {
      alert("Task name cannot be empty.");
      return;
    }

    addTaskHandler(task);
    setTask({
      taskName: "",
      taskState: "todo",
      taskDate: "",
    });
    onClose();
  };

  return (
    <div className="modal-overlay block fixed inset-0 bg-gray-500 bg-opacity-50 z-50">
      <form onSubmit={handleCreateTask}>
        <div className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-full md:w-96 rounded-lg shadow-xl">
          <span
            className="close text-gray-600 hover:text-gray-800 absolute top-2 right-2 cursor-pointer text-2xl"
            onClick={onClose}
          >
            &times;
          </span>
          <h2 className="text-xl font-bold mb-4">Create a Task</h2>
          <hr />
          <div className="mb-4">
            <label
              htmlFor="taskName"
              className="block text-lg font-medium text-gray-900"
            >
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              value={task.taskName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="taskState"
              className="block text-lg font-medium text-gray-900"
            >
              Task Status
            </label>
            <select
              id="taskState"
              name="taskState"
              value={task.taskState}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400 focus:outline-none"
            >
              <option value="todo">Todo</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="taskDate"
              className="block text-lg font-medium text-gray-900"
            >
              Due Date
            </label>
            <input
              type="date"
              id="taskDate"
              name="taskDate"
              value={task.taskDate}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
