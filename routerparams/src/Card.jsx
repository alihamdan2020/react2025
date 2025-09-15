import { Link } from "react-router-dom";

export default function Card({id,title}) {

    

return (
    <div>
        <p><Link to={`/postDetails/${id}`}>post Id : {id}</Link></p>
        <p>post title : {title}</p>
    </div>
)}