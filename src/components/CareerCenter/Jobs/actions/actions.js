import {
    CREATE,
    UPDATE,
    DELETE,
    FETCH_ALL
} from './constants';

import * as api from '../../../../api/index';

// Create a job
export const createJob= (job) => async (dispatch) => {
    try {
        const { data }= await api.insertJob(job);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

// Edit a job 
export const editJob= (id, job) => async (dispatch) => {
    try {
        const { data }= await api.updateJobById(id, job);
        dispatch({ type: UPDATE, payload: data });
    } catch(error) {
        console.log(error);
    }
}

// Delete a job
export const deleteJob= (id) => async (dispatch) => {
    try {
        const { data }= await api.deleteJobById(id);
        dispatch({ type: DELETE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

// Get all jobs
export const getJobs= () => async (dispatch) => {
    try {
        const { data }= await api.getAllJobs();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}