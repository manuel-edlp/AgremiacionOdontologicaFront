import { Outlet } from "react-router-dom";
import '../App.css'
// Outlet es donde se renderizara cada componente
const Layout = () =>{
    return (
    <div id="titulo-principal">
        <Outlet/> 
    </div>
    );
}

export default Layout