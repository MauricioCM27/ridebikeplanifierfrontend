import React, { Fragment } from "react";
import Sidebar from "../../../components/usuarios/perfil/Sidebar";
import Appbar from "../../../components/usuarios/perfil/Appbar";

const PerfilUsuario = ({ usuario }) => {
  return (
    <Fragment>
      <Sidebar />
      <Appbar />
    </Fragment>
  );
};

export default PerfilUsuario;
