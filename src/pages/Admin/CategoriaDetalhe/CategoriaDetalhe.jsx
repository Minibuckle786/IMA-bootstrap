import "./CategoriaDetalhes.css"
import { Link } from "react-router-dom"
import { FaRegTrashAlt } from "react-icons/fa";

function CategoriaDetalhes() {

    const triagens = [
        {
            id: 1,
            titulo: "Segunda via Sanasa",
            tipo: "Serviço digital",
            data: "20/02/2026"
        },
        {
            id: 2,
            titulo: "Solicitação de esgoto",
            tipo: "Atendimento presencial",
            data: "18/02/2026"
        },
        {
            id: 3,
            titulo: "Solicitação de luz",
            tipo: "Atendimento presencial",
            data: "26/04/2026"
        }
    ];

    return (
        <div className="container-fluid">

            {/* TOPO */}
            <section className="mb-4">
                <Link to="/dashboard">Voltar para Categoria</Link>

                <h2 className="mt-2">Água, esgoto e meio ambiente</h2>
                <p>Gerencie as triagens deste assunto</p>

                <hr />

                <div className="d-flex gap-2 flex-wrap">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Buscar triagem..."
                    />

                    <Link
                        className="btn btn-roxo"
                        to="/service-editar"
                    >
                        + Nova Triagem
                    </Link>
                </div>
            </section>

            {/* LISTA */}
            <section>
                <div className="row g-4">

                    {triagens.map((triagem) => (
                        <div className="col-12 col-md-6 col-lg-4" key={triagem.id}>
                            <div className="card p-3 h-100 d-flex align-items-center flex-column">

                                <div className="d-flex gap-3 align-items-center mb-2">
                                    <h5 className="m-0">{triagem.titulo}</h5>

                                    <button className="btn btn-sm btn-outline-danger">
                                        <FaRegTrashAlt />
                                    </button>
                                </div>

                                <p className="mb-1">Tipo: {triagem.tipo}</p>
                                <p className="mb-3">Última atualização: {triagem.data}</p>

                                {/* BOTAO */}
                                <div className="d-flex gap-2 mt-auto">
                                    <Link to="/ServiceVisualizar" className="btn btn-outline-primary btn-sm">Visualizar</Link>
                                    <Link to="/ServiceEditar" className="btn btn-outline-warning btn-sm">Editar</Link>
                                    <Link to="/ServicePerguntas" className="btn btn-outline-secondary btn-sm">Perguntas</Link>
                                    <Link to="/ResultadoFinal" className="btn btn-outline-secondary btn-sm">Resposta final</Link>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </section>

        </div>
    )
}

export default CategoriaDetalhes