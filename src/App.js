import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import UsuarioFormPage from './pages/usuarios/formulario/UsuarioFormPage'
import NotFound from './pages/NotFound/NotFound'

// import pruebas from './pages/usuarios/formulario/prueba'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/registrarse" component={UsuarioFormPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App;
