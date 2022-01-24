import {getHeroeById, getHeroeByOwner} from "./08-importar-exportar";

/* const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        // console.log('2 segundos después');
        const h1 = getHeroeById(2);
        // console.log(h1);
        resolve(h1);
        // reject('No se pudo encontrar al Héroe');
    },2000 );
} );

promesa.then( (heroe)=> {
    console.log(heroe);
})
.catch( err => console.warn( err ) ); */

/* Función asincrona para recuperar los datos de un Héroe usando una función explicita promesa 
(Primera versión) 

const getHeroeByIdAsync = (id) => {

    const promesa = new Promise( (resolve, reject) => {
        setTimeout( () => {
            // console.log('2 segundos después');
            const h1 = getHeroeById(id);
            if (h1 === undefined) {
                reject('No se pudo encontrar al héroe');
            }
            else{
                resolve(h1);
            }
            // console.log(h1);
            // reject('No se pudo encontrar al Héroe');
        },2000 );
    } );

    return promesa;
} 

getHeroeByIdAsync(10)
    .then(hero=> console.log('Heroe: ', hero))
    .catch(err => console.warn(err));

*/

/* Segunda versión */
const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // console.log('2 segundos después');
            const h1 = getHeroeById(id);
            if (h1)
                resolve(h1);
            else
                reject('No se pudo encontrar al héroe');
        },2000 );
    } );
}

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn);