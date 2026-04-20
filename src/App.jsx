import { Routes, Route } from "react-router-dom"

// Inicio Publico

import HeaderPublic from "./components/HeaderPublic/HeaderPublic"
import Footer from "./components/Footer/Footer"
import HomeMain from "./pages/Home/HomeMain"
import CadastroMain from "./pages/Cadastro/CadastroMain"
import Login from "./pages/Login/LoginMain"
import "./App.css"

// Fim Publico

// Inicio Private

import PrivateRoute from "./routes/PrivateRoute"
import Dashboard from "./pages/Dashboard/DashboardMain"

// Fim Private

function App() {
    return (
        <div className="d-flex flex-column justify-content-between app">
            <HeaderPublic />

            <Routes>
                <Route path="/" element={<HomeMain />} />
                <Route path="/CadastroMain" element={<CadastroMain />} />
                <Route path="/Login" element={<Login />} />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>

            <Footer />
        </div>
    )
}

export default App