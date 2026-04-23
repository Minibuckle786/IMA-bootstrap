import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { buscarResultadoPorId } from "../../Services/resultadoService"

function ResultadoFinal() {

    const { id } = useParams()
    const [resultado, setResultado] = useState(null)

    useEffect(() => {
        const res = buscarResultadoPorId(Number(id))
        setResultado(res)
    }, [id])

    function imprimir() {
        const conteudo = document.getElementById("print-area").innerHTML

        const tela = window.open("", "", "width=800,height=600")

        tela.document.write(`
            <html>
                <head>
                    <title>Resultado</title>
                    <style>
                        body { font-family: Arial; padding: 20px; }
                    </style>
                </head>
                <body>
                    ${conteudo}
                </body>
            </html>
        `)

        tela.document.close()
        tela.print()
    }

    if (resultado === null) return <p>Carregando...</p>

    if (!resultado) {
        return <p className="text-danger">Resultado não encontrado</p>
    }

    return (
        <div className="container my-5">

            <div className="card p-4 shadow-sm" id="print-area">

                <h3>{resultado.titulo}</h3>

                <div
                    dangerouslySetInnerHTML={{
                        __html: resultado.conteudo
                    }}
                />

            </div>

            <div className="text-end mt-3">
                <button
                    className="btn btn-outline-secondary"
                    onClick={imprimir}
                >
                    Imprimir
                </button>
            </div>

        </div>
    )
}

export default ResultadoFinal