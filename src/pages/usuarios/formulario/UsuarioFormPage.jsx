import React from "react";
import {
  Avatar,
  Button,
  Card,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Tooltip,
  Container,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

//Tipografia para el copyright
const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © Equipo 4 "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

const estilos = makeStyles((theme) => ({
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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    margin: theme.spacing(15, 80, 2),
    padding: theme.spacing(2),
    borderRadius: 50,
  },
}));

export default function CrearCuenta(props) {
  const {
    correoElectronico,
    contrasenia,
    nombre,
    apellido1,
    fechaNacimiento,
    numeroEmergencia,
    descripcion,
    padecimientos,
    onChangeCampo,
    onCreateUser,
    error,
  } = props;

  const classes = estilos();

  // const [open, setOpen] = React.useState(true);

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <Card className={classes.card}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear cuenta
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  autoFocus
                  id="correoElectronico"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  value={correoElectronico}
                  onChange={(e) =>
                    onChangeCampo("correoElectronico", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="contrasenia"
                  label="Contraseña"
                  type="password"
                  id="contrasenia"
                  autoComplete="current-password"
                  value={contrasenia}
                  onChange={(e) => onChangeCampo("contrasenia", e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="nombre"
                  variant="outlined"
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  value={nombre}
                  onChange={(e) => onChangeCampo("nombre", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="apellido1"
                  label="Apellido"
                  name="apellido1"
                  autoComplete="lname"
                  value={apellido1}
                  onChange={(e) => onChangeCampo("apellido1", e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  id="fechaNacimiento"
                  label="Fecha de nacimiento"
                  type="date"
                  value={fechaNacimiento}
                  onChange={(e) =>
                    onChangeCampo("fechaNacimiento", e.target.value)
                  }
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Tooltip title="Contacto en Caso de Emergencia">
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="numeroEmergencia"
                    label="Telefono de Emergencia"
                    name="numeroEmergencia"
                    autoComplete="lname"
                    value={numeroEmergencia}
                    onChange={(e) =>
                      onChangeCampo("numeroEmergencia", e.target.value)
                    }
                  />
                </Tooltip>
              </Grid>

              <Grid item xs={12}>
                <Tooltip title="Sugerencia: Que me gusta?">
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="descripcion"
                    label="Sobre mi"
                    name="descripcion"
                    value={descripcion}
                    onChange={(e) =>
                      onChangeCampo("descripcion", e.target.value)
                    }
                  />
                </Tooltip>
              </Grid>

              <Grid item xs={12}>
                <Tooltip title="Sugerencia: Padecimientos">
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="padecimientos"
                    label="Padecimientos"
                    name="padecimientos"
                    value={padecimientos}
                    onChange={(e) =>
                      onChangeCampo("padecimientos", e.target.value)
                    }
                  />
                </Tooltip>
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onCreateUser}
            >
              Registrarse
            </Button>

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login">Ya tiene cuenta? Inicie sesión</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Card>
  );
}
