import axios from "axios";
import { BASE_URL } from "./APIConstant";

const headersApplicationJson = {
    "Content-Type": "application/json",
  };
  let token = localStorage.getItem("token");

  if (token) {
    axios.defaults.headers.common["Authorization"] = `Basic ${token}`;
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