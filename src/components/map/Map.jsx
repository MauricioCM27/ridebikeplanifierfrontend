import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 9.998362, lng: -84.117075 }}
      />
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
