

import React,{useEffect, useState} from 'react';

function ImageCard( props) {

    const {movies}=props;

    // if (!props.title) return <h3>Loading...</h3>;

     console.log("props", props.movies);


    return (
        <div>
            <h1>{movies.title}</h1>
            
            <img src={movies.url} alt="unknown yet"/>
            
            <h1>{movies.date}</h1>

            <h1>{movies.explanation}</h1>

            <p> this is the copyright</p>

        </div>
    )
}

export default ImageCard;
