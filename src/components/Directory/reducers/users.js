import { FETCH_ALL } from '../constants/actionTypes';

export default (users= [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        default: 
            return users;
    }
}