import { useState, useEffect } from "react";
import { Header } from "./components/Header/header";
import { ProductList } from "./components/ProductList/productList"
import { Cart } from "./components/Cart/cart";


function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {

    async function getProducts() {
        try {
            const response = await fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")

            const json = await response.json()

            console.log(json)

            setProducts(json)
        }

        catch (error) {
            console.error(error)
        }
    }

      getProducts()
  }, [setProducts])

    function addProduct (){
      setCurrentSale([...currentSale, products])
    }

  // const productName = products.filter(product => filteredProducts.name.tolowerCase().includes())

  return (
    <div>
        <Header setFilteredProducts = { setFilteredProducts } products = { products }/>
     <main>
        <ProductList products= { products } addProduct = { addProduct } />
        <Cart currentSale = { currentSale }/>
     </main>
    </div>
  );
}

export default App;
