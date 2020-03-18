import React from 'react';
import { Card, Typography, TextField, InputAdornment, CardContent, Container, Grid } from '@material-ui/core';
import { AccountCircle, Mail, FiberManualRecord, CalendarToday } from '@material-ui/icons';


function UsuarioFormulario(props) {
    const { } = props;

    return (
        <Container>
            <Card>
                <Typography variant="h2">
                    Registrarse
                </Typography>

                <CardContent>

                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Mail />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="correoElectronico"
                                    variant="outlined"
                                    label="Correo Electronico"
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="nombre"
                                    variant="outlined"
                                    label="Nombre"
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <FiberManualRecord />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="apellido"
                                    variant="outlined"
                                    label="Apellido"
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <CalendarToday />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="fechaNacimiento"
                                    label="Fecha de Nacimiento"
                                    type="date"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </div>

                    <div>

                    </div>

                </CardContent>
            </Card>
        </Container>
    );
}

export default UsuarioFormulario;