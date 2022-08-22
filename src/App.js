import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
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
        <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group" role="group" aria-label="First group">
            <Link to="/" class="btn btn-dark">INICIO</Link>
            <Link to="/boletin" class="btn btn-dark">BOLETIN INFORMATIVO Y EDUCATIVO</Link>
            <Link to="/certificados" class="btn btn-dark">CERTIFICADO ESCOLAR</Link>
            <Link to="/certificados/notas" class="btn btn-dark">CERTIFICADO DE NOTAS</Link>
            <Link to="/constancias" class="btn btn-dark"> CONSTANCIAS</Link>
            <Link to="/preguntas" class="btn btn-dark">PREGUNTAS FRECUENTES</Link>
          </div>
        </div>
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
