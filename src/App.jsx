import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./components/Layout/PublicLayout";
import PrivateLayout from "./components/Layout/PrivateLayout";

// Publico
import HomeMain from "./pages/Home/HomeMain";
import CadastroMain from "./pages/Cadastro/CadastroMain";
import Login from "./pages/Login/LoginMain";
import Triagem from "./pages/Triagem/Triagem"

// Privado 
import Dashboard from "./pages/Admin/Dashboard/DashboardMain";
import Categoria from "./pages/Admin/CategoriaAdmin/Categoria";
import CategoriaDetalhes from "./pages/Admin/CategoriaDetalhe/CategoriaDetalhe";
import ServiceVisualizar from "./pages/Admin/ServiceVisualizar/ServiceVisualizar";
import ServiceEditar from "./pages/Admin/ServiceEditar/ServiceEditar";
import ServicePerguntas from "./pages/Admin/ServicePerguntas/ServicePerguntas";
import EditarPerguntas from "./pages/Admin/ServicePerguntas/EditarPerguntas/EditarPerguntas"
import ResultadoFinal from "./pages/Admin/AdminResultado/AdminResultado";

// Proteção
import PrivateRoute from "./routes/PrivateRoute";

function App() {
    return (
        <Routes>

            {/*ROTAS PÚBLICAS */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<HomeMain />} />
                <Route path="/cadastro" element={<CadastroMain />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Triagem" element={<Triagem />} />
                <Route path="/ResultadoFinal/:id" element={<ResultadoFinal />} />

            </Route>

            {/* ROTAS PRIVADAS */}
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
                <Route path="/ServiceVisualizar" element={< ServiceVisualizar />} />
                <Route path="/ServiceEditar" element={<ServiceEditar />} />
                <Route path="ServicePerguntas" element={<ServicePerguntas />} />
                <Route path="/EditarPerguntas" element={<EditarPerguntas />} />
                <Route path="/ResultadoFinal" element={<ResultadoFinal />} />
            </Route>

        </Routes>
    );
}

export default App;