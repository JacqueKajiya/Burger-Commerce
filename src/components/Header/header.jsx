import { InputSearch } from "./InputSearch/inputSearch"
import { HeaderStyled } from "./style"

export const Header = ({products, setProducts}) => {
    return (
        <HeaderStyled>
            <figure>
                <img src="../src/img/burger_logo.png" alt="Site_Logo" />
            </figure>
                <InputSearch products = { products } setProducts = { setProducts }/>
        </HeaderStyled>
    )
}