import { CartProduct } from "./CartProduct/cartProduct"
import { CartContainer } from "./style"

export const Cart = ({ currentSale, addProduct, removeProduct, setCurrentSale }) =>{

    const totalPrice = currentSale.reduce((total, product) => total + product.price * product.quantity, 0) 

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
                <CartProduct currentSale = { currentSale } addProduct = { addProduct } removeProduct = { removeProduct }/>
            </ul>
                <div className="totalBox">
                    <p>
                        Total: <span>R${totalPrice.toFixed(2)}</span>
                    </p>

                    <button onClick={() => setCurrentSale([])}>Remover Todos</button>
                </div>
            </>
        )}
        </CartContainer>
    )
}