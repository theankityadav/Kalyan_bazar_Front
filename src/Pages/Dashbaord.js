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
          <div className="row">
            {/* <div className="col-xl-4">
                <UpperCard data={data} />
            </div> */}
            <div className="col-xl-12">
                <MidCards data={data} />
                {/* <SecondRightCard  /> */}
                {/* <SmallCards /> */}
            </div>
          </div>
          <Table list={list} getInformation={getInformation} head="Withdrawl Requests"/>
        </div>
        <footer className="sticky-footer">
          <div className="container">
            <div className="text-center">
              <small>Copyright © Kalyan Bazar <span id="autodate">2024</span></small>
            </div>
          </div>
        </footer>
       
      </div>
    </>
  );
};

export default Dashbaord;
