import { Editor, EditorProvider, Toolbar, BtnBold, BtnItalic } from "react-simple-wysiwyg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { salvarResultado } from "../../../Services/resultadoService"


function AdminResultado() {

    const [titulo, setTitulo] = useState("")
    const [conteudo, setConteudo] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        salvarResultado({
            id: Date.now(),
            titulo,
            conteudo
        })
    }

    return (
        <div>
            <Link to="/CategoriaDetalhes">
                Voltar para triagens
            </Link>
            <div className="container">

                <h2 className="my-3">Criar Resposta Final</h2>

                <form onSubmit={handleSubmit} className="card p-4">

                    <input
                        className="form-control mb-3"
                        placeholder="Título da resposta"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />

                    <EditorProvider>
                        <Toolbar>
                            <BtnBold />
                            <BtnItalic />
                        </Toolbar>

                        <Editor
                            value={conteudo}
                            onChange={(e) => setConteudo(e.target.value)}
                        />
                    </EditorProvider>

                    <button className="btn btn-roxo mt-3">
                        Salvar
                    </button>

                </form>

            </div>
        </div>
    )
}

export default AdminResultado