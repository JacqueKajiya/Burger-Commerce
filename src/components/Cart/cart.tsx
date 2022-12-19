import React, { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../context/cartContext";
import { CartProduct } from "./CartProduct/cartProduct"
import { CartContainer, ModalBox, ModalHeader, ModalWrapper } from "./style"

export const Cart = () =>{
    const { currentSale, removeAllItems, products, closeCart } = useContext(CartContext)

    const modalRef = useRef<HTMLDivElement> (null)

    useEffect(() => {

        const modalClose = (e: MouseEvent) =>{
            if(!modalRef.current){
                return
            }
        
            const target = e.target as HTMLDivElement
    
            if(!modalRef.current.contains(target)){
                closeCart()
            }
    
        }          
        window.addEventListener("mousedown", modalClose)

    }, [])
    

    return (
        <ModalWrapper>
            <ModalBox ref={modalRef}>
        
            <ModalHeader>
                <h3> Carrinho de Compras </h3>
                <button type="button" onClick={() => closeCart()}>X</button>
            </ModalHeader>
            <CartContainer>
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
            </ModalBox>
        </ModalWrapper>

    )
}