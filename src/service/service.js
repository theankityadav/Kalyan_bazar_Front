import axios from "axios";
import { BASE_URL } from "./APIConstant";
import { encode as btoa } from "base-64";

const headersApplicationJson = {
    "Content-Type": "application/json",
    "accept": 'application/json' ,
  };
  let token = localStorage.getItem("access_token");
  let basicAuth = btoa("admin:Admin@123");

  if (token) {
      
    axios.defaults.headers.common["AccessToken"] = token;
    axios.defaults.headers.common["Authorization"] = `Bearer ${basicAuth}`;
    
  }
    
export const gameNameApi =()=>{
    let url = `${BASE_URL}/v1/dashboard/list/`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}

export const getBid =()=>{
    let url = `${BASE_URL}/v1/dashboard/list/`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}