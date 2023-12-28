import { useState } from "react"

const Todo = () => {
    const [todo, setTodo]=useState([]);
    const[initialValuee, setInitialValue]=useState('');
    //event function
    const handleInputChange=e=>{
        setInitialValue(e.target.value)
    }
    //add task function
    const addTask=()=>{
        if(initialValuee.trim () !== ''){
            const newTask={text:initialValuee, completed:false}
            setTodo([...todo, newTask])
            setInitialValue('')
        }
    }
    //function to check if a task is complete or not
    const completedTask=index=>{
        const updatedTask=[...todo];
        updatedTask[index].completed =!updatedTask[index].completed;
        setTodo(updatedTask)
    }
    //removing a task
    const removeTask=(index)=>{
        const updatedTask=todo.filter((_, i)=>i !== index)
        setTodo(updatedTask)
    }
  return (
    <div >
      <input 
      type="text"
      value={initialValuee}
      onChange={handleInputChange}
      placeholder="add a new task"/>
      <button onClick={
      addTask
    }>Add a task</button>
    <ul>
    {todo.map((todos, index)=>(
        <li key={index}>
            <span style=
            {{textDecoration:
            todo.completed ? 'line-through':'none'
            }}
            onClick={()=>
            completedTask(index)
            }
            >
            </span>
            {todo.text}
            <button onClick={()=>
    removeTask(index)}>Delete Task</button>
        </li>
        
    ))}
    </ul>
    
    </div>
  )
}

export default Todo
