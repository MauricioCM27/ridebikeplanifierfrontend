import React, { Fragment } from "react";
import Sidebar from "../../components/usuarios/perfil/Sidebar";
import Appbar from "../../components/usuarios/perfil/Appbar";
import ContenidoMapa from "../../components/map/ContenidoMapa";
import MapaPrueba from "../../components/map/MapaPrueba";

const NuevaRuta = () => {
  return (
    <Fragment>
      <Sidebar />
      <Appbar />
      <ContenidoMapa />
    </Fragment>
  );
};

export default NuevaRuta;
