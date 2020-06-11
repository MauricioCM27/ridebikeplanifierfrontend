import React, { useState, useContext } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import rutaContext from "../../context/Rutas/rutaContext";

const mapContainerStyle = {
  height: "400px",
  width: "650px",
};

const MapaPrueba = ({ primerPunto, segundoPunto }) => {
  let puntos;
  let center;
  if (primerPunto !== undefined && segundoPunto !== undefined) {
    puntos = [
      {
        lat: primerPunto.latitud,
        lng: primerPunto.longitud,
      },
      {
        lat: segundoPunto.latitud,
        lng: segundoPunto.longitud,
      },
    ];
    center = {
      lat: puntos[0].lat,
      lng: puntos[0].lng,
    };
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDjOXNx6Cxhnyovcf5rhsotIUe7fqNYrMo",
  });

  if (loadError) return "Error al cargar";
  if (!isLoaded) return "Cargando mapa...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
      >
        {puntos !== undefined
          ? puntos.map((marcador) => (
              <Marker
                key={`${marcador.lat}-${marcador.lng}`}
                position={{ lat: marcador.lat, lng: marcador.lng }}
              />
            ))
          : null}
      </GoogleMap>
    </div>
  );
};
export default MapaPrueba;
