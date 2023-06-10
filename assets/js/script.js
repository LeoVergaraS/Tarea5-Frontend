/*Variables*/
const notas = [6, 8, 9, 2, 5, 10]
let promedio = 0

/*Funciones*/
// Función para sumar los elementos de un array
// Parámetro: array de números
// Retorno: suma de los elementos del array
function sumar(n) {
    let sum = 0
    for (let index = 0; index < n.length; index++) {
        sum = sum + n[index];
    }
    return sum;
}

// Función para calcular el promedio de un array de números
// Parámetro: array de números
// Retorno: promedio de los elementos del array
function prom(n) {
    const sumaNotas = sumar(n);
    return sumaNotas / n.length;
}

/*Desarrollo*/
promedio = prom(notas)
console.log("El promedio de las notas es: ", promedio);