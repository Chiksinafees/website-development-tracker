import React, { useState } from "react";
import EditTask from "./EditTask";

const TaskAdded = ({ tasks, onTaskUpdate, onTaskDelete }) => {
  const [editTask, setEditTask] = useState(null);

  const handleEditTask = (task) => {
    setEditTask(task);
  };

  const handleCloseEdit = () => {
    setEditTask(null);
  };

  return (
    <div className="mt-5">
      <div className="items-center p-4 text-black">
        <span className="text-3xl font-serif">Website Development Tracker</span>
      </div>

      <div className="bg-gray-50 p-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* ToDo part */}
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="bg-green-500 p-2 text-white">
                <span className="text-lg font-semibold">Tasks To Do</span>
              </div>
              <ul className="p-4">
                {tasks
                  .filter((task) => task.taskState === "todo")
                  .map((task, index) => (
                    <li
                      className="mb-2 cursor-pointer"
                      key={index}
                      onClick={() => handleEditTask(task)}
                    >
                      {task.taskName}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Progress part */}
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="bg-yellow-500 p-2 text-white">
                <span className="text-lg font-semibold">In Progress</span>
              </div>
              <ul className="p-4">
                {tasks
                  .filter((task) => task.taskState === "inProgress")
                  .map((task, index) => (
                    <li
                      className="mb-2 cursor-pointer"
                      key={index}
                      onClick={() => handleEditTask(task)}
                    >
                      {task.taskName}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Done part*/}
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="bg-blue-500 p-2 text-white">
                <span className="text-lg font-semibold">Tasks Done</span>
              </div>
              <ul className="p-4">
                {tasks
                  .filter((task) => task.taskState === "done")
                  .map((task, index) => (
                    <li
                      className="mb-2 cursor-pointer"
                      key={index}
                      onClick={() => handleEditTask(task)}
                    >
                      {task.taskName}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {editTask && (
        <EditTask
          task={editTask}
          onSave={(updatedTask) => {
            onTaskUpdate(updatedTask);
            handleCloseEdit();
          }}
          onCancel={handleCloseEdit}
          onDelete={(deletedTask) => {
            onTaskDelete(deletedTask);
            handleCloseEdit();
          }}
        />
      )}
    </div>
  );
};

export default TaskAdded;
