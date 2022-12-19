import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { CartProductStyled } from "./style"


export const CartProduct = () => {
    const { currentSale, products } = useContext(CartContext)

    // const product = products.find(item => item.id === products.id)
    
    return(
        <>
            {/* {currentSale.map((product) => (
            <CartProductStyled key = {product.id}>
                <div className="productDescription">
                    <img src={product.img} alt ={product.name}></img>

                        <div>
                            <h4>{product.name}</h4>
                            <small>{product.category}</small>
                        </div>
                </div>

                    <div className="productPrice">
                            {product.quantity} - ${product.price.toFixed(2)}
                        <div className="productButtons">
                            <button >+</button>
                            <button >-</button>
                        </div>
                    </div>

            </CartProductStyled>
            ))
            } */}
            
        </>
    )
}