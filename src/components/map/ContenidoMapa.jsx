import React, { useState } from "react";
import { Button, TextField, Link, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Map from "./Map";
import MapPrueba from "../../components/map/MapaPrueba";

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

const key = "AIzaSyDjOXNx6Cxhnyovcf5rhsotIUe7";
const mapURL = `https://maps.googleapis.com/maps/api/js?&key=${key}fqNYrMo&v=3.exp&libraries=geometry,drawing,places`;

const ContenidoPerfil = () => {
  const classes = useStyles();

  const [select, actualizarSelect] = useState("Es publica");

  const handleChangeSelect = (e) => {
    actualizarSelect(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container spacing={0}>
          <div className={classes.appName}>
            <h1>Crear un Ride</h1>
          </div>
          <Grid item xs></Grid>
          <Grid justify="center" alignItems="center" item xs={8}>
            <MapPrueba />
            {/* <Map
              googleMapURL={mapURL}
              containerElement={
                <div style={{ marginTop: "50px", height: "500px" }} />
              }
              mapElement={<div style={{ height: "100%" }} />}
              loadingElement={<p>Cargando...</p>}
            /> */}
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
                    //value={correoElectronico}
                    // onChange={(e) =>
                    //   onChangeCampo("correoElectronico", e.target.value)
                    // }
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
                    name="kmRecorrer"
                    label="Km por recorrer"
                    type="number"
                    id="kmRecorrer"
                    //value={contrasenia}
                    //onChange={(e) => onChangeCampo("contrasenia", e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputLabel htmlFor="grouped-select">
                    Es una ruta publica?
                  </InputLabel>
                  <Select
                    defaultValue="Es publica"
                    id="grouped-select"
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value={1} selected>
                      Es publica
                    </MenuItem>
                    <MenuItem value={2}>Es privada</MenuItem>
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
                    // value={apellido1}
                    // onChange={(e) => onChangeCampo("apellido1", e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                //onClick={onCreateUser}
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

export default ContenidoPerfil;
