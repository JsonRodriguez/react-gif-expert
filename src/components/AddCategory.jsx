import { useState } from 'react'
import { GifExpertApp } from '../GifExpertApp';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) =>{
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories((categories) => {
        //     if(categories.find( element => element === inputValue) === undefined){
        //         return [inputValue, ...categories]
        //     }else{
        //         return [...categories];
        //     };
        // });

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
