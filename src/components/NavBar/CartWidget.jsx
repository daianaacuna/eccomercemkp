import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext)

    return (
        <Link to="/cart" className="cartwidget">
            <IoMdCart className="icon-cart" color="pink" />
            <p>{ totalQuantity () }</p>
        </Link>
    )
}

export default CartWidget
