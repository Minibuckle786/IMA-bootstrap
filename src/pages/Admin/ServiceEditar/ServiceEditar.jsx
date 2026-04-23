import "./ServiceEditar.css"
import { Link } from "react-router-dom"
import { useState } from "react"

function ServiceEditar() {

    const [nome, setNome] = useState("")
    const [tipo, setTipo] = useState("")
    const [status, setStatus] = useState("")
    const [descricao, setDescricao] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const dados = {
            nome,
            tipo,
            status,
            descricao
        }

        console.log("Salvando:", dados)
    }

    return (
        <div className="container">

            <Link to="/CategoriaDetalhes">
                Voltar para triagens
            </Link>

            <h2 className="my-3">Triagem</h2>

            <div className="card p-4">

                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">

                    <fieldset>
                        <legend>Nome da Triagem</legend>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite o nome da triagem"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Tipo de atendimento</legend>

                        <div className="d-flex flex-column gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="tipo"
                                    value="digital"
                                    onChange={(e) => setTipo(e.target.value)}
                                />
                                Serviço digital
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="tipo"
                                    value="presencial"
                                    onChange={(e) => setTipo(e.target.value)}
                                />
                                Atendimento presencial
                            </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Status</legend>

                        <div className="d-flex flex-column gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="ativa"
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                                Ativa
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="inativa"
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                                Inativa
                            </label>
                        </div>
                    </fieldset>

                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea
                            id="descricao"
                            className="form-control"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-roxo">
                            Salvar
                        </button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default ServiceEditar