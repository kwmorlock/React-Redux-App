import React, {useEffect} from 'react';
import {fetchMovie} from '../actions/Movieactions'

const Movie = props => {
    useEffect(() => {
       props.fetchMovie();
    }, [])
}

