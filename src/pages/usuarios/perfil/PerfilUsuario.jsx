import React, { Fragment } from "react";
import Sidebar from "../../../components/usuarios/perfil/Sidebar";
import Appbar from "../../../components/usuarios/perfil/Appbar";
import ContenidoPerfil from "../../../components/usuarios/perfil/ContenidoPerfil";

const PerfilUsuario = ({ usuario }) => {
  return (
    <Fragment>
      <Sidebar />
      <Appbar />
      <ContenidoPerfil></ContenidoPerfil>
    </Fragment>
  );
};

export default PerfilUsuario;
