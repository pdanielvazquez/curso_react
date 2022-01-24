
//import {heroes} from './data/heroes';
// import {heroes} from './data/heroes';

// Esta importación se usa cuando importamos uno de los elementos contenidos en un archivo
import { heroes } from '../data/heroes';

// Esta importación la podemos usar cuando hay objetos en el contenido del archivo que queremos que se exporten por defecto (esto no requiere de {}), todo lo que no sea exportación por defecto requiere {}
import supers, {owners} from '../data/heroes_default_1';

// console.log(heroes);

/* Función que busca una coincidencia en base a un atributo dentro de un arreglo y devuelve un sólo elemento */

/* const getHeroeById = (id) => {
    return heroes.find( (element) => element.id === id);
} */

/* const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
} */

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);

//console.log( getHeroeById(3) );

/* Función que busca coincidencias en base a un atributo dentro de un arreglo y devuelve varios elementos */

export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

//console.log( getHeroeByOwner('Marvel') );

/* Ahora las mismas funciones que antes pero con el archivo con exportación por defecto */

const getHeroeById2 = (id) => supers.find( (heroe) => heroe.id === id);

const getHeroeByOwner2 = (owner) => supers.filter( (heroe) => heroe.owner === owner);

/* console.log( getHeroeById2(1) );
console.log( getHeroeByOwner2('DC') );
console.log(owners); */