

import React,{useEffect, useState} from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';

function ImageList() {

   
const [movies, setMovies] = useState([]);
// console.log("props", movies.title);

useEffect( () =>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=b9wlO0R08AId45EUs8Cd4zAGBqNBeQevub99vpHW")
    .then( (res)=>{
        
        setMovies(res.data)
   
    })
    .catch( (error)=>{
       console.log("error", error); 
    })
 
    },[]);


    return (
        <div>
          
          <ImageCard movies={movies} /> 
        </div>
    )
}

export default ImageList;
