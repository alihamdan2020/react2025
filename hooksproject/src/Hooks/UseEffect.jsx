import { useEffect, useState } from "react";

export default function USeEffect(){
    const [name,setName]=useState("kassem")

    function handleClick(){
        setName("fadi")
        console.log(name)
    }

    useEffect(()=>{
        console.log(name)
    },[name])

    return(
        <div style={{border:"2px solid black",width:"800px",margin:"20px auto",padding:"20px"}}>
            <h1>click over kassem and keep your eye on console</h1>
        <h1 onClick={handleClick}>{name}</h1>
        </div>
    )
}