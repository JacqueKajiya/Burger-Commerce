import { Product } from "./Product/product"

export const ProductList = ({ products, addProduct }) =>{

    return (
        <section>
            <ul>
                <Product products = { products } addProduct = { addProduct } />
            </ul>
        </section>

    )
}