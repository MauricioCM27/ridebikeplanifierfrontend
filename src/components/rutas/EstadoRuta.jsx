import React, { useState, useContext, Fragment } from "react";
import { Button, TextField, Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import rutaContext from "../../context/Rutas/rutaContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    margin: theme.spacing(0, 0, 0, 0),
  },
  titulo: {
    padding: theme.spacing(0, 0, 0, 0),
  },
  boton: {
    marginTop: 50,
    marginLeft: 300,
  },
}));

const EstadoRuta = ({ ride, fecha }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [ruta, actualizarRuta] = useState(ride);

  const rutasContext = useContext(rutaContext);
  const { calificarRuta } = rutasContext;

  const {
    dificultad = 2,
    ambiente = 2,
    evaluacionFinal = 2,
    comentariosEvaluacion,
    isCalificada,
  } = ruta;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Formato de la fecha actual
  const formatoActual = (texto) => {
    var fecha = texto.split(" ");
    fecha = fecha[0].replace(/[/]+/g, "-").split("-");
    return fecha[1] + "/" + fecha[0] + "/" + fecha[2];
  };

  //Formato de la fecha entrante
  const formatoEntrante = (texto) => {
    var fecha = texto.split("-");
    return fecha[1] + "/" + fecha[0] + "/" + fecha[2];
  };

  //Fecha de Hoy
  const fechaActual = new Date().toLocaleString();

  //Parseo a formato ideal
  const f1 = new Date(formatoEntrante(fecha));
  const f2 = new Date(formatoActual(fechaActual));

  //
  const guardarCalificacion = () => {
    ruta.isCalificada = true;
    const rutaEnviar = {
      ambiente: parseInt(ruta.ambiente),
      comentariosEvaluacion: ruta.comentariosEvaluacion,
      dificultad: parseInt(ruta.dificultad),
      evaluacionFinal: parseInt(ruta.evaluacionFinal),
      isCalificada: ruta.isCalificada,
      ruta: ruta.ruta,
      usuario: ruta.usuario,
    };

    console.log(rutaEnviar);

    handleClose();
    calificarRuta(ruta.ruta, rutaEnviar);
  };

  //Onchange campo
  const onChangeCampo = (e) => {
    actualizarRuta({
      ...ruta,
      [e.target.name]: e.target.value,
    });
  };

  const haceTodo = () => {
    if (f1 > f2) {
      return <p>*En curso</p>;
    } else {
      if (isCalificada) {
        return <p>Terminado</p>;
      } else {
        return (
          <Fragment>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Calificar
            </Button>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Card className={classes.paper}>
                  <Card className={classes.titulo}>
                    <h2>Calificar Ruta</h2>
                    <Card>
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Typography component="legend">Dificultad</Typography>
                        <Rating
                          name="dificultad"
                          value={dificultad}
                          onChange={onChangeCampo}
                        />
                      </Box>
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Typography component="legend">Ambiente</Typography>
                        <Rating
                          name="ambiente"
                          value={ambiente}
                          onChange={onChangeCampo}
                        />
                      </Box>
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Typography component="legend">
                          Evaluación final
                        </Typography>
                        <Rating
                          name="evaluacionFinal"
                          value={evaluacionFinal}
                          onChange={onChangeCampo}
                        />
                      </Box>
                      <TextField
                        variant="outlined"
                        fullWidth
                        type="text"
                        id="comentariosEvaluacion"
                        label="Comentarios"
                        name="comentariosEvaluacion"
                        value={comentariosEvaluacion}
                        onChange={onChangeCampo}
                      />
                    </Card>
                  </Card>
                  <Card className={classes.boton}>
                    <Button
                      variant="contained"
                      color="primary"
                      className="pr-5"
                      onClick={() => guardarCalificacion()}
                    >
                      Confirmar
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleClose}
                    >
                      Cancelar
                    </Button>
                  </Card>
                </Card>
              </Fade>
            </Modal>
          </Fragment>
        );
      }
    }
  };

  return (
    <h5>
      {haceTodo()}
      <Grid></Grid>
    </h5>
  );
};

export default EstadoRuta;
