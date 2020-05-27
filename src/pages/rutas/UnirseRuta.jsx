import React, { Fragment } from "react";
import Sidebar from "../../components/usuarios/perfil/Sidebar";
import Appbar from "../../components/usuarios/perfil/Appbar";
import ContenidoUnirseRuta from "../../components/rutas/ContenidoUnirseRuta";

const UnirseRuta = () => {
  return (
    <Fragment>
      <Sidebar />
      <Appbar />
      <ContenidoUnirseRuta />
    </Fragment>
  );
};

export default UnirseRuta;
