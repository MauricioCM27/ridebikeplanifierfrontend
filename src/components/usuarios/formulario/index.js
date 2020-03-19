import React from 'react';
import UsuarioFormPage from '../../../pages/usuarios/formulario/UsuarioFormPage';
import usuariosAPI from '../../../services/usuariosAPI';

class UsuarioForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            correoElectronico: '',
            contrasenia: '',
            nombre: '',
            apellido1: '',
            fechaNacimiento: '',
            numeroEmergencia: '',
            descripcion: '',
            padecimientos: '',
            error: '',
        }

        this.onChangeCampo = this.onChangeCampo.bind(this);
        this.onCreateUser = this.onCreateUser.bind(this);
    }

    async onCreateUser() {
        const {
            correoElectronico,
            contrasenia,
            nombre,
            apellido1,
            fechaNacimiento,
            numeroEmergencia,
            descripcion,
            padecimientos
        } = this.state;

        try {
            await usuariosAPI.usuarios().create({
                correoElectronico: correoElectronico,
                contrasenia: contrasenia,
                nombre: nombre,
                apellido1: apellido1,
                fechaNacimiento: fechaNacimiento,
                numeroEmergencia: numeroEmergencia,
                descripcion: descripcion,
                padecimientos: padecimientos
            });

        } catch (error) {
            this.setState({ error: error.message });
            console.log(error.message);
        }
    }

    onChangeCampo(campo, valor) {
        this.setState({ [campo]: valor });
        console.log(campo);
        console.log(valor);
    }

    render() {
        const {
            correoElectronico,
            contrasenia,
            nombre,
            apellido1,
            fechaNacimiento,
            numeroEmergencia,
            descripcion,
            padecimientos
        } = this.props;

        return (
            <UsuarioFormPage
                correoElectronico={correoElectronico}
                contrasenia={contrasenia}
                nombre={nombre}
                apellido1={apellido1}
                fechaNacimiento={fechaNacimiento}
                numeroEmergencia={numeroEmergencia}
                descripcion={descripcion}
                padecimientos={padecimientos}
                onChangeCampo={this.onChangeCampo}
                onCreateUser={this.onCreateUser}
            />
        );
    }
}

export default UsuarioForm;