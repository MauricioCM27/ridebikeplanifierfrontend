import React, { useState, useContext } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import rutaContext from "../../context/Rutas/rutaContext";

const mapContainerStyle = {
  height: "500px",
  width: "900px",
};

const center = {
  lat: 9.998362,
  lng: -84.117075,
};

export default function MapaPrueba() {
  const rutasContext = useContext(rutaContext);
  const { coordenadas, guardarCoordenadas } = rutasContext;

  const [marcadores, guardarMarcadores] = useState([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDjOXNx6Cxhnyovcf5rhsotIUe7fqNYrMo",
  });

  if (loadError) return "Error al cargar";
  if (!isLoaded) return "Cargando mapa...";

  const asignarMarcadores = (e) => {
    if (marcadores.length === 2) {
      console.log(marcadores);
      guardarCoordenadas(marcadores);
    }
    guardarMarcadores((actual) =>
      actual.length < 2
        ? [
            ...actual,
            {
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            },
          ]
        : actual
    );
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        onClick={asignarMarcadores}
      >
        {marcadores.map((marcador) => (
          <Marker
            key={`${marcador.lat}-${marcador.lng}`}
            position={{ lat: marcador.lat, lng: marcador.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
