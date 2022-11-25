import { CartProduct } from "./CartProduct/cartProduct"

export const Cart = ({ currentSale }) =>{

    

    return (
        <div>
            <h3> Carrinho de Compras </h3>
                <ul>
                    <CartProduct currentSale = { currentSale }/>
                </ul>
            <div>
                <p>Total</p>
                <p>R$ {currentSale.reduce((total, item) => total + (Number(item.price)).toFixed(2),0)} </p>
            </div>
        </div>
    )
}