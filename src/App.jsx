import HeaderPublic from "../../ima-front/src/components/HeaderPublic/HeaderPublic"
import HomeMain from "./pages/Home/HomeMain"
import Footer from "../../ima-front/src/components/Footer/Footer"
import "./App.css"

function App() {
    return (
        <div className="d-flex flex-column justify-content-between app">
            <HeaderPublic />
            <HomeMain />
            <Footer />

        </div>
    )

}

export default App
