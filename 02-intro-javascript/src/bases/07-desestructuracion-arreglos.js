/* Desestructuración en erreglos */

const jugadores = ['Jordan', 'Bryant', 'Allen'];
console.log(jugadores);

/* Desestructuración de los elementos del arreglo por separado */
const [j1] = jugadores;
console.log(j1);

const [, , j3] = jugadores;
console.log(j3);

/* Desestructuración de todos los elementos del arreglo*/
const [player1, player2, player3] = jugadores;
console.log(player1, player2, player3);

/* Desestructurando el contenido de un arreglo que proviene de una función */
const retornaAreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaAreglo();
console.log(letras, numeros);

/* Otro ejemplo */

const use_State = (valor) => {
    return [valor, () => { console.log('Hola desde un arreglo') } ]
}

const arr = use_State('giogio233');
console.log(arr);
arr[1]();

/* Ejercicio desestructurar el arreglo de la funcion use_State  */
const arr2 = use_State('pdaniel');
const [nombre, setNombre] = arr2;
console.log(nombre);
setNombre();