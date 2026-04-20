import "./CadastroMain.css"
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"
import { Link } from "react-router-dom"

function CadastroMain() {
    return (
        <main className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-5">

                    <div className="card shadow-sm p-4">

                        <h2 className="text-center mb-4">
                            Cadastro de Usuário
                        </h2>

                        <form>

                            <div className="mb-3">
                                <label className="form-label">Nome Completo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Digite seu nome"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Digite seu email"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Digite sua senha"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirmar Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirme sua senha"
                                />
                            </div>

                            <button className="btn btn-roxo w-100 mt-3">
                                Cadastrar
                            </button>

                        </form>

                        <div className="text-center mt-3">
                            Já possui cadastro? <Link to="/Login">Login</Link>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    )
}

export default CadastroMain