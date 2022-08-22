import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './Componentes/Inicio';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>COLEGÍO JOSÉ MANUEL-RESTREPO - ANTIOQUIA - ARBOLETES</h1>
        <hr />
        <Switch>
          <Route path='/' exact>
            <Inicio/>
          </Route>
          <Route path='/boletin' exact>
            BOLETIN INFORMATIVO Y EDUCATIVO
          </Route>
          <Route path='/certificados' exact>
            CERTIFICADO ESCOLAR
          </Route>
          <Route path='/certificados/notas' exact>
            CERTIFICADO DE NOTAS
          </Route>
          <Route path='/constancias' exact>
            CONSTANCIAS
          </Route>
          <Route path='/preguntas' exact>
            PREGUNTAS FRECUENTES
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
