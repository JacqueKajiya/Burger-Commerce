import { useContext } from "react"
import { CartContext } from "../../../context/cartContext"
import { MenuProduct } from "./style"

export const Product = () => {

    const { products, addQuantity } = useContext(CartContext)
    
    return(
        <>
            {
                products.map(product => 
                <MenuProduct key = {product.id}>
                    <div className="imgBox">
                        <img src={product.img} alt={product.name} />
                    </div>
                    
                    <div className="productInfo">
                        <h3> {product.name}</h3>
                        <small>{product.category}</small>
                        <p>R$ {(product.price).toFixed(2)}</p>
                        <button type="button" onClick={() => addQuantity(product.id)}>Adicionar</button>
                    </div>
                </MenuProduct>
            )}
                
        </>
    )
}