
import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemList from "./Itemlist.jsx"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const {idCategory} = useParams()

  useEffect(() => {
    getProducts()
      .then((dataProducts) => {
        if (idCategory){
          const filterProducts = data.filter( (product)=> product.category === idCategory)
          setProducts(filterProducts)
        } else {
        setProducts(dataProducts)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("finalizo la promesa")
      })
  }, [idCategory])

  return (
    <div className="itemlistcontainer">
        <h2>{saludo}</h2>
        <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer



      