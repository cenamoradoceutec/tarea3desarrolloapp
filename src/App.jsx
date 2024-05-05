import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  let [nombre, setNombre] = useState('');
  let [resultado, setResultado] = useState(0);

  function saludar() {
    setNombre(nombre = document.getElementById("nombrecompleto").value);
  }

  function suma(){
    const a = parseInt(document.getElementById("primerNumero").value);
    const b = parseInt(document.getElementById("segundoNumero").value);
    setResultado(resultado = a + b);
  }
  function resta(){
    const a = parseInt(document.getElementById("primerNumero").value);
    const b = parseInt(document.getElementById("segundoNumero").value);
    setResultado(resultado = b - a );
  }

  return (
    <>
      <div>
        <div className="mb-3">
          <label className="form-label">Nombre Completo</label>
          <input type="text" className="form-control" id="nombrecompleto"></input>
        </div>
        <button className="btn btn-primary" onClick={() => saludar()}>
          Saludar
        </button>

        <div className="alert alert-primary mt-3" role="alert">
          {nombre} Felicidades te hemos saludado!!.
        </div>
      </div>

      <div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Primer Numero</label>
              <input type="number" className="form-control" id="primerNumero"></input>
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Segundo Numero</label>
              <input type="number" className="form-control" id="segundoNumero"></input>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">Resultado</label>
                <p>{resultado}</p>
            </div>
          </div>
          <div className="col-6">
            <button className="btn btn-primary" onClick={() => suma()}>
              Sumar
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-primary" onClick={() => resta()}>
              Restar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
