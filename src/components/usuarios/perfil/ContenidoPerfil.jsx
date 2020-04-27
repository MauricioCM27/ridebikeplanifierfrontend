import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Map from "../../map/Map";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(50),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const key = "AIzaSyDjOXNx6Cxhnyovcf5rhsotIUe7";
const mapURL = `https://maps.googleapis.com/maps/api/js?&key=${key}fqNYrMo&v=3.exp&libraries=geometry,drawing,places`;

const ContenidoPerfil = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs></Grid>
        <Grid justify="center" alignItems="stretch" item xs={8}>
          <Map
            googleMapURL={mapURL}
            containerElement={
              <div style={{ marginTop: "50px", height: "500px" }} />
            }
            mapElement={<div style={{ height: "100%" }} />}
            loadingElement={<p>Cargando</p>}
          />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
};

export default ContenidoPerfil;
