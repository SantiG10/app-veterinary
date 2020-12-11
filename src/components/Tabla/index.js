import React from "react";
import Encabezado from "./Encabezado";
import Fila from "./Fila";
import "./Tabla.css";

function Tabla({ entidades = [], editarEliminarEntidad = () => { }, columnas = [] }) {
  //const columnas = entidades.length > 0 ? Object.keys(entidades[0]) : [];
  if (columnas.length === 0) return <p className="no-registros"> No hay registros </p>;
  return (
    <table className="table table-stripped table-hover">
      <Encabezado columnas={columnas} />
      <tbody id="lista-mascotas">
        {entidades.map((entidad, index) => (
          <Fila key={`fila-${index}`} index={index} entidad={entidad} editarEliminarEntidad={editarEliminarEntidad} columnas={columnas} />
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;