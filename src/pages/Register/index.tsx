import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"
import { FiShoppingBag } from "react-icons/fi"
import { StyledRegister } from "./style"
import { ContainerForm } from "../../styles/container"

export const Register = () => {
    return (
    <ContainerForm>
        <StyledRegister>
            <div className="descriptionSection">
                <img src="../src/img/burger_logo.png" alt="Site_Logo" />
            <div className="descriptionBox">
                <FiShoppingBag className="bagIcon"/>
                <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes</p>
            </div>

            </div>

            <div className="formSection">
                <section>
                    <h3>Cadastro</h3>
                    <Link to="/">Retornar para o login</Link>
                </section>
            
                    <RegisterForm />
            </div>
        </StyledRegister>
    </ContainerForm>
    
    
    )
}