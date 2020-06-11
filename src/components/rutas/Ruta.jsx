import React, { useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import rutaContext from "../../context/Rutas/rutaContext";

const Ruta = ({ ruta, usuarioSesion }) => {
  const rutasContext = useContext(rutaContext);
  const { listaparticipantes, participarRide, dejarParticipar } = rutasContext;

  const formato = (texto) => {
    var aux = texto.replace("T", "-");
    aux = aux.replace(/:/g, "-");
    var fecha = aux.split("-");

    return fecha[2] + "-" + fecha[1] + "-" + fecha[0];
  };

  const participar = () => {
    const participante = {
      ruta: ruta.id,
      usuario: usuarioSesion,
    };
    participarRide(participante);
  };

  const noParticipar = () => {
    dejarParticipar(ruta.id, usuarioSesion);
  };

  return (
    <div>
      <p>Ruta creada por: {ruta.creador}</p>
      <p>Salida para el: {formato(ruta.fechaSalida)}</p>
      <p>Kilómetros estimados: {ruta.kilometrosRecorrer} km</p>

      {listaparticipantes.includes(ruta.id) ? (
        <Button variant="contained" color="secondary" onClick={noParticipar}>
          Dejar de participar
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={participar}>
          Participar
        </Button>
      )}
    </div>
  );
};

export default Ruta;
