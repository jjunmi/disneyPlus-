import axios from 'axios';

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key: "a6661650502f725b6c432f4043e874c6",
        language: "ko-KR"
    }
})
export default instance;