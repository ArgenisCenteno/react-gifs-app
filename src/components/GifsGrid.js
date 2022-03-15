//import React,{useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifsGridItems } from './GifsGridItems';
//import { getGifs } from '../helpers/GetGifs';


export const GifsGrid = ({category}) => {

//  const [images, setimages] = useState([]);

const {data:images, loading} = useFetchGifs(category);  
  
  
  return (
    <>
        <h3>{category}</h3>

        {loading && <p>Cargando</p>}
      
       <div className='card-grid'>
          {
              images.map( img => (
               <GifsGridItems 
                 key={img.id}
                 {...img} 
                
                />
              ))
          }
        </div>
    </>
  )
  }
