import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/index";
import UsuarioForm from "./components/usuarios/formulario/index";
import NotFound from "./pages/NotFound/NotFound";
import PerfilUsuario from "./pages/usuarios/perfil/PerfilUsuario";
import CrearRuta from "./pages/rutas/CrearRuta";
import UnirseRuta from "./pages/rutas/UnirseRuta";
import VerTops from "./pages/tops/VerTops";
import AmigosPage from "./components/usuarios/amigos/ContenidoAmigos";

import AmigoState from "./context/Amigos/amigoState";
import RutaState from "./context/Rutas/rutaState";
import TopState from "./context/Tops/topState";

// import pruebas from './pages/usuarios/formulario/prueba'

const App = () => (
  <AmigoState>
    <RutaState>
      <TopState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/registrarse" component={UsuarioForm} />
            <Route exact path="/perfil" component={PerfilUsuario} />
            <Route exact path="/nuevaRuta" component={CrearRuta} />
            <Route exact path="/unirseRuta" component={UnirseRuta} />
            <Route exact path="/verTops" component={VerTops} />
            <Route exact path="/seguirAmigos" component={AmigosPage} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </TopState>
    </RutaState>
  </AmigoState>
);

export default App;
