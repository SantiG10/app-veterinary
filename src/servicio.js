const API_URL = "https://backend-veterinaria.now.sh";
//const API_URL = "http://localhost:8000";

export const listarEntidad = async ({ entidad = "mascotas" }) => {
  try {
    const respuesta = await fetch(`${API_URL}/${entidad}`);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log({ error });
  }
};

export const crearEditarEntidad = async ({
  entidad = "mascotas",
  objeto = {},
  method = "POST",
  idObjeto = null }) => {
  try {
    let url = `${API_URL}/${entidad}`;
    if (method === "PUT" && (idObjeto || idObjeto === 0)) {
      url += `/${idObjeto}`;
      method = "PUT";
    }
    const respuesta = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objeto),
      mode: "cors"
    });
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log({ error });
  }
};

export const eliminarEntidad = async ({ entidad = "mascotas", idObjeto = null, salsasas = null, asasas = null }) => {
  try {
    if (idObjeto || idObjeto === 0) {
      let url = `${API_URL}/${entidad}/${idObjeto}`;
      const respuesta = await fetch(url, {
        method: 'DELETE'
      });
      if (respuesta.ok) {
        return respuesta;
      }
    }
    throw new Error("idObjeto no puede estar vacio");
  } catch (error) {
    console.log({ error });
  }
};

export const obtenerUno = async ({ entidad = "mascotas", idObjeto = null }) => {
  try {
    const respuesta = await fetch(`${API_URL}/${entidad}/${idObjeto}`);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log({ error });
  }
};