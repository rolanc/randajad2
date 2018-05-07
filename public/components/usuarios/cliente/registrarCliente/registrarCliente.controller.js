(() => {
  'use strict';
  angular
    .module('randajad2')
    .controller('controladorRegistrarCliente', controladorRegistrarCliente);

  controladorRegistrarCliente.$inject = ['$http', '$stateParams', '$state', 'servicioUsuarios', 'imageUploadService', 'Upload'];

  function controladorRegistrarCliente($http, $stateParams, $state, servicioUsuarios, imageUploadService, Upload ) {

    const vm = this;

    vm.usuarioNuevo = {};

    vm.cloudObj = imageUploadService.getConfiguration();

    vm.preRegistrarUsuario = (pusuarioNuevo) => {

      vm.cloudObj.data.file = pusuarioNuevo.photo[0];
      Upload.upload(vm.cloudObj).success((data) => {
        vm.RegistrarUsuario(pusuarioNuevo, data.url);
      });
    }


    vm.RegistrarUsuario = (pusuarioNuevo, urlImagen) => {

      let confirmarContrasenna = false,
        contrasenna1 = vm.usuarioNuevo.contrasenna,
        contrasenna2 = vm.usuarioNuevo.contrasenna2;

      if (contrasenna1 == contrasenna2) {
        confirmarContrasenna = true;
      }

      if (confirmarContrasenna == true) {
        let rol = 2;

        let objNuevoUsuario = new Usuario(pusuariorNuevo.cedula, pusuariorNuevo.primerNombre,
          pusuariorNuevo.segundoNombre, pusuariorNuevo.primerApellido, pusuariorNuevo.segundoApellido,
          pusuariorNuevo.edad, pusuariorNuevo.correo, pusuariorNuevo.telefono,
          pusuariorNuevo.contrasenna, rol,urlImagen);

        let registro = servicioUsuarios.agregarUsuario(objNuevoUsuario);


        if (registro == true) {
          swal({
            title: "Registro exitoso",
            text: "Usuario registrado correctamente",
            icon: "success",
            button: "Aceptar"
          });
          vm.clienteNuevo = null;

        } else {
          swal({
            title: "Ha ocurrido un Error",
            text: "El usuario ha sido anteriormnete registrado.",
            icon: "error",
            button: "Aceptar"
          });
        }
      }// confirmar contraseña
      else {

        swal({
          title: "Atención",
          text: "Las contraseñas no coinciden",
          icon: "error",
          button: "Aceptar"
        });
      }
    }// fin registrar nuevo cliente
    vm.regresar = () => {
      $state.go('main.inicio');
    }
  }// fin controlador
})();