
// import { Cart } from "../../components/Cart/cart"
import { useContext, useEffect, useState } from "react"
import { Cart } from "../../components/Cart/cart"
import { Header } from "../../components/Header/header"
import { Product } from "../../components/ProductList/Product/product"
import { ListOfProducts } from "../../components/ProductList/style"
import { CartContext } from "../../context/cartContext"
import { api } from "../../services/api"

import { Container } from "../../styles/container"


export interface iBurguerItens{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string,
  }

export const Dashboard = () => {
    const [products, setProducts] = useState<iBurguerItens[]>([])

    const { openModal } = useContext(CartContext)

const token = localStorage.getItem("@token")

useEffect(() => {
    if(token){
    const getProducts = async () => {
      try{
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const response = await api.get<iBurguerItens[]>("products")

        setProducts(response.data)
      }catch(error){
        console.error(error)
      } 

    }
    getProducts()}
  }, [])

    return (
        <Container>
            {openModal && <Cart/>}
          <Header/>
            <main>
                <ListOfProducts>
                        {products.map((product) => (
                           <Product key={product.id} product={product} /> ))}
                </ListOfProducts>
           
            </main>
        </Container>
    
    )
}