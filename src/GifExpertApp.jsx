import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(
        [ 'Harry Potter' ]);

    const onAddCategory = ( newCategory ) => {
        // categories.push('WoW');
        // setCategories( (value) => value.concat('WoW'));
        // setCategories(['WoW', ...categories]);
        if(categories.includes(newCategory)) return; 
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ event => onAddCategory(event) } 
            />

            {
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category }
                        category = { category }
                    />
                ))
            }
        </>
    )
}
