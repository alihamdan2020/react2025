import { useState } from 'react'
import ToDoItem from './ToDoItem/TODoItem'

function App() {
const jobsToDo=["job1","job2","job3"]
const [listJob,setListJob]=useState(jobsToDo)

const [jobName,setJobName]=useState("")

function handleChangeJobName(e){
  setJobName(e.target.value)
}

function handleSubmitForm(e){
e.preventDefault()
// listJob.push(jobName)
setListJob([...listJob,jobName])
setJobName("")
}

const jobs=listJob.map((job,index)=>{
  return <ToDoItem jobName={job} key={index} jobId={index} onDelete={deleteJobItem}/>
})

function deleteJobItem(id){
  const newListJob=listJob.filter(function(job,index){
    return index!=id
  })
  setListJob(newListJob)

}
  return (
    <>
    <form  onSubmit={handleSubmitForm}> 
      <input type='text' value={jobName} onChange={handleChangeJobName} />
      <button>add</button>
    </form>
   {jobs}
    </>
  )
}

export default App
