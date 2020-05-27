import React, { useReducer } from "react";
import AmigoContext from "./amigoContext";
import AmigoReducer from "./amigoReducer";
import clienteAxios from "../../config/axios";

import {
  CARGAR_USUARIOS,
  SEGUIR_CUENTA,
  ELIMINAR_SEGUIDO,
  CARGAR_SEGUIDOS,
} from "../../types/index";

const AmigoState = (props) => {
  const initialState = {
    usuarios: [],
    seguidos: [],
  };

  const [state, dispatch] = useReducer(AmigoReducer, initialState);

  //Funciones

  //Obtener usuarios
  const obtenerUsuarios = async () => {
    try {
      const resultado = await clienteAxios.get("/api/Usuarios");

      dispatch({
        type: CARGAR_USUARIOS,
        payload: resultado.data,
      });
    } catch (error) {
      console.log("error " + error);
    }
  };

  //Obtener seguidos
  const cargarSeguidos = async (cuenta) => {
    try {
      const resultado = await clienteAxios.get("/api/Amigos", cuenta);
      dispatch({
        type: CARGAR_SEGUIDOS,
        payload: resultado.data,
      });
    } catch (error) {
      console.log("error " + error);
    }
  };

  //Seguir un usuario
  const seguirUsuario = async (cuenta) => {
    try {
      const resultado = await clienteAxios.post("/api/Amigos", cuenta);
      dispatch({
        type: SEGUIR_CUENTA,
        payload: resultado.data.amigo,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Dejar de seguir
  const dejarDeSeguir = async (id, amigoId) => {
    try {
      await clienteAxios.delete(`/api/Amigos/${id}/${amigoId}`);
      dispatch({
        type: ELIMINAR_SEGUIDO,
        payload: amigoId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AmigoContext.Provider
      value={{
        usuarios: state.usuarios,
        seguidos: state.seguidos,
        obtenerUsuarios,
        seguirUsuario,
        dejarDeSeguir,
        cargarSeguidos,
      }}
    >
      {props.children}
    </AmigoContext.Provider>
  );
};

export default AmigoState;
