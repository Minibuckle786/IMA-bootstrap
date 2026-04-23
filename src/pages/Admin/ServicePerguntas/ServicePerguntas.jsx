import "./ServicePerguntas.css"
import { Link } from "react-router-dom"

function ServicePerguntas() {

    const perguntas = [
        {
            id: 1,
            texto: "Você possui matrícula da SANASA?",
            tipo: "Sim ou Não"
        },
        {
            id: 2,
            texto: "Você possui conta em aberto?",
            tipo: "Sim ou Não"
        }
    ];

    return (
        <div className="container">

            {/* TOPO */}
            <Link to="/CategoriaDetalhes">
                Voltar para triagens
            </Link>

            <h2 className="my-3">Perguntas da triagem</h2>
            <p>Triagem: Segunda via SANASA</p>

            {/* AÇÕES */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="m-0">Perguntas</h4>

                <button className="btn btn-roxo">
                    + Nova Pergunta
                </button>
            </div>

            {/* LISTA */}
            <div className="row g-3">

                {perguntas.map((pergunta) => (
                    <div className="col-12 col-md-6" key={pergunta.id}>

                        <div className="card p-3 h-100 d-flex flex-column">

                            <strong className="mb-2">
                                {pergunta.id}. {pergunta.texto}
                            </strong>

                            <p className="mb-3">
                                Tipo: {pergunta.tipo}
                            </p>

                            <div className="d-flex gap-2 mt-auto">

                                <Link
                                    to="/EditarPerguntas"
                                    className="btn btn-outline-warning btn-sm"
                                >
                                    Editar
                                </Link>

                                <button className="btn btn-outline-danger btn-sm">
                                    Excluir
                                </button>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default ServicePerguntas