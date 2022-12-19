import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import { HeaderStyled } from "./style"
import { FiSearch, FiLogOut, FiShoppingCart } from "react-icons/fi"
import { CartContext } from "../../context/cartContext"

export const Header = () => {

    const { cartQuantity, openCart } = useContext(CartContext)
    const { logOut } = useContext(UserContext)
    
    return (
        <HeaderStyled>
            <figure>
                <img src="../src/img/burger_logo.png" alt="Site_Logo" />
            </figure>
            <div className="headerOptions">
                <div className="searchInput">
                    <input type="text" placeholder="Digitar pesquisa"/>
                    <FiSearch className="searchIcon"/>
                </div>
                    <div className="cartBtnBox">
                        <FiShoppingCart className="shoppingCartBtn" onClick={() => openCart()}/>
                        <span>{cartQuantity}</span>
                    </div>
                    
                    <FiLogOut className="logOutBtn" onClick={() => logOut()}/>
            </div>
        </HeaderStyled>
    )
}