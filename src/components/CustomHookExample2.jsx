import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObject = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObject]);
  };

  return (
    <>
      <form className='w-25' onSubmit={onSubmit}>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Taks
          </label>
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
}

export default CustomHookExample2;
