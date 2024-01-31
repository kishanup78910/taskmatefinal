import { useEffect, useState } from 'react';
import './App.css';
import Addtask from './component/Addtask';
import Header from './component/Header';
import ShowTask from './component/ShowTask';


function App() {

  const [taskList,setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) ||[]);
  const [task,setTask] = useState({});

   
   console.log(JSON.parse(localStorage.getItem(taskList)));


  useEffect(()=>{
    
    localStorage.setItem("taskList",JSON.stringify(taskList))
  },[taskList])

  return (
    <div className="App">
    
      <Header/>
      <Addtask
       taskList={taskList} setTaskList={setTaskList} task={task} setTask ={setTask}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask ={setTask}/>
    </div>
  );
}

export default App;
