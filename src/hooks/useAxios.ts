import axios from "axios"

export const useAxios = (APIendPoint: string, payload?: any, token?: string|null) => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:5000/api/v1/",
        withCredentials:true
        
    });

    const getCall = async () => {
        const options = {
            url: APIendPoint,
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${token}`
            },
        }
        const res = await axiosInstance(options);
        return res.data;
    }

    const postCall = async () => {
        const options = {
            url: APIendPoint,
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                accept: 'application/json',
                Authorization: `${token}`
            },
            data: payload
        }
        const res = await axiosInstance(options);
        return res.data;
    }

    const putCall = async () => {
        const options = {
            url: APIendPoint,
            method: 'PUT',
            headers: {
                accept: 'application/json',
                Authorization: `${token}`
            },
            data: payload
        }
        const res = await axiosInstance(options);
        return res.data;
    }

    const deleteCall = async () => {
        const options = {
            url: APIendPoint,
            method: 'DELETE',
            headers: {
                accept: 'application/json',
                Authorization: `${token}`
            },
            data: payload
        }
        const res = await axiosInstance(options);
        return res.data;
    }

    return {getCall, postCall, putCall, deleteCall};
}