import { useState } from "react"

export default function UseState(){
    const [name,setName]=useState("jawad")
    
    function handleChangeName(){
        if (name==="fadi")
   setName("jawad")
else
    setName("fadi")

    }
    return(
        <div style={{border:"2px solid black",width:"800px",margin:"20px auto",padding:"20px"}}>
        <h2>click over JAWAD and toggle it betweeen fadi and jawad</h2>
        <h1 onClick={handleChangeName}>{name}</h1>
        </div>
    )
}