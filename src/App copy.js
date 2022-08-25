import {useState, useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import About from './components/About';

import {BrowserRouter as Router, Route}from 'react-router-dom'



function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([ ])

  useEffect(() => {
      const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //Fetch Tasks
    const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`)
    const data = await res.json()
    return data
  }

//Fetch Tasks
  const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}


// Add a Task
  const addTask = async (task)=>{
      const res = await  fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
const data = await res.json()

setTasks([...tasks, data])
  // const id = Math.floor(Math.random() * 10000 + 1)
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])
}

// delete Task
const deleteTask = async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })

  setTasks(tasks.filter((task) =>
  task.id !== id
  ))
}
  // console.log('delete', id)

  //toggle section

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder }
    

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method:'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask),
  })

  const data= await res.json()

    setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder:
    data.reminder} : task
    ))
    // console.log(id)
  }

  return (
    // router bracket the all route
   <Router>
  <div className="container">
    {/* header */}
    <Header onAdd={() => setShowAddTask(!showAddTask)}
    showAdd={showAddTask}
    />

{/* home page start */}
    <Route 
    path='/'
    exact
    
    render={(props) =>(
    <>
    {/* compoent start */}
    {/* add task section */}
    { showAddTask && <AddTask onAdd={addTask} />}
   {/* task's length decide if show item */}
    {tasks.length > 0 ? (<Tasks tasks={tasks} 
    onDelete={deleteTask} 
    onToggle={toggleReminder}/>) : ("No task to show")}
  {/* compoent end */}
    </>
    
    )}
    />
{/* homepage end */}

    {/* about page */}
    <Route path='/about' component={About} />
    {/* footer section */}
    <Footer />

    </div>
    </Router>
    // router end
  )
 }
  


export default App;
