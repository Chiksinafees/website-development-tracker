import React, { useState } from "react";

const EditTask = ({ task, onSave, onCancel, onDelete }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div className="modal-overlay block fixed inset-0 bg-gray-500 bg-opacity-50 z-50">
      <form>
        <div className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-full md:w-96 rounded-lg shadow-xl">
          <span
            className="close text-gray-600 hover:text-gray-800 absolute top-2 right-2 cursor-pointer text-2xl"
            onClick={onCancel}
          >
            &times;
          </span>
          <h2 className="text-xl font-bold mb-4">Edit Task</h2>
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
              value={editedTask.taskName}
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
              value={editedTask.taskState}
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
              value={editedTask.taskDate}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none w-full"
          >
            Update Task
          </button>
          <button
            type="button"
            onClick={() => onDelete(task)}
            className="bg-red-400 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none w-full mt-2"
          >
            Delete Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
