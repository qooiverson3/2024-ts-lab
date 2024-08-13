import axios, { AxiosRequestConfig } from 'axios';

export const fetchData = async (url: string, config?: AxiosRequestConfig) => {
    try {
        const response = await axios.get(url, {
            ...config,
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const postData = async (url: string, data: any, config?: AxiosRequestConfig) => {
    try {
        const response = await axios.post(url, data, {
            ...config,
        });

        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}
