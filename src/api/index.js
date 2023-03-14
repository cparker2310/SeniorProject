import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const logIn = (email, password) => api.post(`/user/login/`)
export const getUserById = id => api.get(`/user/${id}`)

const apis = {
    insertUser,
    updateUserById,
    deleteUserById,
    getAllUsers,
    getUserById,
    logIn
}

export default apis