import React, { useReducer } from "react";
import TopContext from "./topContext";
import TopReducer from "./topReducer";
import clienteAxios from "../../config/axios";

import { CARGAR_TOPS, CARGAR_COORDENADAS } from "../../types/index";

const TopState = (props) => {
  const initialState = {
    tops: [],
    coordenadas: [],
  };

  const [state, dispatch] = useReducer(TopReducer, initialState);

  //funciones
  const cargarTops = async (tipo) => {
    try {
      const respuesta = await clienteAxios.get(`/api/Tops/${tipo}`);
      dispatch({
        type: CARGAR_TOPS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cargarCoordenadas = async () => {
    try {
      const respuesta = await clienteAxios.get(`/api/Coordenadas`);
      dispatch({
        type: CARGAR_COORDENADAS,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TopContext.Provider
      value={{
        tops: state.tops,
        coordenadas: state.coordenadas,
        cargarTops,
        cargarCoordenadas,
      }}
    >
      {props.children}
    </TopContext.Provider>
  );
};

export default TopState;
