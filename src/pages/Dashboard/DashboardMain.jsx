import Categoria from "../Admin/CategoriaAdmin/Categoria"
import "./DashboardMain.css"

function DashboardMain() {
    return (
        <>
            <div className="container">
                <div className="d-flex flex-column align-items-center text-center">


                    <h1 className="mb-3">Meu Painel</h1>

                    <hr className="w-100" />


                    <hr />
                    <button className="btn btn-roxo w-100 ">
                        <span>+</span> Novo Painel</button>
                </div>
            </div>
            <Categoria />
        </>
    )
}

export default DashboardMain