import { Link } from "react-router-dom"
import { FiEdit } from "react-icons/fi";

function Categoria() {

    const categorias = [
        { id: 1, nome: "Água, esgoto e meio ambiente" },
        { id: 2, nome: "Energia elétrica" }
    ];

    return (
        <section className="container-fluid">

            <h2 className="my-4 text-center">Serviços por assunto</h2>

            <ul className="row list-unstyled g-4">

                {categorias.map((cat) => (
                    <li className="col-12 col-md-6 col-lg-4" key={cat.id}>

                        <div className="card p-4 h-100">

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="m-0">{cat.nome}</h5>

                                <Link to="/CategoriaDetalhes">
                                    <FiEdit />
                                </Link>
                            </div>

                            <Link
                                to="/CategoriaDetalhes"
                                className="btn btn-roxo w-100 mt-auto"
                            >
                                Abrir
                            </Link>

                        </div>

                    </li>
                ))}

            </ul>

        </section>
    )
}

export default Categoria