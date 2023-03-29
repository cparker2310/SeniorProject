import { FETCH_ALL, FETCH_BY_SEARCH } from '../constants/actionTypes';
import * as api from '../../../api/index';

export const getUsers= () => async (dispatch) => {
    try {
        const { data }= await api.getAllUsers();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch(error) {
        console.log(error);
    }
}

export const getUserBySearch= (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } }= await api.fetchUserBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
    } catch (error) {
        console.log(error);
    }
}