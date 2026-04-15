import { Link } from "react-router-dom"

function HeaderPrivate() {
    return (
        <header>
            <div className="">
                <div>
                    <h1 className=""><Link to="/">IMA</Link></h1>
                </div>
                <nav className="">
                    <span>Olá, Emerson</span>
                    <button className="">Sair</button>
                </nav>
            </div>
        </header>
    )
}

export default HeaderPrivate