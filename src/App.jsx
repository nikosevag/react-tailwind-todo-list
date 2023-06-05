import { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks || [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newTask) {
    if (newTask.trim() === '') {
      return;
    }
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function toggleCompleted(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="wrapper p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTask = e.target.elements.task.value;
          addTask(newTask);
          e.target.reset();
        }}>
        <input
          type="text"
          placeholder="Add a task"
          name="task"
          className="border border-gray-400 p-2 rounded-lg mr-2"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Add
        </button>
      </form>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
              className="mr-2"
            />
            <span className={`${task.completed ? 'line-through' : ''} flex-1`}>
              {task.text}
            </span>
            <button
              className="bg-red-500 text-white py-1 px-2 rounded-lg"
              onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
