import { InputSearch } from "./InputSearch/inputSearch"

export const Header = ({setFilteredProducts, products}) => {
    return (
        <div>
            <figure>
                <img src="../src/img/burger_logo.png" alt="Site_Logo" />
            </figure>
                <InputSearch setFilteredProducts = { setFilteredProducts } products = { products }/>
        </div>
    )
}