
// import { Cart } from "../../components/Cart/cart"
import { useContext } from "react"
import { Cart } from "../../components/Cart/cart"
import { Header } from "../../components/Header/header"
import { ProductList } from "../../components/ProductList/productList"
import { CartContext } from "../../context/cartContext"

import { Container } from "../../styles/container"

export const Dashboard = () => {
const { openModal } = useContext(CartContext)

    return (
        <Container>
            {openModal && <Cart/>}
          <Header/>
            <main>
                <ProductList />
            </main>
        </Container>
    
    )
}