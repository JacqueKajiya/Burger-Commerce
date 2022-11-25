
export const Product = ({ products, addProduct }) => {

    return(
        <div>
            {
                products.map(product => 
                <li key = {product.id}>
                    <div>
                        <img src={product.img} alt={product.name} />
                    </div>
                        <h3> {product.name}</h3>
                        <small>{product.category}</small>
                        <p>{product.price}</p>

                        <button type="button" onClick={() => addProduct(product)}>Adicionar</button>
                </li>
            )}
                
        </div>
    )
}