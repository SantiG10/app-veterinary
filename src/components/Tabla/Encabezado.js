import React from "react";
import "./Encabezado.css";

function Encabezado(props) {
  if (props.columnas.length === 0) return false;
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        {props.columnas.map((columna, index) => (
          <th key={`titulo-${index}`} scope="col">
            { changeText(columna) }
          </th>
        ))}
        <th className="th-accions" scope="col">Acciones</th>
      </tr>
    </thead>
  );
}

function changeText(string){
  if(string === "dueno") {
    return string.replace("n", "ñ");
  } else if (string === "fechaCreacion") {
    return "Fecha creación"
  } else if (string === "fechaEdicion") {
    return "Fecha edición"
  } else {
    return string;
  }
}

export default Encabezado;