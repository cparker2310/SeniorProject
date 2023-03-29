import { FETCH_ALL } from '../constants/actionTypes';
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
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}