import { Link } from "react-router-dom";
import '../App.css'

const Inicio = () =>{
    return (<div>
                    <button className="listaBonos-boton"><Link id='link' to="/">BONOS</Link></button>
                    <button className="entregados-boton"><Link id='link' to="/entregaDeBonos">ENTREGA DE BONOS</Link></button>
            </div>
    );  
}

export default Inicio