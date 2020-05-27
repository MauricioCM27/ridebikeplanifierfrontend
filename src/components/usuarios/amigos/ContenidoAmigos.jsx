import React, { Fragment, useContext, useEffect } from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Amigo from "./Amigo";
import Sidebar from "../../../components/usuarios/perfil/Sidebar";
import Appbar from "../../../components/usuarios/perfil/Appbar";

import amigoContext from "../../../context/Amigos/amigoContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  divError: {
    textAlign: "center",
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

const ContenidoAmigos = () => {
  //Verificar que no muestre el mismo
  let datosPerfil = JSON.parse(localStorage.getItem("RBP"));

  //Obtener el state de amigos
  const amigosContext = useContext(amigoContext);
  const { usuarios, obtenerUsuarios } = amigosContext;

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const classes = useStyles();

  return (
    <Fragment>
      <Sidebar />
      <Appbar />
      <div className={classes.root}>
        <Card className={classes.card}>
          <div className={classes.appName}>
            <h1>Sugerencias de amigos</h1>
          </div>
          <Grid container spacing={3}>
            {usuarios.length === 0 ? (
              <div className="divError">No hay sugerencias en este momento</div>
            ) : (
              usuarios.map((amigo, index) =>
                datosPerfil.correoElectronico ===
                amigo.correoElectronico ? null : (
                  <Grid key={index} item xs={6}>
                    <Paper className={classes.paper}>
                      <Amigo
                        amigo={amigo}
                        actual={datosPerfil.correoElectronico}
                      ></Amigo>
                    </Paper>
                  </Grid>
                )
              )
            )}
          </Grid>
        </Card>
      </div>
    </Fragment>
  );
};

export default ContenidoAmigos;
