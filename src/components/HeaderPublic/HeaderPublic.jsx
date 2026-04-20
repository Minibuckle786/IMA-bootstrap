import { Link } from "react-router-dom"
import logo from "../../assets/imagens/logo-ima-2022.png"
import "./HeaderPublic.css"

function HeaderPublic() {
    return (
        <header className="container-fluid py-2">
            <div className="container-xxl px-3 px-md-4">
                <div className="d-flex justify-content-between align-items-center">

                    <Link to="/">
                        <img className="header-img" src={logo} alt="Logo da IMA" />
                    </Link>

                    <nav className="d-flex align-items-center gap-2">
                        <Link to="/CadastroMain" className="btn btn-lg btn-roxo">
                            Cadastrar
                        </Link>
                        <Link to="/login" className="btn btn-lg btn-roxo">
                            Login
                        </Link>
                    </nav>

                </div>
            </div>
        </header>
    )
}

export default HeaderPublic