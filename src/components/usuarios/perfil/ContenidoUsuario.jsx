import React, { useState, useContext, useEffect, Fragment } from "react";
import { Button, TextField, Link, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import EstadoRuta from "../../rutas/EstadoRuta";
import rutaContext from "../../../context/Rutas/rutaContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(50),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  contenido: {
    color: theme.palette.info.dark,
  },
}));

const columnas = [
  { id: "creador", label: "Creador", minWidth: 170 },
  { id: "kilometros", label: "Km recorridos", minWidth: 100 },
  { id: "fechaSalida", label: "Fecha de salida", minWidth: 150 },
  { id: "comentarios", label: "Comentarios", minWidth: 200 },
  { id: "estado", label: "Estado", minWidth: 100 },
];

const ContenidoUsuario = () => {
  const classes = useStyles();
  let datosPerfil = JSON.parse(localStorage.getItem("RBP"));

  const rutasContext = useContext(rutaContext);
  const { misRides, cargarMisRides } = rutasContext;

  useEffect(() => {
    cargarMisRides(datosPerfil.correoElectronico);
  }, []);

  const formato = (texto) => {
    var aux = texto.replace("T", "-");
    aux = aux.replace(/:/g, "-");
    var fecha = aux.split("-");

    return fecha[2] + "-" + fecha[1] + "-" + fecha[0];
  };

  console.log(misRides[0]);

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container spacing={0}>
          <div className={classes.appName}>
            <h1>Mi Perfil</h1>
          </div>
          <div className={classes.appName}></div>

          <Grid item xs></Grid>
          <Grid justify="center" alignItems="flex-end" item xs={12}>
            <Grid className={classes.contenido}>
              <h2>
                Bienvenido {datosPerfil.nombre} {datosPerfil.apellido1}
              </h2>
              <h3>Mis datos</h3>
              <Grid item xs={6}>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                      <TableRow hover>
                        <TableCell component="th" scope="row">
                          Correo Electronico:
                        </TableCell>
                        <TableCell align="right" component="th" scope="row">
                          {datosPerfil.correoElectronico}
                        </TableCell>
                      </TableRow>

                      <TableRow hover>
                        <TableCell component="th" scope="row">
                          Fecha de nacimiento:
                        </TableCell>
                        <TableCell align="right" component="th" scope="row">
                          {formato(datosPerfil.fechaNacimiento)}
                        </TableCell>
                      </TableRow>

                      <TableRow hover>
                        <TableCell component="th" scope="row">
                          Sobre mi:
                        </TableCell>
                        <TableCell align="right" component="th" scope="row">
                          {datosPerfil.descripcion}
                        </TableCell>
                      </TableRow>

                      <TableRow hover>
                        <TableCell component="th" scope="row">
                          Numero de Emergencia:
                        </TableCell>
                        <TableCell align="right" component="th" scope="row">
                          {datosPerfil.numeroEmergencia}
                        </TableCell>
                      </TableRow>

                      <TableRow hover>
                        <TableCell component="th" scope="row">
                          Padecimientos:
                        </TableCell>
                        <TableCell align="right" component="th" scope="row">
                          {datosPerfil.padecimientos}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              {misRides[0] ? (
                <Fragment>
                  <h2>Historial de Rides</h2>
                  <Grid item xs={12}>
                    <TableContainer component={Paper}>
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            {columnas.map((columna) => (
                              <TableCell key={columna.id}>
                                {columna.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {misRides[0].map((miRide) => (
                            <TableRow hover key={miRide.ruta}>
                              <TableCell component="th" scope="row">
                                {miRide.rutaNavigation.creador}
                              </TableCell>
                              <TableCell component="th" scope="row">
                                {miRide.rutaNavigation.kilometrosRecorrer}
                              </TableCell>
                              <TableCell component="th" scope="row">
                                {formato(miRide.rutaNavigation.fechaSalida)}
                              </TableCell>
                              <TableCell>
                                {miRide.rutaNavigation.comentarios.trim() ===
                                "" ? (
                                  <p>No hay comentarios</p>
                                ) : (
                                  miRide.rutaNavigation.comentarios
                                )}
                              </TableCell>
                              <TableCell>
                                <EstadoRuta
                                  fecha={formato(
                                    miRide.rutaNavigation.fechaSalida
                                  )}
                                  ride={miRide}
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Fragment>
              ) : (
                <p>No hay rides en curso </p>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ContenidoUsuario;
