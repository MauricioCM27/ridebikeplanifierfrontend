import React, { Fragment } from "react";
import Sidebar from "../../components/usuarios/perfil/Sidebar";
import Appbar from "../../components/usuarios/perfil/Appbar";
import ContenidoTops from "../../components/tops/ContenidoTops";

const VerTops = () => {
  return (
    <Fragment>
      <Sidebar />
      <Appbar />
      <ContenidoTops />
    </Fragment>
  );
};

export default VerTops;
