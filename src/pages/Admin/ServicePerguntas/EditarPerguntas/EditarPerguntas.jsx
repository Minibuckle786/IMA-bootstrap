import "./EditarPerguntas.css"
import { Link } from "react-router-dom"
import { useState } from "react"

function EditarPerguntas() {

    const [pergunta, setPergunta] = useState("")
    const [tipo, setTipo] = useState("")
    const [respostas, setRespostas] = useState([
        { id: 1, valor: "sim", destino: "1" },
        { id: 2, valor: "nao", destino: "2" }
    ])

    function handleSubmit(e) {
        e.preventDefault()

        const dados = {
            pergunta,
            tipo,
            respostas
        }

        console.log("Salvando:", dados)
    }

    return (
        <div className="container">

            <Link to="/ServicePerguntas">
                Voltar para perguntas
            </Link>

            <h2 className="my-3">Editar Pergunta</h2>

            <div className="card p-4">

                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">

                    {/* TEXTO */}
                    <div>
                        <label className="form-label">Texto da Pergunta</label>
                        <input
                            type="text"
                            className="form-control"
                            value={pergunta}
                            onChange={(e) => setPergunta(e.target.value)}
                        />
                    </div>

                    {/* TIPO */}
                    <div>
                        <p className="mb-2">Tipo de Pergunta</p>

                        <div className="d-flex flex-column gap-2">
                            <label>
                                <input
                                    type="radio"
                                    name="tipo"
                                    value="sim_nao"
                                    onChange={(e) => setTipo(e.target.value)}
                                />
                                Sim ou Não
                            </label>
                        </div>
                    </div>

                    {/* RESPOSTAS */}
                    <div>
                        <p>Respostas Possíveis</p>

                        {respostas.map((resp, index) => (
                            <div key={resp.id} className="mb-3 border p-2 rounded">

                                <p className="mb-1">Resposta {index + 1}</p>

                                <select
                                    className="form-select mb-2"
                                    value={resp.valor}
                                    onChange={(e) => {
                                        const nova = [...respostas]
                                        nova[index].valor = e.target.value
                                        setRespostas(nova)
                                    }}
                                >
                                    <option value="sim">Sim</option>
                                    <option value="nao">Não</option>
                                </select>

                                <label>Ir para:</label>

                                <select
                                    className="form-select"
                                    value={resp.destino}
                                    onChange={(e) => {
                                        const nova = [...respostas]
                                        nova[index].destino = e.target.value
                                        setRespostas(nova)
                                    }}
                                >
                                    <option value="1">Pergunta 1</option>
                                    <option value="2">Pergunta 2</option>
                                </select>

                            </div>
                        ))}

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

export default EditarPerguntas