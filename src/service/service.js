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


export const getuserList = () => {
    let url = `${BASE_URL}/v1/user-list/`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}
export const getuserTransation = () => {
    let url = `${BASE_URL}/v1/get-withdrawl-list`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}
export const getFundHistory = (id) => {
    let user = id?`?user_id=${id}`:"";
    let url = `${BASE_URL}/v1/get-user-fund${user}`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}
export const getuserTransationByid = (id) => {
    let url = `${BASE_URL}/v1/get-withdrawl-list?user_id=${id}`;
    return axios.get(url, {
        headers: headersApplicationJson,
    });
}

export const getuserDetails = (id) => {
    let url = `${BASE_URL}/v1/user-list/?user_id=${id}`;
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

export const getAddNumbers =(number)=>{
    let url = `${BASE_URL}/v1/get-add-numbers?number=${number}`;
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

export const approvedFund = (data) => {
    let url = `${BASE_URL}/v1/accept-withdrawl`;

    return axios.post(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
}});
}

export const rejectFund = (data) => {
    let url = `${BASE_URL}/v1/reject-withdrawl`;

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

    let url = `${BASE_URL}/v1/update-game-name`;

    return axios.patch(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}

export const deleteGameResult = (id,is_open) => {
    let isOpen = is_open?`&is_open=${is_open}`:"";

    let url = `${BASE_URL}/v1/delete-result?id=${id}${isOpen}`;

    return axios.delete(url, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}


export const updateUserAcitvity = (data) => {

    let url = `${BASE_URL}/v1/update-user-activity`;

    return axios.put(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
}});
}


export const updateUserPin = (data) => {

    let url = `${BASE_URL}/v1/change-pin`;

    return axios.put(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}

export const withdrawAmountAPi = (data) => {

    let url = `${BASE_URL}/v1/add-withdrawl`;

    return axios.post(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}

export const resultDeclareAPi = (data) => {
    let url = `${BASE_URL}/v1/declare-result`;

    return axios.post(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}

export const getresultList = (data) => {
    let url = `${BASE_URL}/v1/get-result`;

    return axios.get(url, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}

export const addGameApi = (data) => {
    let url = `${BASE_URL}/v1/dashboard/create/`;

    return axios.post(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}


export const updateUpiId = (data) => {

    let url = `${BASE_URL}/v1/update-upi`;

    return axios.patch(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}

export const updateAppSettings= (data) => {

    let url = `${BASE_URL}/v1/update-app-settings`;
    return axios.patch(url,data, {headers: { "accept": 'application/json' ,
    "Content-Type": 'application/json' ,
   
}});
}

export const getAppSetting = () => {

    let url = `${BASE_URL}/v1/get-app-settings`;

    return axios.get(url, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}

export const getSettingInformation = () => {

    let url = `${BASE_URL}/v1/get-information`;

    return axios.get(url, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});

}
export const updateInformation = (data) => {

    let url = `${BASE_URL}/v1/update-information`;

    return axios.patch(url,data, {headers: { "accept": 'application/json' ,
   
    "Content-Type": 'application/json' ,
   
}});
}
