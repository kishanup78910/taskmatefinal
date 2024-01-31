import { useState } from 'react';
import './App.css';
import Addtask from './component/Addtask';
import Header from './component/Header';
import ShowTask from './component/ShowTask';


function App() {

  const [tasklist,setTaskList] = useState([]);
  return (
    <div className="App">
      <Header/>
      <Addtask tasklist={tasklist} setTaskList={setTaskList}/>
      <ShowTask tasklist={tasklist} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
