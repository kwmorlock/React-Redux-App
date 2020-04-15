import {FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE} from '../actions/Movieactions';


const initialState = {

movies: [
  ],
isFetching: false,
error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_START:
        return {movies:[], isFetching: true, error: '' }
        case FETCH_MOVIES_SUCCESS:
        return {movies: action.payload, isFetching: false, error: '' }
        case FETCH_MOVIES_FAILURE:
        return {movies: [], isFetching: false, error: action.payload }
        default: 
        return state
    }
}