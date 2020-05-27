import {
  CARGAR_USUARIOS,
  SEGUIR_CUENTA,
  ELIMINAR_SEGUIDO,
  CARGAR_SEGUIDOS,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case CARGAR_USUARIOS:
      return {
        ...state,
        usuarios: action.payload,
      };

    case SEGUIR_CUENTA:
      return {
        ...state,
        seguidos: [...state.seguidos, action.payload],
      };

    case ELIMINAR_SEGUIDO:
      return {
        ...state,
        seguidos: state.seguidos.filter(
          (seguido) => seguido !== action.payload
        ),
      };

    case CARGAR_SEGUIDOS:
      return {
        ...state,
        seguidos: action.payload,
      };
    default:
      return state;
  }
};
