

const activo = true;

/* let mensaje = '';

if (!activo) {
    mensaje = 'Activo';
}
else{
    mensaje = 'Inactivo';
} */

/* Operador ternario siempre de los resultados, cuando la condición es verdadera y cuando es falsa */
const mensaje = (!activo) ? 'Activo': 'Inactivo';
console.log(mensaje);

/* IF simple de manera corta */
const mensaje2 = activo && 'Activo';
console.log(mensaje2);
