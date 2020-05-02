import React from "react";
import {
  InfoWindow,
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { compose, withStateHandlers } from "recompose";

const Map = () => {
  const marcador = compose(
    withStateHandlers(
      () => ({
        isMarkerShown: false,
        markerPosition: null,
      }),
      {
        onMapClick: ({ isMarkerShown }) => (e) => ({
          markerPosition: e.latLng,
          isMarkerShown: true,
        }),
      }
    ),
    withScriptjs,
    withGoogleMap
  );

  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 9.998362, lng: -84.117075 }}
        //onClick={props.onMapClick}
      />
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
