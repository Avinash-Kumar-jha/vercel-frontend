import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://vercel-backend-7-djd1.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

