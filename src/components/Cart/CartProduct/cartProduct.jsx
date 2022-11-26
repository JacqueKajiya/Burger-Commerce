

export const CartProduct = ({currentSale, addProduct, removeProduct}) => {

    return(
        <>
            {currentSale.map((product) => (
            <li key = {product.id}>
                <img src={product.img} alt ={product.name}></img>
                <h4>{product.name}</h4>

                <div>
                    <button onClick={() => addProduct(product)}>+</button>
                    <button onClick={() => removeProduct(product)}>-</button>
                </div>
                <div>
                    {product.quantity} - ${product.price.toFixed(2)}
                </div>
            </li>
            ))
            }
            
        </>
    )
}