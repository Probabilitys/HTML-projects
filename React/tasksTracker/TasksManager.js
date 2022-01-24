import React, { useState, useEffect } from 'react';
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask';
import "./index.css"

const TasksManager = () => {

    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    // Fetch data
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

    // Fetch a task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    // Add Task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })

        const data = await res.json()

        setTasks([...tasks, data])

        // const id = Math.floor(Math.random() * 1000) + 1
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`,
        {
            method: 'DELETE'
        })    

        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updatedTask = {...taskToToggle,
        reminder: !taskToToggle.reminder}

        const res = await fetch(`http://localhost:5000/tasks/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        })

        const data = await res.json()
        
        setTasks(
            tasks.map((task) => 
            task.id === id ? {...task, reminder: data.reminder} : task
        ))
    }


    return (
        <div className='container'>
            <Header showAddTask={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length!==0 ? 
            (<Tasks tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder}
            />) : <h3>No tasks</h3>
            }
            
        </div>
    )
}

export default TasksManager