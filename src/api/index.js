import axios from 'axios'

export const CallApi = async ({ url: url, method: method , data: data }) => {
    try {
        const response = await axios({
            url: url,
            method: method,
            data: data
        });

        return response;
    } catch (error) {
        console.log(error);
        return { error: 'get error when fetching api!', message: error }
    }
}