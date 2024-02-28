import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes,Route,Link} from 'react-router-dom';
import AñadirEntrega from './AñadirEntrega'; // Importa AñadirEntrega sin el directorio 'pages'


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
        return bono.odontologo.toLowerCase().includes(filtroOdontologo.toLowerCase()) &&
               bono.obraSocial.toLowerCase().includes(filtroObraSocial.toLowerCase());
    });

    return (
        <div className="lista">
            <h2 id="lista-titulo">Lista de Bonos Entregados</h2>
            <div>
                <input
                    type="text"
                    placeholder="Filtrar por odontólogo"
                    value={filtroOdontologo}
                    onChange={handleFiltroOdontologoChange}
                />
                <input
                    type="text"
                    placeholder="Filtrar por obra social"
                    value={filtroObraSocial}
                    onChange={handleFiltroObraSocialChange}
                />
                <Link to="/AñadirEntrega">
                    <button>Añadir entrega</button>
                </Link>
            </div>
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
                            <td>{bono.odontologo}</td>
                            <td>{bono.obraSocial}</td>
                            <td>{bono.inicio}</td>
                            <td>{bono.final}</td>
                            <button>Editar</button>
                            <button>Borrar</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaBonos;
