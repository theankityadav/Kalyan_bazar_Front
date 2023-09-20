import React, { useEffect, useState } from 'react'
import { gameNameApi } from '../service/service'

const GameName = () => {
   const[data,setData]=useState([])

    useEffect(()=>{
        handleGameNameList()
    },[])

    const handleGameNameList =()=>{
        gameNameApi().then((res)=>{
            setData(res.data.data)
        }).catch((err)=>{
            alert(err||"something went wrong ")
        })
    }

    
  return (
    <div className="content-wrapper">
        <div  className="container-fluid">
        <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table"></i> <b>Fund Request Auto Deposit History</b>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
              cellpadding="0"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Game Name</th>
                  <th>Game Name Hindi</th>
                  <th>Today Open</th>
                  <th>Today Close</th>
                  <th>Active</th>
                  <th> Market Status</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {data.map((item,index)=>{
                      return( <tr>
                        <td>{item?.market_name||"NA"} </td>
                        <td>Developer </td>
                        <td>San Francisco</td>
                        <td>30</td>
                        <td>2010/07/14</td>
                        <td><span className={index%2===0? "btnspan success" :"btnspan danger"}>
                            { index%2===0? "Yes" :"No"}
                            </span></td>
                        <td>
                            <span className={index? "btnspan success" :"btnspan danger"}>
                            { index? "Open Today" :"Close Today"}
                            </span></td>
                        <td>2010/07/14</td>
                        <td>$86,500</td>
                      </tr>)
                  })}
               
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-footer small text-muted">
            Showing 0 to 0 of 0 entries
        </div>
      </div>
        </div>
     
    </div>
  )
}

export default GameName
