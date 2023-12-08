import React, { useEffect, useState } from "react";
import Table from "../Common/Table";
import UpperCard from "../Components/UpperCard";
import MidCards from "../Components/MidCards";
import SecondRightCard from "../Components/SecondRightCard";
import SmallCards from "../Components/SmallCards";
import { getDashboarddata, getuserList, getuserTransation } from "../service/service";
const Dashbaord = () => {
  const[list,setList]=useState([])
  const[data,setData]=useState()
  useEffect(()=>{
    getInformation()
    handleGetDashboardData()
},[])

const handleGetDashboardData =()=>{
  getDashboarddata().then((res)=>{
    setData(res?.data?.data)
  }).catch((err)=>{
        alert(err||"something went wrong ")
    })
}


const getInformation =()=>{
  getuserTransation().then((res)=>{
      setList(res.data.data)
      console.log("res.data",res.data)
    }).catch((err)=>{
        alert(err||"something went wrong ")
    })
}

  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Admin</li>
          </ol>
          <div className="row">
            <div className="col-xl-4">
                <UpperCard data={data} />
            </div>
            <div className="col-xl-8">
                <MidCards data={data} />
                <SecondRightCard  />
                <SmallCards />
            </div>
          </div>
          <Table list={list} getInformation={getInformation} head="Fund Request Auto Deposit History"/>
        </div>
        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © Kalyan Bazar <span id="autodate"></span></small>
            </div>
          </div>
        </footer>
       
      </div>
    </>
  );
};

export default Dashbaord;
