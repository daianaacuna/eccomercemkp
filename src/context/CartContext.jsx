import { createContext } from "react";

const CartContext = createContext()


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


    return(
        <CartContext.Provider value={ {cart}}>
            {children}
        </CartContext.Provider>
    )

}

export {CartProvider, CartContext}