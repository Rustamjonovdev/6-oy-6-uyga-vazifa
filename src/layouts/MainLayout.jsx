// react-router-dom
import { Outlet } from "react-router-dom";

// componenets
import Navbar from "../components/Navbar"

function MainLayout() {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default MainLayout