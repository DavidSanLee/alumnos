// un vector que recibe x y

let MultiplicaNumeros = function (x, y) {

    this.x = x;
    this.y = y;
    
}

MultiplicaNumeros.prototype.por = function(otroVector) {

    return new MultiplicaNumeros(this.x * otroVector.x, this.y * otroVector.y)

}

let v1 = new MultiplicaNumeros(1,2)
let v2 = new MultiplicaNumeros(1,2)
console.log(MultiplicaNumeros)
console.log(v1)
console.log(v1.por(v2))

//clase grupo
//va a crear una lista arreglo vacio 

//add si no existe

//has  retorna un boleano si es muembro del grupo
//from recibe un arreglo y crea un grupo de dicho arreglo
//
//

let Grupo = function (members) {

    this.members = members;

}
let b1 = new Grupo([])
//console.log(b1)
let b2 = [5]


Grupo.prototype.add = function (otherM) {

    return new Grupo (  this.members.push(otherM))

}
console.log(b1)

let b3 = b1.add(b2)
console.log(b3)



