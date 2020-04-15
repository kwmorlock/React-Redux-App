import React, {useState} from 'react';

const Movie = (props) => {
return (
    <div>
       <p> {props.movie.title} </p>
       <p> {props.movie.description} </p>
       <p> {props.movie.director} </p>
    </div>
)
}

export default Movie;