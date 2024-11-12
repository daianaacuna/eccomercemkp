import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import './App.css'

function App() {
  

  return (
    <div className= 'container-app'>
     <BrowserRouter>
      <CartProvider> 
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer saludo={"Bienvenidos a Coconut"} />} />
          <Route path="/category/:idCategory" element={ <ItemListContainer saludo={"Bienvenidos a Coconut"} />} />
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
     </BrowserRouter>

    </div>
  )
}
      

export default App
