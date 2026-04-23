import "./ServiceVisualizar.css"
import { Link } from "react-router-dom"

function ServiceVisualizar() {
    return (
        <div className="container">

            <Link to="/CategoriaDetalhes">
                Voltar para triagens
            </Link>

            <h2 className="py-3">
                Visualizando: <span>Segunda via Sanasa</span>
            </h2>

            <div className="card p-4">

                <p>Você tem o número da matrícula?</p>

                <form className="d-flex flex-column gap-2">

                    <label className="d-flex gap-2 align-items-center">
                        <input type="radio" name="matricula" value="sim" />
                        Sim
                    </label>

                    <label className="d-flex gap-2 align-items-center">
                        <input type="radio" name="matricula" value="nao" />
                        Não
                    </label>

                    <hr />

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-roxo">
                            Próxima
                        </button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default ServiceVisualizar