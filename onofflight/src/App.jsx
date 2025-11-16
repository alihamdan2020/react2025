import { useState } from "react"
import Lamp from "./Lamp/Lamp"
import Button from "./Button/Button"

function App() {
  const [state,setState]=useState('off');
  
  
 
  return (
    <>
    <Lamp state={state}/>
    <Button state={state} setState={setState}/>
     </>
  )
}

export default App
