import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { CartProductStyled } from "./style"

interface iCartProps{
    id: number,
    quantity: number,
}

export const CartProduct = ({id, quantity} : iCartProps) => {
    const { products } = useContext(CartContext)

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
                            <button >+</button>
                            <button >-</button>
                        </div>
                    </div>

            </CartProductStyled>
        
    
            
        </>
    )
}