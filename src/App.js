import { useState } from 'react';
import './App.css';
import Addtask from './component/Addtask';
import Header from './component/Header';
import ShowTask from './component/ShowTask';


function App() {

  const [taskList,setTaskList] = useState([]);
  const [task,setTask] = useState({});


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
