import { CartProduct } from "./CartProduct/cartProduct"

export const Cart = ({ currentSale, addProduct, removeProduct }) =>{

    const totalPrice = currentSale.reduce((total, product) => total + product.price * product.quantity, 0) 

    return (
        <aside>
            <h3> Carrinho de Compras </h3>
                    {currentSale.length === 0 ?(
                    <div>
                        <h2>Carrinho Vazio</h2>
                    </div>
            ):(
            <>
            <ul>
                <CartProduct currentSale = { currentSale } addProduct = { addProduct } removeProduct = { removeProduct }/>
            </ul>
                <div>
                    <p>
                        Total: <span>R${totalPrice.toFixed(2)}</span>
                    </p>
                </div>
            </>
        )}
        </aside>
    )
}