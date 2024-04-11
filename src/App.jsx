import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/todosSlice';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const newTask = { id: tasks.length + 1, text: 'New Task' };
    dispatch(addTask(newTask));
  };

  const handleDeleteTask = taskId => {
    dispatch(deleteTask(taskId));
  };

  console.log(tasks);

  return (
    <div>
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar Tarea</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
