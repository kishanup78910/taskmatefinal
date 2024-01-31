import "./addTask.css";
import React from "react";

const Addtask = ({ taskList, setTaskList, task,setTask }) => {
  const handleSumit = (e) => {
    e.preventDefault();
   
    if(task.id){

      const date = new Date();
      const updateTaskList = taskList.map((todo)=>(
        todo.id===task.id?{id:task.id,name:e.target.task.value,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:{id:todo.id,name:todo.name,time:todo.time}
      ))
      setTaskList(updateTaskList);
      setTask({});

    }else{             
      const date = new Date();
      console.log(e.target.task.value)
      console.log(date.getTime())
  
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList,newTask]);
      setTask({});

    }
  
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSumit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="Add Task"
          maxLength="25"
          onChange={e=>setTask({...task,name:e.target.value})}

        />
        <button type="submit">{task.id?"Update":"Add"}</button>
      </form>
    </section>
  );
};

export default Addtask;
