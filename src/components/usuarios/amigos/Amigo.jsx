import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import amigoContext from "../../../context/Amigos/amigoContext";

const Amigo = ({ amigo, actual }) => {
  const { nombre, apellido1, descripcion, correoElectronico } = amigo;

  const amigosContext = useContext(amigoContext);
  const {
    seguidos,
    seguirUsuario,
    dejarDeSeguir,
    cargarSeguidos,
  } = amigosContext;

  useEffect(() => {
    cargarSeguidos(correoElectronico);
  }, []);

  const crearAmigos = () => {
    const amigos = {
      usuario: actual,
      amigo: correoElectronico,
    };
    seguirUsuario(amigos);
  };

  const borrarAmigo = () => {
    dejarDeSeguir(actual, correoElectronico);
  };

  return (
    <div>
      <p>
        Nombre: {nombre} {apellido1}
      </p>
      <p>Descripcion: {descripcion}</p>
      <p>Email: {correoElectronico}</p>
      {seguidos.includes(correoElectronico) ? (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => borrarAmigo()}
        >
          Dejar de seguir
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => crearAmigos()}
        >
          Seguir cuenta
        </Button>
      )}
    </div>
  );
};

export default Amigo;
