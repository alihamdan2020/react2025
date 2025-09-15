import { useState } from "react"
import {dynamicStyle} from "./styles/dynamicstyle"
function App() {
const [counter,setCounter]=useState(0)

function handleIncrease(){
  setCounter((counter)=>counter+1)
}
// function handleDecrease(){
// setCounter((counter)=>counter-1)
// }
  return (
    <>
    <h1>counter</h1>

    <button style={{marginInline:"20px"}}onClick={handleIncrease}>increase</button>
        <span style={{color:counter>0 ? "green" : "red"}}>{counter}</span>
        {/* <span style={dynamicStyle(counter)}>{counter}</span> */}
    <button onClick={()=>setCounter((counter)=>counter-1)} style={{marginInline:"20px"}}>decrease</button>
    </>
  )
}

export default App
