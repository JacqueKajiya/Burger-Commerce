import { LoginForm } from "../../components/LoginForm"
import { Link } from "react-router-dom"
import { FiShoppingBag } from "react-icons/fi"
import {  useContext } from "react"
import { UserContext } from "../../context/userContext"
import { StyledLogin } from "./style"

export const Login = () => {
    const  {loading} = useContext(UserContext)

    if(loading){
        return null
    }

    return (
    <StyledLogin>
            <fieldset>
                <LoginForm />
                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                <Link to="/register">Cadastrar</Link>
            </fieldset>

        <div className="descriptionSection">
                <img src="../src/img/burger_logo.png" alt="Site_Logo" />
            <div className="descriptionBox">
                <FiShoppingBag className="bagIcon"/>
                <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes</p>
            </div>
                <img src="../src/img/Dotz.png" alt="Dots" />
        </div>

    </StyledLogin>
    )
}