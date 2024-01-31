

import React from 'react'
import './showTask.css'
const ShowTask = ({taskList , setTaskList}) => {
  
    // const tasks = [
    //     {id:10001,name:"Task A",time:"2:09:01 AM 9/14/2023"},
    //     {id:10001,name:"Task B",time:"2:09:01 AM 9/15/2023"},
    //     {id:10001,name:"Task C",time:"2:09:01 AM 9/16/2023"},
    //     {id:10001,name:"Task D",time:"2:09:01 AM 9/117/2023"},
    
    // ]

  return (
    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{taskList.length}</span>
            </div>
            <button className='clearAll'>clar All</button>
        </div>
        <ul>

            {taskList.map((task)=>(
            <li>
                <p>
                    <span className='name'>{task.name}</span>
                    <span className='time'>{task.time}</span>
                </p>
                <i className='bi bi-pencil-square' ></i>
                <i className='bi bi-trash'></i>
            </li>
            ))}

        </ul>

    </section>
  )
}

export default ShowTask
