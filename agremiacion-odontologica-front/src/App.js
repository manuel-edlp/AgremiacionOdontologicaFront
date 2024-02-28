import './App.css';
import {Routes,Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import ListaBonos from './pages/ListaBonos';
import ListaBonosEntregados from './pages/ListaBonosEntregados';
import AñadirEntrega from './pages/AñadirEntrega';
import Inicio from './pages/Inicio';
import React, { useEffect, useState, useRef } from 'react';


function App() {
  const [apiData, setApiData] = useState([]);
  const handleDataUpload = (data) => {
    // Esta función se llama cuando se cargan datos en la API
    // Aquí puedes realizar cualquier acción adicional si es necesario
    // Luego, actualiza el estado apiData para desencadenar la recarga de la tabla.
    setApiData([...apiData, data]);
  };

  return (
    <div>
      <h1>Agremiacion Odontologica</h1>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Inicio/>}/>
          <Route path="ListaBonos" element={<ListaBonos/>}/>
          <Route path="ListaBonosEntregados" element={<ListaBonosEntregados apiData={apiData}/>}/>
          <Route path="AñadirEntrega" element={<AñadirEntrega/>}/>
          <Route path="*" element={<Inicio/>}/> 

        </Route>
      </Routes>
    </div>
  );
}

export default App;

// el * es para decir que componente mostrar cuando en la url pongan cualquier cosa