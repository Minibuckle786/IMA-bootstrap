import { Navigate } from "react-router-dom"

function PrivateRoute({ children }) {
    const usuarioLogado = !!localStorage.getItem("usuario")
    console.log("usuario:", localStorage.getItem("usuario"))
    return usuarioLogado ? children : <Navigate to="/" />
}

export default PrivateRoute