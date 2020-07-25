import React from "react";
import Input from "../Input";
import Select from "../Select";

function ComponenteCampo({
  manejarInput = () => {},
  objeto = {},
  nombreCampo = "",
  options = {},
}) {
  switch (nombreCampo) {
    case "tipo":
    case "mascota":
    case "veterinaria":
    case "diagnostico":
    case "dueno":
      return (
        <div className="col">
            <Select
              nombreCampo={nombreCampo}
              options={options[nombreCampo]}
              onChange={manejarInput}
              placeholder={nombreCampo}
              value={objeto[nombreCampo]}
            />
        </div>
      );

    case "nombre":
    case "apellido":
    case "direccion":
    case "telefono":
    case "documento":
    case "historia":
      return (
        <div className="col">
          <Input
            nombreCampo={nombreCampo}
            tipo="text"
            onInput={manejarInput}
            placeholder={nombreCampo}
            value={objeto[nombreCampo]}
          />
        </div>
      );
    default:
      return false;
  }
}

export default ComponenteCampo;