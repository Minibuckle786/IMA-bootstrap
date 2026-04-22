import { Link, useNavigate } from "react-router-dom";

function HeaderPrivate() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <header className="fundo p-3">
            <div className="d-flex justify-content-between align-items-center">

                <h1 className="m-0">
                    <Link to="/dashboard" className="text-white text-decoration-none">
                        IMA
                    </Link>
                </h1>

                <nav className="d-flex align-items-center gap-3">
                    <span>Olá, Emerson</span>
                    <button className="btn btn-roxo" onClick={handleLogout}>
                        Sair
                    </button>
                </nav>

            </div>
        </header>
    );
}

export default HeaderPrivate;