//1. Explorando arreglos en JavaScript
// 1.1 Se define un arreglo con 5 números
let misNumeros = [10, 20, 30, 40, 50];

// 1.2 Se accede al tercer elemento (índice 2) y se muestra
console.log("El tercer elemento es: " + misNumeros[2]);

// 1.3 Agregar con push() y eliminar con pop()
misNumeros.push(60); // Se agrega el 60 al final
console.log("Después de push(60):", misNumeros);

misNumeros.pop(); // Se elimina el último elemento
console.log("Después de pop():", misNumeros);


//2. Iterando sobre un arreglo
// let valores = [5, 10, 15, 20];

// // Ciclo for tradicional
// console.log("Iteración con ciclo for:");
// for (let i = 0; i < valores.length; i++) {
//     console.log("Número:", valores[i]);
// }

// // Método forEach()
// console.log("Iteración con forEach():");
// valores.forEach(num => {
//     console.log("Número:", num);
// });


// //3. Operaciones con Arreglos
// let listaA = [1, 2, 3, 11, 15];
// let listaB = [3, 4, 5, 20];

// // Se concatenan dos arreglos
// let unionConcatenada = listaA.concat(listaB);
// console.log("Arreglos concatenados:", unionConcatenada);

// // Se encuentran la diferencia (elementos en listaA que NO están en listaB)
// let diferencia = listaA.filter(n => !listaB.includes(n));
// console.log("Diferencia (A - B):", diferencia);

// // Filtro: Solo números mayores a 10
// let mayoresDiez = unionConcatenada.filter(n => n > 10);
// console.log("Números mayores a 10:", mayoresDiez);


// //4. Aplicando Ciclos Iterativos
// // Ciclo while: Suma del 1 al 10
// let suma = 0;
// let contador = 1;
// while (contador <= 10) {
//     suma += contador;
//     contador++;
// }
// console.log("Resultado de la suma 1-10:", suma);

// // Ciclo do/while: Imprimir del 5 al 15
// let numDo = 5;
// console.log("Cuenta del 5 al 15:");
// do {
//     console.log(numDo);
//     numDo++;
// } while (numDo <= 15);

// // For anidado: Tabla de multiplicar del 1 al 5
// console.log("Tablas de multiplicar:");
// for (let i = 1; i <= 5; i++) {
//     console.log(`--- Tabla del ${i} ---`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }


// ¿Por qué es importante seguir estas prácticas?


// Legibilidad: El uso de una indentación adecuada permite visualizar rápidamente la jerarquía del código, como los ciclos anidados o bloques de control,
// facilitando que cualquier desarrollador entienda la estructura de un vistazo.

// Mantenimiento: Al utilizar nombres de variables descriptivos(como misNumeros o sumaTotal en lugar de solo x o y), el propósito de cada dato es evidente, 
// lo que reduce errores al realizar cambios futuros.

//Escalabilidad: Un código organizado y limpio es escalable, permitiendo que el proyecto crezca y se le añadan nuevas funcionalidades sin que la lógica 
// se vuelva confusa o difícil de depurar.