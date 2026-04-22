import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./components/Layout/PublicLayout";
import PrivateLayout from "./components/Layout/PrivateLayout";

// Publico
import HomeMain from "./pages/Home/HomeMain";
import CadastroMain from "./pages/Cadastro/CadastroMain";
import Login from "./pages/Login/LoginMain";

// Privado 
import Dashboard from "./pages/Dashboard/DashboardMain";
import Categoria from "./pages/Admin/CategoriaAdmin/Categoria";
import CategoriaDetalhes from "./pages/Admin/CategoriaDetalhe/CategoriaDetalhe";

// Proteção
import PrivateRoute from "./routes/PrivateRoute";

function App() {
    return (
        <Routes>

            {/* 🌐 ROTAS PÚBLICAS */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<HomeMain />} />
                <Route path="/cadastro" element={<CadastroMain />} />
                <Route path="/login" element={<Login />} />
            </Route>

            {/* 🔐 ROTAS PRIVADAS */}
            <Route
                element={
                    <PrivateRoute>
                        <PrivateLayout />
                    </PrivateRoute>
                }
            >
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Categoria" element={<Categoria />} />
                <Route path="/CategoriaDetalhes" element={<CategoriaDetalhes />} />
            </Route>

        </Routes>
    );
}

export default App;