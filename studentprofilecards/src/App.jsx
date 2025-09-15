import { useState } from 'react'
import Students from "./Data/Students"
import StudentCard from './StudentCard/StudentCard'
import './App.css'
import EventHandler from './EventHandler/EventHandler'


function App() {
  
const sutdentsCard=Students.map(function(singleStudent,index){
  return <StudentCard key={index} name={singleStudent.name} age={singleStudent.age} grade={singleStudent.grade} />
})
console.log(sutdentsCard)
  return (
      <>
    <div className='container test'>
     {sutdentsCard}
    </div>
    <br></br>
    <EventHandler />
    <br></br>
    
    </>
  )
}

export default App
