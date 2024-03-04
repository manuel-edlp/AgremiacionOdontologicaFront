import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import '../Entrega.css';


const EntregaDeBonos = ({ apiData }) => {

    const [bonos, setBonos] = useState([]);
    const [filtroOdontologo, setFiltroOdontologo] = useState('');
    const [filtroObraSocial, setFiltroObraSocial] = useState('');
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false); // Estado para controlar la visibilidad del mensaje de confirmación
    const [idBonoAEliminar, setIdBonoAEliminar] = useState(null); // Estado para almacenar el ID del bono a eliminar

    useEffect(() => {
        axios.get('https://localhost:5002/Agremiacion/Entrega/Listar')
            .then((response) => { setBonos(response.data); })
            .catch((error) => { console.error(error); })
    }, [apiData]);

    const borrar = (id) => {
        setIdBonoAEliminar(id); // Almacenar el ID del bono a eliminar
        setMostrarConfirmacion(true); // Mostrar el mensaje de confirmación
    };

    const confirmarBorrado = () => {
        axios.delete(`https://localhost:5002/Agremiacion/Entrega/${idBonoAEliminar}`)
            .then((response) => {
                // Actualizar la lista de bonos después de borrar uno
                setBonos(bonos.filter(bono => bono.id !== idBonoAEliminar));
                console.log("Borrado exitoso");
                setMostrarConfirmacion(false); // Ocultar el mensaje de confirmación después de borrar
            })
            .catch((error) => {
                console.error("Error al borrar:", error);
            });
    };

    const cancelarBorrado = () => {
        setMostrarConfirmacion(false); // Ocultar el mensaje de confirmación si se cancela el borrado
    };

    const handleFiltroOdontologoChange = (event) => {
        setFiltroOdontologo(event.target.value);
    };

    const handleFiltroObraSocialChange = (event) => {
        setFiltroObraSocial(event.target.value);
    };

    const bonosFiltrados = bonos.filter((bono) => {
        const odontologoCompleto = `${bono?.odontologoNombre} ${bono?.odontologoApellido}`.toLowerCase();
        const filtroOdontologoLowerCase = filtroOdontologo.toLowerCase();
        const filtroObraSocialLowerCase = filtroObraSocial.toLowerCase();

        return odontologoCompleto.includes(filtroOdontologoLowerCase) &&
               bono?.obraSocial?.toLowerCase().includes(filtroObraSocialLowerCase);
    });

    return (
        <div className="lista">
            <h2 id="lista-titulo">Entrega de Bonos</h2>
            <div id="centrar">

                <div id='odontologo'>
                    <h4>Odontólogo</h4>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={filtroOdontologo}
                        onChange={handleFiltroOdontologoChange}
                    />
                </div>

                <div id='obrasocial'>
                    <h4>Obra Social</h4>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={filtroObraSocial}
                        onChange={handleFiltroObraSocialChange}
                    />
                </div>

                <Link id='añadirentrega' to="/AñadirEntrega">
                    <button id="botoncito">Añadir entrega</button>
                </Link>
            </div>
             {/* Div para el mensaje de confirmación */}
             {mostrarConfirmacion && (
                <div className="confirmacion">
                    <p>¿Estás seguro de que quieres eliminar este bono?</p>
                    <button id="eliminar" onClick={confirmarBorrado}>Eliminar</button>
                    <button id="cancelar" onClick={cancelarBorrado}>Cancelar</button>
                </div>
            )}
            <br></br>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Odontologo</th>
                        <th scope="col">Obra Social</th>
                        <th scope="col">Desde el Nº</th>
                        <th scope="col">Hasta el Nº</th>
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
                            <td id="acciones">
                                <Link to="/EditarEntrega" state={{ id: bono.id }}>
                                    <button>Editar</button>
                                </Link>
                                <button onClick={() => borrar(bono.id)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button id="volver"><Link id='link' to="/">Volver</Link></button>

           

        </div>
    );
}

export default EntregaDeBonos;
