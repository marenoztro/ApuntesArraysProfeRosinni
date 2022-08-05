//tipos de datos de datos
// Number
// String
// Boolean
// undefined
// null

// declaracion de una variable
// ES5 => var,  ES6 => let y const

//ESTRUCTURAS DE CONTROL: if/else
//tipos de operadores => 
//operadores aritmeticos: suma, resta, multiplicacion, division, resto, incremento y decremento 
//comparativos o relacionales: >, <, >=, ===, !==
// logicos:   AND => &&, OR => ||, NOT => !

//datos de tipo objeto
//OBJETOS LITERALES
//declaracion de objeto literal
const persona = {
    nombre: "Ada",
    apellido: "Lovelace",
    edad: 40,
    is_activo: true,
    saludar: function() { //metodos
        console.log("Hola a todos");
    }
}
console.log(persona.nombre); //consultado de datos de un objeto
//ARRAYS
// indice o posicion 0    1          2
const frutas = ["Banana", "Melon", "Naranja"] // declaracion de un array
// largo = length    1      2        3

console.log(frutas[0]); //consulta del valor de un array

frutas.push("Uva") //ingresar nuevo dato al final del array
frutas.pop() // eliminar un dato al final del array

//FUNCIONES
function saludar() { //declaracion de una funcion
    //bloque de codigo a ejecutar
    console.log("Hola vengo de la funcion");
}

//llamar una funcion o invocar
saludar() // llamando a la funcion

function busquedaFrutas() {

    let busqueda = prompt("Ingresa su busqueda");

    let pos = frutas.indexOf(busqueda);
    if (pos >= 0) {
        alert("Si existe")
    } else {
        alert("No se encontraron coincidencias")
    }
}



//Estructuras de control:  for loops 
// for(inicializacion;condicion;actualizacion){
//BLOQUE DE CODIGO
// }

//["Banana", "Melon", "Naranja","Limon"]

//          3   3 <     3

// for (let i = 0; i < frutas.length; i++) { //true
//     //                    2
//     if (frutas[i] === "Melon") {
//         console.log(frutas[i] + "es");
//     } else {
//         console.log(frutas[i] + "s");
//     }
//     // Naranja
// }
//false
const nombres = ["Ada", "Diego", "Guille"]
const apellidos = ["Lovelace", "Bullor", "Perez"]

//         1    1  <      3          
for (let i = 0; i < nombres.length; i++) { //true
    // console.log(nombres[i]);
    //        0     0 <      3
    for (let j = 0; j < apellidos.length; j++) { //true
        //                 1                     0
        console.log(nombres[i] + " " + apellidos[j]); //Ada Lovelace, Ada Bullor, Ada Perez, Diego Lovelace
    }

}

//concatenacion