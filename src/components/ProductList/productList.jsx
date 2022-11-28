import { Product } from "./Product/product"
import { ListOfProducts } from "./style"

export const ProductList = ({ products, addProduct }) =>{

    return (
        <ListOfProducts>
            <Product products = { products } addProduct = { addProduct } />
        </ListOfProducts>
    )
}