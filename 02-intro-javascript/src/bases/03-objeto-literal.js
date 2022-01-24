const persona = {
    nombre: 'Daniel',
    apellido: 'Vázquez',
    edad: 42,
    direccion: {
        ciudad:'Puebla',
        cp: 72340,
        lat: 15.954,
        log: -12.785,
    }
}

/* Se puede imprimir un objeto como una tabla
console.table( {
    persona: persona,
});
*/

/* Imprimir un objeto dentro de otro objeto
console.log( {persona}); */

/* De esta manera sólo se hace una referncia al primer objeto
const persona2 = {...persona}; */

// De esta manera se genera un nuevo objeto a partir de otro
const persona2 = {...persona};
persona2.nombre = 'Paulo';
console.log(persona);
console.log(persona2);