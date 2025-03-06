import axios from "axios";
import token from "../token";

const instance = axios.create({
    baseURL: import.meta.env["VITE_BASE_URL"],
    headers: {
        "Authorization": "Bearer " + token 
    }
})

export default instance;