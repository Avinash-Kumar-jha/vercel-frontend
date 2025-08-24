import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://vercel-backend-4-e942.onrender.com/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

