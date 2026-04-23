import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Triagem() {

    const navigate = useNavigate()

    function responder(valor) {

        // exemplo de regra
        if (valor === "sim") {
            navigate("/resultado/1")
        } else {
            navigate("/resultado/2")
        }
    }

    return (
        <div className="container">

            <h3>Você tem matrícula?</h3>

            <button onClick={() => responder("sim")}>Sim</button>
            <button onClick={() => responder("nao")}>Não</button>

        </div>
    )
}

export default Triagem