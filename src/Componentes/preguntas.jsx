import React from 'react'

const preguntas = () => {
    return (
        <div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">¿ Cual es tu pregunta ?</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escribe tu pregunta'></textarea>
                <br />
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-dark" type="button">Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default preguntas