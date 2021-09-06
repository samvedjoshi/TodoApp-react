import React,{useState} from 'react'
import './todoapp.css';

export const TodoApp = () => {
    const [tasklist, setTasklist] = useState([]);
    const [task,setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const addTask = (e) => {
        if(task===""){
            return;
        }
        e.preventDefault();
        const newTask = {
            id: Math.floor(Math.random()*1000),
            text: task,
            completed: false
        }
    
        setTasklist([...tasklist,newTask])
        setTask("");
    }
    
    const handleDelete = (e,id)=>{
        e.preventDefault();
        const newList = tasklist.filter(task=>{
            return task.id !==id;
        })
        setTasklist(newList);
    }

    const handleCompleted = (e, id) =>{
        e.preventDefault();
        const newList = tasklist.map(task=>{
            if(task.id===id){
                task.completed = true
            }
            return task;
        })
        setTasklist(newList);
    }
    return (
        <div className="todo">
           <input type="text" id="text" name="text" placeholder="Type todo" onChange={e=> handleChange(e)} />
           <button onClick={e=>addTask(e)} className="add-btn">Add</button>

           {tasklist != [] ? 
           <ul>
              { tasklist.map(task => (
                   <li key={task.id} className={task.completed ? "crossText":"listitem"}>
                       {task.text}
                       <button onClick={e=>handleCompleted(e, task.id)} className="completed">Completed</button>
                       <button onClick={(e)=>handleDelete(e,task.id)} className="delete">Delete</button>
                   </li>
               ))}
           </ul>
       :null }
        </div>
    )
}

export default TodoApp;
