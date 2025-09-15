import { useContext } from "react"
import { AppContext } from "./Context"

export default function Body() {

    const  {show}  = useContext(AppContext)
    return (
        <>
            {show === true ? <h1>hello world</h1> : <></>}
        </>)
}