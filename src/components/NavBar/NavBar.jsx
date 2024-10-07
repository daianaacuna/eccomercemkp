import CartWidget from "./CartWidget"
import "./navbar.scss"


const NavBar = () => {
    return(
    <nav className="navbar">
        <div className="brand"> 
            <h2>Abacaxi</h2>
        </div>

        <ul>
            <li>Primers</li>
            <li>Bases</li>
            <li>Correctores</li>
            <li>Sombras</li>
            <li>Contorno</li>
            <li>Iluminadores</li>
            <li>Labiales</li>
        </ul>

        <CartWidget />
    </nav>
    )
}

export default NavBar