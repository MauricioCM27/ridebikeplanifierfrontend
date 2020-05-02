import React, { Fragment } from "react";
import Sidebar from "../../../components/usuarios/perfil/Sidebar";
import Appbar from "../../../components/usuarios/perfil/Appbar";
import ContenidoUsuario from "../../../components/usuarios/perfil/ContenidoUsuario";

const PerfilUsuario = ({ usuario }) => {
  return (
    <Fragment>
      <Sidebar />
      <Appbar />
      <ContenidoUsuario />
    </Fragment>
  );
};

export default PerfilUsuario;
