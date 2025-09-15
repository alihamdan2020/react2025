import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <nav>
                <Link to="/" style={{marginInline:"10px"}}>Home page</Link>
                <Link to="/posts" >Posts</Link>
            </nav>
        </header>
    )
}
