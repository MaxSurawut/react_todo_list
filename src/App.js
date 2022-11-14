import React from 'react';
import './app.css'
import { ReactComponent as Sunicon } from './images/icon-sun.svg'
import { useRef, useState, useEffect } from 'react'


function App() {
  const tasks = useRef()
  const [job, SetJob] = useState()

  const addTask = (e)=>{
    e.preventDefault()
    console.log(tasks.current.value)
  }

  return (
    <main className="toDoList">
      <section className='listBox'>
        <div className='headline'>
          <h1>TODO</h1>
          <div><Sunicon/></div>
        </div>
        <form className='form-control' onSubmit={addTask}>
          <label className='marker'>
            <input type='checkbox' onClick={addTask} />
            <span className='checkmark' ></span>
          </label>
          <input type='text'  ref={tasks} name='job' placeholder='Create a new todo..' />
        </form>
        <div id='allTasks'></div>
      </section>
    </main>
  )
}

export default App;
