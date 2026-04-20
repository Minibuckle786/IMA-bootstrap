import { useNavigate } from "react-router-dom"

function LoginMain() {
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault()

        console.log("clicou no login")

        localStorage.setItem("usuario", "Emerson")

        console.log("salvou:", localStorage.getItem("usuario"))

        navigate("/dashboard")
    }

    return (
        <form onSubmit={handleLogin}>
            <button type="submit">Entrar</button>
        </form>
    )
}

export default LoginMain