import { Outlet } from "react-router-dom";
import Navbar from "./Componants/Navbar/Navbar.jsx";
import Footer from "./Componants/Footer/Footer.jsx";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}