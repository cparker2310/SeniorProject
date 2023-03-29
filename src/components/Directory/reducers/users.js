import { FETCH_ALL, FETCH_BY_SEARCH } from '../constants/actionTypes';

export default (users= [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_BY_SEARCH:
            return action.payload;
        default: 
            return users;
    }
}