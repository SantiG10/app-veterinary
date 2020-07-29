
import React, { Component } from "react";
import ActionsMenu from "./components/ActionsMenu";
import Tabla from "./components/Tabla";
import Modal from "./components/Modal";
import { listarEntidad, crearEditarEntidad, eliminarEntidad, obtenerUno } from "./servicio";
import ComponentCampo from "./components/ComponentCampo";

const opcionesIniciales = {
  tipo: [
    { valor: "Perro", etiqueta: "Perro" },
    { valor: "Gato", etiqueta: "Gato" },
    { valor: "Pájaro", etiqueta: "Pájaro" },
    { valor: "Otro", etiqueta: "Otro" },
  ],
  diagnostico: [
    { valor: "Virus", etiqueta: "Virus" },
    { valor: "Enfermedad general", etiqueta: "Enfermedad general" },
    { valor: "Prurito de piel (sarna)", etiqueta: "Prurito de piel (sarna)" },
    { valor: "Moquillo", etiqueta: "Moquillo" },
    { valor: "Trauma cefálico", etiqueta: "Trauma cefálico" },
    { valor: "Parvovirosis", etiqueta: "Parvovirosis" },
  ],
};

class Pagina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostraModal: false,
      entidades: [],
      objeto: {},
      idObjeto: null,
      method: "POST",
      btnModal: "Crear",
      columnas: [],
      options: opcionesIniciales,
    };
  }

  cambiarModal = (_evento, method = "POST", btnModal = "Crear", index = null) => {
    this.obtenerSelects(index);
    this.setState({ mostraModal: !this.state.mostraModal, method, btnModal });
  };

  listarElementosConsultas = async (entidad) => {
    const entidades = await listarEntidad({ entidad });
    let elements = [];
    if (Array.isArray(entidades) && entidades.length > 0) {
      entidades.forEach( ele => { 
        let obj = `{ "valor": "${ele.nombre}", "etiqueta": "${ele.nombre}"}`;
        elements.push(JSON.parse(obj));
      });
    }
    return elements;
  };

  listar = async () => {
    const { entidad } = this.props;
    const entidades = await listarEntidad({ entidad });
    let columnas = [];
    if (Array.isArray(entidades) && entidades.length > 0) {
      columnas = Object.keys(entidades[0]) || [];
    }
    this.setState({ entidades, columnas });
  };

  manejarInput = (evento) => {
    const { target: { value, name} } = evento;
    let { objeto } = this.state;
    objeto = { ...objeto, [name]: value };
    this.setState({ objeto });
  }

  crearEntidad = async () => {
    const { entidad } = this.props;
    let { objeto, method, idObjeto } = this.state;
    /*if(entidad === 'mascotas') {
      objeto['dueno'] = this.state.options['dueno'][objeto['dueno']].etiqueta;
    }*/
    await crearEditarEntidad( { entidad, objeto, method, idObjeto} );
    this.cambiarModal();
    this.listar();
  }

  obtenerSelects = async (index) => {
    const { entidad } = this.props;
    const { options } = this.state;
    let objeto;
    if(index !== null){
      objeto = await obtenerUno({ entidad, idObjeto: index });
    } else {
      objeto = {};
    }
    const mascotasPromise = listarEntidad({ entidad: "mascotas" });
    const veterinariasPromise = listarEntidad({ entidad: "veterinarias" });
    const duenosPromise = listarEntidad({ entidad: "duenos" });
    let [mascota, veterinaria, dueno] = await Promise.all([
      mascotasPromise,
      veterinariasPromise,
      duenosPromise,
    ]);
    mascota = mascota.map((_mascota, index) => ({
      valor: index.toString(),
      etiqueta: `${_mascota.nombre} (${_mascota.tipo})`,
    }));
    veterinaria = veterinaria.map((_veterinaria, index) => ({
      valor: index.toString(),
      etiqueta: `${_veterinaria.nombre}`,
    }));
    dueno = dueno.map((_dueno) => ({
      valor: `${_dueno.nombre} ${_dueno.apellido}`,
      etiqueta: `${_dueno.nombre} ${_dueno.apellido}`,
    }));
    const nuevasOpciones = { ...options, mascota, veterinaria, dueno };
    this.setState({ objeto, idObjeto: index, options: nuevasOpciones });
  }

  editarEliminarEntidad = async (_evento, index, tipo) => {
    if(tipo === "editar") {
      await this.obtenerSelects(index);
      this.cambiarModal(null, "PUT", "Editar", index);
    }else if(tipo === "eliminar") {
      const { entidad } = this.props;
      this.setState( {idObjeto: index}, async () => {
        let { idObjeto } = this.state;
        await eliminarEntidad( { entidad, idObjeto } );
        this.listar();  
      });  
    }
  }

  /*
  getOptions = (columnas) => {
    if (columnas === "tipo") {
      return tiposMascota;
    } else if(columnas === "dueno"){
      return duenos;
    } else if(columnas === "mascota"){
      return mascotas;
    } else if(columnas === "veterinaria"){
      return veterinarias;
    } else {
      return diagnostico;
    }
  }
  */

  async componentDidMount() {
    console.log("ComponentDidMount");
    this.listar();
    /*
    const { entidad } = this.props;
    if(entidad === "consultas") {
      veterinarias = await this.listarElementosConsultas("veterinarias");
      //veterinarias.forEach( element => element.valor = element.etiqueta );
      mascotas = await this.listarElementosConsultas("mascotas");
      //mascotas.forEach( element => element.valor = element.etiqueta );
    }
    */
  }

  // codigo del componente

  // el método render siempre debe ir de último
  render() {
    const { titulo = "Página sin título", entidad } = this.props;
    const { columnas, idObjeto, entidades, objeto, options } = this.state;
    return (
      <>
        <div className="container">
          <ActionsMenu cambiarModal={this.cambiarModal} titulo={titulo} />
          <Tabla entidades={entidades} editarEliminarEntidad={this.editarEliminarEntidad} columnas={columnas}/>
          { this.state.mostraModal && 
            <Modal 
              cambiarModal={this.cambiarModal} 
              manejarInput={this.manejarInput} 
              crearEntidad={this.crearEntidad}
              objeto={objeto}
              btnModal={this.state.btnModal}
              titulo={entidad}
              idObjeto={idObjeto}
            >
              {
              columnas.map((columna, index) => (
                <ComponentCampo
                  key={index}
                  manejarInput={this.manejarInput}
                  objeto={this.state.objeto}
                  nombreCampo={columna}
                  options={options}
                />
              ))
              }
            </Modal>
          }
        </div>
      </>
    );
  }
}

export default Pagina;