import { Link } from "react-router-dom"
export default function Header() {
    return (<>
        <header >
            <Link to="/" className="links"><h1>this is header</h1></Link>
            <nav>
                <ul>
                    <Link to="/about" className="links">About Us</Link> 
                    <Link to="/contact" className="links">Contact Us</Link>
                </ul>
            </nav>
        </header>
    </>)
}