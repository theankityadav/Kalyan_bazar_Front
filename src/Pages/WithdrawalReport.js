import React, { useEffect, useState } from 'react'
import Table from '../Common/Table'

import { getFundHistory } from '../service/service'

const WithdrawalReport = () => {
    const[list,setList]=useState([])
    useEffect(()=>{
        getInformation()
    },[])
    
    const getInformation =()=>{
        getFundHistory().then((res)=>{
            setList(res.data.data)
            console.log("res.data",res.data)
          }).catch((err)=>{
              alert(err||"something went wrong ")
          })
      }
  return (
    <div className="content-wrapper">
       
       
        <Table list={list} AddFund={true} getInformation={getInformation} head="Fund Requests"/>
    </div>
  )
}

export default WithdrawalReport
