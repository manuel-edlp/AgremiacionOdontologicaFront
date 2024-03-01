import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes,Route,Link} from 'react-router-dom';
import AñadirEntrega from './AñadirEntrega'; // Importa AñadirEntrega sin el directorio 'pages'
import '../Entrega.css'


const ListaBonos = ({ apiData }) => {

    const [bonos, setBonos] = useState([]);
    const [filtroOdontologo, setFiltroOdontologo] = useState('');
    const [filtroObraSocial, setFiltroObraSocial] = useState('');

    useEffect(() => {
        axios.get('https://localhost:5002/Agremiacion/Entrega/Listar')
            .then((response) => { setBonos(response.data); })
            .catch((error) => { console.error(error); })
    }, [apiData]);

    const handleFiltroOdontologoChange = (event) => {
        setFiltroOdontologo(event.target.value);
    };

    const handleFiltroObraSocialChange = (event) => {
        setFiltroObraSocial(event.target.value);
    };

    const bonosFiltrados = bonos.filter((bono) => {
        return (bono?.odontologo?.toLowerCase()  || '').includes(filtroOdontologo.toLowerCase()) &&
               (bono?.obraSocial?.toLowerCase()  || '').includes(filtroObraSocial.toLowerCase());
    });

    return (
        <div className="lista">
            <h2 id="lista-titulo">Entrega de Bonos</h2>
            <div>

                <div id='odontologo'>
                <h4>Odontólogo</h4>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filtroOdontologo}
                    onChange={handleFiltroOdontologoChange}
                />
                </div>

                <div id='obrasocial'>
                <h4>Obra Social</h4>                
                <input
                    type="text"
                    placeholder="Search..."
                    value={filtroObraSocial}
                    onChange={handleFiltroObraSocialChange}
                />
                </div>

                <Link id='añadirentrega' to="/AñadirEntrega">
                    <button>Añadir entrega</button>
                </Link>
            </div>
            <br></br>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Odontologo</th>
                        <th scope="col">Obra Social</th>
                        <th scope="col">Inicio</th>
                        <th scope="col">Final</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {bonosFiltrados.map((bono) => (
                        <tr key={bono.id}>
                            <td>{bono.odontologoNombre} {bono.odontologoApellido}</td>
                            <td>{bono.obraSocial}</td>
                            <td>{bono.inicio}</td>
                            <td>{bono.final}</td>
                            <button>Editar</button>
                            <button>Borrar</button>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button id="volver"><Link id='link' to="/">VOLVER</Link></button>

        </div>
    );
}

export default ListaBonos;
