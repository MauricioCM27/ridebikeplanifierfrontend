import React from "react";
import IniciarSesion from "../../pages/login/LoginPage";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      correoElectronico: "",
      contrasenia: "",
      recordarme: false
    };

    this.onChangeCampo = this.onChangeCampo.bind(this);
  }

  onChangeCampo(campo, valor) {
    this.setState({ [campo]: valor });
    console.log(valor);
    console.log(this.state);
  }

  render() {
    const { correoElectronico, contrasenia, recordarme } = this.props;

    return (
      <IniciarSesion
        correoElectronico={correoElectronico}
        contrasenia={contrasenia}
        recordarme={recordarme}
        onChangeCampo={this.onChangeCampo}
      />
    );
  }
}

export default Login;
