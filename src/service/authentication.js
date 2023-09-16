import axios from "axios"
import { BASE_URL } from "./APIConstant";
import { encode as btoa } from "base-64";


export const loginApi = (data) => {
    let basicAuth = btoa("admin:Admin@123");
    

    let url = `${BASE_URL}/v1/user/login/`;

    return axios.post(url,data, {headers: { "accept": 'application/json' ,
    "authorization": `Basic ${basicAuth}`,
    "Content-Type": 'application/json' ,
   
}});
}