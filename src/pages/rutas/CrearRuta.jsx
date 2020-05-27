import React, { Fragment } from "react";
import Sidebar from "../../components/usuarios/perfil/Sidebar";
import Appbar from "../../components/usuarios/perfil/Appbar";
import ContenidoCrearRuta from "../../components/rutas/ContenidoCrearRuta";

const NuevaRuta = () => {
  return (
    <Fragment>
      <Sidebar />
      <Appbar />
      <ContenidoCrearRuta />
    </Fragment>
  );
};

export default NuevaRuta;
