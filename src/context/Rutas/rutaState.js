import React, { useReducer } from "react";
import RutaContext from "./rutaContext";
import RutaReducer from "./rutaReducer";
import clienteAxios from "../../config/axios";

import {
  CREAR_RUTA,
  CARGAR_RUTAS,
  GUARDAR_COORDENADAS,
  CREAR_COORDENADA,
  ASIGNAR_PARTICIPANTES,
  CARGAR_RUTAS_DE_PARTICIPANTES,
  DEJAR_DE_PARTICIPAR,
} from "../../types/index";

const RutaState = (props) => {
  const initialState = {
    rutaId: null,
    rutas: [],
    coordenadas: [],
    listaparticipantes: [],
  };
  const [state, dispatch] = useReducer(RutaReducer, initialState);

  //Funciones
  //Obtener a todas las rutas que puede acceder el usuario
  const cargarRutas = async (idActual) => {
    try {
      const resultado = await clienteAxios.get(`/api/Unirse/${idActual}`);

      dispatch({
        type: CARGAR_RUTAS,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Obtener todos los rides del participante
  const cargarRides = async (participante) => {
    try {
      const resultado = await clienteAxios.get(
        `/api/UnirseUsuario/${participante}`
      );
      console.log(resultado.data);

      dispatch({
        type: CARGAR_RUTAS_DE_PARTICIPANTES,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Crear una ruta nueva
  const crearRuta = async (ruta) => {
    try {
      const resultado = await clienteAxios.post("/api/Rutas", ruta);
      for (var i = 0; i < state.coordenadas.length; i++) {
        await clienteAxios.post("/api/Coordenadas", {
          ruta: resultado.data.id,
          latitud: state.coordenadas[i].lat,
          longitud: state.coordenadas[i].lng,
        });
      }

      dispatch({
        type: CREAR_RUTA,
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Crear coordenadas con el id de ruta asignado
  const crearCoordenada = async (coordenadas) => {
    try {
      const resultado = await clienteAxios.post(
        "/api/Coordenadas",
        coordenadas
      );

      dispatch({
        type: CREAR_COORDENADA,
        payload: coordenadas,
      });
      console.log(resultado.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Guarda las coordenadas en el state
  const guardarCoordenadas = async (coordenadas) => {
    try {
      dispatch({
        type: GUARDAR_COORDENADAS,
        payload: coordenadas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Asigna el usuario en sesion a la ruta seleccionada.
  const participarRide = async (asignacion) => {
    try {
      const resultado = await clienteAxios.post("/api/Unirse", asignacion);

      dispatch({
        type: ASIGNAR_PARTICIPANTES,
        payload: resultado.data.ruta,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Elimina el usuario-ruta cuando se deja de participar
  const dejarParticipar = async (idRuta, idUsuario) => {
    try {
      const resultado = await clienteAxios.delete(
        `api/Unirse/${idRuta}/${idUsuario}`
      );
      dispatch({
        type: DEJAR_DE_PARTICIPAR,
        payload: resultado.data.ruta,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RutaContext.Provider
      value={{
        rutaId: state.rutaId,
        coordenadas: state.coordenadas,
        rutas: state.rutas,
        listaparticipantes: state.listaparticipantes,
        cargarRutas,
        crearRuta,
        guardarCoordenadas,
        crearCoordenada,
        participarRide,
        cargarRides,
        dejarParticipar,
      }}
    >
      {props.children}
    </RutaContext.Provider>
  );
};

export default RutaState;
