import CartWidget from "./CartWidget"
import "./navbar.scss"
import {Link} from "react-router-dom" 


const NavBar = () => {
    return(
    <nav className="navbar">
        <Link to="/" className="brand"> 
            <h2>Coconut</h2>
        </Link> 

        <ul className="categories">
            <li className="category">
                <Link to="/category/primers">Primers</Link></li>
            <li className="category">
               <Link to="/category/bases">Bases</Link></li>
            <li className="category">
               <Link to="/category/correctores">Correctores</Link></li>
            <li className="category">
                <Link to="/category/sombras">Sombras</Link></li>
            <li className="category">
                <Link to="/category/labiales">Labiales</Link></li>
        </ul>

        <CartWidget />
    </nav>
    )
}

export default NavBar