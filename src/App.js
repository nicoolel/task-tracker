// import React from "react"
import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

const App = () => {

  // global state for AddTasks button
  const [showAddTask, setShowAddTask] = useState(false)

  // global state setTasks
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Call mom",
        reminder: true,
        day: "May 26 at 3:00PM"
    },
    {
        id: 2,
        text: "Facetime Jerry",
        reminder: true,
        day: "May 27 at 2:00PM"
    },
    {
        id: 3,
        text: "Unpack from trip",
        reminder: false,
        day: "May 27 at 5:00PM"
    }
  ])

  // add task function
  const addTask = (taskDateReminder) => {
    // math floor rounds down
    const id = Math.floor(Math.random() * 10000) + 1

    console.log(id)

    const newTask = {id, ...taskDateReminder}

    // take in previous tasks and add new one to the end
    setTasks([...tasks, newTask])
  }

  // delete task function
  const deleteTask = (id) => {
    // console.log('deleted', id)
    // if the task is not equal to the ID that we have, that's what we want cuz we're deleting it
    // filtering out the ID that doesn't match
    setTasks(tasks.filter(soloTask => soloTask.id !== id))
  }

  // toggle reminder
  const reminder = (id) => {
    // console.log('reminded!', id)
    // on double click, map thru the items and set the clicked on task the reverse reminder
    setTasks(tasks.map(soloTask => 
      soloTask.id === id ? {...soloTask, reminder: !soloTask.reminder } 
      :soloTask))
  }

  return (
    <div className="container">
      <Header
        title=""
        onAddTask = {() => setShowAddTask(!showAddTask)}
        showAdd = {showAddTask} />
    {/* if showAddTask is true, THEN render AddTask component */}
     { showAddTask && <AddTask 
        onAdd = {addTask} />}
    {/* if there are tasks, render the Task component otherwise display no tasks */}
      { tasks.length > 0 ? ( 
        <Tasks
          // bringing in tasks from task array
          eachTask= {tasks} 
          onDelete = {deleteTask} 
          onToggle = {reminder}/>
        )
          : "No tasks!"}
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class!</h1>
//   }
// }

export default App;
