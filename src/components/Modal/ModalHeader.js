import React from "react";
import "./ModalHeader.css";

function ModalHeader({ cambiarModal = () => {}, titulo = "", btnModal = "" }) {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalCenterTitle">
        {btnModal} {titulo}
      </h5>
      <button
        type="button"
        className="close"
        data-dismiss="modarl"
        aria-label="Close"
        onClick={cambiarModal}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default ModalHeader;