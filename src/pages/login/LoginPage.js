import React from "react";
import {
  Avatar,
  Button,
  Card,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles } from "@material-ui/core/styles";

//Tipografia para el copyright
const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © Team patriarca "}
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  box: {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    style: { width: "5rem", height: "5rem" },
  },
  card: {
    margin: theme.spacing(20, 80, 2),
    padding: theme.spacing(2),
    borderRadius: 50,
  },
}));

export default function IniciarSesion(props) {
  const { correoElectronico, contrasenia, recordarme, onChangeCampo } = props;

  const classes = estilos();

  return (
    <Card className={classes.card}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="correoElectronico"
              label="Correo electrónico"
              name="correoElectronico"
              autoComplete="email"
              autoFocus
              value={correoElectronico}
              onChange={(e) =>
                onChangeCampo("correoElectronico", e.target.value)
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
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
            <FormControlLabel
              control={
                <Checkbox
                  value={recordarme}
                  color="primary"
                  onChange={(e) =>
                    onChangeCampo("recordarme", e.target.checked)
                  }
                />
              }
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar sesión
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Olvidó su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registrarse" variant="body2">
                  {"Crear cuenta"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Card>
  );
}
