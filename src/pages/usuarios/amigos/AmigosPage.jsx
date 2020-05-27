import React, { Fragment } from "react";
import ContenidoAmigo from "../../../components/usuarios/amigos/ContenidoAmigos";
import Sidebar from "../../../components/usuarios/perfil/Sidebar";
import Appbar from "../../../components/usuarios/perfil/Appbar";

const AmigosPage = (props) => {
  return (
    <Fragment>
      <Sidebar />
      <Appbar />
      <ContenidoAmigo />
    </Fragment>
  );
};

export default AmigosPage;
