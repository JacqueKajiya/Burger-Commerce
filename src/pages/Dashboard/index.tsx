
// import { Cart } from "../../components/Cart/cart"
import { Header } from "../../components/Header/header"
import { ProductList } from "../../components/ProductList/productList"

import { Container } from "../../styles/container"

export const Dashboard = () => {

    return (
        <Container>
          <Header/>
            <main>
                <ProductList />
                {/* <Cart /> */}
            </main>
        </Container>
    
    )
}