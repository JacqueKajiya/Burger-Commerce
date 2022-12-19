import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"
import { FiShoppingBag } from "react-icons/fi"

export const Register = () => {
    return (

    <div>

        <div>
            <img src="../src/img/burger_logo.png" alt="Site_Logo" />
        <div>
            <FiShoppingBag />
            <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes</p>
        </div>
            <img src="../src/img/Dotz.png" alt="Dots" />
        </div>

        <section>
            <Link to="/">Retornar para o login</Link>
            <h1>Cadastro</h1>
        </section>
        <RegisterForm />

    </div>
    
    )
}