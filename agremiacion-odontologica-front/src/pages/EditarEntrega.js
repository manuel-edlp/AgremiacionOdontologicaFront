import React, { Link, useState } from 'react';
import '../App.css'; // Importa el archivo CSS para los estilos

const EditarEntrega = () => {
    const [odontologo, setOdontologo] = useState('');
    const [obraSocial, setObraSocial] = useState('');
    const [numeroInicio, setNumeroInicio] = useState('');
    const [numeroFinal, setNumeroFinal] = useState('');

    const handleBuscarOdontologo = (e) => {
        setOdontologo(e.target.value);
        // Aquí puedes agregar la lógica de búsqueda en respuesta a los cambios en el campo de búsqueda de odontólogo
    };

    const handleBuscarObraSocial = (e) => {
        setObraSocial(e.target.value);
        // Aquí puedes agregar la lógica de búsqueda en respuesta a los cambios en el campo de búsqueda de obra social
    };

    const handleCrearOdontologoNuevo = () => {
        // Lógica para crear un nuevo odontólogo
    };

    const handleCrearObraSocialNueva = () => {
        // Lógica para crear una nueva obra social
    };

    const handleSubmit = () => {
        // Lógica para manejar la presentación de los datos ingresados
    };

    return (
        <div>
        <h1>Editar Entrega Bono</h1>
        <div id="altaEntrega">
            <div>
                
                <div id='odontologo'>
                <h4>Odontólogo</h4>
                <input
                    type="text"
                    placeholder="Search..."
                    value={odontologo}
                    onChange={handleBuscarOdontologo}
                />
                </div>
                <Link to="/AltaOdontologo">
                <button onClick={handleCrearOdontologoNuevo}>+</button>
                </Link>
            </div>

            <div>
                <div id='obrasocial'>
                <h4>Obra Social</h4>
                <input
                    type="text"
                    placeholder="Buscar obra social"
                    value={obraSocial}
                    onChange={handleBuscarObraSocial}
                />
                </div>
                <button onClick={handleCrearObraSocialNueva}>+</button>
            </div>
            <div>
                <div id='desde'>
                    <h4>Desde</h4>
                    <input
                        type="number"
                        placeholder="Número de Inicio..."
                        value={numeroInicio}
                        onChange={(e) => setNumeroInicio(e.target.value)}
                    />
                </div>
                <div id='hasta'>
                    <h4>Hasta</h4>
                    <input
                        type="number"
                        placeholder="Número de Final..."
                        value={numeroFinal}
                        onChange={(e) => setNumeroFinal(e.target.value)}
                    />
                </div>
            </div>

            <button id="volver"><Link id='link' to="/EntregaDeBonos">Cancelar</Link></button>
            <button onClick={handleSubmit}><Link id='link' to="/EntregaDeBonos">Guardar</Link></button>
        </div>
    </div>
    );
}

export default EditarEntrega;