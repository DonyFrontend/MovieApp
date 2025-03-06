import axios from "axios";
import token from "../token";

const imgInstance = axios.create({
    baseURL: import.meta.env['TMDB_IMAGES_API'],
    headers: {
        'Authorization': 'Bearer ' + token
    },
    params: {
        'api_key': '3d25bd679dc2bbe7bc12117873d425ff'
    }
})

export { imgInstance };
const imgUrl = 'https://image.tmdb.org/t/p/w500'
export { imgUrl }