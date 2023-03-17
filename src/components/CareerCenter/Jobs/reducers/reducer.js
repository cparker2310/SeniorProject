import {
    CREATE,
    UPDATE,
    DELETE,
    FETCH_ALL
} from '../actions/constants';

export default (jobs= [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE: 
            return [...jobs, action.payload];
        case UPDATE:
            return jobs.map((job) => (job._id === action.payload._id ? action.payload : job));
        case DELETE:
            return jobs.filter((job) => job._id !== action.payload);
        default:
            return jobs;
    }
}