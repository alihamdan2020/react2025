import { useState } from 'react'
import todos from './data/data'
import JobItem from './JobItem/JobItem'


function App() {
const[todoState,setToDoState]=useState(todos)  

  function removeItem(a){
    let newList=todoState.filter((x)=>{
      return x.id!=a
    })
    setToDoState(newList)
  }

  function updateList(a){
    let newJobName=prompt("enter your modified job")
    let newList=todoState.map((x)=>{
      if(x.id==a)
      return {...x,job:newJobName}

      return x
    })
  
    // console.log(newList)
    setToDoState(newList)
  }

  const todosList=todoState.map((todo)=>{
    return <JobItem jobName={todo.job} jobId={todo.id} onDelete={removeItem} onUpdate={updateList}/>
  })
  const [jobName,setJobName]=useState("")

  function handleJobName(e){
    setJobName(e.target.value)
  }
function handleAddJob(){
   let listOfid=todoState.map((x)=>{
      return x.id
    }) //this return only array of ID's
    let newId=todoState.length > 0  ? Math.max(...listOfid)+1 : 1 //Math.max(...array) return the max inside an array [revise javascript course spread operator]
    setToDoState([...todoState,{id:newId,job:jobName}])
    setJobName("")
    document.querySelector("#job").focus()
}
  return (
    <>
    <div style={{width:"800px",margin:"20px auto",display:"flex",justifyContent:"center",gap:"20px",padding:"20px"}}>
      <input type="text" value={jobName} onChange={handleJobName} id="job" />
      <button onClick={handleAddJob}>add new job</button>
    </div>

    { todoState.length > 0 ?  
    <div style={{width:"800px",margin:"20px auto",border:"2px solid green"}}>
    <p style={{textAlign:"center"}}>Number of jobs is {todoState.length}</p>
      {todosList}
    </div>
    :
    <div style={{width:"800px",margin:"20px auto",border:"2px solid red"}}>nothing to display</div>
}
{/* //in jsx we can not write if/else unless  out of return so teranry is the best choice */}
      </>
  )
}

export default App
