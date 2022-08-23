import React from 'react'
import imagen from './img/pdf.gif'

const certificado = () => {
  return (
    <div>
      <br />
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <div className='p-4'>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                  Solicite certificado
                </label>
              </div>
              <img src={imagen} alt="" width="200" height="200" class="d-inline-block align-text-top "></img>
            </div>
            <div class="card-body">
              <h5 class="card-title">Certificado de Escolar</h5>
              <a href="#" class="btn btn-primary">Descargar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default certificado