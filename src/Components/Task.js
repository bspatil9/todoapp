import React from 'react'

function Task({title,description,deletefun,index}) {
  return (
    <div className='task'>
        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>
        <button onClick={()=>deletefun(index)}>-</button>
    </div>
  )
}

export default Task