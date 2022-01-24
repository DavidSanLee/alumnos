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

//programa para decirte en que siglo vives

function solution(year) {
    
    let numeroAString = year.toString()    
    if (year <= 100)
{
    return 1
} 

else if(year > 100 && year < 1000){
    
    if(numeroAString[1] === '0' && numeroAString[2] === '0') {
        

        return numeroAString[0] * 1  
    } else {
        return (numeroAString[0] * 1) + 1
    }
    
}  

else  {
    
    if( numeroAString[1] === '0' && numeroAString[2] === '0' && numeroAString[3] === '0'  ) {

        return numeroAString[0] * 10
    }
  
     else if (numeroAString[2] !='0' || numeroAString[3] !='0'|| ((numeroAString[2] && numeroAString[3] != '0'))  ){
        

        return ((numeroAString[0] + numeroAString[1]) * 1 ) + 1 
     }

     else if ( numeroAString[2] === '0' && numeroAString[3] === '0') {
        return (numeroAString[0] + numeroAString[1]) * 1 
     }
} 
}

console.log(solution(101))
console.log(solution(200))
console.log(solution(1000))
console.log(solution(2000))
console.log(solution(1020))
console.log(solution(1980))
console.log(solution(2019))
console.log(solution(1700))

// de una lista seleccionar con multiples valores que varien entre el 1 al 20
// que regese un objeto con el numeros de veces que se repite un dato dependiento
//de los siguientes rangos
//rangos 
// 1-5
//6-11
//12-17
//18-20

let listita = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,2,4,6,8,10,11,13,15,17,19,2,4];

//hacer 4 filtros para los 4 rangos 
//guardar los 4 resultados en 4 variables diferentes
// aplicar un reduce en cada variable y nos devuelva un objeto de cada uno 
//concatenar los 4 objetos resultantes 
//let listitaFiltrada1 = 0

listitaFiltrada1 = listita.filter(item => item === 1 || item === 2 || item ===3 || item === 4 || item === 5)
console.log(listitaFiltrada1)

//listitaFiltrada1 = listita.filter(item => item === function() {
//    for(index = 0; index <=5; index++){
//        return index
//    }
//})
//console.log(listitaFiltrada1)
listitaFiltrada2 = listita.filter(item => item === 6 || item === 7 || item ===8 || item === 9 || item === 10 || item === 11)
console.log(listitaFiltrada2)
//12-17
listitaFiltrada3 = listita.filter(item => item === 12 || item === 13 || item ===14 || item === 15 || item === 16 || item === 17)
console.log(listitaFiltrada3)
//18-20
listitaFiltrada4 = listita.filter(item => item === 18 || item === 19 || item === 20)
console.log(listitaFiltrada4)
console.log(listita)

// aplicar un reduce en cada variable y nos devuelva un objeto de cada uno 

const listitaReducida1 = listitaFiltrada1.reduce((obj,item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] +1
    }
    return obj;
}, {});

console.log(listitaReducida1)

const listitaReducida2 = listitaFiltrada2.reduce((obj,item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] +1
    }
    return obj;
}, {});

console.log(listitaReducida2)

const listitaReducida3 = listitaFiltrada3.reduce((obj,item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] +1
    }
    return obj;
}, {});

console.log(listitaReducida3)

const listitaReducida4 = listitaFiltrada4.reduce((obj,item) => {
    if(!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] +1
    }
    return obj;
}, {});

console.log(listitaReducida4)


const listaReducidaFinal1 = listitaFiltrada1.reduce((obj,item) => {
    if(item != 0 ) {
        return obj = obj + 1
    }
} , 0);

console.log(listaReducidaFinal1)

const listaReducidaFinal2 = listitaFiltrada2.reduce((obj,item) => {
    if(item != 0 ) {
        return obj = obj + 1
    }
} , 0);

console.log(listaReducidaFinal2)

const listaReducidaFinal3 = listitaFiltrada3.reduce((obj,item) => {
    if(item != 0 ) {
        return obj = obj + 1
    }
} , 0);

console.log(listaReducidaFinal3)

const listaReducidaFinal4 = listitaFiltrada4.reduce((obj,item) => {
    if(item != 0 ) {
        return obj = obj + 1
    }
} , 0);

console.log(listaReducidaFinal4)



//const listitaReducida = listita.reduce(item => (obj,item) => {instrucciones}, valoIniObjeto);
// funcion que me retorne true si el el string es un palindromo y false si no lo es 

// pasar el string a un array
//lo guardamos en una variable 
//copiamos el array en otra variable 
// volteamos otro array
// comparamos el array original con el copiado 
// si son iguales debe de retornar un true 

function solution(inputString) {

    // pasar el string a un array
    const arrayDeString = inputString.split('');
    console.log(arrayDeString)
    console.log(arrayDeString[0])
    const arrayDeString2 = inputString.split('');

    const arrayDeStringVolteado = arrayDeString.reverse()
    console.log(arrayDeStringVolteado)

    // comparamos el array original con el copiado 
    // si son iguales debe de retornar un true
    console.log(arrayDeString2[0])
    console.log(arrayDeStringVolteado[0])
    
    const nuevoArrayFiltrado = []
    for(index = 0; index < arrayDeString.length; index++){
        //console.log(index)
        if(arrayDeString2[index] === arrayDeStringVolteado[index]){
            nuevoArrayFiltrado.push(true)
        } else {nuevoArrayFiltrado.push(false)}
    }
    console.log(nuevoArrayFiltrado)
    const rtsFinal = nuevoArrayFiltrado.every( item => item === true )

    console.log(rtsFinal)
    return
} solution("aabaa")