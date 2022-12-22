import { useContext } from "react"
import { CartContext } from "../../../context/cartContext"
import { iBurguerItens } from "../../../pages/Dashboard"
import { MenuProduct } from "./style"

interface iproductProps{
    product: iBurguerItens;
}

export const Product = ({ product } : iproductProps) => {

    const { addQuantity } = useContext(CartContext)
    
    return(
        <>
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
        </>
    )
}