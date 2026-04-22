import HeaderPublic from "../HeaderPublic/HeaderPublic"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"

function PublicLayout() {
    return (
        <>
            <HeaderPublic />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default PublicLayout