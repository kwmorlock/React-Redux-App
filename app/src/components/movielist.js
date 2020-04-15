import React, {useEffect} from 'react';
import {fetchMovie} from '../actions/Movieactions'
import Movie from './Movie';
import {useSelector} from 'react-redux';

// const Movie = props => {
//     useEffect(() => {
//        props.fetchMovie();
//     }, [])
// }

const Movielist = props => {
    const movies = useSelector(state => state.movies)
    return (
    <div>{movies.map((movie) => <Movie movie={movie}/>)}</div>
    )
}

export default Movielist;

