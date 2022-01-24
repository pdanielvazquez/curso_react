import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['NBA', 'F1', 'NFL'];
    const [categories, setCategories] = useState(['NBA']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'NCAA']);
    //     setCategories( cats => [...categories, 'NCAA'] );
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick = { handleAdd } >Agregar nuevo</button> */}

            <ol>
                { categories.map(category => {
                    return (
                        <GifGrid 
                            category={ category } 
                            key={ category }
                        />
                    )
                }) }

            </ol>
        </>
    )
}

export default GifExpertApp;