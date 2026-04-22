import "./LoginMain.css"
import { useNavigate, Link } from "react-router-dom"
import { FaEnvelope, FaLock } from "react-icons/fa"

function LoginMain() {
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        // salva token (ESSENCIAL)
        localStorage.setItem("token", "123456")

        // opcional (nome do usuário)
        localStorage.setItem("usuario", "Emerson")

        // navegação correta (SPA)
        navigate("/dashboard")
    }

    return (
        <main className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-5">
                    <div className="card shadow-sm p-4">

                        <h1 className="text-center mb-4">Login</h1>

                        <form onSubmit={handleLogin}>

                            <div className="mb-3">
                                <input className="form-control" type="email" placeholder="Email" />
                            </div>

                            <div className="mb-3">
                                <input className="form-control" type="password" placeholder="Senha" />
                            </div>

                            <button type="submit" className="btn btn-roxo w-100 mt-3">
                                Logar
                            </button>

                        </form>

                        <div className="text-center mt-3">
                            Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginMain