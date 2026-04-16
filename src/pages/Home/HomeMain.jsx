import "./HomeMain.css"
import { Link } from "react-router-dom"

function HomeMain() {
    return (
        <main className="container-xxl">
            <div className="container">
                <h1 className="d-flex justify-content-center mb-4">Sistema de Triagem Digital</h1>
                <div className="home-descricao">
                    <p className="my-3">Este ambiente foi desenvolvido para orientar decisões por meio de um processo estruturado de perguntas e respostas.</p>
                    <p className="my-3">Ao iniciar uma triagem, você percorre etapas organizadas que analisam informações importantes para gerar uma recomendação personalizada.</p>
                    <p className="my-3">O sistema organiza as informações de forma estruturada e objetiva, garantindo maior precisão na recomendação final.</p>
                </div>
                <div className=" d-flex justify-content-center mt-5">
                    <button className="btn btn-lg botao">Iniciar Triagem</button>
                </div>
            </div>
        </main>
    )
}

export default HomeMain