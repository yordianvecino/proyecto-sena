import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Boletin from './Componentes/boletin';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>COLEGÍO JOSÉ MANUEL-RESTREPO - ANTIOQUIA - ARBOLETES</h1>
        <hr />
        <Routes>
          <Route path='/' element={<Inicio />} exact></Route>
          <Route path='/boletin' element={<Boletin />}></Route>
          <Route path='/certificados' element={<Inicio />}></Route>
          <Route path='/certificados/notas' element={<Inicio />}></Route>
          <Route path='/constancias' element={<Inicio />}></Route>
          <Route path='/preguntas' element={<Inicio />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
