import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

export const insertPending = payload => api.post(`/pending`, payload)
export const getAllPendings = () => api.get(`/pendings`)
export const deletePending = id => api.delete(`/pending/${id}`)
export const getPendingById = id => api.get(`/pending/${id}`)

export const insertJob = payload => api.post(`/job`, payload)
export const getAllJobs = () => api.get(`/jobs`)
export const updateJobById = (id, payload) => api.put(`/job/${id}`, payload)
export const deleteJobById = id => api.delete(`/job/${id}`)
export const getJobById = id => api.get(`/job/${id}`)

export const insertMessage = payload => api.post(`/message`, payload)
export const getAllMessages = () => api.get(`/messages`)
export const updateMessageById = (id, payload) => api.put(`/message/${id}`, payload)
export const deleteMessageById = id => api.delete(`/message/${id}`)
export const getMessageById = id => api.get(`/message/${id}`)

const apis = {
    insertUser,
    updateUserById,
    deleteUserById,
    getAllUsers,
    getUserById,
    //updateImageIndex,

    insertPending,
    deletePending,
    getAllPendings,
    getPendingById,

    insertJob,
    updateJobById,
    deleteJobById,
    getAllJobs,
    getJobById,

    insertMessage,
    updateMessageById,
    deleteMessageById,
    getAllMessages,
    getMessageById,
}

export default apis