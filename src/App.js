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

    // const productName = products.filter(product => product.name.tolowerCase().includes())

  return (
    <div>
        <Header setFilteredProducts = { setFilteredProducts } products = { products }/>
     <main>
        <ProductList products= { products } addProduct = { addProduct } />
        <Cart currentSale = { currentSale } addProduct = { addProduct } removeProduct = { removeProduct }/>
     </main>
    </div>
  );
}

export default App;
