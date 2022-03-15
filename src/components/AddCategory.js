import React, {useState} from 'react'
import PropsTypes from 'prop-types';


export const AddCategory = ({setcategories}) => {

const [inputValue, setinputValue] = useState('')

const handleInputChange = (e) =>{
    setinputValue(e.target.value);
}

const handleSubmit = (e) =>{
    e.preventDefault();

    if(inputValue.trim().length > 3){
        setcategories(cats => [inputValue, ...cats]);
        setinputValue('');
    }else{
        console.log('Más texto, please');
    }

//    console.log('Submit hecho')
    
}


  return (
    <>
        <form onSubmit={handleSubmit}>
            <h4>AddCategory</h4>
            <input 
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            />
        </form>
    </>
  )
}

AddCategory.propsTypes = {
    setCategories: PropsTypes.func.isRequired
}