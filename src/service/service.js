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
    axios.defaults.headers.common["Authorization"] = `Basic ${basicAuth}`;
    
  }
    
export const gameNameApi =(type)=>{
    let url = `${BASE_URL}/v1/dashboard/list/?market_type=${type}`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}

export const getBid =()=>{
    let url = `${BASE_URL}/v1/user-list/`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}

export const getuserList = () => {
    let url = `${BASE_URL}/v1/user-list/`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}

export const getNumbers =(type)=>{
    let url = `${BASE_URL}/v1/get-numbers-list?number_type=${type}`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}
export const getDashboarddata =()=>{
    let url = `${BASE_URL}/v1/main-dashboard-list`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}


export const addFund = (data) => {

    

    let url = `${BASE_URL}/v1/add-fund/`;

    return axios.post(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}

export const changePin = (data) => {

    

    let url = `${BASE_URL}/v1/change-pin/`;

    return axios.post(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}

export const gameRate = () => {


    let url = `${BASE_URL}/v1/get-normal-game-rate`;

    return axios.get(url, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}

export const updateGameName = (data) => {


    let url = `${BASE_URL}/v1/get-normal-game-rate`;

    return axios.put(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}