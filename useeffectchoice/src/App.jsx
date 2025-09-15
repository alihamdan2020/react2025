import { useEffect, useState } from "react"
import "./style.css"
import Card from "./Card"
export default function App(){
  const [resource,setResource]=useState("posts")

  const[listOfResource,setListOfResource]=useState([])

  useEffect(()=>{
      fetch (`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response=>response.json())
      .then (data=>setListOfResource(data))
  },[resource])

  
  const list=listOfResource.map((resource,index)=>{
    return <Card key={index} {...resource}/>
    //{...resouce} mean pass as props all its resoucrce contents regardless what this resource contains
  })


  return(<>
    <button onClick={()=>setResource("posts")}>posts</button>
    <button onClick={()=>setResource("users")}>users</button>
    <button onClick={()=>setResource("comments")}>comments</button>
    <h1>{resource}</h1>
  
  <div className="container">
  {list}
  </div>
  </>)
}