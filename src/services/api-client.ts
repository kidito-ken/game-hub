import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params:{
        key:'2ccd21c52c894539974e5a836b3bc105'
    }
})