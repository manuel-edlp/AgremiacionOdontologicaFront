import { Outlet ,Link} from "react-router-dom";
// Outlet es donde se renderizara cada componente
const Layout = () =>{
    return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <button><Link to="/ListaBonos">Lista de Bonos</Link></button>
                </li>
                <li>
                    <button><Link to="/ListaBonosEntregados">Lista de Bonos Entregados</Link></button>
                </li>
                
            </ul>
        </nav>
        <hr />
        <Outlet/> 
    </div>
    );
}

export default Layout