const DB_NAME = "tasks_db";
const DB_VERSION = 1;
const OBJECT_STORE_NAME = "tasks";

let db;

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
      console.error("IndexedDB error:", event.target.error);
      reject(event.target.error);
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
        db.createObjectStore(OBJECT_STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };
  });
};

export const addTaskToDB = (task) => {
  return new Promise(async (resolve, reject) => {
    const db = await openDB();
    const transaction = db.transaction([OBJECT_STORE_NAME], "readwrite");
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

    const request = objectStore.add(task);

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      console.error("Error adding task:", event.target.error);
      reject(event.target.error);
    };
  });
};

export const updateTaskInDB = (task) => {
  return new Promise(async (resolve, reject) => {
    const db = await openDB();
    const transaction = db.transaction([OBJECT_STORE_NAME], "readwrite");
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

    const request = objectStore.put(task);

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      console.error("Error updating task:", event.target.error);
      reject(event.target.error);
    };
  });
};

export const deleteTaskFromDB = (taskId) => {
  return new Promise(async (resolve, reject) => {
    const db = await openDB();
    const transaction = db.transaction([OBJECT_STORE_NAME], "readwrite");
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

    const request = objectStore.delete(taskId);

    request.onsuccess = (event) => {
      resolve();
    };

    request.onerror = (event) => {
      console.error("Error deleting task:", event.target.error);
      reject(event.target.error);
    };
  });
};

export const loadTasksFromDB = () => {
  return new Promise(async (resolve, reject) => {
    const db = await openDB();
    const transaction = db.transaction([OBJECT_STORE_NAME], "readonly");
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);

    const request = objectStore.getAll();

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      console.error("Error loading tasks:", event.target.error);
      reject(event.target.error);
    };
  });
};
