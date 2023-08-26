import React, { useState } from "react";
import CreateTask from "./CreateTask";

const Header = ({ addTaskHandler }) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const openTaskModal = () => {
    setIsTaskModalOpen(true);
  };

  const closeTaskModal = () => {
    setIsTaskModalOpen(false);
  };

  return (
    <>
      <header className="bg-gray-200 text-white py-4 pl-16">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="bg-sky-600 text-white py-2 px-5 rounded-full  mr-2"
              onClick={openTaskModal}
            >
              + Create Task
            </button>
            <div className="h-10 bg-black w-px mx-4"></div>
            <div className="flex items-center">
              <input
                type="text"
                className=" border-gray-400 px-2 py-2 rounded-l-md"
                placeholder="Search your query"
              />
              <button className="bg-sky-600 text-white py-2 px-2 rounded-r-md">
                🔍
              </button>
            </div>
          </div>
        </div>
      </header>
      {isTaskModalOpen && (
        <CreateTask
          isOpen={isTaskModalOpen}
          onClose={closeTaskModal}
          addTaskHandler={addTaskHandler}
          currentStatus="todo"
        />
      )}
    </>
  );
};

export default Header;
