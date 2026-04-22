import { Outlet } from "react-router-dom";
import HeaderPrivate from "../HeaderPrivate/HeaderPrivate";

function PrivateLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">

            {/* Header do usuário logado */}
            <HeaderPrivate />

            {/* Conteúdo dinâmico */}
            <main className="p-4 w-100">
                <Outlet />
            </main>
        </div>
    );
}

export default PrivateLayout;