import React from 'react';
import { Avatar, Button, Card, CssBaseline, TextField, Link, Grid, Box, Typography, Tooltip, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

//Tipografia para el copyright
const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © Team patriarca '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
)

//Estilos. Pasar a hoja de estilos
const estilos = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  card: {
    margin: theme.spacing(15, 80, 2),
    padding: theme.spacing(2),
    borderRadius: 50
  },
}));

export default function CrearCuenta() {
  const classes = estilos();
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
                  id="correoElectronico"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
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
                  autoFocus
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
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  id="date"
                  label="Fecha de nacimiento"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="numeroEmergencia"
                  label="Número de teléfono"
                  name="numeroEmergencia"
                  autoComplete="lname"
                />
              </Grid>

              <Grid item xs={12}>
                <Tooltip title="Sugerencia: Que me gusta?">
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="descripcion"
                    label="Sobre mi"
                    name="descripcion"
                  />
                </Tooltip>
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarse
          </Button>

            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login">
                  Ya tiene cuenta? Inicie sesión
              </Link>
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