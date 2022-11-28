import { MenuProduct } from "./style"

export const Product = ({ products, addProduct }) => {

    return(
        <>
            {
                products.map(product => 
                <MenuProduct key = {product.id}>
                    <div className="imgBox">
                        <img src={product.img} alt={product.name} />
                    </div>
                    
                    <div className="productInfo">
                        <h3> {product.name}</h3>
                        <small>{product.category}</small>
                        <p>R$ {(product.price).toFixed(2)}</p>
                        <button type="button" onClick={() => addProduct(product)}>Adicionar</button>
                    </div>
                </MenuProduct>
            )}
                
        </>
    )
}