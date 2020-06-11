import React, { useState, useEffect, useContext } from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Top from "./Top";
import topContext from "../../context/Tops/topContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.primary,
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

const ContenidoTops = () => {
  const classes = useStyles();

  const topsContext = useContext(topContext);
  const { tops, coordenadas, cargarTops, cargarCoordenadas } = topsContext;
  tops.splice(3);
  console.log(tops);

  const [opcion, actualizarOpcion] = useState(1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    cargarTops(opcion);
    cargarCoordenadas();
  }, []);

  const handleChange = (event) => {
    actualizarOpcion(event.target.value);
    cargarTops(event.target.value);
    //console.log(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.appName}>
          <h1>Las mejores 3 Rutas</h1>
        </div>
        <div>
          <h2>
            Buscando por:&nbsp;
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={opcion}
                onChange={handleChange}
              >
                <MenuItem value={1}>
                  <em>Ambiente</em>
                </MenuItem>
                <MenuItem value={2}>Dificultad</MenuItem>
                <MenuItem value={3}>Evaluacion Final</MenuItem>
              </Select>
            </FormControl>
          </h2>
        </div>

        <Grid container spacing={3}>
          <Grid container spacing={3}>
            {!tops ? (
              <div className="divError">No hay sugerencias en este momento</div>
            ) : (
              tops.map((top) => (
                <Grid key={top.id} item xs={12}>
                  <Paper className={classes.paper}>
                    <Top top={top} coordenadas={coordenadas} />
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

export default ContenidoTops;
