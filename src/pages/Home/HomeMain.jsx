import "./HomeMain.css"
import { Link } from "react-router-dom"

function HomeMain() {
    return (

        <main className="container-xxl px-3 px-md-4 py-5 text-center">
            <div className="col-lg-8 mx-auto">
                <h1 className="mb-4">Sistema de Triagem Digital</h1>
                <div className="home-descricao">
                    <p className="mb-3">Este ambiente foi desenvolvido para orientar decisões por meio de um processo estruturado de perguntas e respostas.</p>
                    <p className="mb-3">Ao iniciar uma triagem, você percorre etapas organizadas que analisam informações importantes para gerar uma recomendação personalizada.</p>
                    <p className="mb-3">O sistema organiza as informações de forma estruturada e objetiva, garantindo maior precisão na recomendação final.</p>
                </div>
                <div className=" mt-4">
                    <Link to="/Triagem" className="btn btn-lg btn-roxo">
                        Iniciar Triagem
                    </Link>

                </div>
            </div>
        </main>
    )
}

export default HomeMain