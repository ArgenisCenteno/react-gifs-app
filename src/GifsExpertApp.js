import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import {GifsGrid} from './components/GifsGrid';
import 'animate.css';

export const GifsExpertApp = () => {

  //const categories = ['Hunter x Hunter', 'Dragon Ball', 'Naruto'];

  const [categories, setcategories] = useState(['Animations']);


//  const handleAdd = () =>{
//    setcategories([...categories, 'Kimetsu no Yaiba']);
//  }

  return (
    <>
        <h1 className="animate__fadeIn">GifsExpertApp</h1>
        <hr />
        <AddCategory setcategories={setcategories}/>
        <ol>
            {
              categories.map( category => 
                <GifsGrid 
                key={category}
                category={category}
                
                />
              )

            }

        </ol>
    
    </>
    
  )
}
