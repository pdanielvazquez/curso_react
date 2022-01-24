const apiKey = 'YyuNkAwWh2eZgAYHwvtHSQ8WUhGHiUrS';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/* Primera version
peticion.then( resp => {
    resp.json().then( data => {
        console.log(data);
    })
})
.catch(console.warn); */

/* Segunda versión, usando promesas en cadena y  desestructuración */
peticion
    .then( resp => resp.json())
    .then( ({data}) => {
        const {url} = data.images.original;
        console.log(url);
        // Creando una imagen
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } )
    .catch(console.warn);