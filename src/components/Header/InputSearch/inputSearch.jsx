import { useState } from "react"
import { SearchInputStyled } from "./style"

export const InputSearch = ({ products, setProducts }) => {
    const [searchProduct, setSearchProduct] = useState("")

    function searchItem (){
        const productName = products.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()))
        setProducts(productName)
      }

    return (
        <SearchInputStyled>
            <input onChange = {(text) => {
                setSearchProduct(text.target.value) 
                }} type="text" placeholder="Digitar pesquisa"
            />
            <button onClick={() => {searchItem()}} type="button"> Pesquisar </button>
        </SearchInputStyled>
    )
}