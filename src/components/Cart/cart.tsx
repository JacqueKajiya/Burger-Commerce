import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartProduct } from "./CartProduct/cartProduct"
import { CartContainer } from "./style"

export const Cart = () =>{
    const { currentSale, removeAllItems, products } = useContext(CartContext)

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
                {currentSale.map(item => (
                <CartProduct key={item.id} {...item} />
                ))}
            </ul>
                <div className="totalBox">
                    <p>
                        Total: <span>
                            {currentSale.reduce((acc, itens) => {
                            const product = products.find(item => item.id === itens.id)
                            return acc + (product?.price || 0) * itens.quantity}, 0)}
                        </span>
                    </p>

                    <button onClick={() => removeAllItems()}>Remover Todos</button>
                </div>
            </>
        )}
        </CartContainer>
    )
}