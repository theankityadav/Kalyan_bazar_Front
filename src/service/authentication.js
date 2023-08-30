import axios from "axios"
import { BASE_URL } from "./APIConstant";


export const loginApi = (data) => {

    let url = `${BASE_URL}/v1/user/login/`;

    return axios.post(url, data);
}