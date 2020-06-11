import {
  CARGAR_RUTAS,
  CREAR_RUTA,
  GUARDAR_COORDENADAS,
  CARGAR_RUTAS_DE_PARTICIPANTES,
  ASIGNAR_PARTICIPANTES,
  DEJAR_DE_PARTICIPAR,
  CARGAR_MIS_RIDES,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case CARGAR_RUTAS:
      return {
        ...state,
        rutas: action.payload,
      };

    case CREAR_RUTA:
      return {
        ...state,
        rutas: [...state.rutas, action.payload],
        rutaId: action.payload.id,
      };

    case GUARDAR_COORDENADAS:
      return {
        ...state,
        coordenadas: action.payload,
      };

    case CARGAR_RUTAS_DE_PARTICIPANTES:
      return {
        ...state,
        listaparticipantes: action.payload,
      };

    case ASIGNAR_PARTICIPANTES:
      return {
        ...state,
        listaparticipantes: [...state.listaparticipantes, action.payload],
      };

    case DEJAR_DE_PARTICIPAR:
      return {
        ...state,
        listaparticipantes: state.listaparticipantes.filter(
          (ruta) => ruta !== action.payload
        ),
      };

    case CARGAR_MIS_RIDES:
      return {
        ...state,
        misRides: [...state.misRides, action.payload],
      };

    default:
      return state;
  }
};
