import { Link } from "react-router-dom"
import "./HeaderPublic.css"

function HeaderPublic() {
    return (
        <header>
            <div className="container ">
                <div className="d-flex justify-content-between align-items-center">
                    <div >
                        <h1 className=""><Link to="/">IMA</Link></h1>
                    </div>
                    <nav className="">
                        <Link to="/cadastro" className="">Cadastrar</Link>
                        <Link to="/login" className="">Login</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderPublic