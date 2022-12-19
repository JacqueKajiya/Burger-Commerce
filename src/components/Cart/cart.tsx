import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartProduct } from "./CartProduct/cartProduct"
import { CartContainer } from "./style"

export const Cart = () =>{
    const { currentSale, removeAllItems } = useContext(CartContext)

    // const totalPrice = currentSale.reduce((total, product) => total + product.price * product.quantity, 0) 

    return (
        <CartContainer>
            <h3> Carrinho de Compras </h3>
                    {currentSale.length === 0 ?(
                    <div className="noItensBox">
                        <h2>Sua sacola está vazia</h2>
                        <small>Adicione itens</small>
                    </div>
            ):(
            <>
            <ul>
                <CartProduct />
            </ul>
                <div className="totalBox">
                    <p>
                        Total: <span>0</span>
                    </p>

                    <button onClick={() => removeAllItems()}>Remover Todos</button>
                </div>
            </>
        )}
        </CartContainer>
    )
}