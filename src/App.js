import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import TaskAdded from "./components/TaskAdded";
import CreateTask from "./components/CreateTask";
import Dexie from "dexie";
import Footer from "./components/Footer";

function App() {
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const toggleCreateTaskModal = () => {
    setIsCreateTaskModalOpen(!isCreateTaskModalOpen);
  };

  const db = new Dexie("TaskDB");
  db.version(1).stores({ tasks: "++id,taskName,taskState,taskDate" });

  const addTaskToDB = (newTask) => {
    db.tasks.add(newTask).then(() => {
      console.log("Task added in IndexedDB");
      retrieveTasksFromDB();
    });
  };

  const retrieveTasksFromDB = () => {
    db.tasks.toArray().then((tasks) => {
      setTasks(tasks);
    });
  };

  useEffect(() => {
    retrieveTasksFromDB();
  }, []);

  const handleTaskUpdate = (updatedTask) => {
    db.tasks.update(updatedTask.id, updatedTask).then(() => {
      console.log("Task updated in IndexedDB");
      retrieveTasksFromDB();
    });
  };

  const handleTaskDelete = (deletedTask) => {
    db.tasks.delete(deletedTask.id).then(() => {
      console.log("Task deleted from IndexedDB");
      retrieveTasksFromDB();
    });
  };

  return (
    <div className="App">
      <Header addTaskHandler={addTaskToDB} />
      <SideNav />
      {isCreateTaskModalOpen && (
        <CreateTask
          isOpen={isCreateTaskModalOpen}
          onClose={toggleCreateTaskModal}
          addTaskHandler={addTaskToDB}
          currentStatus="todo"
        />
      )}
      <div className="ml-32">
        <TaskAdded
          tasks={tasks}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelete={handleTaskDelete}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
