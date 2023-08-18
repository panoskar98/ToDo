import './App.css';
import { useState } from 'react';
import Tasks from './components/Tasks';

function App() {
    const [tasks, setTasks] = useState([
        { text: 'Go to gym', checked: true },
        { text: 'Drink coffee', checked: false },
    ])

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTask = {text: event.target[0].value, checked: false}
        setTasks([...tasks, newTask])
        event.target[0].value = ''
        // TODO Add a new task to the tasks array
        // HINT: Spread the current tasks array into a new array, add this new task on there
        // then update the state of tasks
    }

    const handleDelete = (index) => {
        // TODO Using the provided index, remove the task from the array and update
        // state to re-render the component
        // HINT: .filter()
        const temp = []
        tasks.map((task) => {
          if (tasks.indexOf(task) !== index) {
            temp.push(task)
          }
        })
        setTasks(temp)
    }

    const handleUpdate = (index, checked) => {
        // TODO Find the task by the provided index
        // Change the checked property on the task
        // Update the state array to re-render the component
        // HINT: .map() or access by index
        const temp = []
        tasks.map((task) => {
          if (tasks.indexOf(task) === index) {
            task.checked = checked
          }
          temp.push(task)
        })
        setTasks(temp)
    }

  return (
    <div className='app'>
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" />
                <button type="submit">add task</button>
            </form>

            <Tasks tasks={tasks} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
        </main>
    </div>
  );
}

export default App;