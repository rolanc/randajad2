(() => {
    'use strict';
    angular
        .module('randajad2')
        .controller('controladorModificarCliente', controladorModificarCliente);

    controladorModificarCliente.$inject = ['$http', '$stateParams', '$state', 'servicioUsuarios', 'servicioLogin', 'imageUploadService', 'Upload'];

    function controladorModificarCliente($http, $stateParams, $state, servicioUsuarios, servicioLogin, imageUploadService, Upload) {

        const vm = this;
        const userAuth = servicioLogin.getAuthUser();
        let usuarioActivo = userAuth.getCorreo();
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
                let rol = usuarioActivo.rol;

                let objNuevoUsuario = new Usuario(pusuarioNuevo.cedula, pusuarioNuevo.primerNombre,
                    pusuarioNuevo.segundoNombre, pusuarioNuevo.primerApellido, pusuarioNuevo.segundoApellido,
                    pusuarioNuevo.edad, usuarioActivo.correo, pusuarioNuevo.telefono,
                    pusuarioNuevo.contrasenna, rol, pusuarioNuevo.fotoCliente);

                let registro = servicioUsuarios.actualizarUsuario(objNuevoUsuario);


                if (registro == true) {
                    swal({
                        title: "Registro exitoso",
                        text: "Cliente actualizado correctamente",
                        icon: "success",
                        button: "Aceptar"
                    });
                    vm.clienteNuevo = null;

                } else {
                    swal({
                        title: "Ha ocurrido un Error",
                        text: "El usuario no se actualizó.",
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