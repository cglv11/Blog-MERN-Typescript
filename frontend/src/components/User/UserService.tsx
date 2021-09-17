import axios from 'axios';
import { User } from './User';

const API = 'http://localhost:4000'

export const signIn = async (user: User) => {
    return await axios.post<User>(`${API}//signin`, user) //users/signin
}

export const signUp = async (user: User) => {
    return await axios.post<User>(`${API}//signup`, user) //users/signup
}

// axios.interceptors.request.use(config => {
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//  },
//     error => {
//         return Promise.reject(error);
//  });