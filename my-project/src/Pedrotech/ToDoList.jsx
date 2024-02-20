import React from "react"
// import "./index.css";
import styles from "../Sankalpa.module.css"
import { useState } from "react"

const ToDoList = ()=>{
    const [toDoList, setToDoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (event) =>{
        setNewTask(event.target.value);
    }

    let addTask = () =>{
        let task ={
            id : toDoList.length === 0 ? 1 : toDoList[toDoList.length -1].id + 1,
            taskName : newTask,
            completed : false
        }
        const newToDoList = [...toDoList, task]
        setToDoList(newToDoList);
    }

    const deleteTask = (id)=>{
        setToDoList(toDoList.filter((task) => task.id !== id))  
    
    }
    
    const completedTask = (id) =>{
        setToDoList(toDoList.map((task)=>{
            if (task.id === id) {
                return {...task, completed : !false}
            } else {
                return task
            }
        }))
    }
    
    return(
        <div className={styles.sankalpa}>
            <div className={styles.addtask}>
                <input className={styles.type} onChange={handleChange} type="text" value={newTask}/>
                <button className={styles.addbtn} onClick={addTask}>Add Task</button>
            </div>
            <div className={styles.talako}>
                <p>
                    {toDoList.map((task, i) =>(
                        <div key={i}>
                            <p className={styles.listed} style={{backgroundColor : task.completed ? "green" : "black"}} >{task.taskName}</p>
                            <p className={styles.btns}>
                                <button className={styles.btn1} onClick={()=>completedTask(task.id)} >Complete</button>
                                <button className={styles.btn} onClick={()=>deleteTask(task.id)}>
                                    X
                                </button>
                            </p>    
                        </div>
                    ))} 
                </p>   
            </div>
        </div>
    )
}

export default ToDoList