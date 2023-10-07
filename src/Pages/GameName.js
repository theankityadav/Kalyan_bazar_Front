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
              <thead className='text-center'>
                <tr>
                  <th>#</th>
                  <th>Game Name</th>
                 
                  <th>Today Open</th>
                  <th>Today Close</th>
                  <th>Active</th>
                  <th> Market Status</th>
                 
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                  {data.map((item,index)=>{
                      return( <tr>
                         <td>{item?.id} </td>
                        <td>{item?.market_name||"NA"} </td>
                       
                        <td>{item?.market_opening_time}</td>
                        <td>{item?.market_closing_time}</td>
                        <td><span className={item?.market_status? "btnspan success" :"btnspan danger"}>
                            {item?.market_status? "Yes" :"No"}
                            </span></td>
                        <td>
                            <span className={item?.market_status? "btnspan success" :"btnspan danger"}>
                            { item?.market_status? "Open Today" :"Close Today"}
                            </span></td>
                      
                        <td className='text-center'>
                          <button className='btn btn-primary m-1 btn-sm'>
                            Edit
                          </button>
                          <button className='btn btn-primary m-1 btn-sm'>
                            Market Off Today
                            </button>
                        </td>
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
