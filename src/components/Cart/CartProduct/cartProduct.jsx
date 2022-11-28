import { CartProductStyled } from "./style"


export const CartProduct = ({currentSale, addProduct, removeProduct}) => {

    return(
        <>
            {currentSale.map((product) => (
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
                            <button onClick={() => addProduct(product)}>+</button>
                            <button onClick={() => removeProduct(product)}>-</button>
                        </div>
                    </div>

            </CartProductStyled>
            ))
            }
            
        </>
    )
}