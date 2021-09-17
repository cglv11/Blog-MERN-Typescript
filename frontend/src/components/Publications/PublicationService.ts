// CONNECTION WITH SERVER

import axios from 'axios';
import { Publication } from './Publication';

const API = 'http://localhost:4000'

export const getPublications = async () => {
    return await axios.get<Publication[]>(`${API}/publications`)
}

export const createPublication = async (publication: Publication) => {
    return await axios.post(`${API}/publications`, publication)
}

export const getPublication = async (id: string) => {
    return await axios.get<Publication>(`${API}/publications/${id}`)
}

export const updatePublication = async (id: string, publication: Publication) => {
    return await axios.put<Publication>(`${API}/publications/${id}`, publication)
}

export const deletePublication = async (id: string) => {
    return await axios.delete<Publication>(`${API}/publications/${id}`)
}