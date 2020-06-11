import React, { useContext, useState } from "react";
import MapaTops from "../../components/tops/MapaTops";
import topContext from "../../context/Tops/topContext";
import { useEffect } from "react";

const Top = ({ top, coordenadas }) => {
  let primerPunto;
  let segundoPunto;
  const nuevo = coordenadas.filter((coord) => coord.ruta === top.id);
  if (nuevo.length === 2) {
    primerPunto = {
      latitud: nuevo[0].latitud,
      longitud: nuevo[0].longitud,
    };
    segundoPunto = {
      latitud: nuevo[1].latitud,
      longitud: nuevo[1].longitud,
    };
  }
  console.log(top);

  return (
    <div>
      <p>
        <b>Creador:</b> {top.creador}
      </p>
      <p>
        <b>Kilometros de la ruta:</b> {top.kilometrosRecorrer} km
      </p>
      <p>
        <b>Comentarios:</b> {top.comentarios}
      </p>
      <MapaTops primerPunto={primerPunto} segundoPunto={segundoPunto} />
    </div>
  );
};

export default Top;
