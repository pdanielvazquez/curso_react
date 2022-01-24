import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

    /* La función dentro de useEffect solo se ejecuta una sóla vez, cuando se renderiza el página */
    useEffect( () => {
        /* getGifs(); */
        getGifs( category )
            .then( imgs => setImages(imgs) );
    }, [ category ]);
    /* Se coloca un arreglo vacio de dependencias para que no se repita mas que una vez la función */

    /* const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=YyuNkAwWh2eZgAYHwvtHSQ8WUhGHiUrS`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        } );

        console.log(gifs);
        setImages(gifs);
    } */

    // getGifs();

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {/* <h3>{ count }</h3>
                <button onClick={ ()=> setCount( count + 1 ) } >+1</button> */}
                {/* <ol> */}
                    
                    {/* { images.map( image => {
                        return (
                            <li key={ image.id }>{ image.title }</li>
                        )
                    } ) } */}

                    {/* {
                        images.map( ({id, title}) => (
                            <li key={ id }>
                                { title }
                            </li>
                        ) )
                    } */}

                    {
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                /* img como referencia
                                img={ img }  */
                                /* Objeto independiente que tiene todos los atributos de la imagen */
                                { ...img }
                            />
                        ))
                    }

                {/* </ol> */}
            </div>
        </>
    )
}
