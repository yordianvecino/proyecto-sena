import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Boletin from './Componentes/boletin';
import Certificados from './Componentes/certificado';
import CertificadosNotas from './Componentes/cerificadoNotas';
import Constancia from './Componentes/Constancia';
import Preguntas from './Componentes/preguntas';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>COLEGÍO JOSÉ MANUEL-RESTREPO - ANTIOQUIA - ARBOLETES</h1>
        <hr />
        <Routes>
          <Route path='/' element={<Inicio />} exact></Route>
          <Route path='/boletin' element={<Boletin />}></Route>
          <Route path='/certificados' element={<Certificados />}></Route>
          <Route path='/certificados/notas' element={<CertificadosNotas />}></Route>
          <Route path='/constancias' element={<Constancia />}></Route>
          <Route path='/preguntas' element={<Preguntas />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
