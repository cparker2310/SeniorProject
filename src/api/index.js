import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

export const insertJob = payload => api.post(`/job`, payload)
export const getAllJobs = () => api.get(`/jobs`)
export const updateJobById = (id, payload) => api.put(`/job/${id}`, payload)
export const deleteJobById = id => api.delete(`/job/${id}`)
export const getJobById = id => api.get(`/job/${id}`)

const apis = {
    insertUser,
    updateUserById,
    deleteUserById,
    getAllUsers,
    getUserById,

    insertJob,
    updateJobById,
    deleteJobById,
    getAllJobs,
    getJobById,
}

export default apis