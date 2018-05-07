class Usuario {
  constructor(pcedula, pprimerNombre, psegundoNombre, pprimerApellido, psegundoApellido, pedad,  pcorreo, ptelefono, pcontrasenna, prol,pfotoCliente) {
    this.cedula           = pcedula;
    this.primerNombre     = pprimerNombre;
    this.segundoNombre    = psegundoNombre;
    this.primerApellido   = pprimerApellido;
    this.segundoApellido  = psegundoApellido;
    this.edad             = pedad;
    this.correo           = pcorreo;
    this.telefono         = ptelefono;
    this.contrasenna      = pcontrasenna;
    this.rol              = prol;
    this.fotoCliente     = pfotoCliente;
  }

  getCorreo() {
    return this.correo;
  }


  getContrasenna() {
    return this.contrasenna;
  }

  getRol() {
    return this.rol;

  }
};

