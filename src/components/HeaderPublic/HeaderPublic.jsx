import { Link } from "react-router-dom"
import logo from "../../assets/imagens/logo-ima-2022.png"
import "./HeaderPublic.css"

function HeaderPublic() {
    return (
        <header className="container-fluid p-2">
            <div className="container-xxl ">
                <div className="d-flex justify-content-between align-items-center">
                    <div >
                        <h1 className="header-h1"><Link to="/"><img src={logo} alt="Logo da IMA" className="" /></Link></h1>
                    </div>
                    <nav className="header-nav d-flex justify-content-between align-items-center">
                        <button type="button" className="btn btn-lg botao">Cadastrar</button>
                        <button type="button" className="btn btn-lg ms-3 botao">Login</button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderPublic