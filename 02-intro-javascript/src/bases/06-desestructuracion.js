/* Desestructuración o asignación desestructurante */

const persona = {
    nombre: 'Daniel',
    edad: 42,
    clave: 'danypower',
    id: 0,
};

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */

// Desestructurando... extrayendo cada propiedad del objeto persona

const { nombre, edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

/* Desestructuración en una función */
const retornaPersona = (usuario) =>{
    const {nombre, edad, clave} = usuario;
    console.log(nombre, edad, clave);
}

retornaPersona(persona);

/* Desestructuración en una función opción 2 */
const retornaPersona2 = ({clave, edad}) =>{
    console.log(edad, clave);
}

retornaPersona2(persona);

/* Desestructuración en una función opción 2 con valores por defecto (si no existe la propiedad en el objeto original, agrega la propiedad y asigna un valor por defecto, sino, muestra la propiedad original) */
const retornaPersona3 = ({clave, edad, id=2094}) =>{
    console.log(edad, clave, id);
}

retornaPersona3(persona);

/* Retornando un objeto */
const retornaPersona4 = ({clave, edad, id=2094}) =>{
    return {
        nombreClave: clave,
        anios: edad,
        geo: {
            lat: 12.5,
            lon: -14.6,
        }
    }
}

const persona4 = retornaPersona4(persona);
console.log(persona4);

/* const {nombreClave, anios, geo: {lat, lon}} = retornaPersona4(persona); 
equivale a lo que esta abajo
*/
const {nombreClave, anios, geo} = retornaPersona4(persona);
const {lat, lon} = geo;
console.log(nombreClave, anios, lat, lon);

