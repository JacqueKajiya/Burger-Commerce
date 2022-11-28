import { useState, useEffect } from "react";
import { Header } from "./components/Header/header";
import { api } from "../src/services/api";
import { ProductList } from "./components/ProductList/productList"
import { Cart } from "./components/Cart/cart";
import { Container } from "./styles/container";
import Global from "./styles/global";


function App() {
  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  useEffect(() => {

    async function getProducts() {
        try {
            const response = await api.get("products")
      
            const json = await response.data

            setProducts(json)

        }

        catch (error) {
            console.error(error)
        }
    }

      getProducts()
  }, [setProducts])

    function addProduct (item){
      const findItem = currentSale.find((product) => product.id === item.id)
      if(findItem){
        setCurrentSale(
          currentSale.map((product) => product.id === item.id ? {...findItem, quantity: findItem.quantity + 1} : product))
        }else {
          setCurrentSale([...currentSale, {...item, quantity: 1}])
        }
    }

    function removeProduct (item){
      const findItem = currentSale.find((product) => product.id === item.id)
      if (findItem.quantity === 1){
        setCurrentSale(currentSale.filter((product) => product.id !== item.id))
      }else{
        setCurrentSale(
          currentSale.map((product) => product.id === item.id ? {...findItem, quantity: findItem.quantity - 1}: product))
      }
    }

  return (
    <Container>
      <Global />
          <Header products = { products } setProducts = { setProducts }/>

      <main>
          <ProductList products= { products } addProduct = { addProduct } />
          <Cart currentSale = { currentSale } setCurrentSale = { setCurrentSale } addProduct = { addProduct } removeProduct = { removeProduct }/>
      </main>
    </Container>
  );
}

export default App;
