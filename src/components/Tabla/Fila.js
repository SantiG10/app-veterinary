import React from "react";
import BotonAccion from "../BottonAccion";
import "./Fila.css";

const evaluarCampo = ({ entidad, columna }) => {
  if (columna === "veterinaria") {
    return `${entidad[columna].nombre}`;
  }
  if (columna === "mascota") {
    return `${entidad[columna].nombre} - ${entidad[columna].tipo}`;
  }
  if (columna === "fechaCreacion" || columna === "fechaEdicion") {
    return entidad[columna].split('T')[0];
  }
  return entidad[columna];
};

function Fila({ index, entidad, editarEliminarEntidad = () => {}, columnas = [] }) {
  return (
    <tr>
      <th scope="row">{index}</th>
      {columnas.map((columna, _index) => (
        <td key={`col-${columna}-${_index}`}>
          {evaluarCampo({ entidad, columna })}
        </td>
      ))}
      <td>
        <div className="btn-group btn-accions" role="group" aria-label="Basic example">
          <BotonAccion tipo="editar" onClick={editarEliminarEntidad} index={index}/>
          <BotonAccion tipo="eliminar" onClick={editarEliminarEntidad} index={index}/>
        </div>
      </td>
    </tr>
  );
}

export default Fila;

/*
      <th scope="row">{index}</th>
      <td>{entidad[index]}</td>
      <td>{entidad.nombre}</td>
      <td>{entidad.dueno}</td>
*/