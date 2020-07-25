import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import "./Modal.css";

function Modal({
  cambiarModal = () => {},
  manejarInput = () => {},
  crearEntidad = () => {},
  objeto = {},
  btnModal = "",
  children = [],
  titulo = "",
}) {
  return (
    <>
      <div className="modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ModalHeader cambiarModal={cambiarModal} titulo={titulo} btnModal={btnModal}/>
            <div className="modal-body">
              <form id="form">
                {/* <div className="form-row">
                  <div className="col">
                    <Select
                      nombreCampo="tipo"
                      options={tiposMascota}
                      onChange={manejarInput}
                      placeholder="Tipo Animal"
                      value={objeto.tipo}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <Input
                      nombreCampo="nombre"
                      tipo="text"
                      onInput={manejarInput}
                      placeholder="Nombre"
                      value={objeto.nombre}
                    />
                  </div>
                  <div className="col">
                    <Select
                      options={duenos}
                      nombreCampo="dueno"
                      onChange={manejarInput}
                      placeholder="Dueño"
                      value={objeto.dueno}
                    />
                  </div>
                </div> */}
                <div className="form-row">{children}</div>
              </form>
            </div>
            <ModalFooter
              cambiarModal={cambiarModal}
              crearEntidad={crearEntidad}
              btnModal={btnModal}
            />
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default Modal;