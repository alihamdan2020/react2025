import { useState } from "react"
import style from "./style.module.css"

export default function Button(props) {
const a=props.state;
const b=props.setState;
    
        function changeState(){
          //   if(state==='on')
          //     setState("off")
          //   else
          //     setState("on")
          b(a==='on' ? 'off' : 'on')
          }
    

    return (
        <button className={style.btn} onClick={changeState}>{a}</button>
    )
}