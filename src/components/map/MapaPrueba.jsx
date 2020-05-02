import React, { Component, useState, useEffect, Fragment } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { compose, withStateHandlers } from "recompose";

const Map = compose(
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
)((props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 9.998362, lng: -84.117075 }}
    onClick={props.onMapClick}
  >
    {props.isMarkerShown && <Marker position={props.markerPosition} />}
  </GoogleMap>
));

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?&key=AIzaSyDjOXNx6Cxhnyovcf5rhsotIUe7fqNYrMo&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ marginTop: "50px", height: "500px" }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

//googleMapURL="https://maps.googleapis.com/maps/api/js?&key=AIzaSyDjOXNx6Cxhnyovcf5rhsotIUe7fqNYrMo&v=3.exp&libraries=geometry,drawing,places"
