import React, { useState, useContext } from "react";
import { Button, TextField, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Mapa from "./Mapa";

import rutaContext from "../../context/Rutas/rutaContext";

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
}));

const ContenidoCrearRuta = () => {
  const classes = useStyles();

  //Obtener el state de la ruta del context
  const rutasContext = useContext(rutaContext);
  const { rutaId, crearRuta, crearCoordenada } = rutasContext;

  //El creador es el usuario en la sesion
  let datosPerfil = JSON.parse(localStorage.getItem("RBP"));

  //State para le ruta
  const [ruta, guardarRuta] = useState({
    creador: datosPerfil.correoElectronico,
    kilometrosRecorrer: 0,
    isPublica: true,
    comentarios: "",
    fechaSalida: "",
  });

  //Extraer valores del state
  const { kilometrosRecorrer, isPublica, comentarios, fechaSalida } = ruta;

  const onChangeCampo = (e) => {
    if (e.target.name === "kilometrosRecorrer") {
      guardarRuta({
        ...ruta,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      guardarRuta({
        ...ruta,
        [e.target.name]: e.target.value,
      });
    }
  };

  //Submit de la ruta
  const onSubmitRuta = (e) => {
    e.preventDefault();
    //Validar espacios

    if (kilometrosRecorrer === 0) {
      console.log("error");

      return;
    }
    crearRuta(ruta);
    console.log(rutaId);

    //crearCoordenada();
    guardarRuta({
      kilometrosRecorrer: 0,
      isPublica: true,
      comentarios: "",
      fechaSalida: "",
    });
    window.location.replace("/perfil");
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.appName}>
          <h1>Crear un Ride</h1>
        </div>
        <Grid container spacing={0}>
          <Grid item xs></Grid>
          <Grid justify="center" alignItems="center" item xs={8}>
            <Mapa />
          </Grid>
          <Grid item xs></Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs></Grid>
          <Grid justify="center" alignItems="flex-end" item xs={8}>
            <form className={classes.form} noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    type="date"
                    id="fechaSalida"
                    label="Fecha de salida"
                    name="fechaSalida"
                    autoComplete="email"
                    value={fechaSalida}
                    onChange={onChangeCampo}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="kilometrosRecorrer"
                    label="Km por recorrer"
                    type="number"
                    id="kilometrosRecorrer"
                    value={kilometrosRecorrer}
                    onChange={onChangeCampo}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputLabel htmlFor="grouped-select">
                    Es una ruta publica?
                  </InputLabel>
                  <Select
                    id="grouped-select"
                    name="isPublica"
                    fullWidth
                    value={isPublica}
                    variant="outlined"
                    onChange={onChangeCampo}
                  >
                    <MenuItem value={true} selected>
                      Es publica
                    </MenuItem>
                    <MenuItem value={false}>Es privada</MenuItem>
                  </Select>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    type="text"
                    id="comentarios"
                    label="Comentarios"
                    name="comentarios"
                    value={comentarios}
                    onChange={onChangeCampo}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onSubmitRuta}
              >
                Crear ruta
              </Button>
            </form>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ContenidoCrearRuta;
