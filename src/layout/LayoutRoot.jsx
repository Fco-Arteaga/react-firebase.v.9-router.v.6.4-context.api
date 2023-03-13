import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutRoot = () => {
    return (
    <>
        < Navbar  /*envabezado  de la pagina iconos para desplazarse */ />
        <Outlet /*cuerpo de la pagina */ />
        <p> Footer  parte inferior de la pagina  </p>
    </>
    )
 }
 export default LayoutRoot