import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Boletin from './Componentes/boletin';
import Certificados from './Componentes/certificado';
import CertificadosNotas from './Componentes/cerificadoNotas';
import Constancia from './Componentes/Constancia';
import Preguntas from './Componentes/preguntas';
import imagen from './Componentes/img/ESCUDO.png'

function App() {
  return (
    <Router>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <img src={imagen} alt="" width="100" height="100" class="d-inline-block align-text-top"></img>
          <div class="position-absolute top-50 start-50 translate-middle">
            <a class="navbar-brand" href="#">
              COLEGÍO JOSÉ MANUEL-RESTREPO - ANTIOQUIA - ARBOLETES
            </a>
          </div>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
            <button class="btn btn-outline-warning" type="submit">🔍</button>
          </form>
        </div>
      </nav>
      <div className="container">
        <br></br>
        <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group" role="group" aria-label="First group">
            <Link to="/" class="btn btn-light">INICIO</Link>
            <Link to="/boletin" class="btn btn-light">BOLETIN INFORMATIVO Y EDUCATIVO</Link>
            <Link to="/certificados" class="btn btn-light">CERTIFICADO ESCOLAR</Link>
            <Link to="/certificados/notas" class="btn btn-light">CERTIFICADO DE NOTAS</Link>
            <Link to="/constancias" class="btn btn-light"> CONSTANCIAS</Link>
            <Link to="/preguntas" class="btn btn-light">PREGUNTAS FRECUENTES</Link>
          </div>
        </div>
        <br></br>
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
