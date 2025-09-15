import { useState } from 'react'
import Header from "./Header"
import Body from "./Body"

function App() {

  const [show,setShow]=useState(true)

  function changeStatus(){
    setShow(!show)
  } 

  return (
    <div style={{margin:"20px auto",width:"80vw"}}>
      <Header clickButton={changeStatus}/>
      <Body show={show} />
    </div>
  )
}

export default App
