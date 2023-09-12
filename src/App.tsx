import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalle from "./paginas/Detalle.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";
import { GET_CHARACTERS } from './store/characters/thunks';
import { useAppDispatch } from './store';
import { GET_DATA } from './store/paginator/thunks';

function App() {

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(GET_CHARACTERS());
    dispatch(GET_DATA(''));
}, [])

  return (
    <div className="App">
      <Encabezado />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalle/:id" element={<PaginaDetalle />} />
      </Routes>
    </div>
  );
}

export default App;