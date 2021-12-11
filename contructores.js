// clase persona
// clase unidad


let Conductor = function (nombre, foto, apodo, direccion) {

    this.nombre = nombre;
    this.foto = foto;
    this.apodo = apodo;
    this.direccion = direccion;

}

let Unidad = function (economico, nombre, dolly, placas, caracGenel) {

    this.economico = economico;
    this.nombre = nombre;
    this.dolly = dolly;
    this.placas = placas;
    this.caracGenel = caracGenel;

}

let rojo = new Unidad ('48', 'rojo', '23', 'MN-3234', 'modelo: 2015, azul, golbalmax' );
let texano = new Conductor ('jorge', 'foto', 'texano', 'santa marta acatitlan');

//console.log(rojo)
//console.log(texano)

//let ViajeLocal = function( agencia,  ) {}
//let ViajeForaneo = function() {}

let NuevoViaje = function (id, tipoDeViaje, pedimentos, horarioDeCita, cliente, agencia, instrucciones, unidad, conductor, chasis, contenedores) {

    this.id = id;
    this.tipoDeViaje = tipoDeViaje;
    this.pedimentos = pedimentos;
    this.horarioDeCita = horarioDeCita;
    this.cliente = cliente;
    this.agencia = agencia;
    this.instrucciones = instrucciones;
    this.unidad = unidad;
    this.conductor = conductor;
    this.chasis = chasis;
    this.contenedores = contenedores;

}

let a01 = new NuevoViaje ('12-14', 'foraneo', 'a-124578, a-132698', '8:00 am', 'ford', 'agenia', 'llegar a primera hora', rojo, texano, 'C-22, C-23', 'APSU56821, APSU65851')

console.log(a01)