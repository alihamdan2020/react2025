import { useContext } from "react"
import { AppContext } from "./Context"

export default function Button() {

    const  {changeStatus}  = useContext(AppContext)


    return (<>
        <button onClick={changeStatus}>click to show or hide heading</button>
    </>)
}