import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login/index'
import UsuarioForm from './components/usuarios/formulario/index'
import NotFound from './pages/NotFound/NotFound'

// import pruebas from './pages/usuarios/formulario/prueba'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registrarse" component={UsuarioForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App;
