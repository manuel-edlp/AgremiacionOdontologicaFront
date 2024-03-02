import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../AO.css';

const AltaObraSocial = () => {
    // Estados para los datos ingresados por el usuario
    const [nombre, setNombre] = useState('');
    const [codigo, setCodigo] = useState('');

    const handleSubmit = async () => {
        const datosObraSocial = {
            nombre,
            codigo
        };
    

        try {
            // Enviar datos del odontólogo al servidor
            const responseObraSocial = await axios.post('https://localhost:5002/Agremiacion/Odontologo/AltaObraSocial', datosObraSocial);
    
        } catch (error) {
            // Lógica para manejar un error
            console.error('Error al agregar obra social:', error);
    }
};

return (
    <div className="container">
        <div className="lista">
            <h1>Alta obra social</h1>
            <div className="row">
                <div>
                    <h4>Nombre</h4>
                    <input id='ao' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <h4>Codigo</h4>
                    <input id='ao' type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                </div>
            </div>
            
            <div className="button-container">
                <button id="volver"><Link id='link' to="/AñadirEntrega">Cancelar</Link></button>
                <button id="guardar" onClick={handleSubmit}><Link id='link' to="/EntregaDeBonos">Guardar</Link></button>
            </div>
        </div>
    </div>
);
};

export default AltaObraSocial