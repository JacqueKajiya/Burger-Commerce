import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { CartProductStyled } from "./style"

interface iCartProps{
    id: number,
    quantity: number,
}

export const CartProduct = ({id, quantity} : iCartProps) => {
    const { products, addQuantity, decreaseQuantity } = useContext(CartContext)

    const product = products.find(item => item.id === id)
    
    if (product == null) {
        return null
    }

    return(
        <>
            <CartProductStyled key = {product.id}>
                <div className="productDescription">
                    <img src={product.img} alt ={product.name}></img>

                        <div>
                            <h4>{product.name}</h4>
                            <small>{product.category}</small>
                        </div>
                </div>

                    <div className="productPrice">
                            {quantity} - ${product.price.toFixed(2)}
                        <div className="productButtons">
                            <button type="button" onClick={()=> addQuantity(product.id)}>+</button>
                            <button type="button" onClick={()=> decreaseQuantity(product.id)}>-</button>
                        </div>
                    </div>

            </CartProductStyled>
        
    
            
        </>
    )
}