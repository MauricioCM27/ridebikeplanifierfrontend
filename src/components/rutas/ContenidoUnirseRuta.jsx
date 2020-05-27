import React, { useState, useContext, useEffect } from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Ruta from "./Ruta";

import rutaContext from "../../context/Rutas/rutaContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "50%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  },
  card: {
    margin: theme.spacing(0, 30, 0, 40),
    padding: theme.spacing(3),
    borderRadius: 20,
  },
  appName: {
    textAlign: "center",
    color: theme.palette.info.dark,
  },
}));

const ContenidoUnirseRuta = () => {
  //Rutas del context
  const rutasContext = useContext(rutaContext);
  const { rutas, cargarRutas, cargarRides } = rutasContext;

  //El creador es el usuario en la sesion
  let datosPerfil = JSON.parse(localStorage.getItem("RBP"));

  const { correoElectronico } = datosPerfil;

  useEffect(() => {
    cargarRides(correoElectronico);
    cargarRutas(correoElectronico);
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.appName}>
          <h1>Rides disponibles</h1>
        </div>
        <Grid container spacing={3}>
          <Grid container spacing={3}>
            {!rutas ? (
              <div className="divError">No hay sugerencias en este momento</div>
            ) : (
              rutas.map((ruta) => (
                <Grid key={ruta.id} item xs={6}>
                  <Paper className={classes.paper}>
                    <Ruta
                      ruta={ruta}
                      usuarioSesion={datosPerfil.correoElectronico}
                    />
                  </Paper>
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ContenidoUnirseRuta;
