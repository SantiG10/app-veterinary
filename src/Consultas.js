import React from "react";
import Nav from "./components/Nav"

function Consultas () {
  return (
    <div>
      <div className="container">
        <Nav />
        <div className="actions-menu">
          <h1>Consultas</h1>
          <div className="actions-menu-content">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" id="btn-nuevo">
                Nueva
            </button>
            <div className="alert alert-danger alert-dismissible" role="alert">
                <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo!.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
          </div>
        </div>
        <table className="table table-stripped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Veterinaria</th>
              <th scope="col">Mascota</th>
              <th scope="col">Historia</th>
              <th scope="col">Diagnostico</th>
              <th scope="col">Fecha Creación</th>
              <th scope="col">Fecha Modificación</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody id="lista-consultas">
          </tbody>
        </table>
      </div>
      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Nueva Consulta</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
              <form id="form" className="needs-validation">
              <div className="modal-body">
                <div className="alert alert-danger alert-dismissible" role="alert" id="alert-datos">
                  <strong>Oops!</strong> Completa los datos.
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <input type="hidden" id="indice">
                <div className="form-row">
                  <div className="col">
                    <select id="mascota" className="form-control" placeholder="Seleccione" required>
                      <option selected disabled value="">Seleccionar mascota</option>
                    </select>
                  </div>
                    <div className="col">
                      <select id="veterinaria" className="form-control" placeholder="Seleccione" required>
                        <option selected disabled value="">Seleccionar veterinaria</option>
                      </select>
                    </div>
                </div>
                <div className="form-row">
                  <textarea id="historia" name="nombre" className="form-control" placeholder="Historia" required></textarea>
                </div>
                <div className="form-row">
                    <select id="diagnostico" className="form-control" placeholder="Seleccione" required>
                      <option selected disabled value="">Seleccionar diagnostico</option>
                      <option>Virus</option>
                      <option>Enfermedad general</option>
                      <option>Prurito de piel (sarna)</option>
                      <option>Moquillo</option>
                      <option>Trauma cafálico</option>
                      <option>Parvovirosis</option>
                    </select>
                  </div>
              </div>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                  <button type="submit" className="btn btn-primary" id="btn-guardar">Crear</button>
                </div>
            </form>
          </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Consultas;

