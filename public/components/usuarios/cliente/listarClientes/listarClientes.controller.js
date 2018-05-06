(() => {
  'use strict';
  angular
    .module('randajad2')
    .controller('controladorListarClientes', controladorListarClientes);

  controladorListarClientes.$inject = ['$stateParams', '$state', 'servicioUsuarios', 'servicioLogin'];

  function controladorListarClientes($stateParams, $state, servicioUsuarios, servicioLogin) {

    const userAuth = servicioLogin.getAuthUser();

    let vm = this;

    vm.listaDeUsuarios = servicioUsuarios.obtenerListaFiltrada();
    vm.regresar = () => {
      $state.go('main.inicio');
    }
  }
})();