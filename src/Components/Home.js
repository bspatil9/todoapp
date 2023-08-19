
import React,{useEffect, useState} from 'react'
import Task from './Task'

function Home() {
    const initialarray=localStorage.getItem("tasks")?
    JSON.parse(localStorage.getItem("tasks")):[];

    const [task, settask] = useState(initialarray)
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")

    const submitHandler=(e)=>{
        e.preventDefault()
        settask([...task, {title,description}])

        settitle("")
        setdescription("")

        
    }
    useEffect(() => {
        localStorage.setItem("tasks",JSON.stringify(task))
    }, [task])
    
    const deletetask=(index)=>{
        const filteredarr=task.filter((val,i)=>{
            return i !==index;
        })
        settask(filteredarr);
    }
  return (
    <>
    <div className='container'>
    <h1>Daily Tasks</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)}/>
            <textarea placeholder='Description' value={description} onChange={(e)=>setdescription(e.target.value)}></textarea>
            <button type="submit">Add</button>
        </form>
        {task.map((item,index)=>(
            <Task key={index} title={item.title} description={item.description}
                deletefun={deletetask} index={index}
            />
        ))}
    </div>

    </>
  )
}

export default Home