import { CARGAR_TOPS, CARGAR_COORDENADAS } from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case CARGAR_TOPS:
      return {
        ...state,
        tops: action.payload,
      };
    case CARGAR_COORDENADAS:
      return {
        ...state,
        coordenadas: action.payload,
      };
    default:
      return state;
  }
};
