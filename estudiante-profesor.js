class Estudiante{
    constructor({
        nombreAlumno,
        grupoAlumno,
        materias = [],
        materiasCalificadas = [],
        calificar2 = [],
        mediaAritmetica = 0
    }

    ) {
        this.nombreAlumno = nombreAlumno;
        this.grupoAlumno = grupoAlumno;
        this.materias = materias;
        this.materiasCalificadas = materiasCalificadas;
        this.calificar2 = calificar2;
        this.mediaAritmetica = mediaAritmetica;



    }

    nuevaMateria(mat) {

        if(this.materias.indexOf(mat) === -1)
        this.materias.push(mat);
        else {
            console.log('Esta materia ya la tiene registrada el alumno en el sistema')
        }
    }



    calificar(materiaACalificar) {
        if (this.materias.indexOf(materiaACalificar) != -1) {
            let notaCalidicada = prompt('introduzca nota a calificar')
            this.materiasCalificadas.push({ materia:materiaACalificar }, { calificacion: notaCalidicada})
            //let nuevaMateriaCalificada = {
            //    calificacion: notaCalidicada
            //}
            //nuevaMateriaCalificada = renameKey(nuevaMateriaCalificada, "calificacion",calificacion )
            //Object.assign(this.materiasCalificadas,nuevaMateriaCalificada)
            //let cambioDeKeys = this.materiasCalificadas.push({calificacion:notaCalidicada});
            //let objetoMateriasCalificadas = this.materiasCalificadas[this.materias.indexOf(calificacion)]
            //objetoMateriasCalificadas = renameKey(objetoMateriasCalificadas, 'calificacion', calificacion);

        } else { console.log('Este alumno no tiene inscrita la materia de ' + materiaACalificar)

        }
    }

    calif2(materiaACalificar2) {
        if (this.materias.indexOf(materiaACalificar2) != -1) {
            let notaCalidicada = prompt('introduzca nota a calificar')
            let nn = [[materiaACalificar2, notaCalidicada]]
            let nuevoObjetito = Object.fromEntries(nn)
            //console.log(nuevoObjetito)
            this.calificar2.push(nuevoObjetito)
            
        }
    }

    promedio() {
        //Object.values()
        //Object.entries()
        //materiasCalificadas = [{},{},{}]
        //let c = media + this.mediaAritmetica
        //console.log(c)
        //this.mediaAritmetica = c + 2
        let promedioFinal = []
        for(let index = 0; index < this.materias.length; index++){

            // array como objeto
            //var obj = { 0: 'a', 1: 'b', 2: 'c' };
            //console.log(Object.values(this.calificar2[index])); // ['a', 'b', 'c']

            promedioFinal.push(Object.values(this.calificar2[index])) 
            //console.log(promedioFinal)

        }
        //const listaReducidaFinal4 = listitaFiltrada4.reduce((obj,item) => {
            
        //} , 0);
        const  promedioFinal2 =  promedioFinal.flat()
        //console.log(promedioFinal2)
        const listaReducidaFinal = promedioFinal2.reduce((obj,item) => 
        obj = ((obj * 1) + (item * 1)) 
        //  / (this.calificar2.length)
        ,0);
        const promedioF = listaReducidaFinal / this.calificar2.length
        console.log(promedioF)
        this.mediaAritmetica = promedioF

        
        
    }
}

const david = new Estudiante({
    nombreAlumno: "David Sanchez",
    grupoAlumno: "2A",
    materias: ['historia','español','matematicas','geografia','ingles'] 
})

const juan = new Estudiante({
    nombreAlumno: "Juan Perez",
    grupoAlumno: "2A",
    materias: [] 
})

const irene = new Estudiante({
    nombreAlumno: "Irene de la Cruz",
    grupoAlumno: "2A",
    materias: [] 
})

const juliana = new Estudiante({
    nombreAlumno: "Juliana Alvarez",
    grupoAlumno: "2B",
    materias: [] 
})

const costantin = new Estudiante({
    nombreAlumno: "Costantino Garcia",
    grupoAlumno: "2B",
    materias: [] 
})

const zulia = new Estudiante({
    nombreAlumno: "Zulia Martinez",
    grupoAlumno: "2B",
    materias: [] 
})