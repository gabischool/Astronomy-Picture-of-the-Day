

import React,{useEffect, useState} from 'react';
import "./style.css";


function ImageCard( props) {

    const {movies}=props;

    // if (!props.title) return <h3>Loading...</h3>;

     console.log("props", props.movies);


    return (
        
        <div className="boxes">
           
           
            
            



            <div className="box-1">

            <img className="img" src={movies.url} alt="unknown yet"/>
            <h4 className="title">{movies.title}</h4>
            
            <h4 className="date">{movies.date}</h4>

            <p className="explanation">{movies.explanation}</p>

            <p className="copyright-1"> this is the copyright</p>

            </div>

          



        </div>
    )
}

export default ImageCard;
