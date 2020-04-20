import React, {useEffect} from 'react';
import {fetchMovies} from '../actions/Movieactions'
import Movie from './Movie';
import {useSelector, useDispatch} from 'react-redux';

// const Movie = props => {
//     useEffect(() => {
//        props.fetchMovie();
//     }, [])
// }

const Movielist = props => {
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies)
    const isFetching = useSelector(state => state.isFetching)
    const error = useSelector(state => state.error)
    useEffect(() => {
dispatch(fetchMovies());
    }, [fetchMovies]);
    return (
    <div>
        {isFetching && <p>Getting movies...</p>}
        {movies && movies.map((movie) => <Movie movie={movie}/>)}
        {error && <p>Error Loading ({error})</p> }
        </div>
    )
}

export default Movielist;

